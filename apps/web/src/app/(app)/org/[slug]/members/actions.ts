'use server'

import { Role, roleSchema } from '@saas/auth'
import { HTTPError } from 'ky'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'

import { getCurrentOrganization } from '@/auth/auth'
import { createInvite } from '@/http/create-invite'
import { removeMember } from '@/http/remove-member'
import { revokeInvite } from '@/http/revoke-invite'
import { updateMember } from '@/http/update-member'

const inviteSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  role: roleSchema,
})

export async function createInviteAction(data: FormData) {
  const result = inviteSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { email, role } = result.data

  try {
    await createInvite({
      organization: getCurrentOrganization()!,
      email,
      role,
    })

    revalidateTag(`${getCurrentOrganization()!}/invites`)
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()

      return { success: false, message, errors: null }
    }

    console.error(err)

    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    }
  }

  return {
    success: true,
    message: 'Successfully created the invite.',
    errors: null,
  }
}

export async function removeMemberAction(memberId: string) {
  const currentOrganization = await getCurrentOrganization()

  await removeMember({ organization: currentOrganization!, memberId })

  revalidateTag(`${currentOrganization}/members`)
}

export async function updateMemberAction(memberId: string, role: Role) {
  const currentOrganization = await getCurrentOrganization()

  await updateMember({ organization: currentOrganization!, memberId, role })

  revalidateTag(`${currentOrganization}/members`)
}

export async function revokeInviteAction(inviteId: string) {
  const currentOrganization = await getCurrentOrganization()

  await revokeInvite({
    organization: currentOrganization!,
    inviteId,
  })

  revalidateTag(`${currentOrganization}/invites`)
}

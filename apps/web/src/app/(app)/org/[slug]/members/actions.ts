'use server'

import { Role } from '@saas/auth'
import { revalidateTag } from 'next/cache'

import { getCurrentOrganization } from '@/auth/auth'
import { removeMember } from '@/http/remove-member'
import { revokeInvite } from '@/http/revoke-invite'
import { updateMember } from '@/http/update-member'

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

'use server'

import { revalidateTag } from 'next/cache'

import { getCurrentOrganization } from '@/auth/auth'
import { removeMember } from '@/http/remove-member'

export async function removeMemberAction(memberId: string) {
  const currentOrganization = await getCurrentOrganization()

  await removeMember({ organization: currentOrganization!, memberId })

  revalidateTag(`${currentOrganization}/members`)
}

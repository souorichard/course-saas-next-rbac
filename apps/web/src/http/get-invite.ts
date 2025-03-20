import { Role } from '@saas/auth'

import { api } from './api-client'

interface GetInviteResponse {
  invite: {
    id: string
    email: string
    role: Role
    author: {
      id: string
      name: string | null
      avatarUrl: string | null
    } | null
    organization: {
      name: string
    }
    createdAt: string
  }
}

export async function getInvite(inviteId: string) {
  const result = await api.get(`invites/${inviteId}`).json<GetInviteResponse>()

  return result
}

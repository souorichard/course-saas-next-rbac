import { Role } from '@saas/auth'

import { api } from './api-client'

interface GetInvitesResponse {
  invites: {
    id: string
    email: string
    role: Role
    author: {
      id: string
      name: string | null
    } | null
    createdAt: string
  }[]
}

export async function getInvites(organization: string) {
  const result = await api
    .get(`organizations/${organization}/invites`, {
      next: {
        tags: [`${organization}/invites`],
      },
    })
    .json<GetInvitesResponse>()

  return result
}

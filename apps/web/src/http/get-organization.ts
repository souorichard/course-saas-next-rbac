import { api } from './api-client'

interface GetOrganizationResponse {
  organization: {
    id: string
    name: string
    slug: string
    domain: string | null
    shouldAttachUsersByDomain: boolean
    avatarUrl: string | null
    ownerId: string
    createdAt: string
    updatedAt: string
  }
}

export async function getOrganization(organization: string) {
  const result = await api
    .get(`organizations/${organization}`)
    .json<GetOrganizationResponse>()

  return result
}

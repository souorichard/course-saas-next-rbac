import { api } from './api-client'

interface GetProjectsResponse {
  projects: {
    id: string
    name: string
    slug: string
    description: string
    avatarUrl: string | null
    createdAt: Date
    organizationId: string
    ownerId: string
    owner: {
      id: string
      name: string
      avatarUrl: string | null
    }
  }[]
}

export async function getProjects(organization: string) {
  const result = await api
    .get(`organizations/${organization}/projects`)
    .json<GetProjectsResponse>()

  return result
}

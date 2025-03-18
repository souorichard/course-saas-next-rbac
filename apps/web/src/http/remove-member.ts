import { api } from './api-client'

interface ShutdownOrganizationRequest {
  organization: string
  memberId: string
}

export async function removeMember({
  organization,
  memberId,
}: ShutdownOrganizationRequest) {
  await api.delete(`organization/${organization}/members/${memberId}`)
}

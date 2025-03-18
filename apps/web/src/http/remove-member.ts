import { api } from './api-client'

interface RemoveMemberRequest {
  organization: string
  memberId: string
}

export async function removeMember({
  organization,
  memberId,
}: RemoveMemberRequest) {
  await api.delete(`organization/${organization}/members/${memberId}`)
}

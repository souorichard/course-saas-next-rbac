import { Role } from '@saas/auth'

import { api } from './api-client'

interface UpdateMemberRequest {
  organization: string
  memberId: string
  role: Role
}

export async function updateMember({
  organization,
  memberId,
  role,
}: UpdateMemberRequest) {
  await api.put(`organization/${organization}/members/${memberId}`, {
    json: { role },
  })
}

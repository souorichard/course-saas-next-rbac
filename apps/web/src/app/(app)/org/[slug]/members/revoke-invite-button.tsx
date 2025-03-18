import { XOctagon } from 'lucide-react'
import { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'

import { revokeInviteAction } from './actions'

interface RevokeInviteButtonProps extends ComponentProps<typeof Button> {
  inviteId: string
}

export function RevokeInviteButton({
  inviteId,
  ...props
}: RevokeInviteButtonProps) {
  return (
    <form action={revokeInviteAction.bind(null, inviteId)}>
      <Button size="sm" variant="destructive" {...props}>
        <XOctagon className="mr-2 size-4" />
        Revoke invite
      </Button>
    </form>
  )
}

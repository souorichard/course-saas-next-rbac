import { getCurrentOrganization } from '@/auth/auth'

import { NavLink } from './nav-link'
import { Button } from './ui/button'

export async function Tabs() {
  const currentOrganization = await getCurrentOrganization()

  return (
    <div className="border-b py-4">
      <nav className="mx-auto flex max-w-[1200px] items-center gap-2">
        <Button
          size="sm"
          variant="ghost"
          className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
          asChild
        >
          <NavLink href={`/org/${currentOrganization}`}>Projects</NavLink>
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
          asChild
        >
          <NavLink href={`/org/${currentOrganization}/members`}>
            Members
          </NavLink>
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="border border-transparent text-muted-foreground data-[current=true]:border-border data-[current=true]:text-foreground"
          asChild
        >
          <NavLink href={`/org/${currentOrganization}/settings`}>
            Settings & Belling
          </NavLink>
        </Button>
      </nav>
    </div>
  )
}

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ProjectsList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Project 01</CardTitle>
          <CardDescription className="line-clamp-2 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            illo asperiores, nisi iure illum enim numquam voluptatem.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-1.5">
          <Avatar className="size-4">
            <AvatarImage src="https://github.com/diego3g.png" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>

          <span className="text-xs text-muted-foreground">
            Created by{' '}
            <span className="font-medium text-foreground">Diego Fernandes</span>{' '}
            a day ago
          </span>

          <Button size="xs" variant="outline" className="ml-auto" asChild>
            <Link href={'#'}>
              View
              <ArrowRight className="ml-2 size-3" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

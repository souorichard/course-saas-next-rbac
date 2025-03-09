import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (!isAuthenticated()) {
    redirect('/auth/sign-in')
  }

  return (
    <>{children}</>
    // <div className="flex min-h-screen flex-col items-center justify-center px-4">
    //   <div className="w-full max-w-xs">{children}</div>
    // </div>
  )
}

import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image'

const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard Page</p>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default DashboardPage;
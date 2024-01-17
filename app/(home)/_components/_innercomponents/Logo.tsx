import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Link href="/" className=' '>
            <Image src="/logo-no-background.svg" width={80} height={20} alt='logo'/>
        </Link>
      
    </div>
  )
}

export default Logo

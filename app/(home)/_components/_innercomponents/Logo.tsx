import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props{
  header?: string
  footer?: string
}
const Logo = ({header, footer}: Props) => {
  return (
    <div>
      {header &&
        <Link href="/" className=''>
            <Image src={`${header}`} width={100} height={100} alt='logo' className='h-12 w-full'/>
        </Link>
      }
      {footer && 
        <Link href="/" className=''>
            <Image src={`${footer}`} width={100} height={20} alt='logo'/>
        </Link>
      }
      
    </div>
  )
}

export default Logo

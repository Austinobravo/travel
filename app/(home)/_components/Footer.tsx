import React from 'react'
import Logo from './_innercomponents/Logo'
import Link from 'next/link'
import { Facebook, Linkedin, Mail, Map, Twitter, Youtube } from 'lucide-react'

const listLinks =[
    {
        title:"Fraud Awareness",
        link:"/"
        
    },
    {
        title:"Legal Notice",
        link:"/"
        
    },
    {
        title:"Terms of Use",
        link:"/"
        
    },
    {
        title:"Privacy Notice",
        link:"/"
        
    },
    {
        title:"Dispute Resolution",
        link:"/"
        
    },
    {
        title:"Additional Information",
        link:"/"
        
    },
    {
        title:"Consent Settings",
        link:"/"
        
    },
]

const socialIcons =[
    {
        icon: Facebook,
        href: "/"
    },
    {
        icon: Twitter,
        href: "/"
    },
    {
        icon: Linkedin,
        href: "/"
    },
    {
        icon: Youtube,
        href: "/"
    },
]

const Footer = () => {
  return (
    <section className='bg-slate-200'>
        <div className='flex flex-wrap md:flex-nowrap px-10'>
            <div className='flex flex-col basis-2/3'>
                <div className='pt-3'>
                    <h3 className='text-xl font-bold text-amber-500'>Contact Us</h3>
                    <div className='py-5 w-fit flex gap-y-2 flex-col'>
                        <div className='w-fit flex gap-2 items-center '>
                            <Mail size={15}/>
                            <Link href={`mailto:kwikcouriershipments@gmail.com`} className='text-sm'>kwikcouriershipments@gmail.com</Link>
                        </div>
                        <div className='w-fit flex gap-2 items-center'>
                            <Map size={15}/>
                            <p className='text-sm'>3117 E DerbyShire, Cleveland Heights</p>
                        </div>
                    </div>
                    {/* <Logo footer='/logo-black.svg'/> */}
                </div>
                <div>
                    <ul className='flex flex-wrap flex-col md:flex-row md:flex-nowrap gap-2  font-bold text-xs'>
                        {listLinks.map((link, index)=> (
                            <li key={link.title}>
                                <Link key={index} href={link.link}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='py-7 space-y-2 md:items-center flex flex-col border-2  md:ml-auto '>
                <p className='font-bold text-sm'>Follow Us</p>
                <div className='flex gap-2 items-center'>
                {socialIcons.map((list, index)=> {
                    const Icon = list.icon
                    return (
                        <div key={index} className='hover:border px-2 py-1 rounded-md border-black w-fit '>
                        <Link href={list.href} className=''>
                            <Icon color='#aaa' size={30}/>
                        </Link>
                        </div>
                    )
                })}

                </div>
            </div>

        </div>
        <div className='flex  justify-center py-4'>
            <p className='text-black/40'>1997 - {new Date().getFullYear()}. Copyright &copy; - All rights reserved</p>
        </div>
        
    </section>
  )
}

export default Footer
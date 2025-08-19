import Image from 'next/image'
import Link from 'next/link'
import {SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs"
import React from 'react'
import NavItems from './NavItems'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href="/">
        <div className='flex items-center gap-2.5 cursor-pointer'>
            <Image src="/images/logo.svg" alt="logo" width={47} height={44}/>
        </div>
      </Link>
      <div className='flex items-center gap-8'>
        <NavItems/>
        <SignedOut>
          <div className='flex items-center gap-2'>
            <SignInButton>
              <button className='btn-signin'>Sign In</button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar

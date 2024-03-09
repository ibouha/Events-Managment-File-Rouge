import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/assets/images/eventify.svg"

function Header() {
  return (
    <header className='w-full border-b'>
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className='w-150'>
                <Image className='transform transition duration-300 hover:scale-110' src={logo.src} alt='Eventify logo' width={150} height={34}  />
            </Link>
            <div className='flex w-32 justify-end gap-3'>

            </div>
        </div>

    </header>
  )
}

export default Header
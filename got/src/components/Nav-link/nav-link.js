'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Class from './navlink.module.css'


const NavLink = ({ href, children }) => {
    const path = usePathname()

    return (
        <Link href={href} className={path.startsWith(href) ? Class.active_link : undefined}>
            {children}
        </Link>
    )
}

export default NavLink

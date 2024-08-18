"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const pathName = usePathname();

  return (
    <div>
        <Link href={"/navbar/home"} className={pathName === "/navbar/home" ? "active" : ""}>Home</Link>
        <Link href={"/navbar/about"} className={pathName === "/navbar/about" ? "active" : ""}>About</Link>
        <Link href={"/navbar/contact"} className={pathName === "/navbar/contact" ? "active" : ""}>Contact</Link>
        <Link href={"/navbar/login"} className={pathName === "/navbar/login" ? "active" : ""}>Login</Link>
    </div>
  )
}

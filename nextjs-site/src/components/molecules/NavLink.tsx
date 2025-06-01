'use client'

import Link from '@mui/material/Link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      style={{
        textDecoration: 'none',
        marginLeft: '1rem',
        color: isActive ? '#fff' : '#d3d3d3',
        fontWeight: isActive ? 'bold' : 'normal',
        fontSize: '1rem',
      }}
    >
      {' '}
      {/* Use your desired classes */}
      {children}
    </Link>
  )
}

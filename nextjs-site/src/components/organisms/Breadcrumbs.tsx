'use client'

import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { usePathname } from 'next/navigation' // Use usePathname from next/navigation

interface MuiBreadcrumbsProps {
  labels: { [key: string]: string }
}

export default function MuiBreadcrumbs({ labels }: MuiBreadcrumbsProps) {
  const pathname = usePathname()
  const segments = [pathname]

  // Build the breadcrumb items
  const breadcrumbItems = [{ href: '/', label: 'Home' }] // Start with home
  let currentPath = ''

  segments.forEach((segment, index) => {
    currentPath += segment
    // In a real app, you might map 'segment' to a more readable label
    // e.g., '/products/abc' -> label 'Product ABC Name'
    // This would require fetching data or mapping slugs to names.
    const label = labels[segment]
    if (label != null) {
      breadcrumbItems.push({ href: currentPath, label: label })
    }
  })

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbItems.map((crumb, index) => {
        const isLast = index === breadcrumbItems.length - 1

        return isLast ? (
          // Current page (last item) - use Typography, no link
          <Typography key={crumb.href} color="text.primary">
            {crumb.label}
          </Typography>
        ) : (
          // Other pages - use Link
          <Link
            key={crumb.href}
            underline="hover"
            color="inherit"
            href={crumb.href}
            // Using the Next.js Link component underneath MUI Link
            component={Link}
          >
            {crumb.label}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}

import React from 'react'
import Container from '@mui/material/Container'

interface MainProps {
  children: React.ReactNode
}
export default function Main({ children }: MainProps) {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 12 }}>
      {children}
    </Container>
  )
}

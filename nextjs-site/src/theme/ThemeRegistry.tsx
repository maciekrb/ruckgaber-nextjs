'use client'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'

import theme from './theme'

type Props = {
  children: ReactNode
}

export const ThemeRegistry = ({ children }: Props) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

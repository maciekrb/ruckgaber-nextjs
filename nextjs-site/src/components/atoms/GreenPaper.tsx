import React from 'react'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import { green, red, yellow } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

const StyledGreenPaper = styled(Paper)(() => ({
  backgroundColor: green[500],
  color: '#ffffff',
  padding: '80px 20px',
  textAlign: 'center',
}))

const StyledRedPaper = styled(Paper)(() => ({
  backgroundColor: red[500],
  color: '#ffffff',
  padding: '12px 12px',
  textAlign: 'center',
}))

const StyledYellowPaper = styled(Paper)(() => ({
  backgroundColor: yellow[500],
  color: '#ffffff',
  padding: '12px 12px',
  textAlign: 'center',
}))

interface PaperProps {
  children: React.ReactNode
  visible: boolean
}

export const GreenPaper = ({ children, visible }: PaperProps) => {
  return (
    <Grow in={visible}>
      <StyledGreenPaper elevation={3}>{children}</StyledGreenPaper>
    </Grow>
  )
}

export const RedPaper = ({ children, visible }: PaperProps) => {
  return (
    <Grow in={visible}>
      <StyledRedPaper elevation={3}>{children}</StyledRedPaper>
    </Grow>
  )
}

export const YellowPaper = ({ children, visible }: PaperProps) => {
  return (
    <Grow in={visible}>
      <StyledYellowPaper elevation={3}>{children}</StyledYellowPaper>
    </Grow>
  )
}

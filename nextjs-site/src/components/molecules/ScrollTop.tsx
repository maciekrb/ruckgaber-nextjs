'use client'
import React from 'react'
import { styled } from '@mui/material/styles'
import { useLingui } from '@lingui/react/macro'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Zoom from '@mui/material/Zoom'

const StyledDiv = styled('div')(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}))

const ScrollTop = () => {
  const { t } = useLingui()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement
    const anchor = (target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <StyledDiv onClick={handleClick} role="presentation">
        <Fab color="secondary" size="small" aria-label={t`scroll back to top`}>
          <KeyboardArrowUpIcon />
        </Fab>
      </StyledDiv>
    </Zoom>
  )
}

export default ScrollTop

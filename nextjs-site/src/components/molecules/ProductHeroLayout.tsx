import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'

const Root = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}))

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(14),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

const Backdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.5,
  zIndex: -1,
}))

const Background = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
})

const ArrowDown = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
}))

interface ProductHeroLayoutProps {
  backgroundClassName?: string
  children: React.ReactNode
}

function ProductHeroLayout(props: ProductHeroLayoutProps) {
  const { backgroundClassName, children } = props

  return (
    <Root>
      <StyledContainer>
        <img
          src="/static/themes/onepirate/productHeroWonder.png"
          alt="wonder"
          width="147"
          height="80"
        />
        {children}
        <Backdrop />
        <Background className={backgroundClassName} />
        <ArrowDown
          src="/static/themes/onepirate/productHeroArrowDown.png"
          height="16"
          width="12"
          alt="arrow down"
        />
      </StyledContainer>
    </Root>
  )
}

ProductHeroLayout.propTypes = {
  backgroundClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default ProductHeroLayout

'use client'
import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Copyright from '../atoms/Copyright'
import { Container } from '@mui/material'

const StyledFooter = styled('footer')(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  marginTop: theme.spacing(8),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  '& a': {
    fontSize: '1.3em',
    color: 'rgba(0, 0, 0, 0.54)',
    textDecoration: 'none',
  },
  '& li': {
    listStyleType: 'none',
  },
}))

const Footer = ({ sections }: { sections: any; locale: string }) => {
  const toHref = (menuItem) =>
    menuItem.section ? `${menuItem.href}#${menuItem.section}` : menuItem.href

  return (
    <Container maxWidth="lg">
      <StyledFooter>
        <Grid container spacing={4} justifyItems="space-evenly">
          <Grid size={{ xs: 6, sm: 3 }} key={sections[0].title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {sections[0].title}
            </Typography>
            <ul>
              {sections[0].items.map((item, idx) => (
                <li key={`footer-item-1-${idx}`}>
                  <Link
                    href={toHref(item)}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid size={{ xs: 6, sm: 3 }} key={sections[1].title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {sections[1].title}
            </Typography>
            <ul>
              {sections[1].items.map((item, idx) => (
                <li key={`footer-item-2-${idx}`}>
                  <Link
                    href={toHref(item)}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6 }}
            key={sections[2].title}
            style={{ textAlign: 'right' }}
          >
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {sections[2].title}
            </Typography>
            <ul>
              {sections[2].items.map((item, idx) => (
                <li key={`footer-item-3-${idx}`}>
                  <Link
                    href={toHref(item)}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </StyledFooter>
    </Container>
  )
}

export default Footer

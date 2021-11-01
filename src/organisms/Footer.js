import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Copyright from '../atoms/Copyright'
import useSlug from '../nav'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography'
import { useTranslations } from 'next-intl'
import {useRouter} from 'next/dist/client/router'

const footer = [
  {
    title: 'Jan Ruckgaber',
    items: [
      { label: 'Life', href: 'life'},
      { label: 'Galician Music Society', href: 'galician-music-society'},
      { label: 'Music', href: 'music'},
      { label: 'Lviv Archives', href: 'lviv-archives'},
      { label: 'Compositions', href: 'compositions'},
      { label: 'About', href: 'about'},
    ],
  },
  {
    title: 'The Book',
    items: [
      { label: 'About', href: 'about'},
      { label: 'Contact', href: 'contact'},
      { label: 'Download', href: 'book'},
    ],
  },
  {
    title: 'Music Compositions',
    items: [
      { label: 'List of compositions', href: 'compositions'},
      { label: 'Piano with an Orchestra', href: 'compositions', section: 'section-A'},
      { label: 'Chamber Orchestra', href: 'compositions', section: 'section-B'},
      { label: 'Piano', href: 'compositions', section: 'section-C'},
      { label: 'Violin and the Piano', href: 'compositions', section: 'section-D'},
      { label: 'Flute, the Czakan and the Piano', href: 'compositions', section: 'section-E'},
      { label: 'Choir', href: 'compositions', section: 'section-F'},
      { label: 'Clarinet and the Piano', href: 'compositions', section: 'section-G'},
      { label: 'Voice and the Piano', href: 'compositions', section: 'section-H'},
    ]
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
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
  },
}));

const Footer = () => {
  const classes = useStyles()
  const t = useTranslations('common')
  const {locale} = useRouter()

  const toHref = (menuItem) => {
    const pathname = useSlug({slug: menuItem.href, currLocale: locale})
    if (menuItem.section) {
      return `${pathname}#${menuItem.section}`
    }
    return pathname
  }

  return (
    <Container maxWidth="md" component="footer" className={classes.root}>
      <Grid container spacing={4} justify="space-evenly">
        <Grid item xs={6} sm={3} key={footer[0].title}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {t(footer[0].title)}
          </Typography>
          <ul>
            {footer[0].items.map((item, idx) => (
              <li key={`footer-item-1-${idx}`}>
                <Link href={toHref(item)} variant="subtitle1" color="textSecondary">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item xs={6} sm={3} key={footer[1].title}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {t(footer[1].title)}
          </Typography>
          <ul>
            {footer[1].items.map((item, idx) => (
              <li key={`footer-item-2-${idx}`}>
                <Link href={toHref(item)} variant="subtitle1" color="textSecondary">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} key={footer[2].title} style={{textAlign: 'right'}}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {t(footer[2].title)}
          </Typography>
          <ul>
            {footer[2].items.map((item, idx) => (
              <li key={`footer-item-3-${idx}`}>
                <Link href={toHref(item)} variant="subtitle1" color="textSecondary">
                {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default Footer

import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Link from 'next/link'
import LanguageSelect from "./languageSelect"
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useSlug from '../nav'
import { useTranslations } from 'next-intl'
import {useRouter} from 'next/dist/client/router'


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    '& a': {
      fontSize: 16,
      color: theme.palette.common.white,
      marginLeft: theme.spacing(2),
      textDecoration: 'none',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
    height: 64,
    [theme.breakpoints.up('sm')]: {
      height: 70,

    },
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
}))

const NavBar = (props) => {
  const classes = useStyles()
  const t = useTranslations('common')
  const {locale} = useRouter()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h4"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          — Jan Ruckgaber —
        </Typography>
        <nav>
          <Link color="inherit" href="/" className={classes.link}>
            {t('Home')}
          </Link>
          <Link color="inherit" href={useSlug({slug: 'life', currLocale: locale})} className={classes.link}>
          {t('Life')}
          </Link>
          <Link
            color="inherit"
            href={useSlug({slug: 'galician-music-society', currLocale: locale})}
            className={classes.link}
          >
            {t('Galician Music Society')}
          </Link>
          <Link color="inherit" href={useSlug({slug: 'music', currLocale: locale})} className={classes.link}>
            {t('Music')}
          </Link>
          <Link color="inherit" href={useSlug({slug: 'lviv-archives', currLocale: locale})} className={classes.link}>
            {t('Lviv Archives')}
          </Link>
          <Link color="inherit" href={useSlug({slug: 'compositions', currLocale: locale})} className={classes.link}>
            {t('Compositions')}
          </Link>
          <Link color="inherit" href={useSlug({slug: 'about', currLocale: locale})} className={classes.link}>
            {t('About')}
          </Link>
        </nav>
        <LanguageSelect/>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

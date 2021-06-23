import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Link from '@material-ui/core/Link'
import LanguageSelect from "./languageSelect"
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useTranslations } from 'next-intl'


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`

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
  link: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
}))

const NavBar = (props) => {
  const classes = useStyles()
  const t = useTranslations('common')

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
          <Link color="inherit" href={t('lifeHrefKey')} className={classes.link}>
          {t('Life')}
          </Link>
          <Link
            color="inherit"
            href={t('galicianHrefKey')}
            className={classes.link}
          >
            {t('Galician Music Society')}
          </Link>
          <Link color="inherit" href={t('musicHrefKey')} className={classes.link}>
            {t('Music')}
          </Link>
          <Link color="inherit" href={t('lvivHrefKey')} className={classes.link}>
            {t('Lviv Archives')}
          </Link>
          <Link color="inherit" href={t('compositionsHrefKey')} className={classes.link}>
            {t('Compositions')}
          </Link>
          <Link color="inherit" href={t('aboutHrefKey')} className={classes.link}>
            {t('About')}
          </Link>
        </nav>
        <LanguageSelect/>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

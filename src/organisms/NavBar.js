import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'next-i18next'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
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
  const { t } = useTranslation('common')

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
          <Link color="inherit" href="/life" className={classes.link}>
            Life
          </Link>
          <Link
            color="inherit"
            href="/galician-music-society"
            className={classes.link}
          >
            Galician Music Society
          </Link>
          <Link color="inherit" href="/music" className={classes.link}>
            Music
          </Link>
          <Link color="inherit" href="/lviv-archives" className={classes.link}>
            Lviv Archives
          </Link>
          <Link color="inherit" href="/compositions" className={classes.link}>
            Compositions
          </Link>
          <Link color="inherit" href="/about" className={classes.link}>
            About
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

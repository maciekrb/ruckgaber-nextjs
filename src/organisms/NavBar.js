import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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
  return (
    <AppBar position="fixed"  className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap  className={classes.toolbarTitle}>
          Jean Ruckgaber
        </Typography>
        <nav>
          <Link variant="h6" color="inherit" href="#" className={classes.link}>
            Features
          </Link>
          <Link variant="h6" color="inherit" href="#" className={classes.link}>
            Enterprise
          </Link>
          <Link variant="button" color="inherit" href="#" className={classes.link}>
            Support
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

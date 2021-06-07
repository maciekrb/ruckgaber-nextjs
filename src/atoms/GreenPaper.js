import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'

const useStyles = makeStyles((theme) => ({
  green: {
    backgroundColor: green[500],
    color: '#ffffff',
    padding: '80px 20px',
    textAlign: 'center',
  },
  red: {
    backgroundColor: red[500],
    color: '#ffffff',
    padding: '12px 12px',
    textAlign: 'center',
  },
  yellow: {
    backgroundColor: yellow[500],
    color: '#ffffff',
    padding: '12px 12px',
    textAlign: 'center',
  }
}))

export const GreenPaper = ({children, visible}) => {
  const classes = useStyles()
  return (
    <Grow in={visible}>
      <Paper className={classes.green} elevation={3}>{children}</Paper>
    </Grow>
  )
}

export const RedPaper = ({children, visible}) => {
  const classes = useStyles()
  return (
    <Grow in={visible}>
      <Paper className={classes.red} elevation={3}>{children}</Paper>
    </Grow>
  )
}

export const YellowPaper = ({children, visible}) => {
  const classes = useStyles()
  return (
    <Grow in={visible}>
      <Paper className={classes.yellow} elevation={3}>{children}</Paper>
    </Grow>
  )
}

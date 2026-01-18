import React from 'react'
import { makeStyles } from '@mui/material/styles'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import green from '@mui/material/colors/green'
import red from '@mui/material/colors/red'
import yellow from '@mui/material/colors/yellow'

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

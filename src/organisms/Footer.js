import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Copyright from '../atoms/Copyright'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const footer = [
  {
    title: 'Jan Ruckgaber',
    description: ['Life', 'Music', 'Galician Music Society', 'Lviv Archives', 'About this page'],
  },
  {
    title: 'The Book',
    description: ['Downloads', 'About the book', 'Contact'],
  },
  {
    title: 'Music Compositions',
    description: [
      'Piano with an Orchestra',
      'Chamber Orchestra', 
      'Piano', 
      'Violin and the Piano', 
      'Flute, the Czakan and the Piano', 
      'Clarinet and the Piano', 
      'Choir', 
      'Voice and the Piano', 
      'Guitar and the Piano (transcript',
    ],
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
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="md" component="footer" className={classes.root}>
      <Grid container spacing={4} justify="space-evenly">
        <Grid item xs={6} sm={3} key={footer[0].title}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {footer[0].title}
          </Typography>
          <ul>
            {footer[0].description.map((item) => (
              <li key={item}>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item xs={6} sm={3} key={footer[1].title}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {footer[1].title}
          </Typography>
          <ul>
            {footer[1].description.map((item) => (
              <li key={item}>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} key={footer[2].title} style={{textAlign: 'right'}}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {footer[2].title}
          </Typography>
          <ul>
            {footer[2].description.map((item) => (
              <li key={item}>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  {item}
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

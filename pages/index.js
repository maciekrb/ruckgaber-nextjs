import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Footer from '../src/organisms/Footer'
import Link from '../src/Link'
import NavBar from '../src/organisms/NavBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import YouTubeVideo from '../src/atoms/YouTubeVideo'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#444444',
    backgroundImage: 'url(/images/homebg.png)',
    backgroundRepeat: 'repeat',
  },
  text: {
    '& h3,h5': {
      fontFamily: 'Roboto condensed',
      color: '#ffffff',
    },
  },
}))
// https://www.youtube.com/watch?v=uiw3GyG4f4Q
// https://www.youtube.com/watch?v=iaeM_o2PR3k
export default function Index() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Grid container className={classes.root}>
            <Grid item xs={12} md={6}>
              <img
                width="100%"
                src="/images/1-jean-ruckgaber-bust-chardigny.png"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={2} className={classes.text}>
                <Typography variant="h3">
                  The Life and Work of a Pianist, Composer, Teacher and Promoter
                  of Musical Life in Lviv{' '}
                </Typography>
                <Box pt={9}>
                  <Typography variant="h5">
                    Jan Ruckgaber (a bust by Chardigny, 1855, family archive)
                    Warsaw, 2020
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container></Grid>
          <Box py={2}>
            <YouTubeVideo src="videoseries?list=PL6sg6rLVg9MF-00zsMgRZaoww98riHtFL" />
          </Box>
        </Box>
        <Footer />
      </Container>
    </React.Fragment>
  )
}

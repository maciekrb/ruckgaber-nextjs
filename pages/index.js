import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Carousel from 'react-bootstrap/Carousel'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Footer from '../src/organisms/Footer'
import Link from '../src/Link'
import NavBar from '../src/organisms/NavBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import YouTubeVideo from '../src/atoms/YouTubeVideo'
import 'bootstrap/dist/css/bootstrap.min.css';
import Audioplayer from '../src/atoms/Audioplayer'

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
  cardMedia: {
    height: 340,
  },
}))

export default function Index() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/intro-01.jpg"
                alt="First slide"
              />
              <Carousel.Caption style={{textAlign: 'left', paddingLeft: '350px'}}>
                <p>Jan Ruckgaber</p>
                <p>(a bust by Chardigny, 1855, family archive)</p>
                <p>Warsaw, 2020</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/intro-02.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Download the digital book</h3>
                <p>A detail investigation about a musical family name</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/intro-03.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Welcome to a travel for the life of a great composer</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      <Container maxWidth="md">
        <Box my={4}>
          <Box pt={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/3-young-jan-ruckgaber.jpg"
                      title="Life of Jan Ruckgaber"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Life of Jan Ruckgaber
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                          Read about the life of Jan Ruckgaber, his family and ancestry.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="/life">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/card-02.jpg"
                      title="Compositions"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Compositions of Jan Ruckgaber
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                          Find a detailed list of compositions with links to partitures.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="/compositions">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/card-03.jpg"
                      title="Jan Ruckgaber Book cover"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Jan Ruckgaber Book
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                          Download the electronic version of the Book about Jan Ruckgaber.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="/book">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box pt={4}>
            <Typography gutterBottom variant="h1" component="h1" style={{textAlign: 'center'}}>
                        Listen to Music by Jan Ruckgaber
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Audioplayer
                  song="Divertissement op.41 na skrzypce i fortepian."
                  artist="Robert Szreder - skrzypce, Elżbieta Sobkowicz - fortepian"
                  src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/D3-Divertissement-op.41.mp3"
                  copy= "some copyrights"
                />
              </Grid>
              <Grid item xs={12} md={6}>
              <Audioplayer
                  song="Do mogił op. 55"
                  artist="pieśń na głos i fortepian;
                  Jerzy Sergiusz Adamczewski
                  - baryton
                  TatianaWoytaszewska
                  - fortepian
                  Wincenty Pol - autor tekstu"
                  src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/H17-Piesn-do-mogil-op-55.mp3"
                  copy="some copyrights"
                />
              </Grid>
              <Grid item xs={12} md={6}>
              <Audioplayer
                  song="Mazurek E-dur"
                  artist="na fortepian, w wykonaniu Tatiany Woytaszewskiej"
                  src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/Mazurek-e-dur.mp3"
                  copy="some copyrights"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Audioplayer
                  song="12 variations op 2"
                  artist="Piano w wykonaniu Milana Jelenia z Czech"
                  src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/12-variations-op-26.mp3"
                  copy= "some copyrights"
                />
              </Grid>
            </Grid>
           </Box>
          <Box py={2}>
            <YouTubeVideo src="videoseries?list=PL6sg6rLVg9MF-00zsMgRZaoww98riHtFL" />
          </Box>
        </Box>
        <Footer />
      </Container>
    </React.Fragment>
  )
}

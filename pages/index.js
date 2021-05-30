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
    height: 400,
  },
  cardActionArea: {
    '&:hover': {
      textDecoration: 'none',
    }
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
              <Carousel.Caption style={{textAlign: 'left', paddingLeft: '280px', lineHeight: '1.6px', fontSize: '12px'}}>

                <p>Jan Ruckgaber</p>
                <p> a bust by Chardigny, 1855, family archive</p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/intro-02.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Download the digital book:</h3>
                <p>Biography of a forgotten Pollish composer  with a concise description of musical life in 19-th century Lviv</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/intro-03.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Welcome to a journey through the life of the composer ancestor</h3>
                <p>A family investigation in search of the life story of a descendant of French aristocrats who became a Polish composer in Lviv</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      <Container maxWidth="md">
        <Box my={4}>
          <Box pt={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardActionArea
                  href="/life"
                  className={classes.cardActionArea}>
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
                  <CardActionArea
                  href="/compositions"
                  className={classes.cardActionArea}>
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
                        Find a detailed list of compositions with links to note sheets
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
                  <CardActionArea
                  href="/book"
                  className={classes.cardActionArea}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/cover_book_english.jpg"
                      title="Jan Ruckgaber Book Cover"
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
                          Download the digital version of the Book about Jan Ruckgaber.
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
                  song="Divertissiment for violin and the piano, op.41"
                  artist="Robert Szreder - violin, Elżbieta Sobkowicz - piano "
                  src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/D3-Divertissement-op.41.mp3"
                />
              </Grid>
              <Grid item xs={12} md={6}>
              <Audioplayer
                  song="Do mogił, op.55"
                  artist="song for a voice and the piano, Jerzy Sergiusz Adamczewski - baritone, Tatiana Woytaszewska - piano, Wincenty Pol - lyrics"
                  src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/H17-Piesn-do-mogil-op-55.mp3"
                />
              </Grid>
              <Grid item xs={12} md={6}>
              <Audioplayer
                  song="Mazurek E- dur for the piano"
                  artist="Tatiana Woytaszewska - piano"
                  src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/Mazurek-e-dur.mp3"
                 />
              </Grid>
              <Grid item xs={12} md={6}>
                <Audioplayer
                  song="12 Variations, op. 2"
                  artist="Milan Jeleń - piano "
                  src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/12-variations-op-26.mp3"
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

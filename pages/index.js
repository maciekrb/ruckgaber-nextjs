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
              <Carousel.Caption>
                <p>Jan Ruckgaber</p>
                <p>(a bust by Chardigny, 1855, family archive)
                  Warsaw, 2020</p>
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
          {/* <Grid container className={classes.root}>
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
          </Grid> */}

          <Box pt={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/3-young-jan-ruckgaber.jpg"
                      title="Life of Jean Ruckgaber"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Life of Jean Ruckgaber
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                          Read about the life of Jean Ruckgaber, his family and ancestry.
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
                        Compositions of Jean Ruckgaber
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
                      title="Jean Ruckgaber Book cover"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Jean Ruckgaber Book
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                          Download the electronic version of the Book about Jean Ruckgaber.
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
          <Box py={2}>
            <YouTubeVideo src="videoseries?list=PL6sg6rLVg9MF-00zsMgRZaoww98riHtFL" />
          </Box>
        </Box>
        <Footer />
      </Container>
    </React.Fragment>
  )
}

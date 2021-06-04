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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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
                src="/images/intro-01-pl.jpg"
                alt="Pierwszy slajd"
              />
              <Carousel.Caption style={{textAlign: 'left', paddingLeft: '280px', lineHeight: '1.6px', fontSize: '12px'}}>

                <p>Jan Ruckgaber</p>
                <p>Popiersie autorstwa Chardigny, 1855, archiwum rodzinne</p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/intro-02.jpg"
                alt="Drugi slajd"
              />

              <Carousel.Caption>
                <h3>Pobierz książkę cyfrową:</h3>
                <p>Biografia zapomnianego polskiego kompozytora ze zwięzłym opisem życia muzycznego we Lwowie w XIX wieku</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/intro-03.jpg"
                alt="Trzeci slajd"
              />

              <Carousel.Caption>
                <h3>Zapraszamy w podróż przez życie przodka kompozytora</h3>
                <p>Rodzinne śledztwo w poszukiwaniu historii życia potomka francuskich arystokratów, który został polskim kompozytorem we Lwowie</p>
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
                  href="/zycie"
                  className={classes.cardActionArea}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/3-young-jan-ruckgaber.jpg"
                      title="Życie Jana Ruckgabera"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      Życie Jana Ruckgabera
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                          Przeczytaj o życiu Jana Ruckgabera, jego rodzinie i przodkach.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="/life">Zobacz więcej</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardActionArea
                  href="/Kompozycje"
                  className={classes.cardActionArea}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/card-02.jpg"
                      title="kompozycje"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      Kompozycje Jana Ruckgabera
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Znajdź szczegółową listę kompozycji z linkami do arkuszy notatek
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="/compositions">Zobacz więcej</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Card>
                  <CardActionArea
                  href="/ksiazka"
                  className={classes.cardActionArea}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/cover_book_polish.jpg"
                      title="Okładka książki Jana Ruckgabera"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      Książka Jana Ruckgabera
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                          Pobierz cyfrową wersję książki o Janie Ruckgaberze.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="/book">Zobacz więcej</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box pt={4}>
            <Typography gutterBottom variant="h1" component="h1" style={{textAlign: 'center'}}>
            Posłuchaj muzyki Jana Ruckgabera
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Audioplayer
                  song="Divertissiment na skrzypce i fortepian, op.41"
                  artist="Robert Szreder - skrzypce, Elżbieta Sobkowicz - fortepian "
                  src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/D3-Divertissement-op.41.mp3"
                />
              </Grid>
              <Grid item xs={12} md={6}>
              <Audioplayer
                  song="Do mogił, op.55"
                  artist="piosenka na głos i fortepian, Jerzy Sergiusz Adamczewski - baryton, Tatiana Woytaszewska - fortepian, Wincenty Pol - tekst piosenki"
                  src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/H17-Piesn-do-mogil-op-55.mp3"
                />
              </Grid>
              <Grid item xs={12} md={6}>
              <Audioplayer
                  song="Mazurek E- dur na fortepian"
                  artist="Tatiana Woytaszewska - fortpian"
                  src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/Mazurek-e-dur.mp3"
                 />
              </Grid>
              <Grid item xs={12} md={6}>
                <Audioplayer
                  song="12 Variations, op. 2"
                  artist="Milan Jeleń - fortepian"
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Footer from '../src/organisms/Footer'
import NavBar from '../src/organisms/NavBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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

      height: 650,
    },
  }))

  export default function Page() {
    const classes = useStyles()
return (
    <Container>
    <NavBar/>
    <Toolbar id="back-to-top-anchor" />
          <Box>
          <Box my={10}>
          <Typography variant="h1" gutterBottom> Książka Jana Ruckgabera </Typography>
            <Grid container spacing={8}>
              <Grid item xs={12}>
              </Grid>
              <Grid item xs={6} >
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/intro_book_polish.png"
                      title="Książka Jana Ruckgabera po polsku"
                    />
                  </CardActionArea>
                  <CardActions>
                      <Button
                          color="default"
                          className={classes.button}
                          endIcon={<CloudDownloadIcon />}
                          href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/books/Ruckgaber_Book_Polish.pdf" download
                          target="_blank"
                          >
                          Pobierz polską wersję tutaj
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/intro_book_english.png"
                      title="Książka Jana Ruckgabera po angielsku"
                    />
                  </CardActionArea>
                  <CardActions>
                      <Button
                          color="default"
                          className={classes.button}
                          endIcon={<CloudDownloadIcon />}
                          href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/books/Ruckgaber_Book_English.pdf" download
                          target="_blank"
                          >
                          Pobierz angielską wersję tutaj
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer/>
    </Container>
)
}
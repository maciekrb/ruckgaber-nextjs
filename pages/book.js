import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Footer from '../src/organisms/Footer'
import Link from '../src/Link'
import NavBar from '../src/organisms/NavBar'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'
import { red } from '@material-ui/core/colors'
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
      height: 340,
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
          <Typography variant="h1" gutterBottom> Jan Ruckgaber Book </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12}>
              </Grid>
              <Grid item xs={6} >
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/card-02.jpg"
                      title="Compositions"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      <a
                        href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/books/Ruckgaber_Book_Polish.pdf" download
                     target="_blank">Download the polish version here
                     <CloudDownloadIcon fontSize="medium" color="secondary"/>
                   </a>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/images/card-03.jpg"
                      title="Jan Ruckgaber Book cover"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      <a
                        href="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/books/Ruckgaber_Book_English.pdf" download
                     target="_blank">Download the english version here
                     <CloudDownloadIcon fontSize="medium" color="secondary"/>
                   </a>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer/>
    </Container>
)
}
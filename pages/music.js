import React from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Footer from '../src/organisms/Footer'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from '../src/organisms/NavBar'
import ScrollTop from '../src/molecules/ScrollTop'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  media: {
    height: '500px',
  }
}))
export default function Page() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" gutterBottom> Music </Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item sm={12}>
                <Typography variant="h6" gutterBottom>An Artist of early Romanticism</Typography>
                <Typography paragraph>Ruckgaber’s work and music fully belong to the current of early Romanticism. His compositions reflected the leading aesthetic trends of the era. Early Romanticism showed in seeking lyrical modes of expression, in transforming the canons of classicism, and in the development of the so-called salon music. </Typography>
                <Typography paragraph>Ruckgaber contributed to the evolution of the musical profession from being an inspired composer, dependent on a patron, to a self-reliant, conscious artist, who influenced public taste and demand of the culture market.</Typography>
              </Grid>
              <Grid item sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/13-do-mogił.jpg"
                    title="Title page of the Song &quot;Do Mogił&quot; by Jan Ruckgaber with lyrics by Wincenty Pol  (family archive)"/>
                  <CardContent>
                    <Typography variant="caption">Title page of the Song &quot;Do Mogił&quot; by Jan Ruckgaber with lyrics by Wincenty Pol  (family archive)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/14-variations-sur-une-Walse-op30.jpg"
                    title="Variations sur une Walse, Op. 30 (family archive)"/>
                  <CardContent>
                    <Typography variant="caption">Variations sur une Walse, Op. 30 (family archive)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="h6" gutterBottom>Music</Typography>
                <Typography paragraph>The music legacy of Jan Ruckgaber amounts to about 100 opuses. </Typography>
                <Typography paragraph>He composed mainly piano music of salon character, often attempting to adapt Polish folk music. His piano compositions, often masterful in form, were published by the largest music companies in Leipzig, London, Brussels, Paris and Petersburg, not to mention Vienna, Warsaw and Lviv. </Typography>
                <Typography paragraph>His music was easy, tuneful, light and nice, with clear qualities of the Romantic style, following the patterns of Schubert and Weber. In his chamber compositions he frequently used the typical elements of Polish music, firstly of folk dances, as cracovienne and mazurek, as well as polonaise. Undoubtedly he tried to convey the uniqueness of the folk tradition and the character of the country, where he spent most of his lifetime.</Typography>
                <Typography paragraph>Ruckgaber also composed songs for a voice with the piano with Polish lyrics. After the November uprising of 1830, he composed &quto;Do mogił&quot; (Towards the Graves) to the words by Wincenty Pol.</Typography>
                <Typography paragraph>In the composer’s oeuvre there are numerous large forms: sonatas, duos, concertos for solo instruments with the accompaniment of the piano, orchestral and choral compositions. There are also piano works for four hands, and even for eight hands. </Typography>
                <Typography paragraph>Many pieces of music, which – as his contemporaries claimed – he performed in concerts with mastery, remained in the form of manuscripts. Besides the popular transcriptions of music for various instruments by famous composers of that time, (like Beethoven or Verdi) they comprise the most valuable part of the music legacy of Jan Ruckgaber.</Typography>
              </Grid>
            </Grid>
          </Box>
          <ScrollTop />
        </Box>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

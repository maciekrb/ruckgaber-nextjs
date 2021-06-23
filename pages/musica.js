import React from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Footer from '../src/organisms/Footer'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from '../src/organisms/NavBar'
import ScrollTop from '../src/molecules/ScrollTop'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Download from '../src/atoms/Download'

const useStyles = makeStyles(() => ({
  media: {
    height: '500px',
  }
}))

const Page = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" gutterBottom> Musica </Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item sm={12}>
                <Typography variant="h4" gutterBottom>Un Artista del Romanticismo Temprano</Typography>
                <Typography paragraph>El trabajo y la música de Ruckgaber pertenecen plenamente a la corriente del romanticismo temprano. Sus composiciones reflejan las principales tendencias estéticas de la época. El romanticismo temprano se manifestó en la búsqueda de modos de expresión líricos, en la transformación de los cánones del clasicismo y en el desarrollo de la llamada música de salón. </Typography>
                <Typography paragraph>Ruckgaber contribuyó a la evolución de la profesión musical de ser un compositor inspirado, dependiente de un mecenas, a un artista consciente y autosuficiente, que influyó en el gusto del público y la demanda del mercado cultural.</Typography>
              </Grid>
              <Grid item sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/13-do-mogil.jpg"
                    title="Página de título de la canción &quot;Do Mogił&quot; por Jan Ruckgaber con letras de Wincenty Pol (farchivo familiar)"/>
                  <CardContent>
                    <Typography variant="caption">Página de título de la canción &quot;Do Mogił&quot; por Jan Ruckgaber con letras de Wincenty Pol (archivo familiar)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/14-variations-sur-une-Walse-op30.jpg"
                    title="Variations sur une Walse, Op. 30 (archivo familiar)"/>
                  <CardContent>
                    <Typography variant="caption">Variations sur une Walse, Op. 30 (archivo familiar)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="h4" gutterBottom>Musica</Typography>
                <Typography paragraph>El legado musical de Jan Ruckgaber asciende a unas 100 obras.</Typography>
                <Typography paragraph>Compuso principalmente música de piano con carácter de salón, a menudo intentando adaptar la música folclórica polaca. Sus composiciones para piano, a menudo magistrales en su forma, fueron publicadas por las compañías musicales más importantes de Leipzig, Londres, Bruselas, París y Petersburgo, sin mencionar Viena, Varsovia y Lviv. </Typography>
                <Typography paragraph>Su música era fácil, melodiosa, ligera y agradable, con claras cualidades del estilo romántico, siguiendo los patrones de Schubert y Weber. En sus composiciones de cámara utilizó con frecuencia elementos típicos de la música polaca, en primer lugar de danzas folclóricas, como cracovienne y mazurek, así como polonesa. Sin duda, trató de transmitir la singularidad de la tradición popular y el carácter del país, donde pasó la mayor parte de su vida.</Typography>
                <Typography paragraph>Ruckgaber también compuso canciones para voz con piano con letra en polaco. Después del levantamiento de noviembre de 1830, compuso la canción &quot;Do mogił&quot; (Hacia las Tumbas) a la letra de Wincenty Pol.</Typography>
                <Typography paragraph>En la obra del compositor hay numerosas grandezas: sonatas, dúos, conciertos para instrumentos solistas con acompañamiento de piano, composiciones orquestales y corales. También hay obras para piano a cuatro manos, e incluso a ocho manos.</Typography>
                <Typography paragraph>Muchas piezas musicales, que -como afirmaron sus contemporáneos- interpretó en conciertos con maestría, quedaron en forma de manuscritos. Además de las transcripciones populares de música para varios instrumentos de famosos compositores de la época (como Beethoven o Verdi), constituyen la parte más valiosa del legado musical de Jan Ruckgaber.</Typography>
              </Grid>
              <Grid item sm={12}>
              <Download/>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    messages: require (`../public/locales/${locale}/common.json`),
  },
})

export default Page

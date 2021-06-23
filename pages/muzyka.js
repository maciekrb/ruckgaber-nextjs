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
          <Typography variant="h1" gutterBottom> Muzyka </Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item sm={12}>
                <Typography variant="h4" gutterBottom>Artysta wczesnego romantyzmu</Typography>
                <Typography paragraph> Twórczość Ruckgabera należy do nurtu wczesnego romantyzmu. Jego kompozycje odbijają wiodące kierunki estetyczne epoki.
                Wczesny romantyzm przejawiał się w poszukiwaniu lirycznych środków ekspresji, w przekształcaniu kanonów klasycyzmu oraz w rozwoju muzyki salonowej. </Typography>
                <Typography paragraph>Działalność Ruckgabera przyczyniła się do ewolucji zawodu muzyka od natchnionego kompozytora zależnego od mecenasów,
                do świadomego artysty, od który kształtował gusty publiczności i rynek kultury.</Typography>
              </Grid>
              <Grid item sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/13-do-mogil.jpg"
                    title="Strona tytułowa Pieśni „Do Mogił&quot; do słów Wincentego Pola (zbiory rodzinne)"/>
                  <CardContent>
                    <Typography variant="caption">Strona tytułowa Pieśni „Do Mogił&quot; do słów Wincentego Pola (zbiory rodzinne)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/14-variations-sur-une-Walse-op30.jpg"
                    title="Variations sur une Walse, op. 30, kwietnia 1838 r. (zbiory rodzinne)"/>
                  <CardContent>
                    <Typography variant="caption">Variations sur une Walse, op. 30, kwietnia 1838 r. (zbiory rodzinne)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="h4" gutterBottom>Muzyka</Typography>
                <Typography paragraph>Twórcza spuścizna Jana Ruckgabera liczy około 100 opusów.</Typography>
                <Typography paragraph>Komponował głównie muzykę fortepianową o charakterze salonowym, często nawiązując do polskiego folkloru. Jego utwory na fortepian, nieraz bardzo
                  kunsztowne pod względem formy, wydawano w największych domach wydawniczych Lipska, Londynu, Brukseli, Paryża i Petersburga, oraz w Wiedniu, Warszawie i Lwowie.</Typography>
                <Typography paragraph>Uznanie  współczesnych przyniosły Ruckgaberowi m.in. Uwertura na otwarcie Teatru Skarbkowskiego (1842) oraz Duo g-mol na skrzypce i fortepian (op. 41).
                  Jego kompozycje były melodyjne, lekkie i lubiane przez słuchaczy. W utworach kameralnych posługiwał się chętnie motywami polskich tańców ludowych, jak krakowiak, mazurek i polonez. \
                  Niewątpliwie cenił wyjatkowość i charakter muzyki ludowej kraju, w którym spędzał większość swojego życia.</Typography>
                <Typography paragraph>Ruckgaber pisał także pieśni do tekstów polskich. Po powstaniu listopadowym 1830 r. powstała „Pieśń do mogił&quot; do słów Wincentego Pola.</Typography>
                <Typography paragraph>In the composer’s oeuvre there are numerous large forms: sonatas, duos, concertos for solo instruments with the accompaniment of the piano, orchestral and choral compositions.
                  There are also piano works for four hands, and even for eight hands. W jego twórczości znajdujemy też większe formy: sonaty, duety, kompozycje na instrumenty solowe z towarzyszeniem fortepianu,
                  utwory orkiestrowe i chóralne. Jest też grupa kompozycji fortepianowych na cztery, a nawet osiem rąk.</Typography>
                <Typography paragraph>Wiele utworów, które, według współczesnych, po mistrzowsku wykonywał na koncertach, pozostało w rękopisach. Oprócz popularnych wówczas transkrypcji dzieł sławnych kompozytorów,
                  od Beethovena po Verdiego, stanowią one prawdopodobnie najbardziej wartościową część spuścizny muzycznej Jana Ruckgabera.</Typography>
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
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    messages: require (`../public/locales/${locale}/common.json`),
  },
})

export default Page

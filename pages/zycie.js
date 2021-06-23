import React from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Download from '../src/atoms/Download'
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

const Page = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" gutterBottom> Życie </Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item md={7}>
                <Typography variant="h4" gutterBottom>Pochodzenie</Typography>
                <Typography paragraph>Jean (później Johann i Jan), syn francuskiego arystokraty i emigranta Jeana de Montalban, urodził się w Wiedniu, prawdopodobnie 21 listopada 1799 r., i został ochrzczony w Katedrze Św. Szczepana. Początkowo nosił nazwisko ojca, de Montalban.</Typography>
                <Typography paragraph>Jean de Montalban - ojciec opuścił ojczyznę chroniąc się przed terrorem Rewolucji Francuskiej i osiedlił się w Wiedniu. Kilka lat później zginął w bitwie pod Wagram, 5 lub 6 lipca 1809 r. Po śmierci ojca dziesięcioletni Jean został adoptowany
                   przez swojego austriackiego guwernera, Josepha Ruckgabera. Francuskie imię, Jean, zmienił potem na Johann i wreszcie Jan, które widnieje na jego grobowcu we Lwowie.</Typography>

                <Typography variant="h4" gutterBottom>Nauka</Typography>
                <Typography paragraph>Edukację muzyczną rozpoczął  w Wiedniu, pod kierunkiem Johanna Nepomuka Hummla, austriackiego kompozytora i pianisty słowackiego pochodzenia. Później studiował w Paryżu, prawdopodobnie w latach 1816-19.</Typography>

                <Typography variant="h4" gutterBottom>Pierwsze koncerty</Typography>
                <Typography paragraph>Po raz pierwszy odwiedził Lwów w roku 1815. W styczniu 1818 r., jeszcze  jako student, zaprezentował się w serii koncertów fortepianowych i zyskał spory rozgłos. Od roku 1820 regularnie występował we Lwowie z koncertami i akompaniował miejscowym muzykom.</Typography>
                <Typography paragraph>W 1826 roku Ruckgaber zamieszkał we Lwowie na stałe. Koncertował, pracował jako nauczyciel gry na fortepianie oraz kompozytor. Drukarnia Franciszka Pillera we Lwowie wydawała drukiem jego utwory. Była to głównie muzyka taneczna, romanse, oraz pieśni.	</Typography>
              </Grid>
              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/3-young-jan-ruckgaber.jpg"
                    title="Młody Jan Ruckgaber, autor nieznany (http://uk.wikipedia.org, 2015))"/>
                  <CardContent>
                    <Typography variant="caption">Młody Jan Ruckgaber, autor nieznany (http://uk.wikipedia.org, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/4-ernest-ruckgaber.png"
                    title="Ernest Ruckgaber, fotografia (zbiory rodzinne)"/>
                  <CardContent>
                    <Typography variant="caption">Ernest Ruckgaber, fotografia (zbiory rodzinne)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={7}>
                <Typography variant="h4" gutterBottom>Rodzina</Typography>
                <Typography paragraph>W dniu 15 sierpnia 1834 r. Jan Ruckgaber ożenił się z Marią Ksawerą Markl, córką Węgra barona Jana Markla i Polki Janiny z Balewiczów.</Typography>
                <Typography paragraph>Mieli sześcioro dzieci, z których najmłodszy syn, Ernest, żonaty z Anną Schier, córką Szkotki Anny Scarley i Józefa Schiera, lwowskiego jubilera, zapoczątkował gałąź rodziny, której potomkowie żyją dziś w Warszawie.</Typography>

                  <Typography variant="h4" gutterBottom>Praca</Typography>
                <Typography paragraph>Pianista i kompozytor popularnej muzyki, Jan Ruckgaber był charyzmatyczną postacią. Koncertował w wielu Europejskich miastach. W latach 1840-tych w Paryżu poznał Fryderyka Chopina i Franciszka Liszta.</Typography>
                <Typography paragraph>Stworzył od podstaw Galicyjskie Towarzystwo Muzyczne. Położył fundamenty profesjonalnej edukacji muzycznej we Lwowie, otwierając w 1839 roku Szkołę Muzyczną oraz, kilka lat później, Konserwatorium, które pracuje do
                 dzisiaj, pod nazwą Lwowskiej Narodowej Akademii Muzycznej. Podczas pięćdziesięciu lat aktywności publicznej wykształcił trzy pokolenia muzyków i melomanów i zdobył szacunek lwowskiego środowiska muzycznego.</Typography>

              </Grid>
              <Grid item md={7}>
                <Typography variant="h4" gutterBottom>Schyłek</Typography>
                <Typography paragraph>Ostatnie lata życia spędził u ukochanej córki, nadal pracując jako pedagog i kompozytor. Jan Ruckgaber zmarł we Lwowie, 5 stycznia 1876 r. Jest pochowany na Cmentarzu Łyczakowskim, w grobie rodzinnym Józefa i Anny Schier, teściów córki, u której mieszkał.</Typography>
                <Typography paragraph>Później córka niestety zniszczyła jego testament,  zawierający informację co do sposobu powrotu do prawdziwego rodowego nazwiska. Tym samym nić prowadząca do odzyskania nazwiska de Montalban została ostatecznie zerwana.</Typography>
              </Grid>
              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/5-pomnik-na-cmentarzu-lyczakowskim.jpg"
                    title="Grobowiec Jana Ruckgabera na Cmentarzu Łyczakowskim we Lwowie (Fot. Michał Piekarski)"/>
                  <CardContent>
                    <Typography variant="caption">Grobowiec Jana Ruckgabera na Cmentarzu Łyczakowskim we Lwowie (Fot. Michał Piekarski)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Download/>
            </Grid>
          </Box>
          <ScrollTop/>
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

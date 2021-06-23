import React from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Footer from '../src/organisms/Footer'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from '../src/organisms/NavBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Download from '../src/atoms/Download'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
          <Typography variant="h1" component="h1" gutterBottom> Wprowadzenie </Typography>
          <Card>
            <CardMedia
              className={classes.media}
              image="/images/2-ewa-michalik-and-andrzej-ruckgaber.jpg"
              title="Ewa Michalik i Andrzej Ruckgaber"/>
            <CardContent>
              <Typography variant="caption">Ewa Michalik i Andrzej Ruckgaber, Zakopane 2005</Typography>
            </CardContent>
          </Card>
          <Box my={4}>
            <Typography paragraph>Nazywam się Ruckgaber, Andrzej Ruckgaber. Urodziłem się w Polsce i czuję się Polakiem, jednak obce brzmienie nazwiska od zawsze budziło we mnie zainteresowanie pochodzeniem rodziny.
              Ciekawość i przekazywana w rodzinie historia  mojego pra-pra-dziadka - Jana Ruckgabera, pianisty i kompozytora lwowskiego, dziś całkiem zapomnianego, skłoniła mnie do zajęcia się bliżej jego biografią.
              Był nie tylko muzykiem, ale też pedagogiem i pełnym pasji popularyzatorem muzyki.</Typography>
            <Typography paragraph>Uważamy go za Polaka, ale jego rodzicami byli francuscy arystokraci, którzy schronili się w Wiedniu w czasie Rewolucji Francuskiej. Po śmierci ojca został adoptowany przez Austriaka
              Józefa Ruckgabera, którego nazwisko noszę. </Typography>
            <Typography paragraph>Większość życia spędził we Lwowie, przesiąkniętym polską kulturą, choć Polski nie było wtedy na mapie Europy.</Typography>
            <Typography paragraph>Po odzyskaniu przez Polskę niepodległości w roku 1918, potomkowie Ruckgabera przenieśli się do Warszawy, zachowując w rodzinnej pamięci opowieść o dziadku, kompozytorze.
               W taki sposób francuski arystokrata, później wiedeński emigrant o austriackim nazwisku, wreszcie obywatel Galicji i popularna postać Lwowa, dał początek polskiej gałęzi rodziny. </Typography>
            <Typography paragraph>Jego losy wydają się symboliczne na tle burzliwej historii Europy. Celem naszej prezentacji jest ukazanie jego historii jak najszerszej publiczności. </Typography>
            <Download/>
          </Box>
          <Box>
            <Typography variant="subtitle2">Warszawa, sierpień 2020</Typography>
            <Typography variant="subtitle2">Ewa Michalik i Andrzej Ruckgaber, pra-pra-wnuk kompozytora.</Typography>
          </Box>
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

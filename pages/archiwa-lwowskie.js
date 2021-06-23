import React from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Download from '../src/atoms/Download'
import Footer from '../src/organisms/Footer'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import NavBar from '../src/organisms/NavBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Page = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" gutterBottom>Archiwa Lwowskie</Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item sm={12}>
              <Typography paragraph>Większość rękopisów kompozytora znajduje się obecnie w magazynach Lwowskiej Narodowej Biblioteki Naukowej Ukrainy im. Wasyla Stefanyka. Zbiory Biblioteki,
              obecnie najbogatsze na Ukrainie pod względem wartości i kompletności materiału, dokumentują kulturę muzyczną Austrii, Niemiec, Polski, Węgier, Słowacji, Francji, Rosji i innych krajów europejskich.</Typography>
              </Grid>

              <Grid item sm={12}>
                <Card>
                  <CardMedia
                    style={{height: '600px'}}
                    image="/images/15-biblioteka-stefanyka-dawniej-ossolineum.jpg"
                    title="Biblioteka Naukowa Ukrainy im. W. Stefanyka, dawniej Ossolineum (http://strubcina.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Biblioteka Naukowa Ukrainy im. W. Stefanyka, dawniej Ossolineum (http://strubcina.org, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
              <Typography paragraph>„Archiwum Ruckgabera&quot; w Bibliotece im. Stefanyka zawiera wyłącznie rękopisy, w sumie około 1800 stron nut. Obejmują one lata 1815-1872 i dokumentują całą twórczość kompozytora. Po jego śmierci w 1876 r.
              jego prace pozostały w posiadaniu Galicyjskiego Towarzystwa Muzycznego. Później przekazano je do Biblioteki Narodowej im. Ossolińskich we Lwowie, znanej jako Ossolineum. W 1940 roku przeniesiono zbiór do lwowskiego oddziału Biblioteki
              Naukowej Ukraińskiej Akademii Nauk, dzisiejszej Biblioteki im. W. Stefanyka.</Typography>
              <Typography paragraph>Pozostałe rękopisy Ruckgabera, jego kompozycje wydane drukiem i część odręcznych kopii dzieł innych kompozutorów z ich autografami, które składały się na kolekcję biblioteki muzycznej Galicyjskiego Towarzystwa Muzycznego,
              przechowywane są obecnie w Bibliotece Lwowskiej Narodowej Akademii Muzycznej im. M.W. Łysenki.</Typography>
              <Typography paragraph>Na razie ani Archiwum Ruckgabera, ani zbiory biblioteki Galicyjskiego Towarzystwa Muzycznego nie są wystarczająco zbadane ani skatalogowane.</Typography>
              </Grid>
              <Grid item sm={12}>
              <Download/>
              </Grid>
            </Grid>
          </Box>
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

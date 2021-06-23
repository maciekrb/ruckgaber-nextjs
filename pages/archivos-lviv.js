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
          <Typography variant="h1" gutterBottom> Los Archivos de Lviv</Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item sm={12}>
              <Typography paragraph>La mayoría de los manuscritos conservados de Jan Ruckgaber se almacenan actualmente en la Biblioteca Académica Nacional Wasyl Stefanyk de Lviv en Ucrania. La colección de la biblioteca, la más grande de Ucrania por su valor y la integridad del material, representa las culturas musicales de Austria, Alemania, Polonia, Hungría, Eslovaquia, Francia, Rusia y otros países europeos.</Typography>
              </Grid>

              <Grid item sm={12}>
                <Card>
                  <CardMedia
                    style={{height: '600px'}}
                    image="/images/15-biblioteka-stefanyka-dawniej-ossolineum.jpg"
                    title="Lviv en una foto moderna: la Biblioteca Académica Nacional Wasyl Stefanyk de Lviv en Ucrania, anteriormente el Ossolineum (http://strubcina.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Lviv en una foto moderna: la Biblioteca Académica Nacional Wasyl Stefanyk de Lviv en Ucrania, anteriormente el Ossolineum (http://strubcina.org, 2015)
</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
              <Typography paragraph>&quot;El Archivo Ruckgaber&quot;  en la Biblioteca Stefanyk contiene solo manuscritos, más de 1800 páginas de música. Abarcan desde 1815 hasta 1872 y documentan todo su trabajo como compositor. Tras su muerte en 1876 sus obras quedaron en poder de la Sociedad Gallega de Música. Posteriormente, el archivo fue entregado a la Biblioteca Nacional Ossoliński en Lviv. En 1940 fue transferido a la sucursal de Lviv de la Biblioteca Académica de la Academia de Ciencias de Ucrania, la actual Biblioteca Académica Nacional Stefanyk de Lviv en Ucrania.</Typography>
              <Typography paragraph>Otra parte de los manuscritos de J. Ruckgaber, sus obras impresas y algunas de sus copias manuscritas de la música de otros compositores con sus autógrafos se encuentran ahora almacenadas en la Biblioteca de M.W. Academia Nacional de Música Lysenko en Lviv.</Typography>
              <Typography paragraph>Ni el Archivo Ruckgaber, ni los documentos de la biblioteca musical de la Sociedad Gallega de Música están todavía suficientemente catalogados o elaborados.</Typography>
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

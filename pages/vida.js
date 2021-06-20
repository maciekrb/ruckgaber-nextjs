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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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
          <Typography variant="h1" gutterBottom> Vida </Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item md={7}>
                <Typography variant="h4" gutterBottom>Ascendencia</Typography>
                <Typography paragraph>Jean (más tarde Johann y Jan), hijo de un noble francés y emigrante, Jean de Montalban, probablemente nació en Viena el 21 de noviembre de 1799, donde fue bautizado en la Catedral de San Esteban. Al principio utilizó el apellido de su padre, de Montalbán.</Typography>
                <Typography paragraph>Jean de Montalban - padre, huyó de su tierra natal para evitar el terror de la Revolución Francesa y se instaló en Viena. Más tarde, fue asesinado en la batalla de Wagram el 5 o 6 de julio de 1809. Después de la muerte de su padre, Jean, de diez años, fue adoptado por su tutor austríaco, Joseph Ruckgaber. Su nombre de pila francés, Jean, se cambió más tarde a Johann y Jan. Fue enterrado en Lviv como Jan Ruckgaber. </Typography>

                <Typography variant="h4" gutterBottom>Educación</Typography>
                <Typography paragraph>Comenzó su educación musical en Viena con Johann Nepomuk Hummel, quien era un compositor y pianista austriaco, de origen eslovaco. Posteriormente prosiguió sus estudios en París, presumiblemente en los años 1816-1819.</Typography>

                <Typography variant="h4" gutterBottom>Primeros Conciertos</Typography>
                <Typography paragraph>Jan Ruckgaber visitó Lviv por primera vez en 1815. En enero de 1818, todavía como estudiante, dio aquí varios conciertos exitosos y ganó cierta popularidad. Desde 1820 actuó regularmente en Lviv en conciertos de piano solo y acompañó a músicos locales.</Typography>
                <Typography paragraph>En 1826, Ruckgaber se instaló definitivamente en Lviv. Tocó conciertos, trabajó como tutor de piano y compositor. Su música fue luego publicada por la imprenta de Franz Piller en Lviv. Se trataba principalmente de música bailable, romances y canciones.	</Typography>
              </Grid>
              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/3-young-jan-ruckgaber.jpg"
                    title="Jan Ruckgaber jóven, por un autor desconocido (http://uk.wikipedia.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption"> Jan Ruckgaber jóven, por un autor desconocido (http://uk.wikipedia.org, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/4-ernest-ruckgaber.png"
                    title="Ernest Ruckgaber (archivo familiar) "/>
                  <CardContent>
                    <Typography variant="caption"> 'Ernest Ruckgaber (farchivo familiar)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={7}>
                <Typography variant="h4" gutterBottom>Familia</Typography>
                <Typography paragraph>El 15 de agosto de 1834, a la edad de casi 35 años, Jan Ruckgaber se casó con Maria Xavier Markl, la hija de un barón húngaro John Markl y una mujer polaca Jane née Balewicz.</Typography>
                <Typography paragraph>Tuvieron seis hijos, y su hijo menor, Ernest, casado con Anna Schier, hija de una escocesa, Anna Scarley y Joseph Schier, un joyero de Lviv, iniciaron la rama de la familia que actualmente vive en Varsovia.</Typography>

                  <Typography variant="h4" gutterBottom>Obra</Typography>
                <Typography paragraph>Un músico talentoso, admirado como pianista y compositor de música popular, Jan Ruckgaber era una figura vivaz y carismática. Tocó conciertos de piano en muchas ciudades europeas. A mediados de la década de 1840, en París conoció a Fryderyk Chopin y Franz Liszt.</Typography>
                <Typography paragraph>Desde cero organizó la Sociedad Gallega de Música. Puso las bases para la educación musical profesional en Lviv, comenzando la Escuela de Música en 1839 y, unos años más tarde, un Conservatorio, que funciona hasta la actualidad, ahora bajo el nombre de Academia Nacional de Música de Lviv. Durante más de cincuenta años de su actividad pública, Jan Ruckgaber educó a tres generaciones de músicos y amantes de la música y se ganó el respeto y la admiración de los círculos musicales de Lviv.</Typography>

              </Grid>
              <Grid item md={7}>
                <Typography variant="h4" gutterBottom>Ocaso</Typography>
                <Typography paragraph>Los últimos años de su vida los pasó con su amada hija Jane. Jan Ruckgaber murió en Lviv, el 5 de enero de 1876. Fue enterrado en el cementerio de Łyczakowski, en la tumba de la familia de Schiers (la de Joseph y Anna Schier, los padres del marido de Jane).</Typography>
                <Typography paragraph>Más tarde, su hija Jane destruyó su último testamento, que contenía información sobre el regreso al verdadero apellido. Así se cortó el único vínculo para recuperar el apellido familiar.</Typography>
              </Grid>
              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/5-pomnik-na-cmentarzu-lyczakowskim.jpg"
                    title="Monumento de Jan Ruckgaber en el cementerio Łyczakowski en Lviv (Foto de Michał Piekarski)"/>
                  <CardContent>
                    <Typography variant="caption">Monumento de Jan Ruckgaber en el cementerio Łyczakowski en Lviv (Foto de Michał Piekarski) </Typography>
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
    ...await serverSideTranslations(locale, ['common']),
  },
})

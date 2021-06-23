import React from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Download from '../src/atoms/Download'
import Footer from '../src/organisms/Footer'
import Grid from '@material-ui/core/Grid'
import NavBar from '../src/organisms/NavBar'
import ScrollTop from '../src/molecules/ScrollTop'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from '@material-ui/core'


const Page = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" gutterBottom> La Sociedad Gallega de Música (GMS)</Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item md={7}>
                <Typography paragraph>A principios de la década de 1830, Jan Ruckgaber y Franz Xavier Mozart crearon la Sociedad de Amigos de la Música (Gesellschaft der Musikfreunde), que pronto se convirtió en una fundación de la Sociedad Gallega de Música registrada oficialmente el 14 de agosto de 1838.</Typography>
                <Typography paragraph>Más tarde, en el mismo año, Franz Xavier Mozart se mudó a Viena, y Jan Ruckgaber lo reemplazó en el trabajo organizacional. En los años 1838-42, la Sociedad trabajó bajo su dirección como gerente artístico. Ruckgaber también fue director de orquesta y coros y más tarde director de una escuela de música. </Typography>
                <Typography paragraph>Pronto, la Sociedad comenzó a organizar reuniones musicales semanales en las que músicos aficionados interpretaban música de Mozart, Beethoven y otros.</Typography>
              </Grid>
              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    style={{height: '450px'}}
                    image="/images/6-fk-mozart.jpg"
                    title="Franz Xavier Mozart, son (http://zaxid.net/news/, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Franz Xavier Mozart, hijo (http://zaxid.net/news/, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={7}>
                <Typography paragraph>El período de mayor prosperidad para la SSociedad Gallega de Música llegó en los años 1842-48. En ese momento la sociedad realizó numerosos conciertos, eventos benéficos y encuentros musicales. Ruckgaber invitó a los músicos más eminentes de Europa a actuar en Lviv. El público quedó más que impresionado con el violinista Bedřich Smetana (1843), el pianista Libra Ottawa (1844), el violinista Heinrich Ernst (1845), el violonchelista Marek Bauer (1843) y el pianista Leopold Mayer (1843), pero fue Franz Liszt, quien actuó para todo el mes a finales de abril y mayo de 1847 quién batió récords de popularidad.</Typography>
                <Typography paragraph>Los acontecimientos revolucionarios del año 1848 cesaron la actividad de la escuela en el GMS.</Typography>
              </Grid>
              <Grid item sm={6} md={5}>
                <Card>
                  <CardMedia
                    style={{height: '250px'}}
                    image="/images/7-lwow-pomnik-mickiewicza.jpg"
                    title="Lviv, un monumento a Adam Mickiewicz (http://strubcina.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Lviv, un monumento a Adam Mickiewicz (http://strubcina.org, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="h4" gutterBottom>La Primavera de los Pueblos</Typography>
                  <Typography paragraph>En noviembre de 1848, debido a un bombardeo de la ciudad, el centro de Lviv resultó gravemente dañado. El edificio de la universidad y su biblioteca, con valiosos materiales polacos y libros antiguos, fueron incendiados, lo mismo sucedió con la universidad técnica, el ayuntamiento y el teatro. La Sociedad Gallega de Música suspendió su actividad.</Typography>
                </Grid>
              <Grid item sm={12}>
                <Card>
                  <CardMedia
                    style={{height: '400px'}}
                    image="/images/8-pozar-lwowa-obr-jablonowski1848.jpg"
                    title="El incendio de Lviv en 1848, una pintura de L. Jabłonowski (http://rzecz-pospolita.com, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">El incendio de Lviv en 1848, una pintura de L. Jabłonowski (http://rzecz-pospolita.com, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="h4" gutterBottom>El Nuevo Comienzo</Typography>
                <Typography paragraph>No fue antes de junio de 1852, cuando la Sociedad Gallega de Música se renovó como Sociedad para el Desarrollo de la Música en Galicia. La actividad de concierto de la Sociedad pronto se reinició y bajo la dirección de Ruckgaber, la orquesta presentó al público, entre otros, la obertura de&quot;Sueño de una Noche de Verano&quot; por F. Mendelssohn, y La Sinfonía Pastoral por L. van Beethoven. </Typography>

                <Typography variant="h4" gutterBottom>The Conservatoire</Typography>
                <Typography paragraph>La escuela de música de la sociedad se reabrió el 1 de mayo de 1854, esta vez como Conservatorio. Fue uno de los más antiguos de Europa, más antiguo que los conservatorios de Petersburgo (establecidos en 1862) y de Moscú (1864).</Typography>
                <Typography paragraph>En un principio estuvo dirigido por el director Jan Ruckgaber. El arte de la composición se enseñó junto con asignaturas teóricas, como armónicos, contrapunto, instrumentación y análisis de formas musicales. Desde los primeros años de la Sociedad Gallega de Música, Ruckgaber reunió repertorio para una biblioteca musical, cuya colección se enriqueció cuando se estableció el conservatorio. </Typography>
                <Typography paragraph>En 1906, el GMS y el Conservatorio se trasladaron a un nuevo edificio, y en 1910 se puso en funcionamiento una nueva sala de conciertos, con excelente acústica y nuevo órgano. Actualmente, la Filarmónica de Lviv se encuentra allí. </Typography>
                <Typography paragraph>La Primera Guerra Mundial frustró el trabajo del GMS y el Conservatorio, pero tan pronto como en 1916/17 la institución comenzó a volver a la vida normal.</Typography>
              </Grid>

              <Grid item sm={8}>
                <Card>
                  <CardMedia
                    style={{height: '400px'}}
                    image="/images/10-WWI-austrian-postcard.jpg"
                    title="World War I in an Austrian postcard, 1915 (http://strubcina.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">World War I in an Austrian postcard, 1915 (http://strubcina.org, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={4}>
                <Card>
                  <CardMedia
                    style={{height: '360px'}}
                    image="/images/9-nowy-budynek-gtm.jpg"
                    title="Lviv en una foto moderna: el edificio del GMS y su Conservatorio, construido en 1910 (actualmente la Filarmónica de Lviv)) (http://www.dziennikpolski24.pl, 2015) "/>
                  <CardContent>
                    <Typography variant="caption">Lviv en una foto moderna: el edificio del GMS y su Conservatorio, construido en 1910 (actualmente la Filarmónica de Lviv) (http://www.dziennikpolski24.pl, 2015) </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={6} md={5}>
                <Card>
                  <CardMedia
                    style={{height: '400px'}}
                    image="/images/11-akademia-muzyczna.jpg"
                    title="El M.W. Academia Nacional de Música Lysenko en Lviv http://strubcina.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">El M.W. Academia Nacional de Música Lysenko en Lviv (http://strubcina.org, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={7}>
                <Typography paragraph>Después del segundo desastre de la Segunda Guerra Mundial, el Conservatorio asumió su actividad como Academia Nacional de Música de Lviv, y todavía funciona, tomando el nombre de Academia Nacional de Música M. Łysenko de Lviv a partir de 2008. </Typography>
                <Typography paragraph>En el año 2004, la institución, una vez establecida por Jan Ruckgaber, celebró su 150 aniversario.</Typography>

                <Typography variant="h4" gutterBottom>El significado de la Sociedad Gallega de Música</Typography>
                <Typography paragraph>La Sociedad existió durante 100 años, de 1838 a 1939, entre 1919 y 1939 como Sociedad de Música Polaca y fue la institución más importante para la popularización de la música y para organizar la vida musical en Lviv y Galicia en el siglo XIX y principios de el siglo 20.</Typography>
                <Typography paragraph>El Conservatorio de la Sociedad Gallega de Música fue la primera institución educativa seria no solo en Galicia, sino también (excepto en Praga), en Europa del Este. La apertura de una escuela de música en 1839 y un conservatorio en 1854 fue el comienzo de la educación musical profesional en Lviv.</Typography>
              </Grid>

              <Grid item sm={12}>
                <Card>
                  <CardMedia
                    style={{height: '400px'}}
                    image="/images/12-lwowska-akademia-muzyczna-orkiestra.jpg"
                    title="La Orquesta de la Academia Nacional de Música de Lviv (http://conservatory.lviv.ua/ 2015) "/>
                  <CardContent>
                    <Typography variant="caption">La Orquesta de la Academia Nacional de Música de Lviv (http://conservatory.lviv.ua/ 2015) </Typography>
                  </CardContent>
                </Card>
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

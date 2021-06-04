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


export default function Page() {
  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" gutterBottom> The Galician Music Society (GMS)</Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item md={7}>
                <Typography paragraph>In the early 1830s, Jan Ruckgaber and Franz Xavier Mozart set up the Society of Friends of Music (Gesellschaft der Musikfreunde), which soon became a foundation for the Galician Music Society, officially registered on the 14th of August 1838.</Typography>
                <Typography paragraph>Later in the same year Franz Xavier Mozart set for Vienna, and Jan Ruckgaber replaced him in the organisational work. In the years 1838-42, the Society worked under his direction as an art manager. Ruckgaber was also the conductor of the orchestra and choirs and later the manager of a music school. </Typography>
                <Typography paragraph>Soon the Society started organizing weekly musical meetings in which amateur-musicians performed music by Mozart, Beethoven and others. </Typography>
              </Grid>
              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    style={{height: '450px'}}
                    image="/images/6-fk-mozart.jpg"
                    title="Franz Xavier Mozart, son (http://zaxid.net/news/, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Franz Xavier Mozart, son (http://zaxid.net/news/, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={7}>
                <Typography paragraph>The period of best prosperity for the Galician Music Society came in the years 1842-48. At that time the society held numerous concerts, charity events and musical meetings. Ruckgaber invited the most eminent musicians in Europe to perform in Lviv. The public was most impressed by violinist Bedřich Smetana (1843), pianist Libra Ottawa (1844), violinist Heinrich Ernst (1845), cellist Marek Bauer (1843) and pianist Leopold Mayer (1843), but it was Ferenz Liszt, who performing for the whole month at the turn of April and May, 1847, broke records of popularity. </Typography>
                <Typography paragraph>The revolutionary events of the year 1848 ceased the activity of the school at the GMS.</Typography>
              </Grid>
              <Grid item sm={6} md={5}>
                <Card>
                  <CardMedia
                    style={{height: '250px'}}
                    image="/images/7-lwow-pomnik-mickiewicza.jpg"
                    title="Lviv, a monument to Adam Mickiewicz (http://strubcina.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Lviv, a monument to Adam Mickiewicz (http://strubcina.org, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="h4" gutterBottom>The Springtime of the Peoples</Typography>
                  <Typography paragraph>In November 1848, due to a shellfire of the town, the center of Lviv was seriously damaged. The university building and its library, with valuable Polish materials and antique books, were burnt down, the same happened with the technical university, the town hall and the theatre.  The Galician Music Society suspended its activity.</Typography>
                </Grid>
              <Grid item sm={12}>
                <Card>
                  <CardMedia
                    style={{height: '400px'}}
                    image="/images/8-pozar-lwowa-obr-jablonowski1848.jpg"
                    title="The fire of Lviv in 1848, a painting by L. Jabłonowski (http://rzecz-pospolita.com, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">The fire of Lviv in 1848, a painting by L. Jabłonowski (http://rzecz-pospolita.com, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="h4" gutterBottom>The New Beginning</Typography>
                <Typography paragraph>It was not before June 1852, when the Galician Music Society was renewed as The Society for the Development of Music in Galicia. The Society’s concert activity was soon restarted and under Ruckgaber’s direction the orchestra presented to the audience, among others, the overture to &quot;The Summer Night’s Dream&quot; by F. Mendelssohn, and The Pastoral Symphony by L. van Beethoven. </Typography>

                <Typography variant="h4" gutterBottom>The Conservatoire</Typography>
                <Typography paragraph>The music school at the society was reopened on the 1st of May 1854, this time as a Conservatoire. It was one of the oldest in Europe, older than the conservatoires in Petersburg (established in 1862) and in Moscow (1864).</Typography>
                <Typography paragraph>At first it was led by the director Jan Ruckgaber. Art of composition was taught along with theoretical subjects, as harmonics, counterpoint, instrumentation and analysis of music forms. From the first years of the Galician Music Society, Ruckgaber gathered repertoire for a music library, whose collection  was enriched when the conservatoire was established. </Typography>
                <Typography paragraph>In 1906, the GMS and the Conservatoire  moved to a new building, and in 1910 a new concert hall, with excellent acoustics and new organ was put into use. Presently the Lviv Philharmonic is placed there. </Typography>
                <Typography paragraph>World War I thwarted the work of the GMS and the Conservatoire, but as soon as in 1916/17 the institution started returning to normal life. </Typography>
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
                    title="Lviv in a modern photo: the building of the GMS and its Conservatoire, constructed in 1910  (at present the Lviv Philharmonic) (http://www.dziennikpolski24.pl, 2015) "/>
                  <CardContent>
                    <Typography variant="caption">Lviv in a modern photo: the building of the GMS and its Conservatoire, constructed in 1910  (at present the Lviv Philharmonic) (http://www.dziennikpolski24.pl, 2015) </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={6} md={5}>
                <Card>
                  <CardMedia
                    style={{height: '400px'}}
                    image="/images/11-akademia-muzyczna.jpg"
                    title="The M.W. Łysenko Lviv National Music Academy (http://strubcina.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">The M.W. Łysenko Lviv National Music Academy (http://strubcina.org, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={7}>
                <Typography paragraph>After the second disaster of World War II the Conservatoire took up its activity as the Lviv National Music Academy, and it still works, taking the name of M. Łysenko Lviv National Musical Academy from 2008. </Typography>
                <Typography paragraph>In the year 2004, the institution, once established by Jan Ruckgaber, celebrated its 150th anniversary. </Typography>
                <Typography variant="h4" gutterBottom>The Meaning of the Galician Music Society</Typography>
                <Typography paragraph>The Society existed for 100 years – from 1838 to 1939, between 1919 and 1939 as the Polish Music Society and it was the most important institution for the popularization of music and for organizing musical life in Lviv and Galicia in the 19th and at the beginning of the 20th century.</Typography>
                <Typography paragraph>The Conservatoire at Galician Music Society was the first serious educational institution not only in Galicia, but also (except for Prague) – in Eastern Europe. Opening a Music School in 1839, and a Conservatoire in 1854, was the beginning of professional music education in Lviv.</Typography>
              </Grid>

              <Grid item sm={12}>
                <Card>
                  <CardMedia
                    style={{height: '400px'}}
                    image="/images/12-lwowska-akademia-muzyczna-orkiestra.jpg"
                    title="The Orchestra of the Lviv National Music Academy (http://conservatory.lviv.ua/ 2015) "/>
                  <CardContent>
                    <Typography variant="caption">The Orchestra of the Lviv National Music Academy (http://conservatory.lviv.ua/ 2015) </Typography>
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
  );
}

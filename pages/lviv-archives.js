import React from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Footer from '../src/organisms/Footer'
import Grid from '@material-ui/core/Grid'
import NavBar from '../src/organisms/NavBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function Page() {
  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" gutterBottom> Lviv Archives</Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item sm={12}>
              <Typography paragraph>Most of the preserved manuscripts of Jan Ruckgaber are presently stored in the Wasyl Stefanyk Lviv National Academic Library of Ukraine. The Library’s collection, the biggest in Ukraine with regard to its value and completeness of the material, represents the musical cultures of Austria, Germany, Poland, Hungary, Slovakia, France, Russia and other European countries.</Typography>
              </Grid>

              <Grid item sm={12}>
                <Card>
                  <CardMedia
                    style={{height: '600px'}}
                    image="/images/15-biblioteka-stefanyka-dawniej-ossolineum.jpg"
                    title="Lviv in a modern photo: the Wasyl Stefanyk Lviv National Academic Library of Ukraine, formerly the Ossolineum (http://strubcina.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Lviv in a modern photo: the Wasyl Stefanyk Lviv National Academic Library of Ukraine, formerly the Ossolineum (http://strubcina.org, 2015)
</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
              <Typography paragraph>&quot;The Ruckgaber Archive&quot;  in the Stefanyk Library contains only manuscripts, over 1800 pages of music. They span from 1815 to 1872 and they document all of his work as a composer. After his death in 1876 his works remained in the possession of the Galician Music Society. Later the archive was handed over to the National Ossoliński Library in Lviv. In 1940 it was transferred to the Lviv branch of the Academic Library of the Ukrainian Academy of Sciences, the present Stefanyk Lviv National Academic Library of Ukraine.</Typography>
              <Typography paragraph>Another part of J. Ruckgaber’s manuscripts, his printed works and some of his handwritten copies of other composers’ music with their autographs are now stored in the Library of the M.W. Łysenko Lviv National Music Academy. </Typography>
              <Typography paragraph>Neither the Ruckgaber Archive, nor the documents from the music library of the Galician Music Society,  have yet been sufficiently cataloged or worked out. </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

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
          <Typography variant="h1" gutterBottom>The List of Jan Ruckgaber’s Compositions</Typography>
          <Typography variant="h6" gutterBottom>Sources</Typography>
          <Typography paragraph>1. Osadca Olga: &quot;Der Archivbestand Johann (Jan) Ruckgaber in der L ́vivs ́ka naukowa biblioteka im. V. Stefanyka&quot; Musik-Sammlungen: Speicher inter- kultureller Prozesse, Teilband B, Franz Steiner Verlag, Stuttgart 2007, p. 344 – 356		</Typography>
          <Typography paragraph>2. List of Ruckgaber’s compositions, stored until 1939 in the Ossoliński National Institution in Lviv, made by J. Ruckgaber, the grandson of the composer</Typography>
          <Typography paragraph>3. The Faculty of Musicology of the Warsaw University (http://imuz.uw.edu.pl/en/)</Typography>
            <Typography paragraph>4. The Catalogue of microfilms received from the Stefanyk Library [stored in the Faculty of Musicology of the Warsaw University] </Typography>
          <Typography paragraph>5. Family archive</Typography>
          <Typography paragraph>6. The National Library, Warsaw (https://www.bn.org.pl/)			</Typography>
          <Typography paragraph>7. The Austrian National Library http://www.worldcat.org/</Typography>
          <Typography paragraph>8. Jagiellonian Library, Cracow (https://bj.uj.edu.pl/)</Typography>

          <Typography variant="h6" gutterBottom>The list of compositions is divided into the following parts</Typography>
          <Typography paragraph>(references indicate a source of information)</Typography>

          <Typography paragraph>A. Music for the Piano with an Orchestra </Typography>
          <Typography paragraph>B. Music for a Chamber Orchestra </Typography>
          <Typography paragraph>C. Music for the Piano </Typography>
          <Typography paragraph>D. Music for the Violin and the Piano </Typography>
          <Typography paragraph>E. Music for the Flute, the Czakan and the Piano </Typography>
          <Typography paragraph>F. Music for the Clarinet and the Piano </Typography>
          <Typography paragraph>G. Music for the Choir </Typography>
          <Typography paragraph>H. Music for the Voice and the Piano </Typography>
          <Typography paragraph>I. Music for the Guitar and the Piano (transcript)</Typography>

          <Typography variant="h6" gutterBottom>A. Music for the Piano with an Orchestra </Typography>
          <Typography paragraph>Lista do zrobienia ... :-)</Typography>


        </Box>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

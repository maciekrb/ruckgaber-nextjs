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
export default function Page() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" component="h1" gutterBottom> About </Typography>
          <Card>
            <CardMedia
              className={classes.media}
              image="/images/2-ewa-michalik-and-andrzej-ruckgaber.jpg"
              title="Ewa Michalik i Andrzej Ruckgaber"/>
            <CardContent>
              <Typography variant="caption">Ewa Michalik and Andrzej Ruckgaber, Zakopane 2005</Typography>
            </CardContent>
          </Card>
          <Box my={4}>
            <Typography paragraph>My name is Ruckgaber, Andrzej Ruckgaber. I was born in Poland and I certainly feel Polish, but the foreign name has always made me think about the origin of my family.  Curiosity and the family tale of my great-great-grandfather, Jan Ruckgaber, a pianist, and composer in Lviv, presently forgotten,  did incline me to take up his biography. He was not only a musician, but also a teacher and a passionate promoter of music.</Typography>
            <Typography paragraph>We think of Jan Ruckgaber as a Pole, but his parents were French aristocrats who fled to Vienna in the days of the French Revolution. After the death of his father he was adopted by his tutor, an Austrian named Joseph Ruckgaber, whose surname is now also mine. </Typography>
            <Typography paragraph>He spent most of his lifetime in Lviv, a Polish town bustling with Polish culture, although Poland did not then exist on the map of Europe.</Typography>
            <Typography paragraph>When Poland gained independence in 1918, Ruckgaber’s descendants moved to Warsaw, carrying with them the family story about their famous grandfather: the composer. Thus a French aristocrat, then a Viennese emigrant with an Austrian surname, Galician citizen and a popular figure in Lviv, he began the Polish branch of the family. </Typography>
            <Typography paragraph>His fate seems symbolic for the tangled history of Europe. The goal of our website is to reveal his story to the widest public.</Typography>
            <Download/>
          </Box>
          <Box>
            <Typography variant="subtitle2">Warsaw, August 2020</Typography>
            <Typography variant="subtitle2">Ewa Michalik and Andrzej Ruckgaber, the composer’s great-great-grandson.</Typography>
          </Box>
        </Box>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

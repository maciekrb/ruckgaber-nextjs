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
          <Typography variant="h1" gutterBottom> Life </Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item md={7}>
                <Typography variant="h4" gutterBottom>Ancestry</Typography>
                <Typography paragraph>Jean (later Johann and Jan), the son of a French nobleman and emigrant, Jean de Montalban, was probably born in Vienna on the 21st of November 1799, where he was baptized in St. Stephen’s Cathedral. At first he used his father’s surname, de Montalban.</Typography>
                <Typography paragraph>Jean de Montalban – father, fled his homeland to avoid the terror of the French Revolution and settled in Vienna. Later, he was killed in the Battle of Wagram on the 5th or 6th of July, 1809. After the death of his father, ten-year-old Jean was adopted by his Austrian tutor - Joseph Ruckgaber. His French Christian name - Jean - was later altered to Johann and Jan. He was buried in Lviv as Jan Ruckgaber. </Typography>

                <Typography variant="h4" gutterBottom>Education</Typography>
                <Typography paragraph>He started his musical education in Vienna with Johann Nepomuk Hummel, who was an Austrian composer and pianist, of Slovak origin. Later he continued his studies in Paris, presumably in the years 1816-1819.</Typography>

                <Typography variant="h4" gutterBottom>First concerts</Typography>
                <Typography paragraph>Jan Ruckgaber first visited Lviv in 1815. In January 1818, still as a student, he gave here a number of successful concerts and gained some popularity. From 1820 he regularly performed in Lviv in solo piano concerts, and accompanied local musicians.</Typography>
                <Typography paragraph>In 1826 Ruckgaber settled in Lviv for good. He played concerts, worked as a piano tutor, and a composer.  His music was then published by Franz Piller’s printing house in Lviv. It was mainly dance music, romances and songs.	</Typography>
              </Grid>
              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/3-young-jan-ruckgaber.jpg"
                    title="Young Jan Ruckgaber, by an unknown author (http://uk.wikipedia.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption"> Young Jan Ruckgaber, by an unknown author (http://uk.wikipedia.org, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/4-ernest-ruckgaber.png"
                    title="Ernest Ruckgaber (family archive) "/>
                  <CardContent>
                    <Typography variant="caption"> 'Ernest Ruckgaber (family archive)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={7}>
                <Typography variant="h4" gutterBottom>Family</Typography>
                <Typography paragraph>On the 15th of August 1834, at the age of nearly 35, Jan Ruckgaber married Maria Xavier Markl, the daughter of a Hungarian baron John Markl and a Polish woman Jane née Balewicz.</Typography>
                <Typography paragraph>They had six children, and their youngest son, Ernest, married to Anna Schier, the daughter of a Scotswoman, Anna Scarley and Joseph Schier, a Lviv jeweler, started the branch of the family presently living in Warsaw.</Typography>

                  <Typography variant="h4" gutterBottom>Work</Typography>
                <Typography paragraph>A gifted musician, admired as a pianist and a composer of popular music, Jan Ruckgaber was a lively, charismatic figure. He played piano concerts in many European towns. In the mid-1840s, in Paris he met Fryderyk Chopin and Ferenc Liszt.</Typography>
                <Typography paragraph>From scratch did he organize the Galician Music Society. He laid the foundation under professional music education in Lviv, starting Music School in 1839 and, a few years later, a Conservatoire, which works till the present days, now under the name of the Lviv National Music Academy. During over fifty years of his public activity, Jan Ruckgaber educated three generations of musicians and music-lovers and earned respect and admiration of Lviv musical circles.</Typography>

              </Grid>
              <Grid item md={7}>
                <Typography variant="h4" gutterBottom>Decline</Typography>
                <Typography paragraph>Last years of his lifetime he spent with his beloved daughter Jane. Jan Ruckgaber died in Lviv, on the 5th of January 1876. He was buried at the Łyczakowski Cementery, in a Schiers’s family tomb (Joseph and Anna Schier’s, Jane’s husband’s parents’).</Typography>
                <Typography paragraph>Later, his daughter Jane destroyed his last will, containing information as to the return to the true family name. Thus the only link to recovery the family surname was cut.</Typography>
              </Grid>
              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    className={classes.media}
                    image="/images/5-pomnik-na-cmentarzu-lyczakowskim.jpg"
                    title="Jan Ruckgaber’s monument in the Łyczakowski Cemetery in Lviv (Photo by Michał Piekarski)"/>
                  <CardContent>
                    <Typography variant="caption">Jan Ruckgaber’s monument in the Łyczakowski Cemetery in Lviv (Photo by Michał Piekarski) </Typography>
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

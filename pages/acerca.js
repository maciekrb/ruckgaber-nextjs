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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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
          <Typography variant="h1" component="h1" gutterBottom> Nosotros </Typography>
          <Card>
            <CardMedia
              className={classes.media}
              image="/images/2-ewa-michalik-and-andrzej-ruckgaber.jpg"
              title="Ewa Michalik i Andrzej Ruckgaber"/>
            <CardContent>
              <Typography variant="caption">Ewa Michalik y Andrzej Ruckgaber, Zakopane 2005</Typography>
            </CardContent>
          </Card>
          <Box my={4}>
            <Typography paragraph>Mi nombre es Ruckgaber, Andrzej Ruckgaber. Nací en Polonia y ciertamente me siento Polaco, pero el apellido extranjero siempre me hizo pensar acerca del origen de mi familia.  La curiosidad y los cuentos familiares sobre mi tatara-tatara abuelo, Jan Ruckgaber, un pianista y compositor en Lviv, actualmente olvidado,  me inclinaron sobre su biografía. Él no solo fue un músico, sino un profesor y un apasionado promotor de la música.</Typography>
            <Typography paragraph>Pensamos en Jan Ruckgaber como un Polaco, pero sus padres eran aristócratas franceses quienes huyeron a Viena en los días de la Revolución Francesa. Después de la muerte de su padre, fue adoptado por su tutor, un Austriaco llamado Joseph Ruckgaber, cuyo appeliido es ahora también mio. </Typography>
            <Typography paragraph>'Pasó la mayor parte de su vida en Lviv, un bullicioso pueblo cultural polaco, aunque Polonia no existía entonces en el mapa de Europa.</Typography>
            <Typography paragraph>Cuando Polonia obtuvo la independencia en 1918, los descendientes de Ruckgaber se mudaron a Varsovia, llevando consigo la historia familiar sobre su famoso abuelo: el compositor. Así, un aristócrata francés, luego emigrante vienés de apellido austríaco, ciudadano gallego y figura popular en Lviv, inició la rama polaca de la familia.. </Typography>
            <Typography paragraph>Su destino parece simbólico para la enredada historia de Europa. El objetivo de nuestro sitio web es revelar su historia a un público más amplio..</Typography>
            <Download/>
          </Box>
          <Box>
            <Typography variant="subtitle2">Varsovia, Agosto 2020</Typography>
            <Typography variant="subtitle2">Ewa Michalik y Andrzej Ruckgaber, tatara-tatara nietodel compositor.</Typography>
          </Box>
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

export default Page

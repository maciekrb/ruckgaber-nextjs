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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function Page() {
  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" gutterBottom> Galicyjskie Towarzystwo Muzyczne</Typography>
          <Box my={4}>
            <Grid container spacing={4} alignItems="center">
              <Grid item md={7}>
                <Typography paragraph>Na początku lat 1830-tych Jan Ruckgaber i F. Ksawery Mozart utworzyli Towarzystwo Przyjaciół Muzyki (Gesellschaft der Musikfreunde), które wkrótce stało się fundamentem Galicyjskiego Towarzystwa Muzycznego, oficjalnie zarejestrowanego 14 sierpnia 1838 roku.</Typography>
                <Typography paragraph>Jeszcze w tym samym roku Ksawery Mozart wyjechał do Wiednia i Ruckgaber zastąpił go w pracy organizacyjnej. W latach 1838-42 Towarzystwo pracowało pod jego kierunkiem jako kierownika artystycznego. Ruckgaber był też dyrygentem orkiestry i chórów, a poźniej także dyrektorem szkoły muzycznej.</Typography>
                <Typography paragraph>Towarzystwo organizowało cotygodniowe spotkania melomanów, w czasie których muzycy-amatorzy wykonywali nawet utwory Mozarta i Beethovena.</Typography>
              </Grid>
              <Grid item md={5} sm={6}>
                <Card>
                  <CardMedia
                    style={{height: '450px'}}
                    image="/images/6-fk-mozart.jpg"
                    title="Franz Xavier Wolfgang Amadeus Mozart, syn (http://zaxid.net/news/, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Franz Xavier Wolfgang Amadeus Mozart, syn (http://zaxid.net/news/, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={7}>
                <Typography paragraph>Okres rozkwitu Galicyjskiego Towarzystwa Muzycznego przypada na lata 1842-48. W tym czasie odbywały się
                  liczne koncerty, imprezy charytatywne i spotkania muzyczne. Ruckgaber zapraszał do Lwowa najwybitniejszych muzyków Europy.
                  Największe wrażenie na publiczności wywarli: skrzypek Bedřich Smetana, wiolonczelista Marek Bauer i pianista Leopold Mayer (1843),
                  pianistka Libra Ottawa (1844) i skrzypek Heinrich Ernst (1845). Jednak rekordy popularności biły występy Franciszka Liszta na przełomie kwietnia i maja 1847.</Typography>
                <Typography paragraph>W roku 1848 wydarzenia rewolucyjne Wiosny Ludów przerwały działalność Towarzystwa i Szkoły Muzycznej.</Typography>
              </Grid>
              <Grid item sm={6} md={5}>
                <Card>
                  <CardMedia
                    style={{height: '250px'}}
                    image="/images/7-lwow-pomnik-mickiewicza.jpg"
                    title="Lwów na starej pocztówce: pomnik Adama Mickiewicza (http://strubcina.org, 2015) "/>
                  <CardContent>
                    <Typography variant="caption">Lwów na starej pocztówce: pomnik Adama Mickiewicza (http://strubcina.org, 2015) </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="h4" gutterBottom>Wiosna Ludów</Typography>
                  <Typography paragraph>W listopadzie 1848 r., wskutek artyleryjskiego ostrzału miasta, centrum Lwowa zostało poważnie zniszczone.
                  Spłonął budynek Uniwersytetu i jego Biblioteka z cennymi starodrukami, Politechnika, Ratusz, Teatr. Galicyjskie Towarzystwo Muzyczne zawiesiło swoją działalność.</Typography>
                </Grid>
              <Grid item sm={12}>
                <Card>
                  <CardMedia
                    style={{height: '400px'}}
                    image="/images/8-pozar-lwowa-obr-jablonowski1848.jpg"
                    title="Pożar Lwowa w 1848 r., obraz L. Jabłonowskiego (http://rzecz-pospolita.com, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Pożar Lwowa w 1848 r., obraz L. Jabłonowskiego (http://rzecz-pospolita.com, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={12}>
                <Typography variant="h4" gutterBottom>Nowy początek</Typography>
                <Typography paragraph>Dopiero w czerwcu 1852 r., Galicyjskie Towarzystwo Muzyczne podjęło pracę jako Towarzystwo Rozwoju Muzyki w Galicji. Wkrótce wznowiono
                działalność koncertową i pod kierunkiem Ruckgabera zespoły Towarzystwa przedstawiły publiczności m. in. uwerturę do Snu nocy letniej F. Mendelssohna i Symfonię
                pastoralną L. van Beethovena. </Typography>

                <Typography variant="h4" gutterBottom>Konserwatorium Galicyjskiego Towarzystwa Muzycznego</Typography>
                <Typography paragraph>Szkołę muzyczną przy Towarzystwie otwarto ponownie 1 maja 1854 r., tym razem jako Konserwatorium. Było starsze, niż konserwatoria w Petersburgu (założone w r. 1862) i w Moskwie (1864).</Typography>
                <Typography paragraph>Na początku Jan Ruckgaber kierował nim jako dyrektor. Nauczano kompozycji i przedmiotów teoretycznych, jak harmonia, kontrapunkt, instrumentacja i analiza form muzycznych. Ruckgaber od dawna gromadził repertuar dla biblioteki muzycznej, której zbiory zostały jeszcze wzbogacone po uruchomieniu Konserwatorium. </Typography>
                <Typography paragraph>W roku 1906 GTM i Konserwatorium przeniosły się do nowej siedziby, a w 1910 r. włączono do użytku nowe organy i nową salę koncertową, z doskonała akustyką. Obecnie mieści się tam Filharmonia Lwowska. </Typography>
                <Typography paragraph>Wybuch I wojny światowej wstrzymał pracę Towarzystwa i Konserwatorium, jednak już w roku 1916/17 uczelnia zaczęła wracać do normalnej pracy.</Typography>
              </Grid>

              <Grid item sm={8}>
                <Card>
                  <CardMedia
                    style={{height: '400px'}}
                    image="/images/10-WWI-austrian-postcard.jpg"
                    title="Pierwsza wojna światowa we Lwowie na austriackiej pocztówce (http://strubcina.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Pierwsza wojna światowa we Lwowie na austriackiej pocztówce (http://strubcina.org, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={4}>
                <Card>
                  <CardMedia
                    style={{height: '360px'}}
                    image="/images/9-nowy-budynek-gtm.jpg"
                    title="Filharmonia Lwowska, dawniej GTM i jego Konserwatorium, budynek z 1910 r. (http://www.dziennikpolski24.pl, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Filharmonia Lwowska, dawniej GTM i jego Konserwatorium, budynek z 1910 r. (http://www.dziennikpolski24.pl, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={6} md={5}>
                <Card>
                  <CardMedia
                    style={{height: '400px'}}
                    image="/images/11-akademia-muzyczna.jpg"
                    title="Lwowska Narodowa Akademia Muzyczna im. M.W. Łysenki (http://strubcina.org, 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Lwowska Narodowa Akademia Muzyczna im. M.W. Łysenki (http://strubcina.org, 2015)</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={7}>
                <Typography paragraph>Po kolejnej katastrofie II wojny światowej Konserwatorium ponownie podjęło pracę i działa nadal, od 2008 r. jako Lwowska Narodowa Akademia Muzyczna imienia M.Łysenki.</Typography>
                <Typography paragraph>W roku 2004 istytucja ta, kiedyś założona przez Jana Ruckgabera, obchodziła 150 rocznicę działalności.</Typography>
                <Typography variant="h4" gutterBottom>Znaczenie Galicyjskiego Towarzystwa Muzycznego</Typography>
                <Typography paragraph>Galicyjskie Towarzystwo Muzyczne (w latach 1919-39 pod nazwą Polskiego Towarzystwa Muzycznego) istniało przez 100 lat i było najważniejszą instytucją w dziedzinie popularyzacji muzyki i organizacji życia muzycznego we Lwowie i Galicji w XIX i na początku XX stulecia.</Typography>
                <Typography paragraph>Konserwatorium przy Towarzystwie było pierwszą poważną instytucją edukacyjną nie tylko w Galicji, ale też w całej wschodniej Europie, z wyjątkiem Pragi czeskiej. Otwarciem w roku 1839 Szkoły Muzycznej, a w 1854 - Konserwatorium, zapoczątkowano profesjonalne kształcenie muzyczne we Lwowie.</Typography>
              </Grid>

              <Grid item sm={12}>
                <Card>
                  <CardMedia
                    style={{height: '400px'}}
                    image="/images/12-lwowska-akademia-muzyczna-orkiestra.jpg"
                    title="Orkiestra Lwowskiej Narodowej Akademii Muzycznej (http://conservatory.lviv.ua/ 2015)"/>
                  <CardContent>
                    <Typography variant="caption">Orkiestra Lwowskiej Narodowej Akademii Muzycznej (http://conservatory.lviv.ua/ 2015)</Typography>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

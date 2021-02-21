import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Footer from '../src/organisms/Footer'
import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import NavBar from '../src/organisms/NavBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

/**
**/

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
})

const sources = {
   "1": "Osadca Olga: &quot;Der Archivbestand Johann (Jan) Ruckgaber in der L ́vivs ́ka naukowa biblioteka im. V. Stefanyka&quot; Musik-Sammlungen: Speicher inter- kultureller Prozesse, Teilband B, Franz Steiner Verlag, Stuttgart 2007, p. 344 – 356",
   "2": "List of Ruckgaber’s compositions, stored until 1939 in the Ossoliński National Institution in Lviv, made by J. Ruckgaber, the grandson of the composer",
   "3": "The Faculty of Musicology of the Warsaw University (http://imuz.uw.edu.pl/en/)",
   "4": "The Catalogue of microfilms received from the Stefanyk Library [stored in the Faculty of Musicology of the Warsaw University]",
   "5": "Family archive",
   "6": "The National Library, Warsaw (https://www.bn.org.pl/)",
   "7":  "The Austrian National Library http://www.worldcat.org/",
   "8": "Jagiellonian Library, Cracow (https://bj.uj.edu.pl/)",
}

function Reference({reference}) {
  return (
    <Tooltip title={sources[reference]}><Button>{reference}</Button></Tooltip>
  )
}

function Composition({row}) {

  const classes = useRowStyles()
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          { row.notes ? (
            <IconButton arial-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          ) : " "
          }
        </TableCell>
        <TableCell>{row.numeral}</TableCell>
        <TableCell>{row.title}</TableCell>
        <TableCell>{row.manuscript ? "Yes" : "No"}</TableCell>
        <TableCell>{row.sources && row.sources.map((r) => (<Reference key={`${row.numeral}-${r}`} reference={r}/>))}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>{row.notes}</Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

function Section({name, compositions}) {
  return (
    <Box mt={6} mb={6}>
      <Typography variant="h4">{name}</Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Numeral</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Manuscript</TableCell>
            <TableCell>References</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {compositions.map((composition) => (
            <Composition key={composition.numeral} row={composition}/>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}


function Page({sections}) {

  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" gutterBottom>The List of Jan Ruckgaber’s Compositions</Typography>

          <Typography variant="h6" gutterBottom>The list of compositions is divided into the following parts</Typography>
          <Typography paragraph>(references indicate a source of information)</Typography>

          {sections.map((section) => (
            <Section name={section.section} compositions={section.compositions} />
          ))}
        </Box>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

Page.getInitialProps = (ctx) => {
  return {
    sections: [
      {
        "section": "A. Music for the Piano with an Orchestra",
        "compositions": [
          {
            "numeral": "A.1.",
            "title": "Rondo de concert As-Dur, op. 17, Piano et Orchestre, 1853, J. Ruckgaber",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "A.2a.",
            "title": "Partition des grandes variationes sur un thème polonais, op. 18, pour piano avec l’accomp. de tout l’orchestre",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "A.2b.",
            "title": "Grandes Variations avec l’Introduction et Finale pour le piano aves tout orchestre, Op. 18, dediees a M-elle Jeanette Hofman",
            "manuscript": false,
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "A.3.",
            "title": "Premier concert pour pianoforte, op. 20, avec l’accompagnement de grand orchestre, 1872",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "A.3e.",
            "title": "Violino principale du Grande Concert pour le Piano Forte. s. 10, Dediee a son ami Charles Lipinsky composee par Jean Ruckgaber",
            "manuscript": false,
            "sources": [
              3,
              4
            ]
          },
          {
            "numeral": "A.3f.",
            "title": "Viola du Grande Concert, pour le Piano par Jean Ruckgaber",
            "sources": [
              3,
              4
            ]
          },
          {
            "numeral": "A.3g.",
            "title": "Viola du Concerto pour le Piano, s. 61, ibid, par Jean Ruckgaber",
            "sources": [
              3,
              4
            ]
          },
          {
            "numeral": "A.3h.",
            "title": "Tympanie E.H, Concerto, Allegro non mosso par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.3i.",
            "title": "Grd.Concert Basso? Violoncello par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.3j.",
            "title": "Grande Concerto Violino II pour J. Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.3k.",
            "title": "Grande Concerto Cornd? 1mo in? E. pour J Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.3l.",
            "title": "Gr. Concerto Violoncelle a Centra Busso pour Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.3m.",
            "title": "Grand Concerto Clarinetto 1emo in C par J. Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.4.",
            "title": "Einzugsmarsch zur Inngfrau von Orlean, eine romantische Tragödie v. Schiller, op. 25, für Orchester und Piano",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "A.5.",
            "title": "Adagio de concert, op. 38, en mi-mineur, piano avec l’orchestre",
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "A.5.a.",
            "title": "Adagio de Concert en Mi mineur avec l’ accompagnement de l’orchestre pour Piano, op.38",
            "manuscript": true,
            "notes": "postscript: “onpent executer cette morceau pour piano seul en jouant seulement les petites notes”\n"
          },
          {
            "numeral": "A.5.b.",
            "title": "Adagio de koncert en mi mi miner, piano avec l’orchestre „On peut Assi excenter ce morceaux pour Piano seul en jeuant seulment les petites notes” Composer’s comment: to conduct the whole"
          },
          {
            "numeral": "A.5.c.",
            "title": "Adagio pour piano, tiree du premier concert avec l’orchestre, op. 38, “Zum Jahre 1872 ganzliche Umarbeitung”",
            "manuscript": true
          },
          {
            "numeral": "A.6.",
            "title": "Rondo de concert, op. 40, pianoforte avec l’accompagnement de grand orchestre, score",
            "manuscript": true,
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "A.7a.",
            "title": "Rondo de concert, op. 41,  piano with the whole orchestra",
            "manuscript": true,
            "sources": [
              3,
              4
            ]
          },
          {
            "numeral": "A.7b.",
            "title": "Trombone Basso? Rondo de Concert op. 41 par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.7c.",
            "title": "Rondo de Concert op. 41 Lorno 200 E.G.Es.E Allegretto par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.7d.",
            "title": "Rondo de Concert Op. 41 Allegretto Trombe jes in G.et E par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.7e.",
            "title": "Flauto 1mo Rondo de Concerto Flautino1mo  Oboe1mo par J. Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.7f.",
            "title": "Corno? 2do E Concerto pour J. Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.8.",
            "title": "Ouvertura d-moll 42 und Frantzel Ferdinand Johan Ruckgaber str. 1 (?)",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.9.",
            "title": "Dwa marsze, op. 44, dedicated to the Lviv National Guard, ca 1850",
            "sources": [
              1,
              2,
              3,
              4,
              7
            ]
          },
          {
            "numeral": "A.10a.",
            "title": "Grande Ouverture de Concert pour grande Orchestre, Partition",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "A.10b.",
            "title": "Ouverture a grand Orchestre compose par Jean Ruckgaber",
            "sources": [
              5
            ],
            "notes": "(photocopy, 2 pages)"
          },
          {
            "numeral": "A.10c.",
            "title": "Grande Ouverture in Koncert, pour l’orchestre.",
            "sources": [
              2,
              3
            ],
            "notes": "Score for the first violin, cello,\ncorno 2 in D, basoon, oboe I, oboe II, clarinet I –or in A. piccolo, fagot II, corno I w D. ophiglaide, tympanie in D, Tamborre, grand Basse, trombo I-mo in D, trombo 2 – do in D, trombone 1-mo, trombone basso, corno 3-tio in E, corno. Corno 4-to in E, flute, basso, basso, basso Partition .... et grande ....pour ....\nGrand Ouverture de concert par Jean Ruckgaber Violino 5 Alto 2. ......, ......, Busso 3\n"
          },
          {
            "numeral": "A.10d.",
            "title": "Grande Ouverture de Concert , Op. 63",
            "sources": [
              2,
              3,
              4
            ],
            "notes": "Score: second violin 3.-Viole 2.\nCellos 2, pour grande Orchestre– a M-sieur le comte Joseph Starzyński – J. Ruckgaber, directeur, de Musique enserit et Membre d’Honneur de la Societe Philharmonique a Leopol\n"
          },
          {
            "numeral": "A.10e.",
            "title": "Grande Ouverture de Concert, Violino",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "A.10f.",
            "title": "Grand Ouverture de Concert.  Violino 1mo Directions – Stimme Grand Ouverture de Concert par Jean Ruckgaber",
            "sources": [
              3,
              4
            ]
          },
          {
            "numeral": "A.10g.",
            "title": "Grande Ouverture de Concert",
            "sources": [
              3,
              4
            ],
            "notes": "Violino 1mo, k. 11\nViolino 1mo Directions - …..Grande Ouverture de Concert par Jean Ruckgaber\nViolino 1mo Directore muz. 600 Hamburg 1863\n"
          },
          {
            "numeral": "A.10h.",
            "title": "Grand Ouverture de concert Violino 1mo, Andante con moto, par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.10i.",
            "title": "Grand Ouverture de Concert Violino 1mo , Andante con moto,  Op. 41 (?) par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.10j.",
            "title": "Grand Ouverture de concert Violino 2do, Andante con moto,  par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.10k.",
            "title": "Violino 2do Grande Ouverture, Andante con moto, par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.10l.",
            "title": "Grand Ouverture de concert Violino 2do, Andante con moto, par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.10m.",
            "title": "Grand Ouverture de concert Viola, Andante con moto, par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.10n.",
            "title": "Viola Grande Ouverture, Andante con moto, par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.10o.",
            "title": "Grand Ouverture de concert Violoncello, Andante con moto, par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A10p.",
            "title": "Grande Ouverture de Concert Violoncello pour grande Orchestra, Partition, composee par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.10r.",
            "title": "Grande Ouverture de Concert Flauto, Andante con moto, par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.10s.",
            "title": "Basso Grande Ouverture, Andante con moto, par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.10t.",
            "title": "Basso Grande Ouverture, Andante con moto, par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "A.10u.",
            "title": "Grande Ouverture de Concert borno 3tia in E, Andante con moto, par Jean Ruckgaber A son ami Monsieur",
            "sources": [
              3,
              4
            ]
          },
          {
            "numeral": "A.10w.",
            "title": "Grande Ouverture. 1856. Op. 68(?)",
            "sources": [
              1
            ]
          },
          {
            "numeral": "A.11.",
            "title": "Adagio pour piano seul avec l’orchestre, op. 82, rkp.",
            "sources": [
              1,
              2,
              3,
              4
            ]
          }
        ]
      },
      {
        "section": "B. Music for a Chamber Orcestra",
        "compositions": [
          {
            "numeral": "B.1.",
            "title": "Quintet pour piano D-dur, op. 37, im Jahre 18151",
            "sources": [
              2
            ]
          },
          {
            "numeral": "B.2a.",
            "title": "2 Streichquartetten, op. 87, 7 April 1864, rkp.",
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "B.2b.",
            "title": "1mo Quartet pour Violon 1mo, Violon 2da, Viola et Violoncello par Jean Ruckgaber Ouvre 87",
            "sources": [
              3
            ]
          },
          {
            "numeral": "B.2c.",
            "title": "Quartet pour Violon 1me Violon 2do, Viola et Violoncello par Jean Jean Ruckgaber Op. 87",
            "sources": [
              3
            ]
          }
        ]
      },
      {
        "section": "C. Music for the Piano",
        "compositions": [
          {
            "numeral": "C.1.",
            "title": "Mazur pour piano D-dur, op. 1, à M-lle Doris Renzhausen",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              7
            ]
          },
          {
            "numeral": "C.2.",
            "title": "Polonaise pour le pianoforte, a-moll, op. 2, à M-lle Octavie de Festenburg,  ca 1825",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4,
              6
            ]
          },
          {
            "numeral": "C.3.",
            "title": "Polonaise pour le pianoforte, d-moll, op. 3, dédié à Jacques Bauer",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4,
              6
            ]
          },
          {
            "numeral": "C.4.",
            "title": "Polonaise pour le pianoforte, f-moll, op. 4, dédié à M-me la comtesse de Preptowska(?)",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4,
              6
            ]
          },
          {
            "numeral": "C.5.",
            "title": "III Cotillons pour le pianoforte à M-me Ksawera Ruckgaber issued by Piller, Lwów, 1923 r.",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.6.",
            "title": "VII Cotillons, op. 5, déd. à M-lle Xavière de Rylska",
            "sources": [
              2,
              6
            ]
          },
          {
            "numeral": "C.7.",
            "title": "IX Variations pour piano, op. 6, à M-elle Caroline de Rylska",
            "manuscript": true,
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.8.",
            "title": "Variations sur un thème „Robin de Bois”, op. 6, pour piano, par Charles Marie Weber",
            "manuscript": true,
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.9.",
            "title": "Polonaise, op. 7, dédié à M-lle W. Schneikert",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.10.",
            "title": "Collection de 4 polonaises, 10 valses avec trio, 1 quadrille, 2 galloppes et 5 cotillons, op. 8, par J. Ruckgaber et J. Baschny, 1926 r.",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.11.",
            "title": "Charme du carnaval, op. 9, dédié à M-lle comte Hortense Małachowska",
            "manuscript": true,
            "sources": [
              2,
              6
            ]
          },
          {
            "numeral": "C.12.",
            "title": "Grand marche, a 4 mains, op. 10, à monsieur le comte de Fresnel, général de la chevalierie, commandant gén. en Galizie, rkp.",
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.13.",
            "title": "Exercises de danses de l’année 1826, op. 11, composées par A. Braun et J.  Ruckgaber",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.14.",
            "title": "Collection des danses, op. 12, dédiée à M-lle la comtesse Eveline Dzieduszycka",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.15.",
            "title": "2 polka, op. 12",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.16.",
            "title": "Variations sur un thème russe, op. 12, fort. à M-lle la comtesse Angelique Morszkowska",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.17.",
            "title": "No 2 Grande marche pour le pianoforte à 4 mains, op. (12?)13, composée par J. Ruckgaber",
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.18.",
            "title": "Exercises de danses, op. 13, déd. à M-elle Melanie de Uruska",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.19.",
            "title": "Eugenie – polka, op. 13, à M-elle Eugenie Mehlieu, rkp.",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.20.",
            "title": "Mazur – Favorit, op. 14, à M-elle Hélène de Gregoreska",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.21.",
            "title": "Fantasie sur un thème de l’opéra, „La dame blanche”,G-moll, op. 14, fort.  à M-me la princesse Hélène Ponińska",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.22.",
            "title": "Fantaisie tirée de l’opéra „Le dame blanche”, op. 15, à M-me Louise Piller",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.23.",
            "title": "Exercices de danses pour le pianoforte, op. 15, composées et dédiées à Monsieur Vincent Hausner par Jean Ruckgaber, ca 1830",
            "sources": [
              6
            ]
          },
          {
            "numeral": "C.24.",
            "title": "Marche de Moïse variée, op. 15",
            "sources": [
              3
            ]
          },
          {
            "numeral": "C.25.",
            "title": "Polonaise pour pianoforte, D-dur, op. 16, exécutée dans la salle des redoutes à Léopol. composée et arrangée par Jean Ruckgaber",
            "sources": [
              1,
              3,
              4,
              6
            ]
          },
          {
            "numeral": "C.26.",
            "title": "Valses, op. 17, na fort. composées et dédiées à Mademoiselle Izabelle de Jendrzejowicz par Jean Ruckgaber, ca 1835",
            "sources": [
              2,
              6
            ]
          },
          {
            "numeral": "C.27.",
            "title": "Grande Marche, op. 17, for 4 hands à son excellence le général de Bikard",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.28.",
            "title": "Rondo sur les motifs de „Zalmira” par Rossini, op. 18, fort.,1866, Rondo um Jahre 1824",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.29.",
            "title": "Polonaise, mazures, cotillions, valse et galloppe – pour le Pianoforte, op. 18, déd. à Henriette de Chamietz",
            "sources": [
              6
            ]
          },
          {
            "numeral": "C.30.",
            "title": "Grandes variationes sur un thème du ballet „Nina” F-dur, op. 19, piano, à M-sieur le célèbre compositeur Gallus",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.31.",
            "title": "Polonaise pour le pianoforte, op. 19, composée et dédiée à M-lle Emilie Scharfnagl par Jean Ruckgaber, ca 1835",
            "sources": [
              2,
              6
            ]
          },
          {
            "numeral": "C.32.",
            "title": "Rondo sur un thème de l’opéra „Zalmira” de Rossini, pour piano, op. 20, Composée par Jean Ruckgaber 1824",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.33.",
            "title": "Mazur et Galoppe, op. 21, à M-me Caroline ...bowska née de Balewska",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.34.",
            "title": "Musique pour les amusements des danses, op. 22, meante dans la sale des Redoutes à M-me Julie Goldschmidt",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.35.",
            "title": "Musique pour les amusements des danses, op. 23, ....... dans la sale des Redoutes, à M-me la comtesse Theresie de Głogowska",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.36.",
            "title": "Fantaisie sur les thèmes de l’opéra „Il Graciono” de Meyerbeer, op. 24, p.  Pfte. à M-me Josephine Niemirowska, 1837",
            "sources": [
              2,
              7
            ]
          },
          {
            "numeral": "C.37.",
            "title": "Mélange tiré de l’opéra „Fra Diavolo”, op. 25, [de Daniel François Auber]. à M-me Marie de Rodakowska",
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.38.",
            "title": "Variations sur un thème original, op. 26, à M-me la comtesse Julie de Sulatycka",
            "sources": [
              2,
              3,
              7
            ]
          },
          {
            "numeral": "C.39.",
            "title": "L’agrément du Carnaval, op. 27, Es-Dur, A-Dur, D-Dur, D-Dur, c-Moll, F-Dur. à M-me Emilie Laub, 1858",
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.40.",
            "title": "Danses pour piano, op. 27, à M-lle Henriette de Chamies",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.41.",
            "title": "Lwowianka, mazur, op. 27, déd. à M. Vincent Daner",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.42.",
            "title": "Mazurka, op. 28, piano, à M-me Comtesse Haeltenschmidt(Herkenschmidt?)",
            "sources": [
              2,
              7
            ]
          },
          {
            "numeral": "C.43.",
            "title": "Mélange sur différentes Thèmes Polonais pour Piano Forte à 8 mains, op. 29",
            "sources": [
              1,
              2,
              3,
              4,
              5,
              7
            ]
          },
          {
            "numeral": "C.44.",
            "title": "Duo à 8 mains ou pour 4, piano, op. 29",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.45.",
            "title": "Rondo de concert pour piano, op. 30",
            "sources": [
              3,
              4
            ]
          },
          {
            "numeral": "C.46.",
            "title": "Variations sur une valse, op. 30, de Mr le comte de Gallenberg pour le pianoforte composées et dédiées à M-lle Marie Kratter par J. Ruckgaber, 1838",
            "sources": [
              2,
              5,
              7
            ]
          },
          {
            "numeral": "C.47.",
            "title": "Poutpourri tirée de l’opéra „Belizario” par Donizetti, op. 30, à M-me Octavie Lewakowska, 1863",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.48.",
            "title": "Mazurka et 6 quadrilles, op. 31, à M-me la comtesse Julie Głogowska",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.49.",
            "title": "Variations sur un thème original pour le pianoforte, op. 32, composées et dédiées à Madame la comtesse Melanie Lewicka nee comtesse Choloniewska par Jean Ruckgaber, 1836",
            "sources": [
              2,
              4,
              5,
              7
            ]
          },
          {
            "numeral": "C.50.",
            "title": "Variations sur un thème de l’opéra „Norma” de Bellini, op. 33, for the piano, à M-me la comtesse Idalie Rakowska, Februar 1837",
            "sources": [
              2,
              7
            ]
          },
          {
            "numeral": "C.51.",
            "title": "Air Polonais varié, op. 34, à M-me la comtesse Leonore Karwicka, 1836",
            "sources": [
              2,
              7
            ]
          },
          {
            "numeral": "C.52.",
            "title": "Souvenir de Bellini, op. 35, à M-lle la comtesse Justine Markowska, 1836",
            "sources": [
              2,
              7
            ]
          },
          {
            "numeral": "C.53.",
            "title": "Souvenir de Hugenots de Meyerbeer, op. 36, Phantasie, à M-me Angeline de Zielińska, 1837",
            "sources": [
              2,
              7
            ]
          },
          {
            "numeral": "C.54.",
            "title": "Prélude et Prière pour l’orgue ou piano, op. 36, à son ami M-sieur Victor de Sellgey, rkp.",
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.55.",
            "title": "Beautés de „Huguenots” de Meyerbeer, op. 37, piano, à M-lle Isidore de Kaczanowicz (?)",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.56.",
            "title": "Fantasie ou Potpourri, op. 38, na fort., sur des motifs de l’opéra „Postillon de Lonjuneau” musique d’Adam à M-lle Fanny Kratter, 1838",
            "sources": [
              2,
              7
            ]
          },
          {
            "numeral": "C.57.",
            "title": "9 Mazurów, op. 39, déd. à M-me Honorie de Komorowska née comtesse Chotoniewska",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.58a.",
            "title": "Ouverture zur komischen Oper „Der Doctor und Apotheker”, op. 40, von Josef Ritter von Ritterdorf, for 4 hands",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.58b.",
            "title": "Ouverture de l’opera “Le docteur et Pharmacieu” a 4 mains, op. 40.  Catte opera est composee par le baron de Rittersdorf, la partitour de toute l’oper pour le grand overture avec cette nouvelle ouverture par Jean Ruckgaber",
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "C.59.",
            "title": "6 Quadrilles na fort., op. 40, à M-me Amalie Eder",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.60.",
            "title": "Concertus ....pour le piano, op. 40",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.61.",
            "title": "3 Mazures à Mons. Fr. Chopin, op. 411 (op. 432 ?)"
          },
          {
            "numeral": "C.62.",
            "title": "Polonaise et 3 mazures, op. 42, déd. à son Altesse Regals Monseigneur l’archiduc Ferdinand Charles Este- Prime de Modena",
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.63.",
            "title": "3 mazury i 6 kadryli, op. 45, à M-me Frederique Théophile Teresa Comtesse Moszyńska née Elen. Moszyńska",
            "sources": [
              1,
              2,
              5
            ]
          },
          {
            "numeral": "C.64.",
            "title": "Cantus Firmus, op. 45, with a double counterpoint for 3 votes, 1860, referred to as ,musical curiosum",
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.65.",
            "title": "3 stimiger Canon in strangen Stil, 25 Nov. 1865",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.66.",
            "title": "„Pod gwiazdami”, op. 46",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.67.",
            "title": "Nocturne, op. 47, fortep. dédié à mon ami, Artur Głogowski",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.68.",
            "title": "3 Fuges en mi- mineur, re- mineur et mi- mineur et cantus firmus, contrepoint à 3 voix pour piano, op. 48, à son ami Monsieur Francois Candella",
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.69.",
            "title": "Marche funèbre pour le pianoforte, op. 48, composée par Jean Ruckgaber, Souvenir à Th. Wiśniowski",
            "sources": [
              2,
              5,
              7
            ]
          },
          {
            "numeral": "C.70.",
            "title": "Andante pour le pianoforte As-dur, op. 48",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ],
            "notes": "a. 1. Andante op.48 – manuscript\nb. 2. Scherzo op.50, - issued Berlin, Lwów – manuscript\n"
          },
          {
            "numeral": "C.71.",
            "title": "Souvenir de l’opéra „Mina” de Thomas, op. 49, déd. à M-me Victorine de Vassilka",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.72.",
            "title": "Fuga en sol-mineur pour piano, op. 50, à M-sieur Jacques de Kobervein",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.73.",
            "title": "Sentiments d’enthousiasme de la Galicie pour les mémorables journées d’octobre de 1851, op. 50, Danses pour le piano dédiées à son excellence madame la comtesse Marie Gołuchowska née comtesse Baworowska Dame de la Croix etoilée par Jean Ruckgaber",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.74.",
            "title": "Canon à deux voix pour piano, op. 50",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.75.",
            "title": "5 valses, 2 mazures et une polka pour piano par Jean Ruckgaber, op. 51, à mademoiselle la comtesse Sophie Lewicka",
            "sources": [
              2,
              5
            ]
          },
          {
            "numeral": "C.76.",
            "title": "Quadrilles sur des airs favoris de l’opéra „Indra” de Flotow, op. 52, déd. à son ami M-sieur Alfred Reiss",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.77.",
            "title": "Penices romans sans paroles, op. 53, déd. à M-lle Olga de Zawadzka",
            "sources": [
              1,
              2,
              7
            ]
          },
          {
            "numeral": "C.78.",
            "title": "3 mazures, op. 54, à son ami Edmond Juristowski",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.79.",
            "title": "Fuga in 4 parties ... pour le pianoforte, op. 54",
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.80.",
            "title": "Fuga à 3 parties en mi-maieur, pour piano, op. 55",
            "manuscript": true,
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.81.",
            "title": "Mazur à 6 mains D-dur, op. 56",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.82.",
            "title": "Grande marche pour le piano, op. 56",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.83.",
            "title": "„Souvenir de Korczyn”, op. 57, dans les Karpathes, Mazur déd. à M-lle Michalina Woraczyńska",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.84.",
            "title": "Szamszurka – polka, op. 58, déd. à son ami Frederic Prohaska, issued Lwów, Kallenbach, Wiedeń, Warszawa, Kijów by Friedlein",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.85.",
            "title": "Polka – mazurka, op. 59, à M-me de Tustanowska née Cybulska, issued Kijów, Kamieniec Podolski, Żytomierz – Kocipiński",
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "C.86.",
            "title": "Impromptu, op. 59",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.87.",
            "title": "Cavatina et andante de l’opéra „Zalmira” à 4 mains, op. 59",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.88.",
            "title": "Frantzl – Polka et Mazurka tremblante, op. 59, piano, à M-me Rose de Dobrzycka,1859",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.89.",
            "title": "Mazurka de salon, op. 60, à Madame la princesse F. née Radziwiłł F Marcelina Czartoryska",
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "C.90.",
            "title": "Polka, op. 61, à M-lle Maria Lewakowski",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.91.",
            "title": "Mazurka pour le piano, op. 62, par Jean Ruckgaber à Mademoiselle Camille de Rozborska",
            "sources": [
              2,
              5
            ]
          },
          {
            "numeral": "C.92.",
            "title": "Fleurs de Korczyn, Quadrilles pour le piano, op. 63, composées par Jean Ruckgaber, à Mademoiselle Natalie de Miclesco",
            "sources": [
              2,
              5
            ]
          },
          {
            "numeral": "C.93.",
            "title": "Ouverture de mélodrama „Le Sauveur”, op. 63, pour l’orchestre, arrangée pour piano à 4 mains, „Encantée dans les concerts de la Société Philharmonique de Léopol”, rkp.",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.94.",
            "title": "Grande Ouverture pour grande Orchestre, composee et arrangee pour piano a 4 mains, op. 63, a M. le comte Joseph Starzeński, manuscript",
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.95.",
            "title": "Une fleur de salon – Impromptu-valse, op. 64, déd. à M-sieur Antoine Kocipiński",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.96.",
            "title": "Grande marche pour piano, op. 64, au Corps des Officiers du Regiment Nr.  65",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.97.",
            "title": "4-tième fuge à 3 voix pour pianoforte, op. 64, rkp.",
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.98.",
            "title": "Grande ouverture op. 65 (?), pour grand orchestre, arrangée pour 4 mains (piano), (Overture for the opening of the Skarbkowski Theater, composed in Korczyn in August 1856)",
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.99.",
            "title": "4 Mazurka élégante, piano, B-dur, op. 65, à son ami le chevalier Marceli Madeyski",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.100.",
            "title": "Impromptu, scène dramatique pour piano, op. 65, à M-me Jeanette Franckel à Jassy, 1861",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              5
            ]
          },
          {
            "numeral": "C.101.",
            "title": "Souvenir des Karpathes, op. 65, Pensées allégoriques et nationales pour le piano par Jean Ruckgaber",
            "sources": [
              3
            ]
          },
          {
            "numeral": "C.102.",
            "title": "Cavatine pour piano par Jean Ruckgaber, op. 66, à son élève Mademoiselle Eugénie Meulien",
            "sources": [
              2,
              5,
              7
            ]
          },
          {
            "numeral": "C.103.",
            "title": "Souvenir de Chervitchesti, 6 Quadrilles pour piano, op. 66",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.104.",
            "title": "Souvenir de belles Dames de Dombrowa, Polka Nr.4, piano",
            "manuscript": true,
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "C.105.",
            "title": "Reconaisence – Polka No.5, Op. 67, compose par Jean Ruckgaber, fort. a Mr.  Jgnace Chądzyński",
            "manuscript": true,
            "sources": [
              2,
              3
            ],
            "notes": "N00 1 Bertha Polka., N00 2 Jeanette, N00 3 Rosa, N00 4 Dombrowa, N00 5 Reconaicsenece,  N00 6 Caterine, N00 7 Zoë, N00 8 Helene, N00 9 Babette Polka, N00 10 Pauline, N00 11 Johanes Brun, N00 12 Sefanee, N00 13 Victor, N00 14 Ernst, N00 15 Ernst, N00 16 Qui ne s’oublic pas.\n"
          },
          {
            "numeral": "C.106.",
            "title": "3 Polka op. 67",
            "sources": [
              1,
              2,
              3,
              4
            ],
            "notes": "Nr. 6 fort. Catherine, à M-me Catherine Miclesco, née de Glogoveano,\nNr.7 „Zoe” à M-lle Zoe de Glogeoveano, à Crajova, Nr.8  „Hélène” à M-me Hélène de Miclesco, ms.\n"
          },
          {
            "numeral": "C.107.",
            "title": "Jeanette – Polka, Nr. 8 ded. a me trios chere fille per son pero Jean Ruckgaber.  A note with the following content attached to it:” Ich bin sehr hungrig. Gebe mir ras zu Essen. In meinem Maren krappelt harum, es ist ein Ubel, man wird ganz dumm” – piano",
            "manuscript": true,
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "C.108.",
            "title": "Johanis Braunn et Stefanie Polka pour le Piano, op. 67 composee par Jean Ruckgaber",
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "C.109.",
            "title": "“Ruine s’oblie pas” Polka Nr. 16, fort. a Mr. Casimir Ziembiski",
            "manuscript": true,
            "sources": [
              2,
              3
            ],
            "notes": "N001 Bertha, N002 Seunette?, N003 Rosa, N004 Dombrowa, N005 Reconacsenec, N006 Caterine, N007 Zoë, N008 Helene,  N009 Babette, N0010 Pauline,  N0011 Johanes Brun, N0012 Stefanie, N0013 Eugenie, N0014 Victor,  N0015 Ernst, N0016 Qui ne s’oublie pas.\n"
          },
          {
            "numeral": "C.110.",
            "title": "Raoul – polka, op. 67, pour le piano par J. Ruckgaber, à Madame Catherine de Miclesco née de Glogoveano",
            "sources": [
              2,
              5,
              7
            ]
          },
          {
            "numeral": "C.111.",
            "title": "Les plus beaux yeux: mélodie de Stigelli, op. 67, ca 1885 ????",
            "sources": [
              7
            ]
          },
          {
            "numeral": "C.112.",
            "title": "Le Traînage, polka, op. 68, déd. à M-me la comtesse Sophie Siemieńska née comtesse Lewiska",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.113.",
            "title": "Grande polonaise A-moll, op. 68, fort. à M-me Zoe de Balsch, née de Stouza",
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.114.",
            "title": "7 mazurów na korzyść Zakładu Głuchoniemych, op. 69 1) for countess Baworowska 2) for countess Jabłonowska 3) for countess Siemieńska 4) for countess Julia Głogowska 5) for Louise Kratter 6) for grf. Mier 7) for countess Emilia Jabłonowska",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.115.",
            "title": "Canon op. 69, piano",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.116.",
            "title": "Nocturno pour piano, op. 70, à M-lle Emilie Loder „Comme vous êtes”",
            "sources": [
              2,
              3,
              4,
              5
            ]
          },
          {
            "numeral": "C.117.",
            "title": "Souvenir de Miroslawa, op. 71, 1) Scherzo 2) Mon desir à M-sieur Charles Karszewski à Athenes, 186",
            "sources": [
              2,
              5,
              7
            ]
          },
          {
            "numeral": "C.118.",
            "title": "4-me Etude pour Piano, op. 71",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.119.",
            "title": "6 Etudes pour piano, op. 72, à M-me Babette Linkowska",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.120.",
            "title": "Le dernier des hussards, rêverie, op. 72, déd. à M-lle Emilie Loder",
            "sources": [
              1,
              2,
              5,
              7
            ]
          },
          {
            "numeral": "C.121.",
            "title": "Olla Potrida - Contredanses Tirées de l’opéra Stradella et le Cheval de Bronze”, op. 73, à M-lle la comt. Sévérine Siemińska",
            "sources": [
              2,
              8
            ]
          },
          {
            "numeral": "C.122.",
            "title": "Valse brillante, A-dur, op.73, piano à M-lle Helene Wywodzoff",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.123.",
            "title": "6 Etudes pour piano, op. 73, à M-sieur Casimir de Ziembicki",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.124.",
            "title": "2 Etudes pour piano, op. 74",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.125.",
            "title": "Souvenir des Karpathes, Pensées megoriques et nationales, op. 74, piano, à M-lle Eveline de Żebrowska, née Niemirowska",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.126.",
            "title": "Fleurs Roumaines, op. 75, Transcriptions sur des airs Moldo-Valaques par Jean Ruckgaber, 1863",
            "sources": [
              1,
              3,
              4
            ]
          },
          {
            "numeral": "C.127.",
            "title": "Marche Favorite Variée Pour Le Pianoforte a 4 Mains, Op. 75",
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.128.",
            "title": "Mazurka pour le piano à 4 mains C-Dur, op. 75, par Jean Ruckgaber",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.129.",
            "title": "Salut à la Roumanie, op. 75, pièce concertante pour piano, dédiée à M-me la princesse regnante Hélène Conza",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.130.",
            "title": "Pensée fugitive, souvenir de Skole, B-Dur, op. 76, à M-lle Clarisse Carr",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.131.",
            "title": "Le dermier reverie de Hussard, op. 76 a M. Olymphie de Thulbourg – Roman",
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.132.",
            "title": "Mondnacht aus der Alpe, H-Dur, op. 77, für Pianoforte von Johann Ruckgaber, Gewidmet der Graferin Ursula Golejewska",
            "sources": [
              1,
              3,
              4
            ]
          },
          {
            "numeral": "C.133.",
            "title": "Suite des masures pour piano, op. 77 par Jean Ruckgaber",
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.134.",
            "title": "Nachtfahrt um Königssee, nocturne, op. 78",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.135.",
            "title": "Doppel Fuge im 4 stimmigen Kontrapunkt für Piano oder Orgel zu 4 Hände, op. 78, 1863",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.136.",
            "title": "4-ème mazurka de salon, pour piano, op. 78, à M-sieur son ami le chevalier Marcel Madeyski",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.137.",
            "title": "Nachtfahrt. Op. 79, Nocturne pour Piano par Jean Ruckgaber",
            "manuscript": true,
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.138.",
            "title": "Mazurka, op. 79, déd. à M-lle Sophie Suchodolska, issued by Gubrynowicz i Schmidt, Lwów (2 egz.)",
            "sources": [
              2,
              5
            ]
          },
          {
            "numeral": "C.139.",
            "title": "Pauline-polka pour piano, Nr 10, op. 79, par Jean Ruckgaber a M-me Paulina Brühl",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.140.",
            "title": "Ernst–polka, No 1, Victor – Polka No 2, op. 79, à mon bien aimé fils",
            "manuscript": true,
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "C.141.",
            "title": "Bertha – polka, op. 79, à M-lle Bertha Lodner",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "C.142.",
            "title": "La fidèle Jeanette, polka, No 8, op. 79, à ma chère fille Jeanette Schier, piano",
            "manuscript": true,
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "C.143.",
            "title": "Marche de l’opéra “Moisée” par Rossini, op. 79 transcrit pour le piano par Jean Ruckgaber",
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.144.",
            "title": "Andante interrompue par une marche funèbre pour piano, op. 80, par Jean Ruckgaber, à Monsieur Casimir Ziembicki, 1862",
            "sources": [
              2,
              5,
              8
            ]
          },
          {
            "numeral": "C.145.",
            "title": "Souvenir des bords de Sereth. op. 81, Valse avec Code, Valse à 4 mains à Monsieur Alexandre Rakovitz à Jassy, rkp.",
            "sources": [
              1,
              2,
              3,
              7
            ]
          },
          {
            "numeral": "C.146.",
            "title": "Fuga ........, op. 82",
            "sources": [
              3
            ]
          },
          {
            "numeral": "C.147.",
            "title": "Esmeralde – mazurka élégante, Es-dur, op. 83, piano",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.148.",
            "title": "„Mimi” valse brillante, pour piano, A-dur, op. 84, à M-me la princesse Marie Czetwertyńska, née comt. Uruska",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.149.",
            "title": "Au Général Garibaldi grande marche à 4 mains, op. 84, piano",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.150.",
            "title": "3 Marches à 4 mains, op. 84, piano, à sa fille Jeanette R.",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.151.",
            "title": "Souvenir de bords de la Moldawa suite des valses pour piano, op. 85, à Mademoiselle Natalie de Mana a Roman",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              5
            ]
          },
          {
            "numeral": "C.152.",
            "title": "Le songe, Fantaisie dramatique pour piano Des-dur, op. 87, à M-sieur le Docteur et Professeur Weber de Ebenhof",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.153a.",
            "title": "3(6) Lieder ohne Worte für...Piano, op. 88, componiert von Johann Ruckgaber, rkp. Cahier I a) Chor der Studenten b) Chor der Monnen c) Chor der Krueger Cahier II a) Dumka b) Mazurka c) Venezianisches Gondollied",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.153b.",
            "title": "3 Romances sans paroles pour piano, op. 88, Cahier I: Chor der Studenten 2) der Nornen und Mädchen 3) der Krieger. Seinen Freunde Herrn Doctor Ritter Marceli Madeyski",
            "manuscript": true,
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.153c.",
            "title": "3 Chöre ohne Worte, op. 88",
            "sources": [
              2,
              3
            ],
            "notes": "N00 1 Chor der Studenten\n2 Chor der nonnen? und c Mönche\n3 Chor der Krieger fur …Piano von Johann Ruckgaber 88…Werck.\n"
          },
          {
            "numeral": "C.154.",
            "title": "Sonate pour piano, Es-dur, op. 89, à M-lle Esmeralde de Stourze",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.155.",
            "title": "Nocturne Es-Dur, op. 90, Herrn Carl Haslinger. Pianoforte. (Klav.) Ruckgaber, Jean",
            "sources": [
              3,
              4,
              7
            ]
          },
          {
            "numeral": "C.156.",
            "title": "3-me Sonate du 2-de Quatuor transcript pour piano, op. 91, Roman, 1864",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.157.",
            "title": "Chanson polonais populaire, op. 91, pour piano transcript par Jean Ruckgaber, à son ami Vincent Kramer",
            "sources": [
              2,
              5
            ]
          },
          {
            "numeral": "C.158.",
            "title": "Mazur, B-dur, op. 104, à M-elle Berta Lodner",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "C.159.",
            "title": "Rondo fantastique pour piano, As-dur, op. 104",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.160.",
            "title": "Préludes dans toutes les tons de Major et Mi-mineur, op. 104, piano, 18731",
            "manuscript": true,
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "C.161.",
            "title": "Szenen aus den 4 Jahreszeiten, op. 123, Für das Pianoforte illustrirt. (Klav.) Fussnote (Widmung) Seinem verehrten Freunde Herrn Op. 123 J. Ruckgaber in Lemberg Wien: Carl Haslinger o.J. C.H.13,720. 23 S.7 C.162. Lieblings-Mazuren Ihrer Majestät der Kaiserin von Russland. Für das Pianoforte allein. Aufgeführt von Johann Strauss. Ruckgaber, Johann Verlag der k.k. Hof- u. priv. Kunst- und Musikalienhandlung des Tob.Haslinger in Wien",
            "sources": [
              7
            ]
          },
          {
            "numeral": "C.163a.",
            "title": "1ste Lieblings-Mazur Ihrer Majestät der Kaiserin von Russland von Joh. Ruckgaber Wien: Tobias Haslinger o.J. T.H.7861.11S",
            "sources": [
              7
            ]
          },
          {
            "numeral": "C.163b.",
            "title": "2te Lieblings-Mazur Ihrer Majestät der Kaiserin von Russland7 Für das Pianoforte zu 4 Händen. Ruckgaber, Johann  1840 Wien: Tobias Haslinger T.H.7942. S. 18-19"
          },
          {
            "numeral": "C.163c.",
            "title": "3te Lieblings-Mazur Ihrer Majestät der Kaiserin von Russland. Für das Pianoforte zu 4 Händen Ruckgaber, Johann 1840 Wien: Tobias Haslinger 1840.  T.H.7943. S. 18-19",
            "sources": [
              7
            ]
          },
          {
            "numeral": "C.164.",
            "title": "Marche hongroise pour le piano, composée par Jean Ruckgaber, No 4",
            "manuscript": true,
            "sources": [
              2,
              5
            ]
          },
          {
            "numeral": "C.165.",
            "title": "2 masures et une marche",
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "C.166.",
            "title": "Mazurka pour piano Marie Schier, 1869",
            "sources": [
              6
            ]
          },
          {
            "numeral": "C.167.",
            "title": "Mélodies Valaques de Roumanie A-moll – Recueil de danses et et d’airs valaques, transcrits pour piano par J.A. Washmann. Transcrits pour sa très chère fille, Jeanette par son père Jean Ruckgaber, 1863",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "C.168.",
            "title": "Polonaise, composée a Husiatyne en Pologne, 1840",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "C.169.",
            "title": "1) Akordy chromatyczne",
            "manuscript": true,
            "sources": [
              2,
              3,
              4
            ],
            "notes": "2) Preludien in allen Dur und moll Tonation\n3)Contapunkt uber Haynos Hymne\n4) Preludes (…. to pieces of music)\n"
          }
        ]
      },
      {
        "section": "D. Music for the Violin and the Piano",
        "compositions": [
          {
            "numeral": "D.1.",
            "title": "Variations sur un thème original, op. 32, pour piano seul, arrangee pour le piano et violon concertant par J. Ruckgaber, op. 32 – manuscript, issued in Vienna",
            "manuscript": true,
            "sources": [
              2,
              3,
              4
            ]
          },
          {
            "numeral": "D.2.",
            "title": "Duo pour piano et violon, op. 34, Noch fehlenden gedenkte Musikalien: L’agrément du Carneval",
            "sources": [
              2
            ]
          },
          {
            "numeral": "D.3.",
            "title": "Duo pour piano et violon, op. 41, dédié à Monsieur le Chevalier Leopold de Sacher Masoch par Jean Ruckgaber, Divertissement",
            "sources": [
              1,
              2,
              5
            ]
          },
          {
            "numeral": "D.4.",
            "title": "Duo, op. 44",
            "sources": [
              1
            ]
          }
        ]
      },
      {
        "section": "E. Music for the Flute, the Czakan and the Piano",
        "compositions": [
          {
            "numeral": "E.1.",
            "title": "Fantaisie brillante pour czakan avec flüte douce et piano, op. 33, à son ami Msieur Zenon Heller",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "E.2.",
            "title": "Introduction et variations pour czakan ou flüte et piano op. 34, à M-sieur Leon Heller, composed in 1833",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "E.3.",
            "title": "Duo pour flüte et piano sur un thème de „Rigoletto” et le grand air d’„Ernani”, op. 92, E-dur, par Verdi",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          }
        ]
      },
      {
        "section": "F. Music for the Clarinet and the Piano",
        "compositions": [
          {
            "numeral": "F.1.",
            "title": "Duo pour piano et clarinette in B, op. 18",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "F.2.",
            "title": "Sonate pour piano et clarinette en Si -bemol, op. 22, pour Luis Beethoven, transcript J. Ruckgaber, op. 97",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "F.3.",
            "title": "Concert pour la clarinette in Re-maieur, avec piano, op. 105",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          }
        ]
      },
      {
        "section": "G.    Music for the Choir",
        "compositions": [
          {
            "numeral": "G.1.",
            "title": "Hoch- und Lustgesang-Cantate Es-dur, op. 57, (Dr. Rappaport)",
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "G.2.",
            "title": "Mit Gott furs Vaterland, op. 63, gedicht v. F.t.Schwarz Musik v. Jan Ruckgaber, 1859",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "G.3.",
            "title": "Trauerlied, op. 67 – Gesangbuch für Chor, Componiert von Johann Ruckgaber, 1859",
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "G.4.",
            "title": "Volks – Hymne „Gott erhalte, Gott beschütze“ As-dur, op. 70, für Männerchor, à son ami Msieur général de génie Frederic Jakob de Raustein, Chevalier des plusiers grandes ordres",
            "sources": [
              1,
              2,
              3
            ]
          }
        ]
      },
      {
        "section": "H. Music for the Voice and the Piano",
        "compositions": [
          {
            "numeral": "H.1.",
            "title": "Chanson chantée, op. 1, par Madame Becker",
            "sources": [
              3
            ]
          },
          {
            "numeral": "H.2.",
            "title": "Favorit-Ländler A-dur, op. 1, głos, fortepian, von Johann Ruckgaber, 1822",
            "sources": [
              5,
              7
            ]
          },
          {
            "numeral": "H.3.",
            "title": "3 Lieder op. 2, 3, 4,",
            "sources": [
              1,
              2
            ],
            "notes": "1) Abgelebte Tago\n2) Herzenblick\n3) Der Trompeter, ms.\n"
          },
          {
            "numeral": "H.4.",
            "title": "2 Lieder",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ],
            "notes": "1) Mein Herz, op. 5, v. R. Lobres, fur Alt mit Piano \n2) R. 1812, op. 6, v. Ludwig Relstab aus dem historischen Romance, voice with the piano.\n"
          },
          {
            "numeral": "H.5.",
            "title": "3 Gedichte von Theodor Badody, H-dur, As-dur, op. 9, für Gesang und Piano Forte, Begleitung von Johan Ruckgaber",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "H.6.",
            "title": "Der Schifferknabe, op. 10, Gedicht v. Alois Sebers, Tenor mit Piano Begleitung von Johan Ruckgaber",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "H.7.",
            "title": "Der Augenblick, op. 11, dicht. von Alois Sebera, C-dur, Gesang u. Piano",
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "H.8a,b,c.",
            "title": "3 krakowiakes pour 2 voix avec l’accompagnement du piano, op. 12 Lyrics by Wasylewski, „Zapomniane skrzypki moje” à M-me Madejska.  Second, lyrics by Wasilewski, à M-lle Malvina et Frédéric Kramerime par l’auteur, Third, Resignation Lied, op. 32",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "H.9.",
            "title": "Liebes Zweifel, Lied von H. Grafen v. Dauern, op. 13,  (Liebes Zweifel) von ... Deuern in .. Mit Fortepiano ... von Johan Ruckgaber",
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "H.10.",
            "title": "Mazure tirée de la chanson, „La Bajadère”, op. 18, à M-lle Stephanie d’Augustynowicz",
            "sources": [
              2
            ]
          },
          {
            "numeral": "H.11.1",
            "title": "La Mélancholica, 3-ème nocturno, B-moll, op. 19, piano avec des paroles pour le chant",
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "H.11.2",
            "title": "Möge mich ein zweites mal nie bereiten ein solches Schicksal, 1861",
            "manuscript": true
          },
          {
            "numeral": "H.12.",
            "title": "Du bist ein Engel, op. 21, ged.v Alois Sebera, Gesang u. Piano",
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "H.13.",
            "title": "Romance pour le chant et piano, As-dur, op. 23, à Monsieur le chevalier Anibal Ghegheril",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "H.14.",
            "title": "Das Fischleinlied, G-dur, op. 24, sopran oder tenor, 1861",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "H.15.",
            "title": "Es schicht sich nicht, op. 26, Gedicht von F. Elholtz, voice and piano.",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "H.16.",
            "title": "Wanda, op. 26, Gedicht von Elholtz,voice and piano.",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "H.17.",
            "title": "Do mogił, op. 55, lyrics by Wincenty Pol, with translation to German by Alojzy Sebera, voice and piano.",
            "sources": [
              2,
              5
            ]
          },
          {
            "numeral": "H.18.",
            "title": "Différentes compositions pour le chant, op. 61, 62, 63, 64, 65, à 66, 67, 68, 69, composées dans l’année 1857, 1958 et 1859",
            "sources": [
              2
            ],
            "notes": "1) 2 Volkshymne, for 4 male voices and the piano.  \n2) Der Frühling, romance, voice and piano, manuscript from 1857\n3) Altes und Neues aue der Verse des wandelten, from 1858 \n4) Gedicht von Moritz Saphier – for a voice.  "
          },
          {
            "numeral": "H.19.",
            "title": "Das Vater Unser nebst Ave Maria, op. 65, fur ... Piano Forte ..., Hochgebornen Frau Grafin Sophie Siemińska .... Lewicka componist von Johan Ruckgaber, voice and piano or organ, Frau Josephine von Rubikowska",
            "manuscript": true,
            "sources": [
              1,
              2,
              3
            ]
          },
          {
            "numeral": "H.20.",
            "title": "Altes und Neues – Gesang u. Piano, op. 66, und der Verse des vandelten Aglers, komponiert und übertragt für Piano",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "H.21.",
            "title": "Kennst das Meer, op. 68, ...., Ignaz Edler von Kasparek, Gedicht ...fur Bariton mit Forte Piano Begleitung, Johan Ruckgaber",
            "sources": [
              3,
              5
            ]
          },
          {
            "numeral": "H.22.",
            "title": "Gensdarmenlied, D-Dur, op. 69, von Teodor Sincovicz R. K Oberl.18 Gendarme Begrisse Bass mit Piano",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "H.23.",
            "title": "3 Mélodies hongroises, op. 69, (Paroles de Jean Nep. Vogl). à son altesee Monseigneur le Prime Emil de Wittgenstein transcrites pour le Piano. Par .., par Jean Ruckgaber",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "H.24.",
            "title": "Verlassene Lied und Piano No 30, op. 70, M. Lanne Cassina gewidmet, rkp.",
            "sources": [
              2
            ]
          },
          {
            "numeral": "H.25.",
            "title": "2 songs",
            "notes": "1)  Hans und Grete, op. 91,\n2) Der Himmelschlüssel, op. 91, voice and piano, à M-me Catherine de Miclesco, née Glogoveano 2,3,5\n"
          },
          {
            "numeral": "H.26.",
            "title": "Aus Immer Munchkausen, op. 92,voice and piano",
            "manuscript": true,
            "sources": [
              2
            ]
          },
          {
            "numeral": "H.27.",
            "title": "3 Lieder, op. 94 (v. Gaudi, Ludwig Uhland, Rudolph Labres) (Es-Dur, F-Dur, As-Dur)",
            "sources": [
              1,
              2,
              3
            ],
            "notes": "à M-me Catherine Mialeceo,voice and piano.\n1) Resignation\n2) Hans und Grete \n3) Mein Herz, rkp.  "
          },
          {
            "numeral": "H.28.1",
            "title": "Das erste Weib aus Engels Philosophie für die Welt, op. 97, Gesang–Piano",
            "sources": [
              1,
              2
            ]
          },
          {
            "numeral": "H.28.2",
            "title": "Sachsisches Kriegs, lied, 1866",
            "manuscript": true
          },
          {
            "numeral": "H.29.",
            "title": "Wir wollen deutsch sein den deutschen Brüdern in Schleswig – Holstein - Lauenburg für Chor 2 Tenor nur 2 Basse in ..... von Johan Ruckgaber, op. 20",
            "sources": [
              3
            ]
          },
          {
            "numeral": "H.30",
            "title": "2 Die Thräne Gedicht von Mafner ....pianoforte , von Johan Ruckgaber, op. 99",
            "sources": [
              3
            ]
          },
          {
            "numeral": "H.31.",
            "title": "2 Chansons russes",
            "sources": [
              2
            ]
          },
          {
            "numeral": "H.32.",
            "title": "Tenor solo zur Cantate",
            "manuscript": true,
            "sources": [
              2,
              3
            ]
          },
          {
            "numeral": "H.33.",
            "title": "Sonate pour le piano par Jean Ruckgaber transcript du 2 de Bas tenor",
            "sources": [
              3
            ]
          },
          {
            "numeral": "H.34.1.",
            "title": "Krakowiak „Leci liście z drzewa” for a voice with the piano– à M-lle Idalie Rakowska",
            "sources": [
              1,
              2,
              3,
              4
            ]
          },
          {
            "numeral": "H.34.2.",
            "title": "Dumka „Bili zimę całą” – for a voice with the piano",
            "manuscript": true,
            "sources": [
              1,
              2,
              3,
              4
            ]
          }
        ]
      },
      {
        "section": "I. Music for the Guitar and the Piano (transcript)",
        "compositions": [
          {
            "numeral": "I.1.",
            "title": "Duo A-dur pour violon et guitarre, par Joseph Mayseder, op.12, arrangee pour piano et guitarre, a son ami Charles Zehn. Dopisek: “executee dans les socrees musicales de M. Kwiatkowski”",
            "manuscript": true,
            "sources": [
              1,
              2
            ]
          }
        ]
      }
    ]
  }
}

export default Page

import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CompositionMarkup from '../src/atoms/CompositionsMarkup'
import Container from '@material-ui/core/Container'
import Footer from '../src/organisms/Footer'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Link from '@material-ui/core/Link'
import ScrollTop from '../src/molecules/ScrollTop'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
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

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip)

const sources = {
  "1": "Osadca Olga: \"Der Archivbestand Johann (Jan) Ruckgaber in der L ́vivs ́ka naukowa biblioteka im. V. Stefanyka\" Musik-Sammlungen: Speicher inter- kultureller Prozesse, Teilband B, Franz Steiner Verlag, Stuttgart 2007, p. 344 – 356",
  "2": "List of Ruckgaber’s compositions, stored until 1939 in the Ossoliński National Institution in Lviv, made by J. Ruckgaber, the grandson of the composer",
  "3": '<a href="http://imuz.uw.edu.pl/en/">The Faculty of Musicology of the Warsaw University</a>',
  "4": "The Catalogue of microfilms received from the Stefanyk Library [stored in the Faculty of Musicology of the Warsaw University]",
  "5": "Family archive",
  "6": '<a href="https://www.bn.org.pl/">The National Library, Warsaw</a>',
  "7": '<a href="http://www.worldcat.org/">The Austrian National Library</a>',
  "8": '<a href="https://bj.uj.edu.pl/">Jagiellonian Library, Cracow</a>',
  "9": '<a href="http://www.lsl.lviv.ua/index.php/en/about-the-library/">Lviv National Academic Library of Ukraine</a>',
}

function Reference({reference, last}) {
  return (
    <HtmlTooltip title={
      <React.Fragment>
        {sources[reference]}
      </React.Fragment>}>
      <Link color="primary">{reference}{!last ? ', ' : ''}</Link>
    </HtmlTooltip>
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
        <TableCell>{row.sources && row.sources.map((r, idx) => (<Reference key={`${row.numeral}-${r}`} reference={r} last={idx === (row.sources.length - 1)}/>))}</TableCell>
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
    <React.Fragment>
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
    </React.Fragment>
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

          <Typography variant="h6" gutterBottom>Sources:</Typography>
          <ol type="1">
            {Object.values(sources).map((item, idx)=><li key={`source-${idx}`}>{item}</li>)}
          </ol>

          <Typography variant="h6" gutterBottom>The list of compositions is divided into the following parts</Typography>
          <Typography paragraph>(references indicate a source of information)</Typography>
          <ul>
            <li><a href="#section-0">A. Music for the Piano with an Orchestra</a></li>
            <li><a href="#section-1">B. Music for a Chamber Orcestra</a></li>
            <li><a href="#section-2">C. Music for the Piano</a></li>
            <li><a href="#section-3">D. Music for the Violin and the Piano</a></li>
            <li><a href="#section-4">E. Music for the Flute, the Czakan and the Piano</a></li>
            <li><a href="#section-5">F. Music for the Clarinet and the Piano</a></li>
            <li><a href="#section-6">G. Music for the Choir</a></li>
            <li><a href="#section-7">H. Music for the Voice and the Piano</a></li>
            <li><a href="#section-8">I. Music for the Guitar and the Piano (transcript)</a></li>
          </ul>
          <Box py={2}><hr/></Box>
          <CompositionMarkup />
        </Box>
        <ScrollTop />
        <Footer />
      </Container>
    </React.Fragment>
  )
}

export default Page

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
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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
  "1": "Osadca Olga: 'El Archivo Ruckgaber en la Biblioteca Científica de Stefanyka en Lviv '",
  "2": "Obras de Ruckgaber a partir de documentos de J. Ruckgaber, nieto",
  "3": '<a href="http://imuz.uw.edu.pl/en/">Instituto de Musicología de la Universidad de Varsovia (IMUW)</a>',
  "4": "Catálogo de microfilms obtenido de la Biblioteca Stefanyk (en IMUW)",
  "5": "Colección familiar",
  "6": '<a href="https://www.bn.org.pl/">Biblioteca Nacional de Polonia</a>',
  "7": '<a href="http://www.worldcat.org/">Biblioteca Nacional de Autria</a>',
  "8": '<a href="https://bj.uj.edu.pl/">Biblioteca Jagiellońska/a>',
  "9": '<a href="http://www.lsl.lviv.ua/index.php/en/about-the-library/">La Biblioteca Científica  de Stefanyk en Lviv</a>',
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
          <Typography variant="h1" gutterBottom>Lista de composiciones de Jan Ruckgaber</Typography>

          <Typography variant="h6" gutterBottom>Fuentes de la lista de composiciones:</Typography>
          <ol type="1">
            {Object.values(sources).map((item, idx)=><li key={`source-${idx}`} dangerouslySetInnerHTML={{__html: item}} />)}
          </ol>

          <Typography variant="h6" gutterBottom>Części spisu kompozycji Jana Ruckgabera</Typography>
          <Typography paragraph>(odnośniki oznaczają źródło informacji)</Typography>
          <ol type="A">
            <li><a href="#section-A">Música para el piano con orquesta</a></li>
            <li><a href="#section-B">Música para orquesta de cámara</a></li>
            <li><a href="#section-C">Música para piano</a></li>
            <li><a href="#section-D">Música para violín y piano</a></li>
            <li><a href="#section-E">Música para flauta, czakan y piano</a></li>
            <li><a href="#section-F">Música para clarinete y piano</a></li>
            <li><a href="#section-G">Música coral</a></li>
            <li><a href="#section-H">Música para voz y piano</a></li>
            <li><a href="#section-I">Música para guitarra y piano</a></li>
          </ol>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

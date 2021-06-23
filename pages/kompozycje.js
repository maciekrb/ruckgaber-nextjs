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
  "1": "Osadca Olga: „Archiwum Ruckgabera w Lwowskiej Bibliotece Naukowej im. Stefanyka”",
  "2": "Spis utworów Ruckgabera z dokumentów J. Ruckgabera, wnuka",
  "3": '<a href="http://imuz.uw.edu.pl/en/">Instytut Muzykologii Uniwersytetu Warszawskiego (IMUW)</a>',
  "4": "Katalog mikrofilmów otrzymanych z Biblioteki Stefanyka (w IMUW)",
  "5": "Zbiory rodzinne",
  "6": '<a href="https://www.bn.org.pl/">Biblioteka Narodowa Polski</a>',
  "7": '<a href="http://www.worldcat.org/">Biblioteka Narodowa Austrii</a>',
  "8": '<a href="https://bj.uj.edu.pl/">Biblioteka Jagiellońska/a>',
  "9": '<a href="http://www.lsl.lviv.ua/index.php/en/about-the-library/">Lwowska Biblioteka Naukowea im. Stefanyka</a>',
}

const Reference = ({reference, last}) => {
  return (
    <HtmlTooltip title={
      <React.Fragment>
        {sources[reference]}
      </React.Fragment>}>
      <Link color="primary">{reference}{!last ? ', ' : ''}</Link>
    </HtmlTooltip>
  )
}

const Composition = ({row}) => {

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


const Page = ({sections}) => {

  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h1" gutterBottom>Lista kompozycji Jana Ruckgabera</Typography>

          <Typography variant="h6" gutterBottom>Źródła do spisu kompozycji:</Typography>
          <ol type="1">
            {Object.values(sources).map((item, idx)=><li key={`source-${idx}`} dangerouslySetInnerHTML={{__html: item}} />)}
          </ol>

          <Typography variant="h6" gutterBottom>Części spisu kompozycji Jana Ruckgabera</Typography>
          <Typography paragraph>(odnośniki oznaczają źródło informacji)</Typography>
          <ol type="A">
            <li><a href="#section-A">Utwory na fortepian z orkiestrą</a></li>
            <li><a href="#section-B">Utwory na orkiestrę kameralną</a></li>
            <li><a href="#section-C">Utwory na fortepian</a></li>
            <li><a href="#section-D">Utwory na skrzypce i fortepian</a></li>
            <li><a href="#section-E">Utwory na flet, czakan i fortepian</a></li>
            <li><a href="#section-F">Utwory na klarnet i fortepian</a></li>
            <li><a href="#section-G">Utwory chóralne</a></li>
            <li><a href="#section-H">Utwory na głos i fortepian</a></li>
            <li><a href="#section-I">Utwór na gitarę i fortepian</a></li>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    messages: require (`../public/locales/${locale}/common.json`),
  },
})

export default Page

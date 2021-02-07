import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import DummyContent from '../src/molecules/DummyContent'
import Footer from '../src/organisms/Footer'
import HeroBanner from '../src/molecules/HeroBanner'
import Link from '../src/Link'
import NavBar from '../src/organisms/NavBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function Index() {
  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <HeroBanner />
          <DummyContent />
        </Box>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

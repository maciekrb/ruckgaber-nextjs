import React from 'react'
import ContactForm from '../src/organisms/ContactForm'
import { makeStyles } from '@material-ui/core/styles'
import Footer from '../src/organisms/Footer'
import NavBar from '../src/organisms/NavBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#444444',
    backgroundImage: 'url(/images/homebg.png)',
    backgroundRepeat: 'repeat',
  },
  text: {
    '& h3,h5': {
      fontFamily: 'Roboto condensed',
      color: '#ffffff',
    },
  },
}))

export default function Index() {
  const classes = useStyles()
  const { t } = useTranslation('common')

  return (
    <React.Fragment>
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
      <Typography gutterBottom variant="h1" component="h1" style={{textAlign: 'center', marginTop:'30px'}}>
            {t('Contact Form')}
            </Typography>
      <ContactForm/>
      <Footer />
    </React.Fragment>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

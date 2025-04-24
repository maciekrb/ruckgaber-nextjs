import React from 'react'
import { makeStyles } from '@mui/material/styles'
import { useLingui } from '@lingui/react/macro'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { initLingui } from '@/initLingui'
import ContactForm from '@components/organisms/ContactForm'

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

const Page = async () => {
  const { locale } = await params
  initLingui(locale)

  const { t } = useLingui()

  return (
    <Box my={4}>
      <Typography
        gutterBottom
        variant="h1"
        component="h1"
        style={{ textAlign: 'center', marginTop: '30px' }}
      >
        {t`Contact Form`}
      </Typography>
      <ContactForm />
    </Box>
  )
}

export default Page

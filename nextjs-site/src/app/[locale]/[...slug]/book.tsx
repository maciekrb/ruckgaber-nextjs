import React from 'react'
import { useLingui } from '@lingui/react/macro'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import { initLingui } from '@/initLingui'
import ResponsiveCard from '@components/atoms/ResponsiveCard'

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = await params
  initLingui(locale)

  const { t } = useLingui()
  return (
    <Box my={4}>
      <Typography variant="h1" gutterBottom>
        {t`Jan Ruckgaber Book`}
      </Typography>
      <Grid container spacing={8}>
        <Grid size={{ xs: 6 }}>
          <ResponsiveCard
            image="/images/intro_book_polish.png"
            title={t`Jan Ruckgaber Book cover (polish version)`}
            alt={t`Jan Ruckgaber Book cover (polish version)`}
            cardAction={{
              href: 'https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/books/Ruckgaber_Book_Polish.pdf',
              text: t`Download the polish version here`,
            }}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <ResponsiveCard
            image="/images/intro_book_english.png"
            title={t`Jan Ruckgaber Book cover (english version)`}
            alt={t`Jan Ruckgaber Book cover (english version)`}
            cardAction={{
              href: 'https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/books/Ruckgaber_Book_English.pdf',
              text: t`Download the english version here`,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

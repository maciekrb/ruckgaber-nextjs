import React from 'react'
import { useLingui } from '@lingui/react/macro'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import YouTubeVideo from '@components/atoms/YouTubeVideo'
import 'bootstrap/dist/css/bootstrap.min.css'
import Audioplayer from '@components/atoms/Audioplayer'
import ResponsiveCard from '@components/atoms/ResponsiveCard'
import { initLingui } from '@/initLingui'
import { slugLocalizer } from '@/locales/namedSlugs'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  initLingui(locale)
  const { t } = useLingui()
  const localizedUrl = slugLocalizer(locale)
  return (
    <Box my={4}>
      <Box pt={4}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ResponsiveCard
              image="/images/3-young-jan-ruckgaber.jpg"
              alt={t`Young Jan Ruckgaber`}
              title={t`Life of Jan Ruckgaber`}
              body={t`Read about the life of Jan Ruckgaber, his family and ancestry`}
              cardAction={{ href: localizedUrl('life'), text: t`Learn More` }}
              height="520px"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ResponsiveCard
              image="/images/card-02.jpg"
              alt={t`Compositions`}
              title={t`Compositions of Jan Ruckgaber`}
              body={t`Find a detailed list of compositions with links to note sheets`}
              cardAction={{
                href: localizedUrl('compositions'),
                text: t`Learn More`,
              }}
              height="520px"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <ResponsiveCard
              image={t`book.imageUrl`}
              alt={t`Jan Ruckgaber Book`}
              title={t`Jan Ruckgaber Book`}
              body={t`Download the digital version of the Book about Jan Ruckgaber`}
              cardAction={{ href: localizedUrl('book'), text: t`Learn More` }}
              height="520px"
            />
          </Grid>
        </Grid>
      </Box>
      <Box pt={4}>
        <Typography
          gutterBottom
          variant="h1"
          component="h1"
          style={{ textAlign: 'center' }}
        >
          {t`Listen to Music by Jan Ruckgaber`}
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Audioplayer
              song={t`Divertissiment for violin and the piano op 41`}
              artist={t`Robert Szreder - violin, Elżbieta Sobkowicz - piano`}
              src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/D3-Divertissement-op.41.mp3"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Audioplayer
              song="Do mogił, op. 55"
              artist={t`song for a voice and piano, Jerzy Sergiusz Adamczewski - baritone, Tatiana Woytaszewska - piano, Wincenty Pol - lyrics`}
              src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/H17-Piesn-do-mogil-op-55.mp3"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Audioplayer
              song={t`Mazurek E- dur for the piano`}
              artist={t`Tatiana Woytaszewska - piano`}
              src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/Mazurek-e-dur.mp3"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Audioplayer
              song={t`12 Variations op 2`}
              artist={t`Milan Jeleń - piano`}
              src="https://storage.googleapis.com/geek-hosting.appspot.com/ruckgaber/audio/12-variations-op-26.mp3"
            />
          </Grid>
        </Grid>
      </Box>
      <Box py={2}>
        <YouTubeVideo src="videoseries?list=PL6sg6rLVg9MF-00zsMgRZaoww98riHtFL" />
      </Box>
    </Box>
  )
}

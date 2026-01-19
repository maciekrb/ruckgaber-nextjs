import React from 'react'
import { useLingui } from '@lingui/react/macro'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { initLingui } from '@/initLingui'
import { slugLocalizer } from '@/locales/namedSlugs'
import ResponsiveCard from '@components/atoms/ResponsiveCard'
import ScrollTop from '@components/molecules/ScrollTop'

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = await params
  initLingui(locale)
  const localizedUrl = slugLocalizer(locale)

  const { t } = useLingui()
  return (
    <Box my={4}>
      <Typography variant="h1" gutterBottom>
        {t`Music`}
      </Typography>
      <Box my={4}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ sm: 12 }}>
            <Typography variant="h4" gutterBottom>
              {t`An Artist of early Romanticism`}
            </Typography>
            <Typography>
              {t`Ruckgaber’s work and music fully belong to the current of early
              Romanticism. His compositions reflected the leading aesthetic
              trends of the era. Early Romanticism showed in seeking lyrical
              modes of expression, in transforming the canons of classicism, and
              in the development of the so-called salon music.`}
            </Typography>
            <Typography>
              {t`Ruckgaber contributed to the evolution of the musical profession
              from being an inspired composer, dependent on a patron, to a
              self-reliant, conscious artist, who influenced public taste and
              demand of the culture market.`}
            </Typography>
          </Grid>
          <Grid size={{ sm: 6 }}>
            <ResponsiveCard
              image="/images/13-do-mogil.jpg"
              body='Title page of the Song "Do Mogił" by Jan Ruckgaber with lyrics by Wincenty Pol  (family archive)'
              alt='Title page of the Song "Do Mogił" by Jan Ruckgaber with lyrics by Wincenty Pol  (family archive)'
            />
          </Grid>
          <Grid size={{ sm: 6 }}>
            <ResponsiveCard
              image="/images/14-variations-sur-une-Walse-op30.jpg"
              body="Variations sur une Walse, Op. 30 (family archive)"
              alt="Variations sur une Walse, Op. 30 (family archive)"
            />
          </Grid>

          <Grid size={{ sm: 12 }}>
            <Typography variant="h4" gutterBottom>
              {t`Music`}
            </Typography>
            <Typography>
              {t`The music legacy of Jan Ruckgaber amounts to about 100
              opuses.`}
            </Typography>
            <Typography>
              {t`He composed mainly piano music of salon character, often
              attempting to adapt Polish folk music. His piano compositions,
              often masterful in form, were published by the largest music
              companies in Leipzig, London, Brussels, Paris and Petersburg, not
              to mention Vienna, Warsaw and Lviv.`}
            </Typography>
            <Typography>
              {t`His music was easy, tuneful, light and nice, with clear qualities
              of the Romantic style, following the patterns of Schubert and
              Weber. In his chamber compositions he frequently used the typical
              elements of Polish music, firstly of folk dances, as cracovienne
              and mazurek, as well as polonaise. Undoubtedly he tried to convey
              the uniqueness of the folk tradition and the character of the
              country, where he spent most of his lifetime.`}
            </Typography>
            <Typography>
              {t`Ruckgaber also composed songs for a voice with the piano with
              Polish lyrics. After the November uprising of 1830, he composed
              the song &quot;Do mogił&quot; (Towards the Graves) to the words by
              Wincenty Pol.`}
            </Typography>
            <Typography>
              {t`In the composer’s oeuvre there are numerous large forms: sonatas,
              duos, concertos for solo instruments with the accompaniment of the
              piano, orchestral and choral compositions. There are also piano
              works for four hands, and even for eight hands.`}
            </Typography>
            <Typography>
              {t`Many pieces of music, which – as his contemporaries claimed – he
              performed in concerts with mastery, remained in the form of
              manuscripts. Besides the popular transcriptions of music for
              various instruments by famous composers of that time, (like
              Beethoven or Verdi) they comprise the most valuable part of the
              music legacy of Jan Ruckgaber.`}
            </Typography>
          </Grid>
          <Grid size={{ sm: 12 }}>
            <Typography>
              {t`More information in a form of Jan Ruckgaber’s full biography, in English and in Polish, is ready for download`}{' '}
              <Link color="secondary" href={localizedUrl('book')}>
                {t`here`}.
              </Link>{' '}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <ScrollTop />
    </Box>
  )
}

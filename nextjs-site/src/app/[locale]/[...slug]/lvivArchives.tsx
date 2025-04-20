import React from 'react'
import { useLingui } from '@lingui/react/macro'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { initLingui } from '../../../initLingui'
import ResponsiveCard from '../../../components/atoms/ResponsiveCard'
import ScrollTop from '../../../components/molecules/ScrollTop'

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = await params
  initLingui(locale)

  const { t } = useLingui()
  return (
    <Box my={4}>
      <Typography variant="h1" gutterBottom>
        {t`Lviv Archives`}
      </Typography>
      <Box my={4}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ sm: 12 }}>
            <Typography>
              {t`Most of the preserved manuscripts of Jan Ruckgaber are presently
              stored in the Wasyl Stefanyk Lviv National Academic Library of
              Ukraine. The Library’s collection, the biggest in Ukraine with
              regard to its value and completeness of the material, represents
              the musical cultures of Austria, Germany, Poland, Hungary,
              Slovakia, France, Russia and other European countries.`}
            </Typography>
          </Grid>

          <Grid size={{ sm: 12 }}>
            <ResponsiveCard
              image="/images/15-biblioteka-stefanyka-dawniej-ossolineum.jpg"
              body={t`Lviv in a modern photo: the Wasyl Stefanyk Lviv National Academic Library of Ukraine, formerly the Ossolineum (http://strubcina.org, 2015)`}
              alt={t`Lviv in a modern photo: the Wasyl Stefanyk Lviv National Academic Library of Ukraine, formerly the Ossolineum (http://strubcina.org, 2015)`}
            />
          </Grid>

          <Grid size={{ sm: 12 }}>
            <Typography>
              {t`&quot;The Ruckgaber Archive&quot; in the Stefanyk Library contains
              only manuscripts, over 1800 pages of music. They span from 1815 to
              1872 and they document all of his work as a composer. After his
              death in 1876 his works remained in the possession of the Galician
              Music Society. Later the archive was handed over to the National
              Ossoliński Library in Lviv. In 1940 it was transferred to the Lviv
              branch of the Academic Library of the Ukrainian Academy of
              Sciences, the present Stefanyk Lviv National Academic Library of
              Ukraine.`}
            </Typography>
            <Typography>
              {t`Another part of J. Ruckgaber’s manuscripts, his printed works and
              some of his handwritten copies of other composers’ music with
              their autographs are now stored in the Library of the M.W. Łysenko
              Lviv National Music Academy.`}
            </Typography>
            <Typography>
              {t`Neither the Ruckgaber Archive, nor the documents from the music
              library of the Galician Music Society, have yet been sufficiently
              cataloged or worked out.`}
            </Typography>
          </Grid>
          <Grid size={{ sm: 12 }}>
            <Typography>
              {t`More information in a form of Jan Ruckgaber’s full biography, in English and in Polish, is ready for download`}{' '}
              <Link color="secondary" href={t`book.href`}>
                {t`here`}.
              </Link>{' '}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

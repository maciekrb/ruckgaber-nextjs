import React from 'react'
import { useLingui } from '@lingui/react/macro'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { initLingui } from '../../../initLingui'
import CompositionMarkup from '../../../components/organisms/CompositionMarkup'

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = await params
  initLingui(locale)

  const { t } = useLingui()
  return (
    <Box my={4}>
      <Typography variant="h1" gutterBottom>
        {t`The List of Jan Ruckgaber’s Compositions`}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {t`Sources`}:
      </Typography>
      <ol type="1">
        <li>{t`Osadca Olga: "Der Archivbestand Johann (Jan) Ruckgaber in der L ́vivs ́ka naukowa biblioteka im. V. Stefanyka" Musik-Sammlungen: Speicher inter- kultureller Prozesse, Teilband B, Franz Steiner Verlag, Stuttgart 2007, p. 344 – 356`}</li>
        <li>{t`List of Ruckgaber’s compositions, stored until 1939 in the Ossoliński National Institution in Lviv, made by J. Ruckgaber, the grandson of the composer`}</li>
        <li>{t`<a href="http://imuz.uw.edu.pl/en/">The Faculty of Musicology of the Warsaw University</a>`}</li>
        <li>{t`The Catalogue of microfilms received from the Stefanyk Library [stored in the Faculty of Musicology of the Warsaw University]`}</li>
        <li>{t`Family archive`}</li>
        <li>
          <a href="https://www.bn.org.pl/">{t`The National Library, Warsaw`}</a>
        </li>
        <li>
          <a href="http://www.worldcat.org/">{t`The Austrian National Library`}</a>
        </li>
        <li>
          <a href="https://bj.uj.edu.pl/">{t`Jagiellonian Library, Cracow`}</a>
        </li>
        <li>
          <a href="http://www.lsl.lviv.ua/index.php/en/about-the-library/">{t`Lviv National Academic Library of Ukraine`}</a>
        </li>
      </ol>

      <Typography variant="h6" gutterBottom>
        {t`The list of compositions is divided into the following parts`}
      </Typography>
      <Typography paragraph>
        ({t`references indicate a source of information`})
      </Typography>
      <ol type="A">
        <li>
          <a href="#section-A">{t`Music for piano and orchestra`}</a>
        </li>
        <li>
          <a href="#section-B">{t`Music for a chamber orchestra`}</a>
        </li>
        <li>
          <a href="#section-C">{t`Music for piano`}</a>
        </li>
        <li>
          <a href="#section-D">{t`Music for violin and piano`}</a>
        </li>
        <li>
          <a href="#section-E">{t`Music for flute, czakan and piano`}</a>
        </li>
        <li>
          <a href="#section-F">{t`Music for clarinet and piano`}</a>
        </li>
        <li>
          <a href="#section-G">{t`Music for the choir`}</a>
        </li>
        <li>
          <a href="#section-H">{t`Music for voice and piano`}</a>
        </li>
        <li>
          <a href="#section-I">{t`Music for guitar and piano (transcript)`}</a>
        </li>
      </ol>
      <Box py={2}>
        <hr />
      </Box>
      <CompositionMarkup />
    </Box>
  )
}

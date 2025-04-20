import React from 'react'
import { useLingui } from '@lingui/react/macro'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { initLingui } from '../../../initLingui'
import ResponsiveCard from '../../../components/atoms/ResponsiveCard'

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = await params
  initLingui(locale)

  const { t } = useLingui()
  return (
    <Box my={4}>
      <Typography variant="h1" component="h1" gutterBottom>
        {t`About this project`}
      </Typography>
      <ResponsiveCard
        image="/images/2-ewa-michalik-and-andrzej-ruckgaber.jpg"
        alt={t`Ewa Michalik and Andrzej Ruckgaber`}
        title={t`Ewa Michalik and Andrzej Ruckgaber, Zakopane 2005`}
      />
      <Box my={4}>
        <Typography>
          {t`My name is Ruckgaber, Andrzej Ruckgaber. I was born in Poland and I
            certainly feel Polish, but the foreign name has always made me think
            about the origin of my family. Curiosity and the family tale of my
            great-great-grandfather, Jan Ruckgaber, a pianist, and composer in
            Lviv, presently forgotten, did incline me to take up his biography.
            He was not only a musician, but also a teacher and a passionate
            promoter of music.`}
        </Typography>
        <Typography>
          {t`We think of Jan Ruckgaber as a Pole, but his parents were French
            aristocrats who fled to Vienna in the days of the French Revolution.
            After the death of his father he was adopted by his tutor, an
            Austrian named Joseph Ruckgaber, whose surname is now also mine.`}
        </Typography>
        <Typography>
          {t`He spent most of his lifetime in Lviv, a Polish town bustling with
            Polish culture, although Poland did not then exist on the map of
            Europe.`}
        </Typography>
        <Typography>
          {t`When Poland gained independence in 1918, Ruckgaber’s descendants
            moved to Warsaw, carrying with them the family story about their
            famous grandfather: the composer. Thus a French aristocrat, then a
            Viennese emigrant with an Austrian surname, Galician citizen and a
            popular figure in Lviv, he began the Polish branch of the family.`}
        </Typography>
        <Typography>
          {t`His fate seems symbolic for the tangled history of Europe. The goal
            of our website is to reveal his story to the widest public.`}
        </Typography>

        <Typography>
          {t`More information in a form of Jan Ruckgaber’s full biography, in English and in Polish, is ready for download`}{' '}
          <Link color="secondary" href={t`book.href`}>
            {t`here`}.
          </Link>
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2">{t`Warsaw, August 2020`}</Typography>
        <Typography variant="subtitle2">{t`Ewa Michalik and Andrzej Ruckgaber, the composer’s great-great-grandson.`}</Typography>
      </Box>
    </Box>
  )
}

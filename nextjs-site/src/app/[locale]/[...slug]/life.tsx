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
      <Typography variant="h1" gutterBottom>{t`Life`}</Typography>
      <Box my={4}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ md: 7 }}>
            <Typography variant="h4" gutterBottom>{t`Ancestry`}</Typography>
            <Typography>{t`Jean (later Johann and Jan), the son of a French nobleman and emigrant, Jean de Montalban, was probably born in Vienna on the 21st of November 1799, where he was baptized in St. Stephen’s Cathedral. At first he used his father’s surname, de Montalban.`}</Typography>
            <Typography>
              {t`Jean de Montalban – father, fled his homeland to avoid the terror of the French Revolution and settled in Vienna. Later, he was killed in the Battle of Wagram on the 5th or 6th of July, 1809. After the death of his father, ten-year-old Jean was adopted by his Austrian tutor - Joseph Ruckgaber. His French Christian name - Jean - was later altered to Johann and Jan. He was buried in Lviv as Jan Ruckgaber.`}{' '}
            </Typography>

            <Typography variant="h4" gutterBottom>{t`Education`}</Typography>
            <Typography>{t`He started his musical education in Vienna with Johann Nepomuk Hummel, who was an Austrian composer and pianist, of Slovak origin. Later he continued his studies in Paris, presumably in the years 1816-1819.`}</Typography>

            <Typography
              variant="h4"
              gutterBottom
            >{t`First concerts`}</Typography>
            <Typography>{t`Jan Ruckgaber first visited Lviv in 1815. In January 1818, still as a student, he gave here a number of successful concerts and gained some popularity. From 1820 he regularly performed in Lviv in solo piano concerts, and accompanied local musicians.`}</Typography>
            <Typography>
              {t`In 1826 Ruckgaber settled in Lviv for good. He played concerts, worked as a piano tutor, and a composer.  His music was then published by Franz Piller’s printing house in Lviv. It was mainly dance music, romances and songs.`}{' '}
            </Typography>
          </Grid>
          <Grid size={{ md: 5, sm: 6 }}>
            <ResponsiveCard
              image="/images/3-young-jan-ruckgaber.jpg"
              body={t`Young Jan Ruckgaber, by an unknown author (http://uk.wikipedia.org, 2015)`}
              alt={t`Young Jan Ruckgaber, by an unknown author (http://uk.wikipedia.org, 2015)`}
              height="520px"
            />
          </Grid>

          <Grid size={{ md: 5, sm: 6 }}>
            <ResponsiveCard
              image="/images/4-ernest-ruckgaber.png"
              body={t`Ernest Ruckgaber (family archive)`}
              alt={t`Ernest Ruckgaber (family archive)`}
              height="520px"
            />
          </Grid>
          <Grid size={{ md: 7 }}>
            <Typography variant="h4" gutterBottom>{t`Family`}</Typography>
            <Typography>{t`On the 15th of August 1834, at the age of nearly 35, Jan Ruckgaber married Maria Xavier Markl, the daughter of a Hungarian baron John Markl and a Polish woman Jane née Balewicz.`}</Typography>
            <Typography>{t`They had six children, and their youngest son, Ernest, married to Anna Schier, the daughter of a Scotswoman, Anna Scarley and Joseph Schier, a Lviv jeweler, started the branch of the family presently living in Warsaw.`}</Typography>

            <Typography variant="h4" gutterBottom>{t`Work`}</Typography>
            <Typography>{t`A gifted musician, admired as a pianist and a composer of popular music, Jan Ruckgaber was a lively, charismatic figure. He played piano concerts in many European towns. In the mid-1840s, in Paris he met Fryderyk Chopin and Ferenc Liszt.`}</Typography>
            <Typography>{t`From scratch did he organize the Galician Music Society. He laid the foundation under professional music education in Lviv, starting Music School in 1839 and, a few years later, a Conservatoire, which works till the present days, now under the name of the Lviv National Music Academy. During over fifty years of his public activity, Jan Ruckgaber educated three generations of musicians and music-lovers and earned respect and admiration of Lviv musical circles.`}</Typography>
          </Grid>
          <Grid size={{ md: 7 }}>
            <Typography variant="h4" gutterBottom>{t`Decline`}</Typography>
            <Typography>{t`Last years of his lifetime he spent with his beloved daughter Jane. Jan Ruckgaber died in Lviv, on the 5th of January 1876. He was buried at the Łyczakowski Cementery, in a Schiers’s family tomb (Joseph and Anna Schier’s, Jane’s husband’s parents’).`}</Typography>
            <Typography>{t`Later, his daughter Jane destroyed his last will, containing information as to the return to the true family name. Thus the only link to recovery the family surname was cut.`}</Typography>
          </Grid>
          <Grid size={{ md: 5, sm: 6 }}>
            <ResponsiveCard
              image="/images/5-pomnik-na-cmentarzu-lyczakowskim.jpg"
              body={t`Jan Ruckgaber’s monument in the Łyczakowski Cemetery in Lviv (Photo by Michał Piekarski)`}
              alt={t`Jan Ruckgaber’s monument in the Łyczakowski Cemetery in Lviv (Photo by Michał Piekarski)`}
              height="420px"
            />
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

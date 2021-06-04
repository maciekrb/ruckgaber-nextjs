import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { useTranslation } from 'next-i18next'

export default function Download() {
  const { t } = useTranslation('common')
  return (
    <Grid item sm={12}>
        <Typography paragraph> {t('More information in a form of Jan Ruckgaber’s full biography, in English and in Polish, is ready for download')} <Link color="secondary" href="/book">{t('here')}.</Link> </Typography>
    </Grid>
  );
}

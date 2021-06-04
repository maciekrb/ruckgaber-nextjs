import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { useTranslation } from 'next-i18next'

export default function Copyright() {
  const { t } = useTranslation('common')
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <MuiLink color="inherit" href="https://material-ui.com/">
      {t('Creative Commons')}
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

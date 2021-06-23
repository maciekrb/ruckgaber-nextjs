import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { useTranslations } from 'next-intl'

export default function Copyright() {
  const t = useTranslations('common')
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

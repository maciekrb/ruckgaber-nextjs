import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

export default function Download() {
  return (
    <Grid item sm={12}>
        <Typography paragraph>More information in a form of Jan Ruckgaber’s full biography, in English and in Polish, is ready for download <Link color="secondary" href="/book">here.</Link> </Typography>
    </Grid>
  );
}

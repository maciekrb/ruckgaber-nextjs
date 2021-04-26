import React from 'react'
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:'#C8C3C2',
    borderRadius:'10px',
    color:'#fff',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '10px',
    }
  }
))
export default function Audioplayer({song, artist, src,copy}) {

  const classes = useStyles()
    return (
      <Box>
          <div className={classes.root}>
        <figure >
            <h3>{song}</h3>
            <p>{artist}</p>
            <audio controls src={src}>
                   Your browser does not support the
                   <code>audio</code> element.
            </audio>
            <p>{copy}</p>
        </figure>
        </div>
      </Box>
    );
  }
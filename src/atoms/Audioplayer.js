import React from 'react'
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor:'#C8C3C2',
    color:'#ffffff',
    textAlign: 'çenter',
    borderRadius:'10px',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '10px'


    }
  }
))
export default function Audioplayer() {
  const classes = useStyles()
    return (
      <Box>
          <div className={classes.root}>
        <figure >
            <h3>12 variations op 26</h3>
            <p>piano w wykonaniu Milana Jelenia z Czech</p>
            <audio
                controls
                src="/media/ruckgaber-01.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
        </figure>
        </div>
      </Box>

    );
  }
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

// Fluid video as seen on
// https://css-tricks.com/fluid-width-video/
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    /* falls back to 16/9, but otherwise uses ratio from HTML */
    paddingBottom: 'calc(var(--aspect-ratio, .5625) * 100%)',
    height: 0,
    '& iframe': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }
  }
}))

const YouTubeVideo = ({src}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <iframe
        src={`https://www.youtube.com/embed/${src}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
  )
}

export default YouTubeVideo

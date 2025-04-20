import React from 'react'
import { Box } from '@mui/material'
import styles from './Audioplayer.module.css'

export default function Audioplayer({
  song,
  artist,
  src,
  copy = undefined,
}: {
  song: string
  artist: string
  src: string
  copy?: string
}) {
  return (
    <Box>
      <div className={styles.audioCard}>
        <figure>
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
  )
}

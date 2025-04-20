import React from 'react'
import styles from './YouTubeVideo.module.css'

const YouTubeVideo = ({ src }: { src: string }) => {
  return (
    <div className={styles.root}>
      <iframe
        src={`https://www.youtube.com/embed/${src}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default YouTubeVideo

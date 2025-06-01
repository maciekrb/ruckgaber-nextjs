'use client'
import React from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Typography } from '@mui/material'

const DynamicImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
  />
)

const ContainedImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    width={0}
    height={0}
    src={src}
    alt={alt}
    sizes="100vw"
    fill
    style={{ objectFit: 'cover' }}
  />
)

const ResponsiveCard = ({
  image,
  alt,
  title = undefined,
  body = undefined,
  cardAction = undefined,
  height = '100%',
}: {
  image: string
  alt: string
  title?: string
  body?: string
  cardAction?: {
    href: string
    text: string
  }
  height?: string
}) => {
  return (
    <Card>
      <CardMedia>
        <div style={{ position: 'relative', width: '100%', height }}>
          {height == '100%' ? (
            <DynamicImage src={image} alt={alt} />
          ) : (
            <ContainedImage src={image} alt={alt} />
          )}
        </div>
      </CardMedia>
      {(title || body) && (
        <CardContent>
          {title && (
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'Roboto condensed, sans-serif',
                fontWeight: 200,
                fontSize: '1.5rem',
              }}
            >
              {title}
            </Typography>
          )}
          {body && (
            <Typography variant="body2" component="div" sx={{ minHeight: 45 }}>
              {body}
            </Typography>
          )}
        </CardContent>
      )}
      {cardAction && (
        <CardActions>
          <Button size="small" color="primary" href={cardAction.href}>
            {cardAction.text}
          </Button>
        </CardActions>
      )}
    </Card>
  )
}

export default ResponsiveCard

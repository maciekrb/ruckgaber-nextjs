import Image from 'next/image'
import MuiCardMedia from '@mui/material/CardMedia'

const CardMedia = ({ image, title }: { image: string; title: string }) => {
  return (
    <MuiCardMedia title={title}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
    </MuiCardMedia>
  )
}
export default CardMedia

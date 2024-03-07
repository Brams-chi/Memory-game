import { CardMedia } from '@mui/material'
import Card from '@mui/material/Card'
import React from 'react'
import backgroundCard from './images/question-mark.png';

interface Props {
  isTurnedOver: boolean
  url: string
  title: string
  onPress: () => void
}

export const CardImages: React.FC<Props> = ({ isTurnedOver, url, title, onPress }) => {


  return (
    <Card sx={{ maxWidth: 345, border: !isTurnedOver ? '5px solid #ddd8d8' : 'none', padding: !isTurnedOver ? '5px' : '8px', boxShadow: '10px 4px 8px 2px rgba(0, 0, 0, 0.1)' }}>
      <CardMedia
        component="img"
        height="140"
        image={isTurnedOver ? url : backgroundCard}
        alt={title}
        onClick={isTurnedOver ? () => {} : onPress}
      />
    </Card>
  );
};
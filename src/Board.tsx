/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react'
import { CardImages } from './Card'
import { Images } from './types/generals'
import { Box, Grid } from '@mui/material'
import useStoreUser from './store/store'

interface Props {
  cards: Images[]
}

export const Board: React.FC<Props> = ({ cards }) => {
  const [correctCards, setCorrectCards, inCorrectCards, setInCorrectCards, flippedCards, setFlippedCards] = useStoreUser(state => [
    state.correctCards,
    state.setCorrectCards,
    state.inCorrectCards,
    state.setInCorrectCards,
    state.flippedCards,
    state.setFlippedCards
  ])

  const turnOverCards = () => {
    return setTimeout(() => setFlippedCards([]), 2000)
  }

  const checkRestArray = useCallback(() => {
    for (let index = 0; index < cards.length; index++) {
      const element = cards[index].fields.image
      if (element.uuid === flippedCards[0]?.slice(0, element.uuid.length) && element.uuid === flippedCards[1]?.slice(0, element.uuid.length)) {
        setCorrectCards([...correctCards, element.url])
        turnOverCards()
      } else {
        setInCorrectCards([...inCorrectCards, element.uuid])
        turnOverCards()
      }
    }
  }, [flippedCards, setFlippedCards])

  useEffect(() => {
    if (flippedCards.length > 2) return
    if (flippedCards.length === 2) {
      checkRestArray()
    }

  }, [flippedCards, checkRestArray])

  const handleClick = (index: string) => {
    if (flippedCards.length === 2 && flippedCards[0] !== index) {
      setFlippedCards([...flippedCards, index])
      if (flippedCards[1] !== index) {
        setCorrectCards([...correctCards, index])
        turnOverCards()
      } else {
        turnOverCards()
      }
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  }

  return (
    <Box sx={{ width: '80%', margin: 'auto' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 24 }}>
        {cards.map((card, index) => {
          const id = `${card.fields.image.uuid}${index.toString()}`
          const isFlipped = flippedCards.includes(id) || correctCards.includes(card.fields.image.url)
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <CardImages
                id={id}
                isTurnedOver={isFlipped}
                url={card.fields.image.url}
                title={card.fields.image.title}
                onPress={() => flippedCards.length === 2 ? () => {} : handleClick(id)}
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

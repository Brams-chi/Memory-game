/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'
import { Board } from './Board'
import { useGetImages } from './service/UseGetImages'
import { Images } from './types/generals'
import { Avatar, Box, Button, Chip, LinearProgress, Stack } from '@mui/material'
import useStoreUser from './store/store'
import ClearIcon from '@mui/icons-material/Clear'
import CheckIcon from '@mui/icons-material/Check'
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone'

interface Props {
  name: string;
}

export const Game: React.FC<Props> = ({ name }) => {
  const [cards, setCards] = useState<Images[]>([])

  const [correctCards, inCorrectCards] = useStoreUser(state => [
    state.correctCards,
    state.inCorrectCards
  ])

  const { data, isFetching } = useGetImages()

  useEffect(() => {
    if (data) {
      setCards(data)
    }
  }, [data])

  return (
    <>
      <Stack direction="column" spacing={2} sx={{ width: '34%', margin: '20px auto', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
        <Stack direction="row" spacing={2} sx={{ width: 'max-content', margin: '10px auto', padding: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center', border: '5px solid #780080', borderRadius: 10 }}>
          <Chip avatar={<Avatar>{name[0]}</Avatar>} label={correctCards.length === 9 ? `Congratulations ${name}, you won` : `Welcome ${name}`} />
          <Chip icon={<ClearIcon />} label={`Attempts: ${inCorrectCards.length}`} />
          <Chip icon={<CheckIcon />} label={`Matches: ${correctCards.length}`} />
        </Stack>
        <Stack direction="row" spacing={2} sx={{ width: 'max-content', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
          <Button
            variant="outlined"
            startIcon={<LogoutTwoToneIcon />}
            onClick={() => {
              localStorage.clear()
              location.reload()
            }}
          >
            Restart game
          </Button>
        </Stack>
      </Stack>
      {isFetching ? (
        <Box sx={{ width: '80%', margin: '100px auto' }}>
          <LinearProgress />
        </Box>
      ) : (
        <Board cards={cards} />
      )}
    </>
  );
};
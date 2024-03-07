import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography } from '@mui/material';
import useStore from './store/store';
import { CardUserName, UserIconImage, WelcomeContainer } from './styles/form.styles';

const UserForm = () => {
  const { register, handleSubmit } = useForm();
  const { setUsername } = useStore();

  const onSubmit = (data: any) => {
    setUsername(data.username);
    sessionStorage.setItem('username', data.username);
  };

  return (
    <WelcomeContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardUserName>
          <UserIconImage />
          <Typography mt={2} variant="body1" gutterBottom sx={{ width: '85%', textAlign: 'justify' }}>
            This is the Memorize game. Your objective is to match pairs of identical images in as few attempts as possible. Please enter your name to begin.
          </Typography>
          <TextField sx={{ margin: '25px auto', width: '85%' }} {...register('username')} id="input-with-sx" label="Your name" variant="standard" />
          <Button variant="outlined" size="large" type='submit'>Save</Button>
        </CardUserName>
      </form>
    </WelcomeContainer>
  );
};

export default UserForm;
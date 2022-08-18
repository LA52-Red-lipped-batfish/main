import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack({ user }) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const username = urlParams.get('username');
  const name = urlParams.get('name');

  // const user = urlParams.get('username');
  // const username = user.

  // console.log('user in stack', user);
  // let { firstName, lastName, username } = user;

  // if (!firstName) firstName = 'John';
  // if (!lastName) lastName = 'Doe';
  // if (!username) username = user;

  // const name = `${user.firstName} ${user.lastName}`;

  // const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Username: {username}</Item>
        <Item>Name: {name}</Item>
        {/* <Item>Item 3</Item> */}
      </Stack>
    </Box>
  );
}

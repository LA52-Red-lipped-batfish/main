import React from 'react'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
// import ResponsiveAppBar from './AppBar'

import Box from '@material-ui/core/Box';
import { Input } from '@material-ui/core';
// import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  return (
    <div className="contents">
      <div className="login">
        <div className='loginleft'>
          <img width='100%' height='100%' src="https://images-na.ssl-images-amazon.com/images/I/31Xzh6LfzeL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" />
          {/* <img src={require("https://images-na.ssl-images-amazon.com/images/I/31Xzh6LfzeL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")} alt={"Danger Noodle"}/> */}
        </div>

        <div className="loginright">
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // width: '50%',
              // color: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            >
            <center>
              <h1>Who's Going?</h1>
            </center>
            <Input
              placeholder='Username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            >
            </Input>
            <Input
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
            </Input>

            <div>
              <Button
                type='submit'
                onClick={() => alert('you just clicked login')}
              >
                Login
              </Button>

              <Button
                type='submit'
                onClick={() => alert('you just clicked signup')}
              >
                Sign Up
              </Button>
            </div>
          </Box>
        </div>





      </div>
    </div>
  )
}

export default Login
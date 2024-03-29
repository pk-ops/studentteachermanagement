import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState,useContext } from 'react';

import signuppage from "../Poster/signuppage.jpg"
import { useNavigate } from 'react-router-dom';
import CommonContext from '../context/commonContext';
import { API } from '../global';
// src/Poster/signuppage.jpg
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {

  const navigate=useNavigate()

  const {isLoggedIn, SetIsLoggedIn } = useContext(CommonContext);
  const initialValues={
    email:"user@gmail.com",
    password:"user@123"
  }

  const [registerInput,setRegisterInput]=useState(initialValues)

const handleInput=(e)=>{
  setRegisterInput({...registerInput,[e.target.name]:e.target.value})
}

  const handleSubmit = (event) => {
    event.preventDefault();
    try{
      const data={
          email:registerInput.email,
          password:registerInput.password
      }

      fetch(`${API}/registration/login`,{
          method:"POST",
          crossDomain:true,

          headers:{
              "Content-Type":"application/json",
              Accept:"application/json",
              "Access-Control-Allow-Origin":"*"
          },
          body:JSON.stringify(data),
      }).then((res)=>res.json()).then((data)=>{
              console.log(data)
              alert('Login Successful')
              localStorage.setItem("x-auth-token",data.token)
              localStorage.setItem("id", data.id);
              localStorage.setItem("adminname", data.adminname);
              SetIsLoggedIn(true);
              navigate("/teacherlist")
 
      })
  }catch(err){
      
      console.error(err)
      // alert('Invalid Credentials')
  }
  
  

  };
 

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '90vh' }} style={{margin:"5px 0px"}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:`url(${signuppage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{my:2}}>
             Admin Log-in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{my:1}} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleInput}
                value={registerInput.email}
                placeholder="Enter email address"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                onChange={handleInput}
                value={registerInput.password}
                placeholder="Enter password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/contact" variant="body2">
                    {"Don't have an account? Drop mail"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


// const data = new FormData(event.currentTarget);
// console.log({
//   email: data.get('email'),
//   password: data.get('password'),
// });
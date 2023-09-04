import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

// Define a custom theme for this page
const loginTheme = createTheme();

function SignIn() {
  let navigate = useNavigate();

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values) => {
    console.log(values);

    fetch("http://localhost:8080/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": values.email,
        "password": values.password
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((obj) => {
        console.log(obj.data.jwtToken);
        console.log(obj.data.username);
        console.log(obj.userId);
        
        localStorage.setItem("Token", obj.data.jwtToken);
        localStorage.setItem("username", obj.data.username);
        localStorage.setItem("userId", obj.userId);
        navigate("/EBook");
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <ThemeProvider theme={loginTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh', // Make the container take the full viewport height
          backgroundColor: '#f3f4f6', // Background color
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 2,
              marginBottom: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '1rem', // Rounded corners
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Box shadow
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
              Sign in
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Field
                  name="email"
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                />
                <ErrorMessage name="email">
                  {(errorMsg) => (
                    <div style={{ color: 'red', marginTop: '0.5rem' }}>
                      {errorMsg}
                    </div>
                  )}
                </ErrorMessage>

                <Field
                  name="password"
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <ErrorMessage name="password">
                  {(errorMsg) => (
                    <div style={{ color: 'red', marginTop: '0.5rem' }}>
                      {errorMsg}
                    </div>
                  )}
                </ErrorMessage>

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  sx={{ marginTop: 1 }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 3, marginBottom: 2 }}
                >
                  Sign In
                </Button>
              </Form>
            </Formik>

            <Grid container>
              <Grid item xs>
                <Link href="#" sx={{ textDecoration: 'none' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="SignUp" sx={{ textDecoration: 'none' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default SignIn;



import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Avatar, Box, Container, Typography } from '@mui/material';
import Login from '../components/LoginForm/LoginForm';
import { Toaster } from 'react-hot-toast';

const StyledLink = styled(Link)(() => ({
  textDecoration: 'underline',
  color: '#104b7c',
  fontSize: 14,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const LoginPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Login />
        <StyledLink to="/register">I haven&apos;t had an account</StyledLink>
      </Box>
      <Toaster />
    </Container>
  );
};

export default LoginPage;
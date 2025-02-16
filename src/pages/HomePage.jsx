import { Avatar, Box, Button, Container, Typography } from '@mui/material';

import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            width: '100%',
            gap: 2,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              px: 2,
              py: 3,
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Avatar
              sx={{
                bgcolor: '#9b1e65',
                height: '80px',
                width: '80px',
              }}
              variant="rounded"
            >
              <ContactsIcon sx={{ fontSize: '30px', color: '#ffffff' }} />
            </Avatar>
            <Typography
              component="h1"
              variant="h4"
              sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}
            >
              Welcome to{' '}
              <Typography
                component="span"
                variant="h4"
                sx={{ fontWeight: 700, color: '#d63f9c' }}
              >
                Contact Book
              </Typography>{' '}
              App!
            </Typography>
            <Button
              component={Link}
              to="/contacts"
              size="large"
              variant="contained"
            >
              Try It Out
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
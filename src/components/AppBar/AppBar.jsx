import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { AuthNav } from '../AuthNav/AuthNav';
import NavMenu from '../NavMenu/NavMenu';

import ContactsIcon from '@mui/icons-material/Contacts';
import { Box, Container, AppBar as Header, Toolbar } from '@mui/material';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={toolbarStyles}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Link to="/">
              <ContactsIcon color="primary" />
            </Link>
            <Navigation
              styles={{ display: { xs: 'none', sm: 'flex' }, ml: 1 }}
            />
          </Box>
          {isLoggedIn ? (
            <UserMenu styles={{ display: { xs: 'none', md: 'flex' } }} />
          ) : (
            <AuthNav
              styles={{
                display: { xs: 'none', md: 'flex' },
                gap: 2,
                alignItems: 'center',
              }}
            />
          )}
          <NavMenu isLoggedIn={isLoggedIn} />
        </Toolbar>
      </Container>
    </Header>
  );
};

const toolbarStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: '50px',
  bgcolor: 'rgba(73, 236, 173, 0.265)',
  maxHeight: 40,
  border: '1px solid',
  borderColor: 'divider',
  boxShadow: `0 0 2px rgba(31, 98, 164, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
};
export default AppBar;
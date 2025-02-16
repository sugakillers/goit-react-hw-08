import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations.js';
import { selectUser } from '../../redux/auth/selectors.js';

import { Avatar, Box, Button, Typography } from '@mui/material';

export const UserMenu = ({ styles, fullWidth = false }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ...styles }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography
          variant="body2"
          color="text.primary"
          style={{ fontWeight: 400, fontSize: 16 }}
        >
          User {`-`} {user.email}
        </Typography>
        <Avatar
          sx={{
            bgcolor: '#098bb3',
            height: '35px',
            width: '35px',
            justifyContent: 'center',
          }}
          variant="rounded"
        >
          {user.name[0]}
        </Avatar>
        <Button
          fullWidth={fullWidth}
          type="button"
          onClick={handleLogOut}
          style={{
            fontSize: 16,
            borderRadius: 20,
            backgroundColor: '#72c1ee',
            color: '#0d0328',
            padding: '7px 15px 7px 15px',
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};
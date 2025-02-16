import { Box, Button, FormHelperText, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { validationSchema } from './validationSchema.js';

import { login } from '../../redux/auth/operations.js';
import { showError } from '../../hotToast.js';

const initialValues = {
  email: '',
  password: '',
};
const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      dispatch(login(values))
        .unwrap()
        .then(() => {
          action.resetForm();
        })
        .catch(() => {
          showError('Wrong password or email!');
        });
    },
  });
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ mt: 2, width: '100%' }}
    >
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        autoComplete="username"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
      <Box sx={{ minHeight: '25px', mt: '3px' }}>
        {formik.touched.email && formik.errors.email && (
          <FormHelperText error>{formik.errors.email} </FormHelperText>
        )}
      </Box>
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
      />
      <Box sx={{ minHeight: '25px', mt: '3px' }}>
        {formik.touched.password && formik.errors.password && (
          <FormHelperText error>{formik.errors.password} </FormHelperText>
        )}
      </Box>
      <Button
        color="primary"
        variant="contained"
        sx={{ mt: 2, mb: 5 }}
        fullWidth
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};

export default LoginForm;
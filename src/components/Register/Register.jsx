import { Box, Button, FormHelperText, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { validationSchema } from './validationSchema.js';
import { register } from '../../redux/auth/operations.js';
import { showError } from '../../hotToast.js';

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      dispatch(register(values))
        .unwrap()
        .catch(() => showError());
      action.resetForm();
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
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
      />
      <Box sx={{ minHeight: '25px', mt: '3px' }}>
        {formik.touched.name && formik.errors.name && (
          <FormHelperText error>{formik.errors.name} </FormHelperText>
        )}
      </Box>
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
      <Box sx={{ minHeight: '25px', mt: '4px' }}>
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
      <Box sx={{ minHeight: '25px', mt: '5px' }}>
        {formik.touched.password && formik.errors.password && (
          <FormHelperText error>{formik.errors.password} </FormHelperText>
        )}
      </Box>
      <Button
        color="primary"
        variant="contained"
        sx={{ mt: 1, mb: 1 }}
        fullWidth
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};

export default Register;
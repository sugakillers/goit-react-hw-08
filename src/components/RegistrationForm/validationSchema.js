import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string('Enter your email').required('Email is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')

    .required('Password is required'),
});
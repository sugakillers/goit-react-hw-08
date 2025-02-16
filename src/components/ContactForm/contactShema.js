import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^[0-9 -/+]+$/, "Invalid number. You can use '0-9', ' ', '-', '+'")
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
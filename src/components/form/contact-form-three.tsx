'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  messages: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required('Your Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  website: yup.string().required('Website is required'),
  messages: yup
    .string()
    .min(10, 'Note must be at least 10 characters')
    .required('Note is required'),
});

const ContactFormThree = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  });
  return (
    <form
  action="https://formspree.io/f/mzzgezld"
  method="POST"
  target="_blank"
  noValidate
>
  <div className="it-contact-input-wrap">
    <div className="row gx-20">
      <div className="col-sm-6 mb-20">
        <div className="it-contact-input-box">
          <input type="text" name="name" placeholder="Name:" required />
        </div>
      </div>
      <div className="col-sm-6 mb-20">
        <div className="it-contact-input-box">
          <input type="email" name="email" placeholder="Email:" required />
        </div>
      </div>
      <div className="col-sm-6 mb-20">
        <div className="it-contact-input-box">
          <input type="text" name="phone" placeholder="Phone:" />
        </div>
      </div>
      <div className="col-sm-6 mb-20">
        <div className="it-contact-input-box">
          <input type="text" name="website" placeholder="Website:" />
        </div>
      </div>
      <div className="col-sm-12 mb-30">
        <div className="it-contact-textarea-box">
          <textarea name="message" placeholder="Message:" required></textarea>
        </div>
      </div>
    </div>
    <div className="it-contact-btn">
      <button type="submit" className="it-btn-orange">
        <span>Submit </span>
      </button>
    </div>
  </div>
</form>

  );
};
export default ContactFormThree;

import { Metadata } from 'next';
import ContactMain from '@/views/contact/contact';

export const metadata: Metadata = {
  title: 'Alistar - Contact Us Page',
};

const ContactPage = () => {
  return <ContactMain />;
};
export default ContactPage;

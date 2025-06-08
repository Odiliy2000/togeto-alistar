import { Metadata } from 'next';
import FaqMain from '@/views/faq/privacy';

export const metadata: Metadata = {
  title: 'Alistar - Faq Page',
};

const FaqPage = () => {
  return <FaqMain />;
};
export default FaqPage;

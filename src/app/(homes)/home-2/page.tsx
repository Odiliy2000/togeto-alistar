import { Metadata } from 'next';
import HomeMain from '@/views/home-2/home-2';

export const metadata: Metadata = {
  title: 'Alistar - Home Two Page',
};

const HomeTwoPage = () => {
  return <HomeMain />;
};
export default HomeTwoPage;

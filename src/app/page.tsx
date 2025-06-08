import { Metadata } from 'next';
import HomeOnePage from './(homes)/home-2/page';

export const metadata: Metadata = {
  title: 'Alistar - Home Page',
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}

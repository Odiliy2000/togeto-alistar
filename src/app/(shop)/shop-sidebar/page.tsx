import { Metadata } from 'next';
import ShopSidebarMain from '@/views/shop-sidebar/shop-sidebar';

export const metadata: Metadata = {
  title: 'Alistar - Shop Sidebar Page',
};

const ShopSidebarPage = () => {
  return <ShopSidebarMain />;
};
export default ShopSidebarPage;

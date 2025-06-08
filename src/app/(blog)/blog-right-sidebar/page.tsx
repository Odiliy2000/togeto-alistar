import { Metadata } from 'next';
import BlogRightSidebarMain from '@/views/blog-sidebar/blog-right-sidebar';

export const metadata: Metadata = {
  title: 'Alistar - Blog Sidebar Page',
};

const BlogRightSidebarPage = () => {
  return <BlogRightSidebarMain />;
};

export default BlogRightSidebarPage;

import { Metadata } from 'next';
import BlogLeftSidebarMain from '@/views/blog-sidebar/blog-left-sidebar';

export const metadata: Metadata = {
  title: 'Alistar - Blog Sidebar Page',
};

const BlogLeftSidebarPage = () => {
  return <BlogLeftSidebarMain />;
};
export default BlogLeftSidebarPage;

import { Metadata } from 'next';
import { blogData } from '@/data/blog-data';
import BlogDetailsLeftSidebarMain from '@/views/blog-details/blog-details-left-sidebar';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const blog = blogData.find((blog) => String(blog.id) === params.id);
  return {
    title: blog ? `Alistar - ${blog.title}` : 'Alistar - Blog Not Found',
  };
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return blogData.map((blog) => ({
    id: String(blog.id),
  }));
}

export default function BlogDetailsLeftSidebarPage({ params }: PageProps) {
  const blog = blogData.find((blog) => String(blog.id) === params.id);
  return blog ? (
    <BlogDetailsLeftSidebarMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}

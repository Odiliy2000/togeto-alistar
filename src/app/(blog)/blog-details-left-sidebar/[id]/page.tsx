import { Metadata } from 'next';
import { blogData } from '@/data/blog-data';
import BlogDetailsLeftSidebarMain from '@/views/blog-details/blog-details-left-sidebar';

type Params = { id: string };

export async function generateMetadata(
  props: { params: Params }
): Promise<Metadata> {
  const { params } = props;
  const blog = blogData.find((blog) => String(blog.id) === params.id);
  return {
    title: blog ? `Alistar - ${blog.title}` : 'Alistar - Blog Not Found',
  };
}

export async function generateStaticParams(): Promise<Params[]> {
  return blogData.map((blog) => ({
    id: String(blog.id),
  }));
}

export default function BlogDetailsLeftSidebarPage({
  params,
}: {
  params: Params;
}) {
  const blog = blogData.find((blog) => String(blog.id) === params.id);
  return blog ? (
    <BlogDetailsLeftSidebarMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}

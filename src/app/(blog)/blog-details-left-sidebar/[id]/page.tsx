import { Metadata } from 'next';
import { blogData } from '@/data/blog-data';
import BlogDetailsLeftSidebarMain from '@/views/blog-details/blog-details-left-sidebar';

// 👇 Don't reuse types — define everything directly
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const blog = blogData.find((blog) => String(blog.id) === params.id);
  return {
    title: blog ? `Alistar - ${blog.title}` : 'Alistar - Blog Not Found',
  };
}

// 👇 Add full explicit return type here too
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return blogData.map((blog) => ({
    id: String(blog.id),
  }));
}

// 👇 Component typing — no interface here
export default function BlogDetailsLeftSidebarPage({
  params,
}: {
  params: { id: string };
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

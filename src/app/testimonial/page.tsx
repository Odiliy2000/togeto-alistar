import { Metadata } from 'next';
import TestimonialMain from '@/views/testimonial/testimonial';

export const metadata: Metadata = {
  title: 'Alistar - Testimonial Page',
};

const TestimonialPage = () => {
  return <TestimonialMain />;
};
export default TestimonialPage;

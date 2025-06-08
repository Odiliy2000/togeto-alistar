import { Metadata } from 'next';
import TeamMain from '@/views/team/team';

export const metadata: Metadata = {
  title: 'Alistar - Team Page',
};

const TeamPage = () => {
  return <TeamMain />;
};
export default TeamPage;

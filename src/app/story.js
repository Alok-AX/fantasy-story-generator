import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';
import Story from '../components/Story';

const StoryPage = () => {
  const router = useRouter();
  const { story } = router.query;

  return (
    <Layout>
      <main>
        <Story generatedStory={story} />
      </main>
    </Layout>
  );
};

export default StoryPage;

import { useRouter } from 'next/router';
import Story from '../../components/Story';

const StoryPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch story data using id (if needed)

  return (
    <div>
      <h1>Story</h1>
      <Story story={id} />
    </div>
  );
};

export default StoryPage;

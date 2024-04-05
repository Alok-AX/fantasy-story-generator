import Style from '../components/Form.module.css';

const Story = ({ story }) => {
  return (
    <div  className={Style.story_output_right}>
      <h2>Your Personalized Story</h2>
      <p>{story}</p>
    </div>
  );
};

export default Story;

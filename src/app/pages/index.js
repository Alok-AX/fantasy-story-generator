"use client"
import { useState } from 'react';
import Form from '../components/Form';
import Story from '../components/Story';
import Style from '../components/Form.module.css';

const Home = () => {
  const [stories, setStories] = useState([]);

  const handleSubmit = (formData) => {
    // Send formData to AI language model API to generate story
    const generatedStory = `Once upon a time, in a ${formData.setting} realm, ${formData.name} encountered a ${formData.creature}. They embarked on an epic journey together, filled with magic and adventure.`;
    setStories((prevStories) => [...prevStories, generatedStory]);
  };

  return (
    <div className={`container ${Style.story_output}`}>
      <h1 className='text-center'>Welcome to The Enchanted Storyteller</h1>
      <div className='row'>
        <div className='col-lg-6'>
          <Form onSubmit={handleSubmit} />
        </div>
          <div className='col-lg-6'>
            {stories.map((story, index) => (<Story key={index} story={story} />))}
        </div>  
      </div>
     
      
    </div>
  );
};

export default Home;

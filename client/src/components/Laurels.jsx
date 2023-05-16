import React from 'react';
import { images, data } from './constants';
import "../home.css";


import { FaAward } from "react-icons/fa";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant font__1" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans font__1 text-pink-50">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id='Awards'>
    <div className="app__wrapper_info">
      <FaAward title="Awards & recognition" className='text-4xl text-lime-100' />
      <h1 className="headtext__cormorant font__5 text-gray-500">Our Laurels</h1>
      {/* Laurels meaning awards and achievement */}

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;

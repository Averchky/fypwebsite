import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import schizoPic from '../assets/img-9.jpeg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Creating awareness on Schizophrenia</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={schizoPic}
              text='National Schizophrenia Awareness Day on 9 May 2020 shines a light on the challenges faced by hundreds of thousands of people living with a diagnosis of schizophrenia in the UK and millions more worldwide. It sets out the steps we can all take to break down the stigma and discrimination surrounding this much misunderstood illness.'
              label='awareness'
              path='/awareness'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

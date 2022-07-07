import React from 'react';
import { useState } from 'react';

const About = () => {
  return (
    <div>
      <div className="m-20">
        <h1 className="text-3xl antialiased">What is mixer?</h1>
      </div>
      <div className="flex justify-around flex-wrap gap-10">
          <div className="shrink-0 w-80 inline-block p-5 bg-sky-600 text-xl rounded-md">
            <p className="antialiased text-white">Mixer is here to train your bartenders and servers on the ins and outs of your establishment's hand crafted creations! <br/> <br/> Need to train someone up quick? no problem! With mixer's practice application they will have your drink ingredients, garnishes, and glasses down in no time!</p>
          </div>
          <div className="shrink-0 inline-block w-80 bg-gray-100">
            <img
              src="cocktail_1.jpeg"
              className="bg-auto rounded-md w-80"></img>
          </div>
          <div className="shrink-0 w-80 inline-block p-5 bg-amber-700 text-xl rounded-md">
            <p className="antialiased text-white">Mixer makes it easy to edit and remove cocktails from your master list! Simply navigate to the 'Manage Drinks' page and select the cocktail you wish to edit or remove! <br/> <br/> Or if you want to add a new cocktail, click the 'Add new' feature and a form will appear for you to add your restaurant's next creation! Making cocktail drink list management as easy as 1 2 3!</p>
          </div>
          <div className="shrink-0 inline-block w-80">
            <img
              src="cocktail_2.webp"
              className="bg-auto rounded-md"></img>
          </div>
      </div>
    </div>
  )
};

export default About;

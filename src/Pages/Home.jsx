import React from 'react';
import Hero from '../Components/Hero';
import NewPlants from '../Components/NewPlants';
import PlantCareMistakes from '../Components/PlantCareMistakes';
import BeginnersPlant from '../Components/BeginnersPlant';
import DocumentTitle from '../Components/DocumentTitle';


const Home = () => {
    
    DocumentTitle('Plantera - Your Ultimate Plant Care Companion');
   
    return (
        <div>
            <Hero></Hero>
            <NewPlants></NewPlants>
            <PlantCareMistakes></PlantCareMistakes>
            <BeginnersPlant></BeginnersPlant>
             
        </div>
    );
};

export default Home;
import React from 'react';
import Hero from '../Components/Hero';
import NewPlants from '../Components/NewPlants';
import PlantCareMistakes from '../Components/PlantCareMistakes';
import BeginnersPlant from '../Components/BeginnersPlant';
import DocumentTitle from '../Components/DocumentTitle';
import PlantBenefits from '../Components/PlantBenefits';
import Testimonials from '../Components/Testimonials';
import NewsletterSection from '../Components/NewsletterSection ';


const Home = () => {
    
    DocumentTitle('Plantera - Your Ultimate Plant Care Companion');
   
    return (
        <div>
            <Hero></Hero>
            <NewPlants></NewPlants>
            <PlantCareMistakes></PlantCareMistakes>
            <BeginnersPlant></BeginnersPlant>
            <PlantBenefits></PlantBenefits>
            <Testimonials></Testimonials>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default Home;
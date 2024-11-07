import React, { useState, useEffect } from 'react';
import NavCard from "./NavCard.js";
import "../styles/NavOptios.css";

const NavOptios = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            setActiveCategory(hash.substring(1)); // Remove the "#" from hash
        };

        // Initial check
        handleHashChange();

        // Add event listener
        window.addEventListener('hashchange', handleHashChange);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const getCategoryData = () => {
        switch (activeCategory) {
            case 'miphones': return miPhones;
            case 'redmiphones': return redmiPhones;
            case 'tv': return tv;
            case 'laptops': return laptop;
            case 'lifestyle': return fitnessAndLifeStyle;
            case 'home': return home;
            case 'audio': return audio;
            case 'accessories': return accessories;
            default: return [];
        }
    };

    return (
        <div className="navOptions">
            {getCategoryData().map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            ))}
        </div>
    );
};

export default NavOptios;

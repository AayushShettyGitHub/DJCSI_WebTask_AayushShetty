import React, { useState, useEffect } from 'react';


const achievements = [
    {
        title: 'Top Coder Award',
        description: 'Awarded for excellence in competitive programming.',
        date: 'June 2024',
        image: 'https://via.placeholder.com/300x200.png?text=Top+Coder+Award'
    },
    {
        title: 'Hackathon Winner',
        description: 'Won first place in the XYZ Hackathon.',
        date: 'April 2024',
        image: 'https://via.placeholder.com/300x200.png?text=Hackathon+Winner'
    },
    {
        title: 'Best Project',
        description: 'Best project in ABC category at DEF event.',
        date: 'March 2024',
        image: 'https://via.placeholder.com/300x200.png?text=Best+Project'
    },
    {
        title: 'Best Project',
        description: 'Best project in ABC category at DEF event.',
        date: 'March 2024',
        image: 'https://via.placeholder.com/300x200.png?text=Best+Project'
    },
    {
        title: 'Best Project',
        description: 'Best project in ABC category at DEF event.',
        date: 'March 2024',
        image: 'https://via.placeholder.com/300x200.png?text=Best+Project'
    },
    
];

const Achievements = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const newSlideWidth = window.innerWidth <= 768 ? window.innerWidth : 333;
            setSlideWidth(newSlideWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < achievements.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="slider">
            <button id="prev" onClick={handlePrev} disabled={currentIndex === 0}>
                Prev
            </button>
            <div className="slider__container">
                <div
                    className="slider__track"
            style={{
           transform: `translateX(-${currentIndex * slideWidth}px)`,
           width: `${achievements.length * slideWidth}px`,
                    }}
                >
         {achievements.map((achievement, index) => (
                        <div className="slide" key={index} style={{ width: slideWidth }}>
                            <img src={achievement.image} alt={achievement.title} className="slide-image" />
                   <h3>{achievement.title}</h3>
                            <p>{achievement.description}</p>
               <p>{achievement.date}</p>
              </div>
                    ))}
                </div>
            </div>
            <button id="next" onClick={handleNext} disabled={currentIndex === achievements.length - 1}>
                Next
            </button>
        </div>
    );
};

export default Achievements;

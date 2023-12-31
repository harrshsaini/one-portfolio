import React from 'react';
import Linkedinclone from '../assets/portfolio/Linkedinclone.png';
import Codeeditor from '../assets/portfolio/Codeeditor.png';
import Driverdrowsiness from '../assets/portfolio/Driverdrowsiness.png';
import Deseaseprediction from '../assets/portfolio/Deseaseprediction.png';
import Smartirrigation from '../assets/portfolio/Smartirrigation.png';
const Project = () => {

  const projects = [
    {
        id: 1,
        src: Linkedinclone,
        link: 'https://github.com/harrshsaini/LinkedIn-Clone'
    },
    {
        id: 2,
        src: Codeeditor,
        link: 'https://github.com/harrshsaini/Code-Editor'
    },
    {
        id: 3,
        src: Driverdrowsiness,
        link: 'https://github.com/harrshsaini/Disease-Prediction'
    },
    {
        id: 4,
        src: Deseaseprediction,
        link: 'https://github.com/harrshsaini/Disease-Prediction'
    },
    {
        id: 5,
        src: Smartirrigation,
    },
  ];

  const handleButtonClick = (link) => {
    // Open the link in a new tab
    window.open(link, '_blank');
  };

  return (
    <div name="project" className='bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-4 md:py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0'>
            {
                projects.map(({id, src, link}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt=''  className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                       Demo
                    </button>
                    <button onClick={() => handleButtonClick(link)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank'
                    rel="noreferrer">Code</button>
                     </div>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
};

export default Project
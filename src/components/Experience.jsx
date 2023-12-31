import React from 'react';
import cpp from '../assets/cpp.png';
import python from '../assets/python.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import jss from '../assets/javascript.png';
import rct from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import php from '../assets/php.png';
import mysql from '../assets/mysql.png';

const Experience = () => {

const techs = [
    {
        id:1,
        src: cpp,
        title: 'C++',
        style: 'shadow-blue-500'
    },
    {
        id:2,
        src: python,
        title: 'PYTHON',
        style: 'shadow-yellow-200'
    },
    {
        id:3,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-700'
    },
    {
        id:4,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-600'
    },
    {
        id:5,
        src: jss,
        title: 'JAVASCRIPT',
        style: 'shadow-yellow-600'
    },
    {
        id:6,
        src: rct,
        title: 'REACT',
        style: 'shadow-sky-300'
    },
    {
        id:7,
        src: tailwind,
        title: 'TAILWINDCSS',
        style: 'shadow-sky-400'
    },
    {
        id:8,
        src: php,
        title: 'PHP',
        style: 'shadow-purple-500'
    },
    {
        id:9,
        src: mysql,
        title: 'MYSQL',
        style: 'shadow-orange-500'
    },
]

return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-4 md:py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
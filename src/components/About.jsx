import React from 'react'; 

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-6 md:mt-20'>
            Welcome to my digital abode! I am a passionate and innovative computer science graduate, eager to embark on a journey in the corporate realm. Armed with a solid foundation in algorithms, programming languages, and a knack for problem-solving, I bring a fresh perspective to the dynamic world of technology.
            </p>
            <br/>
            <p className='text-xl'>
            My academic prowess, coupled with hands-on projects, reflects my commitment to staying at the forefront of technological advancements. I am poised to contribute my skills in software development, system analysis, and team collaboration, aspiring to make a meaningful impact in the ever-evolving landscape of computer science. Let's code the future together!
            </p>
        </div>
    </div>
  )
}

export default About;
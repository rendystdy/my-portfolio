import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
        Hello I’m Rendy Setiadi, a front-end developer hailing from Indonesia. I’m has amassed 4 years of experience in the field of software development, specializing in technologies such as React Native, React, Redux, Tailwind, GraphQL, Animation, and Redux. my partner saying for me He is highly regarded in his profession for his technical acumen, attention to detail, and problem-solving skills.
        </p>

        <br />

        <p className='text-xl'>
        When me not busy coding, me enjoys in my favorite hobbies such as gaming and futsal. iam an avid gamer and regularly engages in multiplayer games with my friends. On the weekends, Iam can be found on the futsal court, honing his skills and staying fit. With my love passion for technology and dedication to me craft, me is sure to continue making waves in the software development industry for years to come.
        </p>
      </div>
    </div>
  )
}

export default About
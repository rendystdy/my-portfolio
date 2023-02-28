import React from 'react';

import antriqueCustomer from '../assets/portfolio/antrique-customer-app.png';
import antriqueKiosk from '../assets/portfolio/antrique-kiosk-app.png';
import dboApp from '../assets/portfolio/dbo-app.png';
import antriqueOperator from '../assets/portfolio/antrique-operator-app.png';
import boostApp from '../assets/portfolio/boost-app.png';
import panoramaApp from '../assets/portfolio/panorama-app.png';

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: antriqueCustomer,
      href: 'https://play.google.com/store/apps/details?id=com.antrique.app',
    },
    {
      id: 2,
      src: antriqueOperator,
      href: 'https://play.google.com/store/apps/details?id=com.merchantantriquemobileapps'
    },
    {
      id: 3,
      src: dboApp,
      href: 'https://play.google.com/store/apps/details?id=com.dboapp'
    },
    {
      id: 4,
      src: boostApp,
      href: 'https://play.google.com/store/apps/details?id=my.com.myboost'
    },
    {
      id: 5,
      src: antriqueKiosk,
      href: 'https://play.google.com/store/apps/details?id=com.antriquemachineapp'
    },
    {
      id: 6,
      src: panoramaApp,
      href: 'https://play.google.com/store/apps/details?id=com.panorama.id'
    },
  ];

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({src, id, href}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
            <img className='rounded-md duration-200 hover:scale-105' src={src} alt='portfolio' />
            <div className='flex items-center justify-center'>
              <a href={href} target="_blank" rel="noreferrer">
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              </a>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
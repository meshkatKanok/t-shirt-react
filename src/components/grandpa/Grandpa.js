import React from 'react';
import Father from '../father/Father';
import Mother from '../MOther/Mother';
import Sister from '../sister/Sister';
import './Grandpa.css'
export const dataApi=React.createContext('kanok')
const Grandpa = () => {
    const house=7
    return (
      <dataApi.Provider value='kanok reza'>
          <div className='grand'>
            <h1>Grand pa</h1>
          <div className='flex'>
          <Father house={house}></Father>
           <Mother></Mother>
           <Sister/>
          </div>
        </div>
      </dataApi.Provider>
    );
};

export default Grandpa;
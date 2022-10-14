import React, { useContext } from 'react';
import { dataApi } from '../grandpa/Grandpa';

const Mother = () => {
    const mothercon=useContext(dataApi)
    return (
        <div className='grand'>
          Mother  
          <h1>{mothercon}</h1>
        </div>
    );
};

export default Mother;
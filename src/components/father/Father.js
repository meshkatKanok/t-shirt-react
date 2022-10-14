import React, { useContext } from 'react';
import { dataApi } from '../grandpa/Grandpa';

const Father = ({house}) => {
    const datacontext=useContext(dataApi)
    return (
        <div className='grand'>
            Father 

            <h1>{house}</h1>
            <h2>{datacontext}</h2>
        </div>
    );
};

export default Father;
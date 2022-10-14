import React from 'react';

const Sidebar = ({pro,handle}) => {
    let message;
    if(pro.length===0){
message=<p>LEts my One!!</p>
    }
    else if(pro.length===3){
        message=<p>You already Buy Now</p>
    }
    return (
        <div>
         <h1>Order Summary:{pro.length}</h1>
         {
            pro.map(p=><div key={p._id}>
                {p.name} <button onClick={()=>handle(p)}>X</button>   
                
            </div>)
         }
         {
            message

         }
         {
            pro.length===6?<p>This buy the Order</p>:<p>Already success order</p>
         }
         {
            pro.length===2 && <h1>Double Item</h1>
         }
         {
            pro.length===4 || <p>4ta item na</p>
         }
        </div>
    );
};

export default Sidebar;
import React from 'react';

const Cars = (props) => {
  const infosCouleur =props.colors?(<p>Couleur: {props.colors}</p>):<p>Couleur: Neant </p> 
  if (props.children) {
    return (
        <div className='Cars' style={{backgroundColor : 'pink',width : '400px'
        ,margin :'5px auto',padding:'10px'
        }}>
            <h1 style={{textAlign:'center' ,color :"plum"}}>{props.title}</h1>
            
          <p >Marque :{props.children} </p>
          <p >Age :{props.year} </p>
          {infosCouleur}

        </div>
    );  
  } else {
       return null
    
}};

export default Cars;
import React ,{Component } from 'react';
import Cars from "./Cars"
class Mycars extends Component  {
   NowCopies =()=>{
    alert("merci de ne pas copier le texte ")
  }
  MOusehover =(e)=>{
     console.log(e.target);
     if (e.target.classList.contains('style')) {
      e.target.classList.remove('style')
     } else {
      e.target.classList.add('style')
     }
  }

   
    render (){
        console.log(this)
      return   (< div onCopy={this.NowCopies}>

            <h1 onMouseOver={this.MOusehover} style={{textAlign:'center'}}>{this.props.title}</h1>
            <p onCopy={this.NowCopies} style={{textAlign:'center' ,color :"plum"}}>Ne me compiespas 
            </p>
            <Cars colors="blanc">Peugeot </Cars>
            <Cars >Renault</Cars> 
            <Cars colors="blanc"></Cars>
        </div>)
    };
};

export default Mycars;
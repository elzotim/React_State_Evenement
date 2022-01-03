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

   state={
     voitures : [
       { name:'ford',colors : "red",year:'2000'},
       { name:'mercedes',colors : 'black',year:'2010'},
       { name:'toyota',colors : 'blue',year:'2020'}
      ],
      titre : 'Les catalogues Voitures'
     }
     addyear =()=>{
       const updatstart = this.state.voitures.map((param)=>{
         return param.year -=10 ;
     })
       this.setState({
        updatstart
       })
    
    };

    render (){


        const year=new Date().getFullYear();
        console.log(this)
      return  (<div onCopy={this.NowCopies}>

            <h1 onMouseOver={this.MOusehover} style={{textAlign:'center'}}>{this.props.title}</h1>
            <h1>{this.state.titre}</h1>
            <p onCopy={this.NowCopies} style={{textAlign:'center' ,color :"plum"}}>Ne me compiespas 
            </p>
             <button onClick={this.addyear}>Add 10years </button>
        
        {this.state.voitures.map((voiture ,index)=>{
          return(
<Cars key= {index} colors={voiture.colors} year={year -voiture.year +"ans"}>{voiture.name } </Cars>
          )}
        )   }

  </div>)
  }};
;

export default Mycars;
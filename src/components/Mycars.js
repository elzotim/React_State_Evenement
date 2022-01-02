import React ,{Component } from 'react';
import Cars from "./Cars"
class Mycars extends Component  {
    state = {
        t2 :"vous auriez le choix ",
      }
    render (){
        console.log(this)
      return   (<div>
            <h1 style={{textAlign:'center' ,color :"plum"}}>{this.props.title}</h1>
            <h2 style={{textAlign:'center' ,color :"plum"}}>{this.state.t2 }</h2>
            <Cars colors="blanc">Peugeot </Cars>
            <Cars >Renault</Cars> 
            <Cars colors="blanc"></Cars>
        </div>)
    };
};

export default Mycars;
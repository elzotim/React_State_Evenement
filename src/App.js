import React, { Component } from 'react';
import Mycars from './components/Mycars'

class App extends Component {

  state = {
    titre: "Les catalogues Voitures",
  }
  ChangeTitle=(e)=>{
    this.setState({
      titre :"nouveau titres sans params "
  })}
  ChangeTitleParams=(params)=>{
       this.setState({
        titre : params
       })
  }
  changeViaBaind =(params)=>{
    this.setState({
     titre : params
    })
}
changeViainput =(e)=>{
  console.log(e.target);
  this.setState({
    titre : e.target.value
  })
}
  render() {

    return (
      <div className="App">
        <Mycars title={this.state.titre} />

        <button onClick={this.ChangeTitle}>Change le titre en dure</button>
        <button onClick={()=>this.ChangeTitleParams("mon nouveau titre via parames ")}>Change avec params</button>
        <button onClick={this.ChangeTitleParams.bind(this,"mon nouveauu titre via bind")}>Change avec Bind</button>
        <input type="text" onChange={this.changeViainput} value={this.state.titre}></input> 
      </div>

    );
  }
}

export default App;

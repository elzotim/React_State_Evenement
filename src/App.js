import React ,{Component} from 'react';
import Mycars from './components/Mycars'
import Cars from './components/Cars'

class App extends Component {

  state = {
    titre :"Les deux catalogue Voiture",
    titre3 :"jutilise direcetemt le cars.js sans passer pa mycars"
  }
  render(){

  return (
    <div className="App">
      <Mycars title={this.state.titre}/>
      <Cars  children ='tata'  colors="red" title={this.state.titre3} />
      <Cars  children ='tata' title={this.state.titre3} />
      <Cars   title={this.state.titre3} />

    </div>
  );
}
}

export default App;

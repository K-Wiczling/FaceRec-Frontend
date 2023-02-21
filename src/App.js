import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import LinkForm from "./components/LinkForm/LinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { Component } from "react";
import Signin from "./components/Signin/Signin";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      route: "signin",
    };
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubbmit = () => {};
  onRouteChange = (newRoute) => {
    // this.setState({route: newRoute})
  }
  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" color="#000000" bg={true} />
        <Navigation onRoutChange={this.onRouteChange}/>
        
        {this.state.route === "signin" ? 
          <div>
            <Signin onRoutChange={this.onRouteChange } />
            </div>
         : 
          <div>
            <Logo />
            <Rank />
            <LinkForm
              onInputChange={this.onInputChange}
              onButtonSubbmit={this.onButtonSubbmit}
            />
          </div>
        }
      </div>
    );
  }
}

export default App;

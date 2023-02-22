import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import LinkForm from "./components/LinkForm/LinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { Component } from "react";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      route: "signin",
      isSignedIn: false,
    };
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubbmit = () => {};
  onRouteChange = (newRoute) => {
    if (newRoute === "home") {
      this.setState({ isSignedIn: true });
    } else {
      this.setState({ isSignedIn: false });
    }
    this.setState({ route: newRoute });
  };
  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" color="#000000" bg={true} />
        <Navigation onRouteChange={this.onRouteChange} isSignin={this.state.isSignedIn} />

        {this.state.route === "home" ? (
          <div>
            <Logo />
            <Rank />
            <LinkForm
              onInputChange={this.onInputChange}
              onButtonSubbmit={this.onButtonSubbmit}
            />
          </div>
        ) : this.state.route === "signin" ? (
          <div>
            <Signin onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;

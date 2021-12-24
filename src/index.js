import React,{Component} from "react";
import reactDom from "react-dom";


class App extends Component {
  
  state = {
    firstName: '',
    message: '',
    key:'',
  }

  handleClick = (e) => {
    this.setState({
      message:'Welcome to the world events'
    })
  }

  handelMouseMove = (e) => {
    this.setState({
      message:'mouse is moving'
    })
  }

  handelChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message:e.target.value,
    })
  }

  handelKeyPress = (e) => {
    this.setState({
      message: `${e.target.value} has been pressed and the keycode is` + e.charcode,
      
    })
  }

  handelBlur = (e) => {
    this.setState({
      message:'Input field has been blurred'
    })
  }

  handelCopy = (e) => {
    this.setState({
      message:'Using 30 Days of React for commercial purpose is not allowed'
    })
  }

  render() {

    return (
      <div>
        <h1>Welcome to the World of Events</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <button onClick={this.handelMouseMove}>Move mouse on me</button>
        <p onCopy={this.handelCopy}>Check copy right permission by copying this text </p>

        <p>{this.state.message}</p>
        <label htmlFor=''>Test for onKeyPres Event:</label>
        <input type='text' onKeyPress={this.handelKeyPress} />
        <br />

        <label htmlFor=''>Test for onBlur Event:</label>
        <input type='text' onBlur={this.handelBlur} />

        <form>
          <div>
            <label htmlFor='firstName'>First Name:</label>
            <input
              onChange={this.handelChange}
              name='firstName'
              value={this.state.value}
            />

            <div>
              <input type='submit' value='Submit' />
            </div>

          </div>
        </form>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
reactDom.render(<App />, rootElement);

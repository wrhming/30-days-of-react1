import React, { Component } from "react";
import reactDom from "react-dom";

class App extends Component {
  firstName = React.createRef();
  lastName = React.createRef();
  country = React.createRef();
  title = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.firstName.current.value);
    console.log(this.lastName.current.value);
    console.log(this.title.current.value);
    console.log(this.country.current.value);

    const data = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      title: this.title.current.value,
      country: this.country.current.value,
    };
    // the is the place we connect backend api to send the data to the database
    console.log(data);
  };

  render() {
    return (
      <div className="container">
        <h3>Add Student</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              ref={this.firstName}
            />
          </div>
          <div>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              ref={this.lastName}
            />
          </div>
          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              ref={this.country}
            />
          </div>
          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              ref={this.title}
            />
          </div>

          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
reactDom.render(<App />, rootElement);

import React from "react";
class UserForm extends React.Component {
    state = {
      name: "",
      email: "",
      password: "",
    };
  
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      // logic for creating or updating user
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Save User</button>
        </form>
      );
    }
  }
  
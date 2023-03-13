import React from "react";
class UpdateUserForm extends React.Component {
    state = {
      id: "",
      name: "",
      email: "",
      password: "",
    };
  
    componentDidMount() {
      // fetch user data and set state
    }
  
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      // logic for updating user
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
          <button type="submit">Update User</button>
        </form>
      );
    }
  }
  
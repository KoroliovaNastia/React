import React, { Component, PureComponent } from "react";

class User extends Component {
    render() {
      const { firstName, lastName } = this.props;
      return (
        <span>
          User: {firstName} {lastName}
        </span>
      );
    }
  }

  export default User  
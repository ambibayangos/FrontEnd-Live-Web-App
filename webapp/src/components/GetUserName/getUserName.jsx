import React, { Component } from "react";
import "./getUserName.css";
import "semantic-ui-css/semantic.min.css";
import { Form } from "semantic-ui-react";

class GetUserName extends Component {
  state = { userName: "" };

  render() {
    return (
      <div className="userName">
        <div className="getUserBox">
          <h2 style={{ color: "black" }}>Enter a user name</h2>
          <Form
            id="message"
            onSubmit={() => this.props.onSubmintEntered(this.state.userName)}
            autoComplete="off"
          >
            <Form.Field>
              <label>{this.props.label}</label>
              <input
                placeholder={this.props.placeHolder}
                onChange={event => {
                  this.setState({ userName: event.target.value });
                }}
              />
            </Form.Field>
          </Form>
        </div>
      </div>
    );
  }
}

export default GetUserName;

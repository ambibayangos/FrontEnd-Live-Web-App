import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Form } from "semantic-ui-react";

class AddVideoForm extends Component {
  state = { userName: "" };
  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <label>{this.props.label}</label>
            <input placeholder={this.props.placeHolder} />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default AddVideoForm;

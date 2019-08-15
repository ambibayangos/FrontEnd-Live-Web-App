import React, { Component } from "react";
import "./chatBox.css";
import "semantic-ui-css/semantic.min.css";
import { Form } from "semantic-ui-react";
import * as signalR from "@aspnet/signalr";

//import { HubConnection } from "@aspnet/signalr-client";

class ChatBox extends Component {
  state = {
    message: "",
    messageList: [],
    hubConnection: new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:44314/ChatHub")
      .build()
  };

  onSubmitHandler = event => {
    this.state.hubConnection
      .invoke("SendMessage", this.props.userName, this.state.message)
      .catch(err => console.log(err));
    document.getElementById("message").reset();
  };

  componentDidMount = () => {
    this.state.hubConnection.on("ReceiveMessage", (user, message) => {
      this.setState({ messageList: [...this.state.messageList, message] });
    });

    this.state.hubConnection.on("ReceiveMessage", (user, message) => {});

    this.state.hubConnection
      .start()
      .then(() => this.state.hubConnection.invoke("BrodCast"));
  };

  render() {
    return (
      <div className="chatBox">
        <div>
          {this.state.messageList.slice(-9).map(message => (
            <ul style={{ color: "white", fontSize: "1rem", padding: "10px" }}>
              {message}
            </ul>
          ))}
        </div>

        <div style={{ bottom: "0", position: "absolute", width: "100%" }}>
          <Form id="message" onSubmit={this.onSubmitHandler} autoComplete="off">
            <Form.Field>
              <input
                type="text"
                placeholder="Enter a message...."
                onChange={event =>
                  this.setState({
                    message: this.props.userName + " : " + event.target.value
                  })
                }
              />
            </Form.Field>
          </Form>
        </div>
      </div>
    );
  }
}

export default ChatBox;

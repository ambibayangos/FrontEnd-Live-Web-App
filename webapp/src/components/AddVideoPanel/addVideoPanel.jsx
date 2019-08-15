import React, { Component } from "react";
import "./addVideoPanel.css";
import AddVideoForm from "../Form/form";
import "semantic-ui-css/semantic.min.css";
import { Form } from "semantic-ui-react";

class AddVideoPanel extends Component {
  state = {
    videoLink: "",
    player1Name: "",
    player2Name: ""
  };

  onSaveHanlder = () => {
    this.props.videoAdded(this.state.videoLink);
    this.props.player1Added(this.state.player1Name);
    this.props.player2Added(this.state.player2Name);
    this.props.onSaveVideoCliked(null);
  };

  render() {
    return (
      <div className="add-video-panel">
        <h3>Enter Video</h3>
        <div className="space">
          <Form id="message" autoComplete="off">
            <Form.Field>
              <label>Youtube link</label>
              <input
                placeholder="Enter youTube link"
                onChange={event =>
                  this.setState({
                    videoLink: event.target.value
                  })
                }
              />
            </Form.Field>
          </Form>
        </div>
        <div className="space">
          <Form id="message" autoComplete="off">
            <Form.Field>
              <label>Player one</label>
              <input
                placeholder="Enter player one name"
                onChange={event =>
                  this.setState({
                    player1Name: event.target.value
                  })
                }
              />
            </Form.Field>
          </Form>
        </div>
        <div className="space">
          <Form id="message" autoComplete="off">
            <Form.Field>
              <label>Player two</label>
              <input
                placeholder="Enter player two name"
                onChange={event =>
                  this.setState({
                    player2Name: event.target.value
                  })
                }
              />
            </Form.Field>
          </Form>
        </div>
        <div className="spacer" />
        <button
          className="ui negative basic button"
          onClick={this.props.onExitClick}
        >
          Cancel
        </button>
        <button
          onClick={this.onSaveHanlder}
          className="ui positive basic button"
          style={{ margin: "10px  0px 0px 0px" }}
        >
          Save video
        </button>
      </div>
    );
  }
}

export default AddVideoPanel;

import React, { Component } from "react";
import "./videoTable.css";
import "semantic-ui-css/semantic.min.css";
import * as signalR from "@aspnet/signalr";

class VideoTable extends Component {
  state = {
    videoTitles: [],
    videoThumbNail: [],
    videoURL: [],
    hubConnection: new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:44314/ChatHub")
      .build()
  };

  deleteVideo = ID => {
    this.state.hubConnection.invoke("DeleteVideo", ID);
  };

  updateList = () => {
    fetch("https://livewebchat.azurewebsites.net/api/Videos", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(reponse => {
        console.log(reponse);
        const output = [];
        reponse.forEach(video => {
          const row = (
            <tr style={{ width: "100%" }}>
              <td className="center">
                <i class="star outline icon" style={{ fontSize: "2rem" }} />
              </td>
              <td
                onClick={() =>
                  this.props.videoURL(video.webUrl, video.videoTitle)
                }
                className="center"
                style={{ paddingRight: "50px" }}
              >
                <img src={video.thumbnailUrl} width="200px" />}
              </td>
              <td className="center" style={{ fontSize: "1rem" }}>
                {video.videoTitle}
              </td>
              <td
                onClick={() => this.deleteVideo(video.videoId)}
                className="center"
              >
                <i
                  class="trash alternate outline icon"
                  style={{ fontSize: "2rem" }}
                />
              </td>
            </tr>
          );
          output.push(row);
        });
        this.setState({ videoThumbNail: output });
      });
  };

  componentDidMount() {
    this.updateList();
    this.props.mount(this.updateList);
    this.state.hubConnection.on("DELETE", ID => {
      fetch("https://livewebchat.azurewebsites.net/api/Videos" + ID, {
        method: "DELETE"
      }).then(() => this.updateVideoList());
    });
  }

  render() {
    return (
      <div className="video-table">
        <div>{this.state.videoThumbNail}</div>
      </div>
    );
  }
}

export default VideoTable;

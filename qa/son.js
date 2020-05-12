import React from "react";
import "./styles.css";

export default class Listings extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://s3.amazonaws.com/monterey.artistspotlight.data/11350/images/bob_dylan_01.jpg"
    ).then(res => {
      console.log(res.url);
      this.setState({ listings: res.url });
    });
  }

  render() {
    return (
      <div> 
        <h2> Track listings </h2>
        <img src={this.state.listings} alt="Img"></img>
      </div>
    );
  }
}

import Head from "next/head";
import Filter from "./Components/Filter";
import React, { Component } from "react";
import Details from "./Components/Details";

class Home extends Component {
  state = {
    launch_year: [],
    newdata: [],
  };
  componentDidMount() {
    this.setState({
      launch_year: this.props.launch_year,
      newdata: [...this.props.newdata],
    });
  }

  handleyearchange(value) {
    console.log(value);
  }

  render() {
    const { launch_year, newdata } = this.state;
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{ backgroundColor: "lightgrey" }}>
          <div className="container-fluid">
            <h2 className="m-4 m-4">SpaceX Launch programes </h2>
            <div className="row">
              <div className="col-3 m-4">
                <Filter
                  launch_year={launch_year}
                  onYearChange={this.handleyearchange}
                />
              </div>
              <div className="col m-4">
                <Details data={newdata} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  static async getInitialProps() {
    const res = await fetch(
      "https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014"
    );
    const data = await res.json();
    let filteredarray = data.map((value) => value.launch_year);
    let launch_year = Array.from(new Set(filteredarray));
    let newdata = Object.values(data);

    return {
      launch_year,
      newdata,
    };
  }
}

export default Home;

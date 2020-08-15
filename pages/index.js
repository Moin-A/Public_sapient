import Head from "next/head";
import Filter from "./Components/Filter";
import React, { Component } from "react";

class Home extends Component {
  state = {
    launch_year: [],
  };
  componentDidMount() {
    this.setState({ launch_year: this.props.launch_year });
  }
  render() {
    const { launch_year } = this.state;
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{ backgrounddivor: "lightgrey" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <Filter launch_year={launch_year} />
              </div>
              <div className="col">
                <h1 className="display-2 font-weight-bolder">
                  <strong>Next.JS + Bootstrap</strong>
                </h1>
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
    console.log(launch_year);

    return {
      launch_year,
    };
  }
}

export default Home;

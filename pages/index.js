import Head from "next/head";
import Filter from "./Filter";
import React, { Component } from "react";
import Details from "./Details";
import _ from "lodash";

class Home extends Component {
  state = {
    launch_year: [],
    newdata: [],
    SelectedLaunchYear: "",
    SelectedOptions: "",
  };
  componentDidMount() {
    this.setState({
      launch_year: this.props.launch_year,
      newdata: [...this.props.newdata],
    });
  }

  handleFilter = (value) => {
    this.setState({ SelectedOptions: value });
  };

  handleyearchange = (value) => {
    this.setState({ SelectedLaunchYear: value, SelectedOptions: [] });
  };

  render() {
    const {
      launch_year,
      newdata,
      SelectedLaunchYear,
      SelectedOptions,
    } = this.state;
    const filtered = SelectedLaunchYear
      ? newdata.filter((m) => m.launch_year == SelectedLaunchYear)
      : newdata;

    function filter(arra, options) {
      const { textProperty, valueProperty } = options;
      let newarray = arra.filter(
        (item) => _.get(item, textProperty) === valueProperty
      );
      return newarray;
    }
    const secondfiltered = filter(filtered, SelectedOptions);

    return (
      <>
        <Head>
          <title>SpaceX Launch Filter</title>
          <html lang={"en"} />
          <meta name="og:type" content="website" />
          <meta name="description" content={"spacex launch querry site"} />
          <meta name="og:title" content={"SpaceX Calender"} />
          <meta name="description" content={"SpaceX Calender"} />
          <meta name="keywords" content={("SpaceX", "space", "rocket")} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{ backgroundColor: "lightgrey" }}>
          <div className="container-fluid">
            <h2 className="m-4 m-4">SpaceX Launch programes </h2>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-auto-sm-12 m-2 ">
                <Filter
                  launch_year={launch_year}
                  onYearChange={this.handleyearchange}
                  onOptionSelection={this.handleFilter}
                />
              </div>
              <div className="col-lg-8 col-md-6 col-auto-sm-4 m-2 ">
                <Details data={secondfiltered} />
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

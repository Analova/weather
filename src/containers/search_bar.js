import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInutChange = this.onInutChange.bind(this);
  }

  onInutChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = e => {
    e.preventDefault();
    // Fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a five-day forcast in your favorite cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInutChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(disptch) {
  return bindActionCreators({ fetchWeather }, disptch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);

import React, { Component } from "react";
import { connect } from "react-redux";
import { getCountries,getMortality } from "../actions/index.js";

class SearchBar extends Component {
  state = { selectedCountry: "France" };


  componentDidMount() {
    this.props.getCountries();
  }

  search = e => {
      
    this.setState({ selectedCountry: e.target.value });
    this.props.getMortality(this.state.selectedCountry)
   
  };

  renderSelectBox = () => {
    const { countries } = this.props;
    if (countries) {
      return (
        <select
          className="col-lg-12 input-group"
          value={this.state.selectedCountry}
          onChange={e => this.search(e)}
        >
          {countries.map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      );
    } else {
      return <div>No country found</div>;
    }
  };

  render() {
    return <div className="search_bar">{this.renderSelectBox()}</div>;
  }
}

const mapStateToProps = state => ({
  countries: state.countries
});
export default connect(
  mapStateToProps,
  { getCountries, getMortality }
)(SearchBar);

import React, { Component } from "react";
import MortalityListItem from "../components/mortalityListItem";
import { getMortality } from "../actions";
import { connect } from "react-redux";

class MortalityList extends Component {
  
  componentDidMount = () => {
   const defaultCountry = "France";
    this.props.getMortality(defaultCountry);
  };

  renderMortalities = () => {
    const { mortalities } = this.props;
    return mortalities.map(data => {
      return <MortalityListItem key={data.country} mortality={data} />;
    });
  };

  render() {
   
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Pays</th>
              <th className="col-md-6">Hommes</th>
              <th className="col-md-6">Femmes</th>
            </tr>
          </thead>
          <tbody>{this.renderMortalities()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mortalities: state.mortality
});

export default connect(
  mapStateToProps,
  { getMortality }
)(MortalityList);

import React from 'react';
import ReactDOM from 'react-dom';
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

var CitadelTable = React.createClass({
  render() {
    return (
      <BootstrapTable data={this.props.citadels} striped={true} hover={true} pagination={true} search={true}>
        <TableHeaderColumn isKey={true} dataField="id" hidden={true}>Citadel Id</TableHeaderColumn>
        <TableHeaderColumn dataField="system">System</TableHeaderColumn>
        <TableHeaderColumn dataField="region">Region</TableHeaderColumn>
        <TableHeaderColumn dataField="citadel_type">Citadel</TableHeaderColumn>
        <TableHeaderColumn dataField="corporation">Corporation</TableHeaderColumn>
        <TableHeaderColumn dataField="alliance">Alliance</TableHeaderColumn>
        <TableHeaderColumn dataField="killed_at">Destroyed</TableHeaderColumn>
      </BootstrapTable>
    )
  }
});

var App = React.createClass({
  getInitialState: function() {
    return { citadelData: [] };
  },
  componentDidMount: function() {
    fetch(process.env.CITADEL_URL).then(function(response) {
      return response.json();
    }).then(function(response_data) {
      this.setState( {citadelData: response_data.citadels } )
    }.bind(this))
  },
  render () {
    return (
      <div>
        <CitadelTable citadels={ this.state.citadelData } />
      </div>
    )
  }
// }
});

ReactDOM.render(<App />, document.getElementById('app'));

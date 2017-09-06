import React from 'react';
import {connect} from 'react-redux';
import {Row, Column} from 'hedron';

import Chart from '../../components/chart';
import Header from '../../components/header';

export const Homepage = ({chart: {data}}) => (
  <Row>
    <Column>
      <Header>Chart</Header>
      <Chart data={data} />
    </Column>
  </Row>
);

export const mapStateToProps = (state, ownProps) => ({
  chart: state.chart,
});

export default connect(mapStateToProps)(Homepage);

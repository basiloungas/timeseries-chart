import React from 'react';
import ReactHighcharts from 'react-highcharts';

const convertTimeSeriesToTuples = timeseries => timeseries.map(item => [new Date(item.d), item.v])

const buildHighchartsConfig = (data) => {
  // TODO: pass that to a webworker to not block the UI
  const seriesData = data.map(seriesItem => {
    const data = convertTimeSeriesToTuples(seriesItem.timeSeries.entries);
    return {
      type: 'area',
      name: seriesItem.instrumentId,
      data,
    }
  });

  // TODO:
  // - apply rules for tooltip formatting
  return {
    series: seriesData,
    chart: {
      zoomType: 'x'
    },
    title: {
      text: null
    },
    xAxis: {
      type: 'datetime'
    },
  }
};

export default ({data}) => {
  const config = buildHighchartsConfig(data);

  return (
    <div>
      <ReactHighcharts config={config} />
    </div>
  );
};

import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightPie,pieData}=this.props;
        let configPie = {
            chart: {
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:heightPie,
                plotShadow: false,
                reflow:true,
                // marginRight: 30,
                // height:250,
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            tooltip: {
                enabled: true,
                pointFormat: '<b>{point.y}家{point.percentage:.1f}%</b>'
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            plotOptions: {
	            pie: {
	                allowPointSelect: true,
                    cursor: 'pointer',
                    borderWidth: 0,
                    size: '120%',
                    innerSize: '80%',
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}',
                        style: {
                            color: "#d1d2d3",
                            fontSize: '14px',
                            fontFamily:"微软雅黑"
                        },

                    },

                }
	        },
            series: [
                {
                    type: 'pie',
                    name: "行业分析",
                    data:pieData&&pieData,
                    style: {fontSize:"20px",  }
                }]
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    }
});


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);

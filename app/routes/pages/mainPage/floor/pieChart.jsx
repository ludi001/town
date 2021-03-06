import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {floorTwoData}=this.props;
        let configPie = {
            chart: {
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                plotShadow: false,
                reflow:true,
                marginRight: 30,
              	height:280
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            tooltip: {
                headerFormat: '{series.name}<br>',
            	pointFormat: '{point.name}: <b>{point.y}</b>万元,占比<b>{point.percentage:.1f}%</b>'
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            plotOptions: {
	            pie: {
                    borderWidth:0,
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
	                    style: {
	                        color: '#fff',
	                        fontWeight: 'normal',                            
	                    }
	                }
	            }
	        },
            series: [{
	            type: 'pie',
	            innerSize: '40%',
	            name: '投资情况占比',
	            data: floorTwoData&&floorTwoData,
	        }],
            colors:['#f19d63','#86afc1','#559cf8','#edd87d'],
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    }
});


const mapStateToProps = (state) => {
    return {
         
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);

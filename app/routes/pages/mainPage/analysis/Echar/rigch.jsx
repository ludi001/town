import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightPie,bb,setTitle,rightPieAna}=this.props;
        let configPie = {
            chart: {
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:heightPie,
                plotShadow: false,
                reflow:true,
                // height:260,
            },
            title: {
                floating:true,
                text: '',
                style: {
                    // fontSize: "45px",
                    // lineHeight: "45px"
                }
            },
            subtitle: {
                text: ''
            },
            tooltip : {
                enabled: true,
                pointFormat: '{series.name}: <b>{point.y}家{point.percentage:.1f}%</b>'
            },
            xAxis: {
                enabled:false
            },
            yAxis: {
                min: 0,
                title:{
                    enabled:false
                },
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: false,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false,
                    },
                    point: {
                        events: {
                            mouseOver: function (e) {
                                //console.log(e,"123");
                              
                            },
                        }
                    },
                }
            },
            series: [{
                type: 'pie',
                innerSize: '60%',
                name: '市场份额',
                data: rightPieAna&&rightPieAna.value
            }],
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            colors:['#f5f274','#7EC0EE','#EE8262']
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    }
});


const mapStateToProps = (state) => {
    return {
        rightPieAna:state.vars.rightPieAna
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
          
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);

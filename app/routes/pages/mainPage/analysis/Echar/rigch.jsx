import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {height,bb,setTitle}=this.props;
        let configPie = {
            chart: {
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:height,
                plotShadow: false,
                reflow:true,
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
                                console.log(e,"123");
                              
                            },
                        }
                    },
                }
            },
            series: [{
                type: 'pie',
                innerSize: '60%',
                name: '市场份额',
                data: [
                    {name:'国际先进',   y: 22.0, color:'#FFC125',},
                   
                    {name:'国内先进',   y: 10.0, color:'#7EC0EE',},
                    {name:'国内先进',   y: 22.0, color:'#EE8262',},
                  
                   
                   
                ]
            }],
            credits: {
                enabled: false //不显示highCharts版权信息
            },
          
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

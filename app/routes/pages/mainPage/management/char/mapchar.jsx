import React from 'react';
import {connect} from 'react-redux';
var actions = require('redux/actions');
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {heightChart1,lineData}=this.props;
        let configPie = {
            chart: {
                type: 'line',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:heightChart1,
                plotShadow: false,
                reflow:true,
            },
            title: {
                text: ''
            },
            tooltip: {
               
            },
            xAxis:{
                categories:lineData&&lineData.name,
                gridLineColor: "#fff",
                gridLineWidth: 1,
                lineColor: "#fff",              
                lineWidth: 1,
                tickWidth:0,//去掉刻度
                labels : {
                    style : {
                        // 'fontSize' : '10px',
                        color: "#fff"
                    }
                }
            },
            yAxis: {
                title: {
                    enabled: false
                },
                //  tickWidth:0,//去掉刻度
                // gridLineWidth: 0,//去掉y轴方向的横线
                lineColor: "#fff",               //X轴的颜色  
                lineWidth: 1, 
                labels : {
                    style : {
                        // 'fontSize' : '10px',
                        color: "#fff"
                    }
                },
                gridLineDashStyle: 'longdash',
            },
        legend: {
            enabled: false
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false       // 开启数据标签
                },
                enableMouseTracking:true, // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                marker: {//线上数据点  
                    radius: 0,  //曲线点半径，默认是4
                    // symbol: 'circle' //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                }
            }

        },
        series: [{
            name: '同比下降',
            data: lineData&&lineData.value,
            lineWidth: 3,   //线条宽度
            color:"#03a9f4"
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
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
              
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);

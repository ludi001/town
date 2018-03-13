//底部导航
import React from "react";
import {connect} from 'react-redux';
var actions = require('redux/actions');
var {browserHistory} = require('react-router');
import css from './nav.scss';

let Component = React.createClass({
  componentDidMount() {
    this.props.init();
  },
  showNav: ()=> {
    $("#nav").show('slow')
  },
  hideNav: ()=> {
    $("#nav").hide('slow')
  },
  render() {
    let {toMain,toOverview,toHatch,toAnalysis,toManage}=this.props;
    return (
    	<div className={css.menu} onMouseLeave={()=>this.hideNav()}>
          	<div className={css.img}><div className={css.src} onClick={()=>this.showNav()}></div></div>
          	<ul className={css.nav} id="nav">
              	<li onClick={()=>toMain()}>园区总览</li>
              	<li onClick={()=>toOverview()}>招商引资看板</li>
              	<li onClick={()=>toHatch()}>项目孵化概览</li>
              	<li onClick={()=>toAnalysis()}>小镇产业分析</li>
              	<li onClick={()=>toManage()}>工程管理看板</li>
              	<li></li>
              	<li></li>
              	<li></li>
          	</ul>
        </div>
    )
  }
});
const mapStateToProps = (state) => {
    return {
      
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: ()=> {
      
    },
    toMain:()=>{
    	browserHistory.push('/app/all/project/town/main')
    },
    toOverview: ()=>{
      	browserHistory.push('/app/all/project/town/overview')
    },
    toHatch: ()=>{
      	browserHistory.push('/app/all/project/town/hatch')
    },
    toAnalysis: ()=>{
      	browserHistory.push('/app/all/project/town/analysis')
    },
    toManage: ()=>{
      	browserHistory.push('/app/all/project/town/manage')
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
import React from 'react'
import { withRouter } from 'react-router-dom' //可以是非页面级组件操作路由

import navList from '../../utils/navList'
import './index.styl'
class SlideBar extends React.Component{
  render () {
    const navListFilter = navList.filter(v => (this.props.location.pathname !== v.path))
    return (
      <div className='slide-bar'>
        <ul className='link-list'>
          {navListFilter.map((v,i) => (<li key={i} className='link-name' onClick={() => this.props.history.push(v.path)}>{v.title}</li>))}
        </ul>
      </div>
    )
  }
}
export default withRouter(SlideBar)
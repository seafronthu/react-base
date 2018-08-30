import React from 'react'
import { withRouter } from 'react-router-dom' //可以是非页面级组件操作路由
import ClassNames from 'classnames'

import './index.styl'
import navList from '../../utils/navList'
class HeaderNav extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.slideBarShowFunc = this.slideBarShowFunc.bind(this)
  }
  slideBarShowFunc () {
    if(this.props.headerActive) {
      this.props.handleSlideBarShow(false)
    } else {
      this.props.handleSlideBarShow(true)
    }
  }
  render () {
    const title = navList.filter(v => v.path === this.props.location.pathname)[0].title
    return (
      <div className='header-nav'>
          <div></div>
          <span className='header-title'>{title}</span>
          <div className='header-column-icon' onClick={this.slideBarShowFunc}>
            <div className="column">
              <span className='item'></span>
              <span className={ClassNames('item', {'active':this.props.headerActive})}></span>
            </div>
            <div className="column">
              <span className="item"></span>
              <span className="item"></span>
            </div>
          </div>
      </div>
    )
  }
}
export default withRouter(HeaderNav)
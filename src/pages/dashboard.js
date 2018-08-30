import React from 'react'
import QueueAnim from 'rc-queue-anim'

import One from '../routes/one'
import HeaderNav from '../components/header-nav'
import SlideBar from '../components/slide-bar'
import './index.styl'
import Mask from '../components/mask'
class Dashboard extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      header_active: false, // 导航icon动画
      slide_translate: '100%', // slide动画
      dashboard_translate: '0px' // 内容动画
    }
    this.handleSlideBarShow = this.handleSlideBarShow.bind(this)
  }
  handleSlideBarShow (boo) {
    if (boo) {
      this.setState({
        show: true,
        header_active: true,
        slide_translate: '0px',
        dashboard_translate: '-50%'
      })
    } else {
      this.setState({
        show: false,
        header_active: false,
        slide_translate: '100%',
        dashboard_translate: '0px'
      })
    }
  }
  render () {
    return (
      <div className='dashboard' >
        <div className='slide-bar-container' onClick={() => this.handleSlideBarShow(false)} style={{transform: `translateX(${this.state.slide_translate})`}}>
          <SlideBar />
        </div>
        <div className='dashboard-container' style={{transform: `translateX(${this.state.dashboard_translate})`}}>
          <QueueAnim className='mask-animate' type='alpha' duration={1000} animConfig={{ opacity:[0.6, 0] }}>
          {this.state.show ?  <div key='mask' onClick={() => this.handleSlideBarShow(false)}><Mask /></div> : null}
          </QueueAnim>
          <HeaderNav headerActive={this.state.header_active} handleSlideBarShow={this.handleSlideBarShow}/>
          <One />
        </div>
      </div>
    )
  }
}
export default Dashboard
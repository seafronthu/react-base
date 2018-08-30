import React from 'react'
import { connect } from 'react-redux'
import { TweenOneGroup } from 'rc-tween-one';

import './index.styl'
import * as actions from '../../store/actions'
class Todo extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
        todo_value: '', // todo  input值
        show: true
    }
    this.enterAnim = [
      {
        opacity: 0, x: 30, backgroundColor: '#fffeee', duration: 0,
      },
      {
        height: 0,
        duration: 200,
        type: 'from',
        delay: 0,
        ease: 'easeOutQuad',
        onComplete: this.onEnd,
      },
      {
        opacity: 1, x: 0, duration: 250, ease: 'easeOutQuad',
      },
      { delay: 1000, backgroundColor: '#fff' },
    ]
    this.leaveAnim = [
      { duration: 250, opacity: 0 },
      { height: 0, duration: 200, ease: 'easeOutQuad' },
    ]
    this.changeTodoFunc = this.changeTodoFunc.bind(this)
    this.addTodoFun = this.addTodoFun.bind(this)
  }
  componentDidMount () {
    this.last_click_time = 0 // 最后一次点击时间
    this.click_timer = null  // 计时器
  }
  changeTodoFunc (v) {
    this.setState({
      todo_value: v.target.value
    })
  }
  addTodoFun () {
    if (this.state.todo_value === '') {
      return
    }
    let props = this.props
    let lastClickTime = this.last_click_time
    let nowTime = new Date().getTime()
    if (nowTime - lastClickTime < 400) { // 双击
      this.click_timer && clearTimeout(this.click_timer)
      this.last_click_time = 0
      props.actionIncreaseTodoData(this.state.todo_value)
    } else { // 单击
      this.last_click_time = nowTime
      this.click_timer = setTimeout(() => {
          props.actionIncreaseTodoDataAsync(this.state.todo_value)
        }, 400)
    }
  }
  render () {
    const props = this.props
    return (
      <div className='todo-container'>
        <h4 className='todo-title'>这是一个todo</h4>
        <dl className='input-container'>
          <dd className='input-todo-increase'>
            <input className='input-todo-content' onChange={this.changeTodoFunc}/>
          </dd>
          <dt className='input-todo-btn'
           onClick={this.addTodoFun}>添加</dt>
        </dl>
        <TweenOneGroup className='todo-list' component="ul"
        appear={false}
        exclusive
         enter={this.enterAnim}
         leave={this.leaveAnim}>
          {props.todoData.nameArr.length > 0 ? props.todoData.nameArr.map(v => {
            return (
              <li className='todo-list-block' key={v.key}>
                <span>{v.name}</span>
                <i onClick={() => props.actionDecreaseTodoData(props.todoData.nameArr, v.key)}>〤</i>
              </li>
            )
          }) : null}
        </TweenOneGroup>
        <p className='todo-loading'>{props.todoData.value ? props.todoData.value.split('').map((v, i) => (<span key={i}>{v}</span>)) : ''}</p>
      </div>
    )
  }
}
export default connect(state => state, actions.changeTodoData)(Todo)
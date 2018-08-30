import React from 'react';

import canvasLoding from '../../utils/canvasLoading'
import './index.styl'
class Loading extends React.Component {
  componentDidMount () {
    canvasLoding(this.can)
  }
  render () {
    const props = this.props
    return (
      <div className='loading'>
        {props.error ? <div>Error! <button onClick={ props.retry }>Retry</button></div> : null}
        <div className='loading-canvas-container' style={{display: props.pastDelay ? 'flex' : 'none'}}>
          <canvas className='loading-canvas' ref={can => this.can = can}></canvas>
        </div>
      </div>
    )
}
}
export default Loading
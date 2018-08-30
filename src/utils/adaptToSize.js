(function (doc, win, unfi) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth
      if (clientWidth === unfi) return
      docEl.style.fontSize = (clientWidth / 7.5) + 'px'
    }
  if (doc.addEventListener) {
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
  } else {
    win.attachEvent('on' + resizeEvt, recalc)
  }
})(document, window, undefined)
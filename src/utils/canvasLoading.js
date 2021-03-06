function canvasLoding(can) {
  let canvas = can
  let ctx = canvas.getContext("2d")
  let particle = []
  let angle = Math.PI / 4
  canvas.width = document.documentElement.offsetWidth
  canvas.height = document.documentElement.offsetHeight
  let width = canvas.width
  let height = canvas.height

  function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  function retinaReady() {
    let pixelRatio = window.devicePixelRatio || 1
    let backingStore = ctx.webkitBackingStorePixelRatio || 1
    let ratio = pixelRatio / backingStore // public var
    if (pixelRatio !== backingStore) {
      let oldWidth = canvas.width
      let oldHeight = canvas.height
      canvas.width = oldWidth * ratio
      canvas.height = oldHeight * ratio
      canvas.style.width = oldWidth / 2 + "px"
      canvas.style.height = oldHeight / 2 + "px"
      ctx.scale(ratio, ratio)
    }
  }
  retinaReady()

  function run(a) {
    let r = 140
    let x = r * Math.sin(a) + width / 2
    let y = r * Math.cos(a) + ((height / 2) - 80)
    let p
    p = new Particle(x, y)
    particle.push(p)
  }

  function Particle(x, y) {
    this.x = x
    this.y = y
    this.r = getRandomInt(10, 16)
    this.v = {
      x: 0,
      y: 0
    }
    this.a = {
      x: 0,
      y: 0
    }
    this.al = 1
  }

  Particle.prototype.update = function () {
    this.a.x = getRandomInt(-0.001, 0.001)
    this.a.y = getRandomInt(0.01, 0.02)
    this.v.x += this.a.x
    this.v.y += this.a.y
    this.x += this.v.x
    this.y += this.v.y

    if (this.r >= 0.01) {
      this.r -= 0.2
      this.al -= 0.001
    } else {
      this.r = 0
      this.al = 0
    }
  }

  Particle.prototype.draw = function () {
    ctx.fillStyle = "rgba(255,187,236," + this.al + ")"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    ctx.fill()
  }

  function animate() {
    ctx.clearRect(0, 0, width, height)
    run(angle)
    requestAnimationFrame(animate)
    for (let j = 0; j < particle.length; j++) {
      let p = particle[j]
      p.update()
      p.draw()
    }

    if (angle <= 2 * Math.PI) {
      angle += 0.04
    } else {
      angle = 0
    }
  }
  animate()
}
export default canvasLoding
var canvas = document.querySelector('#canvas')
canvas.width = 700
canvas.height = 700
canvas.style.border = '2px solid'

var ctx = canvas.getContext('2d')


class Cir {
    constructor(dx, dy, radius, startAngle, endAngle, counterClockwise, color) {
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.counterClockwise = counterClockwise
        this.color = color
    }
    draw() {
        ctx.beginPath()
        ctx.strokeStyle = this.color
        ctx.arc(this.dx, this.dy, this.radius, this.startAngle, this.endAngle, this.counterClockwise)
        ctx.stroke()
    }
}

var cir = new Cir(350, 350, 200, 0, 2 * Math.PI, false)
cir.draw()

var cir = new Cir(420, 300, 30, 0, 2 * Math.PI, false)
cir.draw()

var cir = new Cir(280, 300, 30, 0, 2 * Math.PI, false)
cir.draw()

var cir = new Cir(350, 350, 150, 0, Math.PI, false)
cir.draw()












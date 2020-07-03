var canvas = document.querySelector('#canvas')
canvas.width = 1000
canvas.height = 1000
canvas.style.border = '2px solid red'

var ctx = canvas.getContext('2d')


class Rect {
    constructor(dx, dy, width, height, color) {
        this.dx = dx
        this.dy = dy
        this.width = width
        this.height = height
        this.color = color
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.rect(this.dx, this.dy, this.width, this.height)
        ctx.fill()
    }
}

var rect = new Rect(0, 0, 200, 100, 'red')
rect.draw()

var rect = new Rect(800, 0, 200, 200, 'blue')
rect.draw()

var rect = new Rect(0, 600, 300, 400, 'green')
rect.draw()

var rect = new Rect(700, 700, 300, 300, 'yellow')
rect.draw()

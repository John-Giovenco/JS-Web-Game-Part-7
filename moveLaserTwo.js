function newLaserTwo(x, y) {
    let element = newImage('./asset/sword.png')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveLaser() {
        
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveLaser, 1)

    async function walkSouth(time) {
        direction = 'south'
        element.src = `./assets/sword.png`
        await sleep(time)
        stop()
    }

    async function stop() {
        direction = null
        element.src = `./assets/sword.png`
        await sleep(time)
        stop()
    }

    return {
        element: element,
        walkSouth: walkSouth,
        stop: stop
    }
}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    }) 
}
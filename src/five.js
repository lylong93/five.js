import Colleter from './collecter'

class Five {
    constructor() {
        this.init()
    }
    init() {
        console.log('init')
        const collet = new Colleter()
        collet.captureErr()
    }
}

export default Five
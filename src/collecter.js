class Colleter {
    constructor() {
        // this.captureErr()
    }
    //捕获
    captureErr() {
        this.startCapture()
        this.initPerformance()
    }
    //开始收集
    startCapture() {
        window.addEventListener('error', err => {
            console.log(
                'error event:', err
            );
            // return true;
        })

        window.addEventListener('unhandledrejection', err => {
            console.log(
                'unhandledrejection event:', err
            );
            // return true;
        })
    }
    //停止收集
    stopCapture() {

    }


    initPerformance(){
        const Performance = window.performance
        const {timing} = Performance

        console.log('timing',timing)
    }
}

export default Colleter
import Five from './five'

const createFive = (option) => {
    console.log('option',option)
    const five  = new Five(option)
}
window.createFive = createFive
export default createFive
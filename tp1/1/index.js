const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let position_depart = input[0]
    const top100 = 1000
    const top10000 = 100
    const nul = "KO" 
    for(var km = 1; km < input.length; km++) {
      let chiffres = input[km].split(" ");
      position_depart += parseInt(chiffres[0])
      position_depart -= parseInt(chiffres[1])
    }
    if(position_depart <= 100){
      return top100
    } else if( position_depart <= 10000) {
      return top10000
    } else {
      return nul
    }
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}
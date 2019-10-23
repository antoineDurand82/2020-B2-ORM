const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let nb_carton = input[0]
    var poids = 0
    var poids_max = 100
    var test = 0
    for(var i = 1; i < input.length; i++)
    {
      
      poids += input[i]
      console.log(poids)
      test = poids_max / poids
      console.log(test)
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
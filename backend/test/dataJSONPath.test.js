const dataJSON = require('../../data.json')

try{

    dataJSON ? console.log({message:'We are recieving data from the path "../data.json"', data: dataJSON}) 
    : console.log({message: 'We are not recieving data from the path "../data.json"'})

} catch {
    console.log(err.message)
}

module.exports = dataJSON
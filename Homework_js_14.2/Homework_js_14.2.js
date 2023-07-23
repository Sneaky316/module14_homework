const jsonString = 
`{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`
const data = JSON.parse(jsonString)
const jsonArr = Array.from(data.list)
const list = {this: jsonArr}
console.log(list)
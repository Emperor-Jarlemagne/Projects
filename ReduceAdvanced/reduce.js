import fs from 'fs'

fs.readFileSync('list.txt', 'utf8')
.trim()    
.split('\n')
.map(line => line.split('\t'))

.reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
        item: line[1],
        price: line[2],
        quantity: line[3]
    })
    return customers
}, {})

console.log('output', JSON.stringify(output, null, 2))
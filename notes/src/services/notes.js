
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default {
// The labels to the left of the colon in the object definition are the keys of the object, 
// whereas the ones to the right of it are variables that are defined inside of the module.
// could be written simply as ("getAll, create, and update", since they are the same)
    getAll : getAll,
    create : create,
    update : update
}

import axios from 'axios'
const baseUrl = '/api/notes'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const update = async (id, newObject) => {
    const request = await axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const noteService = {
    create,
    update,
    getAll,
    setToken,
}

export default noteService

// The labels to the left of the colon in the object definition are the keys of the object,
// whereas the ones to the right of it are variables that are defined inside of the module.
// could be written simply as ("getAll, create, and update", since they are the same)
//    getAll : getAll,
//    create : create,
//    update : update

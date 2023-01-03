// This is part of the JSON data 
{
    id: generateId(),
}


const generateId = () => {
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
    return maxId + 1
}
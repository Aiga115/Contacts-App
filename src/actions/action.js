export const insert = data => {
    return {
        type: 'INSERT',
        payload: data
    }
}

export const deleteIndex = id => {
    return {
        type: 'DELETE',
        payload: id
    }

}
export const update = data => {
    return {
        type: 'UPDATE',
        payload: data
    }

}

export const updateIndex = index => {
    return {
        type: 'UPDATE-INDEX',
        payload: index
    }

}

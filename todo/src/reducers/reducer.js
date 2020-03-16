 export const initialState =[ {
    item: 'learn about reducers',
    completed: false,
    id: 12345 
}]
export const reducer = (state, action) =>{
switch (action.type) {
    case 'add_item':
        return[...state, {
            item:action.payload,
            completed: false,
            id: Date.now()
        }]
        case 'toggle_status':
            return state.map((item)=> {
                if (item.id ===action.payload){
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }else 
                return item;
            })
            case 'remove_completed':
                return state.filter(item=> !item.completed)
}
}

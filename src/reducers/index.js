import { INCREMENT, DECREMENT, RESET, ADD_EVENT, ALL_DELETE, DELETE, THREE, TODO} from '../actions/index';

const reducer = (state = [], action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1 };

        case DECREMENT:
            return {...state, count: state.count - 1 };

        case RESET:
            return {...state, count: 0};

        case ADD_EVENT:
          const event = {title: action.title, body: action.body, comment: action.comment}
          const id = state.length + 1; 
          return [...state, { id, ...event } ];

        case ALL_DELETE:
            return [];
        
        case DELETE:
            const point = state.filter(state => state.id !== action.id);
            return point
        
        case THREE:
            if(state.count === 0)
               return{...state, count: state.count }
        
            if(state.count % 3 === 0){
              return {...state, count: state.count +10}
            } else{
                return state
            }
            
        case　TODO:
            console.log(action.data)
            return state


            default:
                return state;
    }
};

export default reducer;
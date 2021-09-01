import * as actionTypes from '../actions/actionTypes' 




const initialState = {
   users : [],
   user:{},
   loading:false,
   error:""
    
    

}
// const storage =  localStorage.setItem('data' ,JSON.stringify(initialState.users))
        





        const reducer = ( state = initialState, action ) => {

            switch ( action.type ) {

            case actionTypes.FETCH_USERS_START :  
            return {
                     ...state,
                     loading:true
            }
            case actionTypes.FETCH_USERS_SUCCESS   :  
            return {
              ...state,
              users: action.users,
              loading: false
            }
            
            case actionTypes.FETCH_USERS_FAIL :
            return {
              ...state,
               loading: false,
               error: action.error
            }

            // case actionTypes.CREATE_USER:    
            // return {
            //   ...state,
            //   loading:false            
            //           }
                     
                 
                case actionTypes.DELETE_USER :
                  case actionTypes.CREATE_USER: 
                  case actionTypes.EDIT_USER:  
               
                return  {
                    ...state,
                    loading:false,
                   
                };

                case actionTypes.SINGLE_USER :                
                return  {
                    ...state,
                    user: action.payload,
                    loading:false,                   
                }
              ;

                // case actionTypes.EDIT_USER:               

                //     return state.users.map(user => {
                //         if (user.id === action.payload.id) {
                //           return {
                //             ...user,
                //             ...action.payload
                //           };
                //         } else {
                //           return user;
                //         }
                //       });
                 

              


        
                default:
                    return state;
            }
        }

        export default reducer;

        
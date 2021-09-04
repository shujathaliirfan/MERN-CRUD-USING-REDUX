import * as actionTypes from '../actions/actionTypes' 




const initialState = {
   token : null,
   currentUser:{},
   loading:false,
   error:""
    
    

}
// const storage =  localStorage.setItem('data' ,JSON.stringify(initialState.users))
        





        const Authreducer = ( state = initialState, action ) => {

            switch ( action.type ) {

            case actionTypes.AUTH_REQUEST :  
            return {
                     ...state,
                     loading:true
            }
            case actionTypes.AUTH_SUCCESS   :  
            return {
              ...state,
              currentUser: action.user,
              token : action.token,
              loading: false
            }
            
            case actionTypes.AUTH_FAIL :
            return {
              ...state,
               loading: false,
               error: action.error
            }
        
                default:
                    return state;
            }
        }

        export default Authreducer

        
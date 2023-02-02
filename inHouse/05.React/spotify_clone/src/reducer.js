export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    //Remove after finished developed!!
    token : 'BQCNrBbQTZhwx5I4qZYYuGrrAfSxBah_9cYWG-d-NMDQxD2YEf…GzBrt7jLG_dXGXseei-Kg164YKkaNIzv4omEQnjx7UmQlsDG',
    };

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user : action.user,
            };
        case 'SET_TOKEN' :
            return {
                ...state,
                token : action.token,
            };
        case 'SET_PLAYLISTS' :
            return {
                ...state,
                playlists : action.playlists,
            }  
        default :
            return state;
    }
}//reducer

export default reducer;
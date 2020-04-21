import {http} from './BaseRequest'
export const User = {
    authenticate(username,password){
        return http.post('authenticate/',{'username':username,'password':password},true)
    },

    signup(userData){
        return http.post('users/',userData,true)
    }
}


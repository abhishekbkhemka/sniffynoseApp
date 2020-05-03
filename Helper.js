import {AsyncStorage} from 'react-native'
import {USER_PROFILE_KEY} from './constants/Constant'
const helper = {
    isNameValid: function(name){
        if(!name || name.length<1){return false}
        var patt = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", )
        return patt.test(name.trim())
    },
    isPhoneNumberValid: function(phoneNumber){
        if(!phoneNumber || phoneNumber.length<1){return false}
        var patt = new RegExp("^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$")
        return patt.test(phoneNumber.trim())
    },

    isEmailValid: function(email){
        if(!email || email.length<1){return false}
        var patt = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
        return patt.test(email.trim())
    },
    getLocalUserProfile : async function(cb){
        let userProfile = await AsyncStorage.getItem(USER_PROFILE_KEY);
        userProfile = JSON.parse(userProfile)
        if(cb){cb(userProfile)}
    },
    setLocalUserProfile : async function(data,cb){
        await AsyncStorage.setItem(USER_PROFILE_KEY,JSON.stringify(data));
        if(cb){cb()}
    },
    removeLocalUserProfile : function () {
        AsyncStorage.multiRemove([USER_PROFILE_KEY])
    }
}

export default helper;
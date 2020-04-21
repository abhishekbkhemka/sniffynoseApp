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
    }
}

export default helper;
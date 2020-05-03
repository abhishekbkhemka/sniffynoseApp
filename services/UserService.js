import {http} from './BaseRequest'
export const User = {
    authenticate(username,password){
        return http.post('authenticate/',{'username':username,'password':password},true)
    },

    signup(userData){
        return http.post('signup/',userData,true)
    },

    getUserProfile(id){
        return http.get('users/'+id+'/',true)
    },


    getServices(){
        return http.get('grooming/services')
    },

    getPackages(){
        return http.get('grooming/packages')
    },

    getUpcomingAppointments(){
        return http.get('grooming/appointments/?filter=upcoming',true)
    },

    requestAppointment(data){
        return http.post('grooming/appointments/',data)
    },

    startGrooming(appointmentId){
        return http.post('grooming/appointments/'+appointmentId+'/action/',{name:'start-grooming'})
    },
    verifystartGroomingOtp(appointmentId,otp){
        return http.post('grooming/appointments/'+appointmentId+'/action/',{name:'start-grooming',token:otp})
    }
}


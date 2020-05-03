import {http} from './BaseRequest'
export const User = {
    authenticate(username,password){
        return http.post('authenticate/',{'username':username,'password':password},true)
    },

    signup(userData){
        return http.post('users/',userData,true)
    },


    getServices(){
        return http.get('grooming/services',true)
    },

    getPackages(){
        return http.get('grooming/packages',true)
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


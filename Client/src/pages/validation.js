const validation = (value) =>{

    let errors = {};

    if(!value.username){
        errors.username = "Username is required."
    }
    if(!value.email){
        errors.email = "Email is required."
    }else if(!/\S+@\S+\.\S+/.test(value.email)){
        errors.email = "Email is Invalid."
    }
    if(!value.password){
        errors.password = "Password is required."
    }else if(value.password.length<7){
        errors.password = "Password must be atleast of 7 letters."
    }
    if(!value.firstname){
        errors.firstname = "firstname is required."
    }
    if(!value.lastname){
        errors.lastname = "lastname is required."
    }
    if(!value.mobile){
        errors.mobile = "mobile number is required."
    }else if(value.mobile.length<10){
        errors.password = "Mobile number must be of 10 length."
    }
    if(!value.city){
        errors.city = "City is required."
    }
    if(!value.Address){
        errors.Address = "Address is required."
    }
    if(!value.dateofbirth){
        errors.dateofbirth= "Date of Birth is required."
    }else if(!/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(value.dateofbirth)){
        errors.dateofbirth = "Enter Date of birth in dd/mm/yyyy"
    }
    if(!value.state){
        errors.state = "State is required."
    }
    if(!value.gender){
        errors.gender = "Gender is required."
    }  
    if(!value.type){
        errors.type = "Select a Type."
    }        
    return errors;
} 
export default validation;
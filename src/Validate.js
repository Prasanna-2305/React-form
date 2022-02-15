

const Validate = (values) => {
    let errors= {};
    if(!values.fullname){
        errors.fullname="Name is required"
    }
    if(!values.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email ="email is invalid"
    }
    if(!values.password){
        errors.password="Password is required"
    }else if(values.password.length<8){
        errors.email ="password should be of 8 character"
    }
  return errors;
}

export default Validate;
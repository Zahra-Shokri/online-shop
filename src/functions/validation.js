export const isValidForm = (data, type) => {
    const errors = {};

    // Email input
    if(!data.email) 
        errors.email = 'Email is required.';
    else if(data.email.length < 6 || (!/\S+@\S+\.\S+/.test(data.email)))
        errors.email = 'Email address invalid. ';
    else
        delete errors.email;
    
    // Password input
    if(!data.password)
        errors.password = 'Password is required.';
    else if(data.password.length < 6)
        errors.password = 'Password need to be 6 charecters or more.';
    else
        delete errors.password;
    

    if(type === 'SIGNUP') {
        
        // User Name input
        if(!data.name.trim())
            errors.name = 'Name is required.';
        else if(data.name.length < 3)
            errors.name = 'Name is smaller than 3 character.';
        else
            delete errors.name;
        
        // Confirm Password input
        if(!data.confirmPassword)
            errors.confirmPassword = 'Confirm the password.';
        else if(data.confirmPassword !== data.password)
            errors.confirmPassword = "Password isn't match.";
        else
            delete errors.confirmPassword;

        // Checkbox
        if(data.isAccepted)
            delete errors.isAccepted;
        else
            errors.isAccepted = 'Please accept our regulations';
    }
    
    
    return errors;
}
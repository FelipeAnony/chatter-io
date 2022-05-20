const validateForm = {
  email: (email: string) => {
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if(!email.trim()) {
      return 'the email field cannot be empty.';
    }
    if (!regexEmail.test(email.trim())){
      return "Invalid Email.";
    }
  },
  
  name: (name:string) => {
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/

    if(!name.trim()) {
      return 'the name field cannot be empty.';
    }

    if (!regexName.test(name.trim())){
      return "The field name only accepts letters and spaces."
    } 
  },

  password: (password: string, confirmPassword: string) => {
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

    if(!password.trim()) {
      return 'the password field cannot be empty.';
    }
    if (!regexPassword.test(password.trim())){
      return "the password must contain at least 4 characters, at least one letter and one number"
    } 
    if(password !== confirmPassword) {
      return 'passwords do not match.';
    }
  }
}

export default validateForm;
interface Ierror {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface Ivalues {
    name: string;
    email: string;
    password: string;
    re_password: string;
}
    
const validate = (values: Ivalues) => {
    const errors: Ierror = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    if (!values.name) {
        errors.name = 'Name is required';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 6 or more characters';
    }

    if (!values.re_password) {
        errors.confirmPassword = 'Confirm password is required';
    } else if (values.password !== values.re_password) {
        errors.confirmPassword = 'Password and Confirm password must match';
    }

    return errors;
};

export default validate;

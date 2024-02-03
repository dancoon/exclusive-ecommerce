const validate = (value: string) => {
    let error: string = "";
    if (!value) {
        error = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Email is invalid';
    }
    return error;
};

export default validate;

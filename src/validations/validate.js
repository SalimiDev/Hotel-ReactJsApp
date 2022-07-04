export const validate = inputData => {
    const errors = {};

    if (!inputData.name.trim()) {
        errors.name = 'Name Required!';
    } else {
        delete errors.name;
    }

    if (!inputData.subject.trim()) {
        errors.subject = 'Subject Required!';
    } else {
        delete errors.subject;
    }

    if (!inputData.message.trim()) {
        errors.message = 'Please enter your message.';
    } else {
        delete errors.message;
    }

    if (!inputData.email) {
        errors.email = 'Email Required!';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputData.email)) {
        errors.email = 'Email is not valid';
    } else {
        delete errors.email;
    }

    return errors;
};

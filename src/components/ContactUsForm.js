import React, { useState, useEffect } from 'react';
import styles from '../styles/layout/ContactUsForm.module.scss';
//Validation
import { validate } from '../validations/validate';
//ReactToastify
import { notify } from '../validations/toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//A server for sending emails
import emailjs from '@emailjs/browser';
//Succuss Icon
import { CheckCircleOutline } from '@mui/icons-material';

const ContactUsForm = () => {
    const [formSendStatus, setFormSendStatus] = useState('SEND');
    //inputs value===inputData
    const [inputData, setInputData] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    //while a input focused a boolean will return in this stat and shows the input is touched and it'll control showing the errors just when it touched not always.
    const [touched, setTouched] = useState({});
    const inputOnFocus = e => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    const inputOnChange = e => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };
    //Set all erros on rendering component
    useEffect(() => {
        setErrors(validate(inputData));
    }, [inputData]);

    //Handle the submit button form
    const formOnSubmit = async e => {
        e.preventDefault();
        setFormSendStatus('PENDING');
        //Send message to emailJs server and manage notifs
        if (!Object.keys(errors).length) {
            emailjs.sendForm('service_7h7t2yf', 'template_llgfeq7', e.target, '5IeW2pJ4Ug9vZ5U9O').then(
                result => {
                    result.text && notify('success', 'Your message sent.');
                    setFormSendStatus('SUCCESS');
                },
                error => {
                    error.text && notify('failed', `${error.text}.Please try later..`);
                    error.text && setFormSendStatus('FAILED');
                },
            );
        } else {
            notify('error', 'Please enter the valid data!');
            setTouched({
                name: true,
                email: true,
                subject: true,
                message: true,
            });
            setFormSendStatus('FAILED');
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setFormSendStatus('SEND');
        }, 5000);
    }, [formSendStatus]);

    const { name, email, subject, message } = inputData;

    return (
        <div className={styles.contactUsForm}>
            <form onSubmit={formOnSubmit}>
                <div className={styles.formField}>
                    <input
                        className={errors.name && touched.name ? styles.invalidInput : styles.validInput}
                        type='text'
                        name='name'
                        value={name}
                        placeholder='name'
                        onChange={inputOnChange}
                        onFocus={inputOnFocus}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>

                <div className={styles.formField}>
                    <input
                        className={errors.email && touched.email ? styles.invalidInput : styles.validInput}
                        type='text'
                        name='email'
                        value={email}
                        placeholder='Email'
                        onChange={inputOnChange}
                        onFocus={inputOnFocus}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>

                <div className={styles.formField}>
                    <input
                        className={errors.subject && touched.subject ? styles.invalidInput : styles.validInput}
                        type='text'
                        name='subject'
                        value={subject}
                        placeholder='Subject'
                        onChange={inputOnChange}
                        onFocus={inputOnFocus}
                    />
                    {errors.subject && touched.subject && <span>{errors.subject}</span>}
                </div>

                <div className={styles.formField}>
                    <textarea
                        className={errors.message && touched.message ? styles.invalidInput : styles.validInput}
                        type='text'
                        name='message'
                        value={message}
                        placeholder='Your Message'
                        onChange={inputOnChange}
                        onFocus={inputOnFocus}></textarea>
                    {errors.message && touched.message && <span>{errors.message}</span>}
                </div>
                <br />
                <div className={styles.btn_container}>
                    <button type='submit' className='btn btn-orange btn-sm'>
                        {` ${formSendStatus === 'SUCCESS' ? 'SENT' : 'SEND'}`}
                    </button>

                    <div
                        className={`${
                            (formSendStatus === 'PENDING' && styles.pending) ||
                            (formSendStatus === 'FAILED' && styles.failed)
                        }`}></div>
                    <span className={`${formSendStatus === 'SUCCESS' ? styles.successIcon : styles.hideIcon}`}>
                        <CheckCircleOutline sx={{ fontSize: 35 }} />
                    </span>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactUsForm;

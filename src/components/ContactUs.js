import React from 'react';

    // state needs put into custom hook
    // include contactFormValues as a state array
    const onChange = e => {
        return null;
    };

const ContactUs = ({contactFormValues}) => {
    return (
        <form>
            <h1>Contact Us</h1>
            <label>
                Name:
                <input
                    name='name'
                    className='name'
                    type='text'
                    minLength='3'
                    placeholder='ex: Jane Doe'
                    onChange={onChange}
                    // value={contactFormValues.name}
                />
            </label>
            <label>
                Email:
                <input
                    name='email'
                    className='email'
                    type='email'
                    placeholder='ex: JaneDoe@email.com'
                    onChange={onChange}
                    // value={contactFormValues.email}
                />
            </label>
            <label>
                Message:
                <textarea 
                    name='message'
                    className='message'
                    onChange={onChange} 
                    // value={contactFormValues.message}
                />
            </label>
        </form>
    );
}

export default ContactUs;
import { Link } from 'react-router-dom';
import '/src/Pages/registrationPage/registrationPage.css'
import { useState } from 'react';
import { HiOutlineLogin } from "react-icons/hi";
const RegistrationPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        number: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        number: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [formError, setFormError] = useState('');
    const validate = () => {
        const errors = {};

        // Name validation
        if (!formData.name) errors.name = 'Name is required';

        // Password validation (e.g., minimum 6 characters)
        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        // Confirm Password validation
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords must match';
        }

        // Email validation
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
        }

        // Number validation
        if (!formData.number) {
            errors.number = 'Number is required';
        } else if (!/^\d+$/.test(formData.number)) {
            errors.number = 'Number must be digits only';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form submitted successfully!');
            setFormError(''); // Clear any previous form errors
            // Handle form submission (e.g., send data to server)
        } else {
            setFormError('All fields are required and must be valid.');
        }
    };


    return (<div style={{ backgroundColor: 'white', height: '655px' }}>
        <div className="headerDiv">
            <Link to='/login' className='link-tag'><HiOutlineLogin /></Link>
        </div>
        <h1 style={{marginLeft:'520px'}}>Registration Form</h1>
        {/* <img src={Rimg} alt="" style={{ width: '99.3%', height: '600px', position: 'absolute' }} /> */}
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>

            <form onSubmit={handleSubmit}>
                <p style={{ color: 'red', marginLeft: '50px', marginTop: '0px', fontSize: '20px' }} className='errortag'>{formError}</p>
                <div >
                    <input className={`Login-inputfield input-gap`} type=" text" name='name' value={formData.name} onChange={handleChange} placeholder=" Enter your name " />
                    <p className='errortag' style={{ marginLeft: '282px' }} >{errors.name}</p>
                    <input className={`Login-inputfield input-gap`} type=" Email" name='email' value={formData.email} onChange={handleChange} placeholder=" Enter your Email" />
                    <p className='errortag' style={{ marginLeft: '282px' }} >{errors.email}</p>
                    <input className={`Login-inputfield input-gap`} type=" number" name='number' value={formData.number} onChange={handleChange} placeholder=" Enter your phone number" />
                    <p className='errortag' style={{ marginLeft: '270px' }} >{errors.number}</p>
                    <input className={`Login-inputfield input-gap`} type="password" name='password' value={formData.password} onChange={handleChange} placeholder=" Enter password" />
                    <p className='errortag' style={{ marginLeft: '257px' }} >{errors.password}</p>
                    <input className={`Login-inputfield input-gap`} placeholder=" confrim password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    <p className='errortag' style={{ marginLeft: '230px' }} >{errors.confirmPassword}</p>

                    <br />
                    <button style={{ marginLeft: '50px', marginTop: '20px', backgroundColor: '#5b5fc7' }} className='loginButton'>Submit</button>
                </div>

            </form>
        </div>
    </div>)
}; export default RegistrationPage;


import React, { useEffect, useState } from 'react';
import { signUp } from "../../services/user-service";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  // const [fullName, setFullName] = useState('');
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  // const [mobileNo, setMobileNo] = useState('');
  // const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    age: '',
    mobile: '',
    password: '',
  })

  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);
  }, [data])


  const handleChange = (event,property) => {

    setData({ ...data, [property]: event.target.value })
    console.log(data);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation, data processing, submission logic here

    console.log('Form submitted:', data);

    signUp(data).then((resp) => {
      console.log(resp)
      console.log("Success log")

      toast.success("Sign Up Successfully!", {
        position: "top-right",
        autoClose: 1500,
      })

      setTimeout(function () {navigate('/signin')}, 3000);

      
    }).catch((error) => {
      console.log(error)
      console.log("errorlog")
    });


    // Reset form fields if needed
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src={require("../../images/logo.png")}
            alt="Your Company"
          />
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Account Here
          </h2>
        </div>
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Create Account</h1>
          <form onSubmit={handleSubmit}>
          
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="firstname"
              placeholder="First Name"
              value={data.firstname}
              onChange={(event) => handleChange(event, 'firstname')}
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastname"
              placeholder="Last Name"
              value={data.lastname}
              onChange={(event) => handleChange(event, 'lastname')}
            />
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={(event) => handleChange(event, 'email')}
            />
            <input
              type="number"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="age"
              placeholder="Age"
              value={data.age}
              onChange={(event) => handleChange(event, 'age')}
            />
            <input
              type="tel"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="mobile"
              placeholder="Mobile Number"
              value={data.mobile}
              onChange={(event) => handleChange(event, 'mobile')}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={(event) => handleChange(event, 'password')}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Terms of Service
            </a>
            and
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?{' '}
          <a className="no-underline border-b border-blue text-blue" href="../signin/">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

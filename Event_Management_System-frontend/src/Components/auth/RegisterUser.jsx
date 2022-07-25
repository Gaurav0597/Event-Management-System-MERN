import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'



const RegisterUser = () => {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  const register = () => {
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && password === reEnterPassword) {
      axios.post('http://localhost:5000/register', user).then((res) => {

       if(res.data.message==="Successfully Registerd"){
                    alert(res.data.message)
                    navigate("/login")
                }else{
                    alert("Innvalid  registration Credentials")
                }
                console.log(res)
      })
    } else {
      alert('invalid input')
    }
  }
  return (
    <section className="h-full w-9/12 m-auto gradient-form  ">
    <div className="container py-12 px-6 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="xl:w-10/12">
          <div className="block bg-white shadow-lg rounded-lg">
            <div className="lg:flex lg:flex-wr ap g-0">
              <div className="lg:w-6/12 px-4 md:px-0">
                <div className="md:p-12 md:mx-6">
                  <div className="text-center">
                    <img
                      className="mx-auto w-48"
                      src="https://logos.flamingtext.com/Name-Logos/Welcome-design-fluffy-name.png"
                      alt="logo"
                    />
                    <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">We are The Rajwan Team</h4>
                  </div>
                  <form>
                    <p className="mb-4">Please login to your account</p>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter Name here"
                        value={user.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="email"
                        className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              
                        placeholder="Enter Email Address Here"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        name="password"
                        className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            
                        placeholder="Enter Password Here"
                        value={user.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        name="reEnterPassword"
                        className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            
                        placeholder="ReEnterPassword Here"
                        value={user.reEnterPassword}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="text-center pt-1 mb-12 pb-1 ">
                      <button
                      onClick={register}
                        className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                       Register
                      </button>
                      <a className="text-gray-500" href="#!">Forgot password?</a>
                    </div>
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Already have an account?</p>
                      <Link to="/login"
                        type="button"
                        className="inline-block px-8 py-1 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                       Login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
              >
                <img src="RegistratrionZip.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default RegisterUser

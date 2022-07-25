import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login1, loginAdminId, loginAdminName, loginUser } from '../../Redux/Action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState({
      email: '',
      password: '',
    })
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setUser({
        ...user,
        [name]: value,
      })
    }
    const login = () => {
      axios
        .post('http://localhost:5000/login', user)
        .then((res) => {
          console.log(res.data)
          if(res.data.user.email=="gauravpetkar28@gmail.com"){
            dispatch(loginAdminId(res.data.user._id))
            dispatch(loginAdminName(res.data.user.name))
          }else{
            dispatch(login1(res.data.user._id))
            dispatch(loginUser(res.data.user.name))
          }
      
          if(res.data.message=="login succesfully"){
              toast("Login succesfully",{
                type:"success"
           })
           setTimeout(()=>{
               navigate('/')
           },3000)
                
          }
        
        })
        .catch(function (err) {
          
          toast("invalid credentials",{
            type:"error"
       })
        })
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
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      alt="logo"
                    />
                    <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">We are The Rajwan Team</h4>
                  </div>
                  <form>
                    <p className="mb-4">Please login to your account</p>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="email"
                        className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        // id="exampleFormControlInput1"
                        placeholder="Enter Email Address here"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        name="password"
                        className=" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="text-center pt-1 mb-12 pb-1">
                      <button
                       onClick={() => {
                        login()
                      }}
                        className="inline-block px-6 py-2.5  bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Log in
                      </button>
                      <a className="text-gray-500" href="#!">Forgot password?</a>
                    </div>
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Don't have an account?</p>
                      <Link to="/register"
                        type="button"
                        className="inline-block px-8 py-1 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                       Register
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
              >
                <img src="loginZip.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  </section>
  )
}

export default LoginUser
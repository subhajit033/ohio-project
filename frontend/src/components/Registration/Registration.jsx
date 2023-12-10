import { useState } from "react"


const Registration = () => {
    
  return (
    <div className="max-w-4xl mx-auto font-[sans-serif] text-[#333] p-6">
      <div className="text-center mb-16">
        
        <h4 className="text-xl font-semibold mt-3">Sign up into your account</h4>
      </div>
      <form>
        <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12">
          <div>
            <label className="text-sm mb-2 block">First Name</label>
            <input name="name" type="text" className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter name" />
          </div>
          <div>
            <label className="text-sm mb-2 block">Last Name</label>
            <input name="lname" type="text" className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter last name" />
          </div>
          <div>
            <label className="text-sm mb-2 block">Email Id</label>
            <input name="email" type="text" className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter email" />
          </div>
          <div>
            <label className="text-sm mb-2 block">Mobile No.</label>
            <input name="number" type="number" className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter mobile number" />
          </div>
          <div>
            <label className="text-sm mb-2 block">Password</label>
            <input name="password" type="password" className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter password" />
          </div>
          <div>
            <label className="text-sm mb-2 block">Confirm Password</label>
            <input name="cpassword" type="password" className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-blue-500" placeholder="Enter confirm password" />
          </div>
        </div>
        <div className="!mt-10">
          <button type="button" className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Registration
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

import {
  SignInButton,
  useUser
} from "@clerk/clerk-react";

function Register() {

  const navigate = useNavigate();

  const { isSignedIn } = useUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] =
  useState(false);


  useState(() => {

    if(isSignedIn){

      toast.success(
        "Login Successful 🎉"
      );

      navigate("/");

    }

  },[isSignedIn]);


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };


  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res =
      await API.post(
        "/auth/register",
        formData
      );

      toast.success(
        "Registration Successful 🎉"
      );

      navigate("/login");

    }

    catch(error){

      toast.error(

      error.response?.data
      ?.message ||

      "Registration Failed"

      );

    }

    finally{

      setLoading(false);

    }

  };


return (

<div className="min-h-screen bg-[#050816] text-white overflow-hidden">

<div className="grid lg:grid-cols-[45%_55%] min-h-screen">


{/* LEFT */}

<div className="relative border-r border-[#182033] flex justify-start">

<div className="w-full max-w-[560px] pl-10 lg:pl-16 pt-10 pb-10">

<div className="flex items-center gap-4 mb-16">

<div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-2xl">

🚀

</div>

<h1 className="text-4xl font-bold">

CollabApp

</h1>

</div>


<div className="inline-flex items-center px-5 py-2 rounded-full bg-purple-900/30 text-purple-300 mb-10">

✨ Join The Future of Collaboration

</div>


<h1 className="text-[64px] leading-[72px] font-bold">

Create Your
<br/>

Workspace &
<br/>

<span className="text-purple-500">

Start Growing.

</span>

</h1>


<p className="text-gray-400 text-xl mt-8">

Build projects, manage teams,
and collaborate smarter
using AI tools.

</p>

</div>

</div>


{/* RIGHT */}

<div className="flex items-center justify-center px-8 lg:px-16">

<div className="w-full max-w-[760px] bg-[#0F172A]/80 border border-[#1E293B] rounded-[36px] p-10">

<h2 className="text-6xl font-bold mb-4">

Register

</h2>

<p className="text-gray-400 text-xl mb-10">

Create your account

</p>



<form
onSubmit={handleSubmit}
className="space-y-8"
>

<div>

<label className="block mb-3">

Full Name

</label>

<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Enter full name"
className="w-full bg-[#111827] border border-gray-700 px-6 py-5 rounded-2xl"
required
/>

</div>



<div>

<label className="block mb-3">

Email Address

</label>

<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="Enter email"
className="w-full bg-[#111827] border border-gray-700 px-6 py-5 rounded-2xl"
required
/>

</div>



<div>

<label className="block mb-3">

Password

</label>

<input
type="password"
name="password"
value={formData.password}
onChange={handleChange}
placeholder="Create password"
className="w-full bg-[#111827] border border-gray-700 px-6 py-5 rounded-2xl"
required
/>

</div>


<button
type="submit"
disabled={loading}
className="w-full bg-gradient-to-r from-purple-500 to-purple-700 py-5 rounded-2xl text-xl font-semibold"
>

{
loading
?

"Creating..."

:

"Create Account"
}

</button>

</form>


<div className="flex items-center gap-4 my-10">

<div className="flex-1 h-px bg-gray-700"></div>

<span className="text-gray-500">

Or continue with

</span>

<div className="flex-1 h-px bg-gray-700"></div>

</div>



<div className="grid grid-cols-3 gap-5">


<SignInButton mode="modal">

<button className="border border-gray-700 py-4 rounded-2xl">

Google

</button>

</SignInButton>



<SignInButton mode="modal">

<button className="border border-gray-700 py-4 rounded-2xl">

GitHub

</button>

</SignInButton>



<SignInButton mode="modal">

<button className="border border-gray-700 py-4 rounded-2xl">

Microsoft

</button>

</SignInButton>


</div>


<p className="text-center text-gray-400 mt-10">

Already have an account?{" "}

<Link
to="/login"
className="text-purple-400"
>

Login

</Link>

</p>

</div>

</div>

</div>

</div>

);

}

export default Register;
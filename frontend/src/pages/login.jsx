import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

import {
  useSignIn
} from "@clerk/clerk-react";

function Login() {

  const navigate = useNavigate();

  const { signIn } = useSignIn();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Normal backend login
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success(
        "Login Successful 🎉"
      );

      setTimeout(() => {
        navigate("/");
      },1500);

    } catch (error) {

      console.log(error);

      toast.error(
        "Invalid Credentials"
      );

    } finally {

      setLoading(false);
    }
  };

  // GOOGLE
  const googleLogin = async () => {

    try {

      await signIn.authenticateWithRedirect({

        strategy:"oauth_google",

        redirectUrl:"/",

        redirectUrlComplete:"/"

      });

    } catch (err) {

      console.log(err);

      toast.error(
        "Google Login Failed"
      );
    }
  };

  // GITHUB
  const githubLogin = async () => {

    try {

      await signIn.authenticateWithRedirect({

        strategy:"oauth_github",

        redirectUrl:"/",

        redirectUrlComplete:"/"

      });

    } catch(err){

      console.log(err);

      toast.error(
        "Github Login Failed"
      );
    }
  };

  // MICROSOFT
  const microsoftLogin = async () => {

    try{

      await signIn.authenticateWithRedirect({

        strategy:"oauth_microsoft",

        redirectUrl:"/",

        redirectUrlComplete:"/"

      });

    }catch(err){

      console.log(err);

      toast.error(
        "Microsoft Login Failed"
      );
    }
  };

  return (

<div className="min-h-screen bg-[#050816] text-white overflow-hidden">

<div className="grid lg:grid-cols-[45%_55%] min-h-screen">

{/* LEFT */}

<div className="relative flex flex-col justify-center px-8 lg:px-16 py-16 border-r border-[#1A2235]">

<div className="absolute top-10 flex items-center gap-4">

<div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
👥
</div>

<h1 className="text-4xl font-bold">
CollabApp
</h1>

</div>

<div className="max-w-[520px] mt-16">

<div className="inline-flex px-5 py-2 rounded-full bg-purple-900/30 text-purple-300 mb-8">
✨ AI-Powered Collaboration
</div>

<h1 className="text-[68px] leading-[78px] font-bold">

Welcome Back!
<br/>

Great to See You
<br/>

<span className="text-purple-500">
Again.
</span>

</h1>

<p className="text-gray-400 text-2xl mt-8">

Log in to your account and continue collaborating with your team.

</p>

</div>

</div>


{/* RIGHT */}

<div className="flex items-center justify-center px-8">

<div className="w-full max-w-[760px] bg-[#0F172A]/80 border border-[#1E293B] rounded-[36px] p-14">

<h2 className="text-6xl font-bold mb-4">
Log In
</h2>

<p className="text-gray-400 mb-10">
Enter your credentials to access your account
</p>


<form
onSubmit={handleSubmit}
className="space-y-8"
>

<div>

<label>Email</label>

<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
className="w-full mt-3 bg-[#111827] border border-gray-700 px-6 py-5 rounded-2xl"
/>

</div>

<div>

<label>Password</label>

<input
type="password"
name="password"
value={formData.password}
onChange={handleChange}
className="w-full mt-3 bg-[#111827] border border-gray-700 px-6 py-5 rounded-2xl"
/>

</div>


<button
type="submit"
disabled={loading}
className="w-full bg-gradient-to-r from-purple-500 to-purple-700 py-5 rounded-2xl text-2xl font-semibold"
>
{loading ?
"Logging in..."
:
"Log In"}

</button>

</form>


<div className="flex items-center gap-4 my-10">

<div className="flex-1 h-px bg-gray-700"></div>

<span>
Or continue with
</span>

<div className="flex-1 h-px bg-gray-700"></div>

</div>


<div className="grid grid-cols-3 gap-5">

<button
onClick={googleLogin}
className="border border-gray-700 py-4 rounded-2xl"
>
Google
</button>

<button
onClick={githubLogin}
className="border border-gray-700 py-4 rounded-2xl"
>
GitHub
</button>

<button
onClick={microsoftLogin}
className="border border-gray-700 py-4 rounded-2xl"
>
Microsoft
</button>

</div>


<p className="text-center mt-10 text-gray-400">

Don't have an account?

<Link
to="/register"
className="text-purple-400 ml-2"
>
Register
</Link>

</p>

</div>

</div>

</div>

</div>

  );
}

export default Login;
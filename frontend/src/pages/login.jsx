import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";


function Login() {

  const navigate = useNavigate();

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
      toast.success("Login Successful");

      navigate("/");

    } catch (error) {

      console.log(error.response?.data);

      toast.error("Invalid Credentials");

    } finally {

      setLoading(false);
    }
  };

  
return (
  <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

    <div className="grid lg:grid-cols-[45%_55%] min-h-screen">

      {/* LEFT SIDE */}
      <div className="relative flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16 border-r border-[#1A2235]">

        {/* LOGO */}
        <div className="absolute top-10 left-8 lg:left-16 xl:left-24 flex items-center gap-4">

          <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-2xl">
            👥
          </div>

          <h1 className="text-4xl font-bold">
            CollabApp
          </h1>

        </div>

        <div className="max-w-[520px] mt-16">

          {/* BADGE */}
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 mb-8 text-lg">
            ✨ AI-Powered Collaboration
          </div>

          {/* HEADING */}
          <h1 className="text-[68px] leading-[78px] font-bold mb-8 tracking-tight">

            Welcome Back!
            <br />

            Great to See You
            <br />

            <span className="text-purple-500">
              Again.
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-2xl leading-relaxed mb-12">
            Log in to your account and continue
            collaborating with your team.
          </p>

          {/* DASHBOARD CARD */}
          <div className="bg-[#0E1628] border border-[#1E293B] rounded-[32px] p-6 shadow-2xl mb-12">

            <div className="flex justify-between items-center mb-6">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-purple-600 rounded-2xl"></div>

                <div>

                  <h3 className="font-semibold text-lg">
                    Team Workspace
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Dashboard Preview
                  </p>

                </div>
              </div>

              <div className="bg-purple-600 px-4 py-2 rounded-xl text-sm">
                Active
              </div>

            </div>

            <div className="space-y-5">

              <div className="bg-[#131D31] rounded-2xl p-4">

                <div className="flex justify-between mb-2 text-sm">
                  <span>Frontend Dashboard UI</span>
                  <span className="text-purple-400">85%</span>
                </div>

                <div className="w-full h-2 bg-gray-700 rounded-full">

                  <div className="w-[85%] h-2 bg-purple-500 rounded-full"></div>

                </div>
              </div>

              <div className="bg-[#131D31] rounded-2xl p-4">

                <div className="flex justify-between mb-2 text-sm">
                  <span>Authentication System</span>
                  <span className="text-green-400">60%</span>
                </div>

                <div className="w-full h-2 bg-gray-700 rounded-full">

                  <div className="w-[60%] h-2 bg-green-500 rounded-full"></div>

                </div>
              </div>

            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-8">

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-2xl">
                💬
              </div>

              <div>

                <h3 className="text-xl font-semibold mb-1">
                  Real-time Team Chat
                </h3>

                <p className="text-gray-400 text-lg">
                  Communicate instantly with your team.
                </p>

              </div>
            </div>

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-2xl">
                ✅
              </div>

              <div>

                <h3 className="text-xl font-semibold mb-1">
                  Smart Task Management
                </h3>

                <p className="text-gray-400 text-lg">
                  Organize and track tasks efficiently.
                </p>

              </div>
            </div>

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-2xl">
                🤖
              </div>

              <div>

                <h3 className="text-xl font-semibold mb-1">
                  AI Assistant
                </h3>

                <p className="text-gray-400 text-lg">
                  Boost productivity using AI tools.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-8 lg:px-16">

        <div className="w-full max-w-[760px] bg-[#0F172A]/80 border border-[#1E293B] backdrop-blur-2xl rounded-[36px] p-10 lg:p-14 shadow-2xl">

          {/* HEADER */}
          <div className="mb-12">

            <h2 className="text-6xl font-bold mb-4">
              Log In
            </h2>

            <p className="text-gray-400 text-xl">
              Enter your credentials to access your account
            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* EMAIL */}
            <div>

              <label className="block mb-3 text-xl font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#111827] border border-gray-700 focus:border-purple-500 outline-none px-6 py-5 rounded-2xl text-xl"
              />
            </div>

            {/* PASSWORD */}
            <div>

              <label className="block mb-3 text-xl font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-[#111827] border border-gray-700 focus:border-purple-500 outline-none px-6 py-5 rounded-2xl text-xl"
              />
            </div>

            {/* OPTIONS */}
            <div className="flex justify-between items-center text-gray-400 text-lg">

              <label className="flex items-center gap-3">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-purple-400"
              >
                Forgot Password?
              </button>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 py-5 rounded-2xl text-2xl font-semibold"
            >
              Log In
            </button>

          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-10">

            <div className="flex-1 h-px bg-gray-700"></div>

            <span className="text-gray-500 text-lg">
              Or continue with
            </span>

            <div className="flex-1 h-px bg-gray-700"></div>

          </div>

          {/* SOCIAL */}
          <div className="grid grid-cols-3 gap-5">

            <button className="border border-gray-700 hover:bg-[#1B2435] transition py-4 rounded-2xl text-lg">
              Google
            </button>

            <button className="border border-gray-700 hover:bg-[#1B2435] transition py-4 rounded-2xl text-lg">
              GitHub
            </button>

            <button className="border border-gray-700 hover:bg-[#1B2435] transition py-4 rounded-2xl text-lg">
              Microsoft
            </button>

          </div>

          {/* FOOTER */}
          <p className="text-center text-gray-400 mt-10 text-xl">

            Don’t have an account?{" "}

            <Link
              to="/register"
              className="text-purple-400"
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
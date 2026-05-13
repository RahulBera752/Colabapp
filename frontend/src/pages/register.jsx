import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

      await API.post(
        "/auth/register",
        formData
      );

     toast.success("Registration Successful");

      navigate("/login");

    } catch (error) {

      console.log(error.response?.data);

      toast.error(
  error.response?.data?.message ||
  "Registration Failed"
);

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      <div className="grid lg:grid-cols-[45%_55%] min-h-screen">

        {/* LEFT SIDE */}
        <div className="relative border-r border-[#182033] flex justify-start">

          <div className="w-full max-w-[560px] pl-10 lg:pl-16 pt-10 pb-10">

            {/* LOGO */}
            <div className="flex items-center gap-4 mb-16">

              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-2xl">
                🚀
              </div>

              <h1 className="text-4xl font-bold tracking-tight">
                CollabApp
              </h1>

            </div>

            {/* BADGE */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 mb-10 text-lg">
              ✨ Join The Future of Collaboration
            </div>

            {/* HEADING */}
            <h1 className="text-[64px] leading-[72px] font-bold tracking-tight mb-8">

              Create Your
              <br />

              Workspace &
              <br />

              <span className="text-purple-500">
                Start Growing.
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-[24px] leading-[38px] mb-12 max-w-[500px]">
              Build projects, manage teams,
              and collaborate smarter using AI-powered tools.
            </p>

            {/* PREVIEW CARD */}
            <div className="w-[470px] bg-[#0E1628] border border-[#1B2435] rounded-[28px] p-5 shadow-2xl mb-14">

              <div className="flex justify-between items-center mb-5">

                <div>

                  <h3 className="font-semibold text-lg">
                    Productivity Insights
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Team Performance
                  </p>

                </div>

                <div className="bg-green-500 px-4 py-1 rounded-lg text-sm">
                  Online
                </div>

              </div>

              <div className="space-y-5">

                <div className="bg-[#131D31] rounded-xl p-4">

                  <div className="flex justify-between mb-2 text-sm">
                    <span>Projects Completed</span>
                    <span className="text-green-400">
                      92%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-700 rounded-full">

                    <div className="w-[92%] h-2 bg-green-500 rounded-full"></div>

                  </div>
                </div>

                <div className="bg-[#131D31] rounded-xl p-4">

                  <div className="flex justify-between mb-2 text-sm">
                    <span>AI Productivity Boost</span>
                    <span className="text-purple-400">
                      78%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-700 rounded-full">

                    <div className="w-[78%] h-2 bg-purple-500 rounded-full"></div>

                  </div>
                </div>

              </div>
            </div>

            {/* FEATURES */}
            <div className="space-y-8">

              <div className="flex gap-5 items-start">

                <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-2xl">
                  ⚡
                </div>

                <div>

                  <h3 className="text-2xl font-semibold mb-1">
                    Faster Workflow
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    Manage projects with lightning speed.
                  </p>

                </div>
              </div>

              <div className="flex gap-5 items-start">

                <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-2xl">
                  🤝
                </div>

                <div>

                  <h3 className="text-2xl font-semibold mb-1">
                    Team Collaboration
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    Work together in real-time from anywhere.
                  </p>

                </div>
              </div>

              <div className="flex gap-5 items-start">

                <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-2xl">
                  🔒
                </div>

                <div>

                  <h3 className="text-2xl font-semibold mb-1">
                    Secure Platform
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    Enterprise-grade security for your data.
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
                Register
              </h2>

              <p className="text-gray-400 text-xl">
                Create your account and start collaborating
              </p>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >

              {/* NAME */}
              <div>

                <label className="block mb-3 text-xl font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#111827] border border-gray-700 focus:border-purple-500 outline-none px-6 py-5 rounded-2xl text-xl"
                  required
                />
              </div>

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
                  required
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
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-[#111827] border border-gray-700 focus:border-purple-500 outline-none px-6 py-5 rounded-2xl text-xl"
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-700 py-5 rounded-2xl text-2xl font-semibold"
              >
                {loading ? "Creating Account..." : "Create Account"}
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
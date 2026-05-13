import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  return (
    <div className="min-h-screen bg-[#0B1020] text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">

        <h1 className="text-3xl font-bold text-purple-500">
          CollabApp
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {user ? (

            <>
              {/* PROFILE */}
              <div className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {user.name?.charAt(0).toUpperCase()}
              </div>

              {/* LOGOUT */}
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
                className="px-5 py-2 rounded-xl border border-gray-700 hover:bg-[#1B2440] transition"
              >
                Logout
              </button>
            </>

          ) : (

            <>
              <Link to="/login">
                <button className="px-5 py-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition">
                  Get Started
                </button>
              </Link>
            </>

          )}

        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <div className="inline-block px-4 py-2 rounded-full bg-purple-900 text-purple-300 mb-6">
            AI-Powered Collaboration
          </div>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Work Together.
            <br />
            Achieve More.
            <br />
            <span className="text-purple-500">
              With AI.
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Manage projects, chat with your team,
            track tasks, and boost productivity
            using AI-powered collaboration tools.
          </p>

          <div className="flex gap-4">

            <Link to="/register">
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl text-lg font-semibold transition">
                Get Started Free
              </button>
            </Link>

            <button className="border border-gray-600 hover:bg-gray-800 px-8 py-4 rounded-xl text-lg transition">
              Watch Demo
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#121A2F] border border-gray-800 rounded-3xl p-8 shadow-2xl">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-bold">
              Dashboard
            </h2>

            <div className="w-10 h-10 rounded-full bg-purple-600"></div>

          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">

            <div className="bg-[#1B2440] p-5 rounded-2xl">
              <h3 className="text-3xl font-bold text-purple-400">
                8
              </h3>

              <p className="text-gray-400 mt-2">
                Workspaces
              </p>
            </div>

            <div className="bg-[#1B2440] p-5 rounded-2xl">
              <h3 className="text-3xl font-bold text-green-400">
                24
              </h3>

              <p className="text-gray-400 mt-2">
                Tasks Running
              </p>
            </div>

            <div className="bg-[#1B2440] p-5 rounded-2xl">
              <h3 className="text-3xl font-bold text-yellow-400">
                16
              </h3>

              <p className="text-gray-400 mt-2">
                Completed
              </p>
            </div>

            <div className="bg-[#1B2440] p-5 rounded-2xl">
              <h3 className="text-3xl font-bold text-blue-400">
                6
              </h3>

              <p className="text-gray-400 mt-2">
                Team Members
              </p>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
}

export default Home;
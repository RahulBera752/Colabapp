import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
useUser,
useClerk
} from "@clerk/clerk-react";

function Home() {

const [localUser,setLocalUser]=
useState(null);

const [openMenu,setOpenMenu]=
useState(false);

const navigate=
useNavigate();

const {
user,
isSignedIn
}=useUser();

const {
signOut
}=useClerk();



useEffect(()=>{

const storedUser=
localStorage.getItem(
"user"
);

if(storedUser){

setLocalUser(
JSON.parse(
storedUser
)
);

}

},[]);



useEffect(()=>{

if(
isSignedIn &&
!sessionStorage.getItem(
"loginToastShown"
)
){

toast.success(
"Login Successful 🎉"
);

sessionStorage.setItem(
"loginToastShown",
"true"
);

}

},[isSignedIn]);



const handleLogout=
async()=>{

try{

if(isSignedIn){

await signOut();

}

localStorage.removeItem(
"token"
);

localStorage.removeItem(
"user"
);

sessionStorage.removeItem(
"loginToastShown"
);

setLocalUser(null);

toast.success(
"Logged out successfully 👋"
);

setTimeout(()=>{

navigate("/");

window.location.reload();

},1500);

}catch(error){

console.log(error);

}

};



const currentUser=

isSignedIn
?{
name:
user?.firstName ||
user?.fullName ||
user?.primaryEmailAddress
?.emailAddress
}
:
localUser;



return(

<div className="min-h-screen bg-[#0B1020] text-white">

<nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">

<h1 className="text-3xl font-bold text-purple-500">

CollabApp

</h1>


<div className="hidden md:flex gap-10 text-gray-300">

<a href="#">Features</a>

<a href="#">How It Works</a>

<a href="#">Pricing</a>

<a href="#">Testimonials</a>

<a href="#">FAQ</a>

</div>



<div className="flex items-center gap-4 relative">

{currentUser ? (

<>

<div className="flex items-center gap-4">

<Link to="/workspace">

<button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition">

Open Workspace

</button>

</Link>


<Link
to="/notifications"
className="text-2xl hover:scale-110 transition"
>

🔔

</Link>

</div>




<div

onClick={()=>
setOpenMenu(
!openMenu
)
}

className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center font-bold text-lg cursor-pointer"

>

{
currentUser?.name
?.charAt(0)
.toUpperCase()
}

</div>


{openMenu && (

<div className="absolute right-0 top-16 w-56 bg-[#121A2F] border border-gray-700 rounded-2xl overflow-hidden shadow-xl z-50">

<button
className="w-full text-left px-5 py-4 hover:bg-[#1B2440]"
>

👤 Profile

</button>



<button
className="w-full text-left px-5 py-4 hover:bg-[#1B2440]"
>

⚙ Settings

</button>



<button
onClick={
handleLogout
}
className="w-full text-left px-5 py-4 text-red-400 hover:bg-[#1B2440]"
>

🚪 Logout

</button>

</div>

)}

</>

):(


<>

<Link to="/login">

<button className="px-5 py-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition">

Login

</button>

</Link>



<Link to="/register">

<button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition">

Get Started

</button>

</Link>

</>

)}

</div>

</nav>




<section className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-16 items-center">

<div>

<div className="inline-block px-4 py-2 rounded-full bg-purple-900 text-purple-300 mb-8">

✨ AI-Powered Collaboration

</div>


<h1 className="text-7xl font-bold leading-tight">

Work Together.
<br/>

Achieve More.
<br/>

<span className="text-purple-500">

With AI.

</span>

</h1>


<p className="text-gray-400 text-xl mt-8 leading-relaxed max-w-xl">

CollabApp brings your teams,
tasks and conversations
together in one place.

</p>


<div className="flex gap-5 mt-10">

<Link to="/register">

<button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold text-lg">

Get Started Free →

</button>

</Link>


<button className="border border-gray-700 px-8 py-4 rounded-xl">

▶ Watch Demo

</button>

</div>

</div>



<div className="bg-[#121A2F] border border-gray-800 rounded-3xl p-8 shadow-2xl">

<div className="flex justify-between mb-8">

<h2 className="text-3xl font-bold">

Dashboard

</h2>

<div className="w-10 h-10 rounded-full bg-purple-600"></div>

</div>



<div className="grid grid-cols-2 gap-5">

<div className="bg-[#1B2440] p-5 rounded-2xl">

<h3 className="text-3xl text-purple-400 font-bold">

8

</h3>

<p className="text-gray-400 mt-2">

Workspaces

</p>

</div>



<div className="bg-[#1B2440] p-5 rounded-2xl">

<h3 className="text-3xl text-green-400 font-bold">

24

</h3>

<p className="text-gray-400 mt-2">

Tasks Running

</p>

</div>



<div className="bg-[#1B2440] p-5 rounded-2xl">

<h3 className="text-3xl text-yellow-400 font-bold">

16

</h3>

<p className="text-gray-400 mt-2">

Completed

</p>

</div>



<div className="bg-[#1B2440] p-5 rounded-2xl">

<h3 className="text-3xl text-blue-400 font-bold">

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
import {useEffect,useState}
from "react";

import API from "../services/api";

import {toast}
from "react-toastify";

function Notifications(){

const[
notifications,
setNotifications
]=useState([]);

const token=
localStorage.getItem(
"token"
);


useEffect(()=>{

load();

},[]);



const load=
async()=>{

try{

const res=
await API.get(

"/notifications",

{
headers:{
Authorization:
`Bearer ${token}`
}
}

);

setNotifications(
res.data
);

}
catch(error){

console.log(error);

}

};



const join=
async(id)=>{

try{

await API.post(

`/notifications/accept/${id}`,

{},

{
headers:{
Authorization:
`Bearer ${token}`
}
}

);

toast.success(
"Joined Workspace 🎉"
);

load();

}
catch{

toast.error(
"Failed"
);

}

};


return(

<div className="min-h-screen bg-[#0B1020] text-white p-10">

<h1 className="text-4xl font-bold">

Notifications

</h1>


{

notifications.length===0 ?

(

<p className="text-gray-400 mt-10">

No Notifications

</p>

)

:

notifications.map((n)=>(

<div

key={n._id}

className="bg-[#121A2F] p-6 rounded-xl mt-5 flex justify-between items-center"

>

<div>

<h2 className="font-bold">

{n.message}

</h2>

</div>


<button

onClick={()=>
join(n._id)
}

className="bg-green-600 px-6 py-2 rounded-xl"

>

Join

</button>

</div>

))

}

</div>

)

}

export default Notifications;
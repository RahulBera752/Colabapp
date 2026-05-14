import Sidebar from "../components/Sidebar";
import InviteForm from "../components/InviteForm";
import MembersTable from "../components/MembersTable";
import WorkspaceCard from "../components/WorkspaceCard";

import API from "../services/api";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Workspace() {

const [
workspaces,
setWorkspaces
]=useState([]);

const [
workspaceName,
setWorkspaceName
]=useState("");

const [
description,
setDescription
]=useState("");

const [
email,
setEmail
]=useState("");

const [
selectedWorkspace,
setSelectedWorkspace
]=useState(null);

const [
workspaceCreated,
setWorkspaceCreated
]=useState(false);


const token=
localStorage.getItem(
"token"
);



// LOAD

const loadWorkspace=
async()=>{

try{

const res=
await API.get(

"/workspace/my",

{
headers:{
Authorization:
`Bearer ${token}`
}
}

);

setWorkspaces(
res.data
);

}
catch(error){

console.log(error);

}

};



useEffect(()=>{

loadWorkspace();

},[]);




// CREATE

const createWorkspace=
async()=>{

try{

const res=
await API.post(

"/workspace/create",

{
name:
workspaceName,

description
},

{
headers:{
Authorization:
`Bearer ${token}`
}
}

);

toast.success(
"Workspace Created 🎉"
);

setWorkspaceName("");

setDescription("");

setSelectedWorkspace(
res.data
);

setWorkspaceCreated(
true
);

loadWorkspace();

}
catch{

toast.error(
"Create failed"
);

}

};




// INVITE

const inviteMember=
async()=>{

if(
!selectedWorkspace
){

return toast.error(
"Open workspace first"
);

}

try{

await API.post(

"/workspace/invite",

{

email,

workspaceId:
selectedWorkspace._id

},

{
headers:{
Authorization:
`Bearer ${token}`
}
}

);

toast.success(
"Invitation Sent 🚀"
);

setEmail("");

loadWorkspace();

}
catch(error){

toast.error(

error.response
?.data?.message ||

"Invite failed"

);

}

};




// DELETE

const deleteWorkspace=
async(id)=>{

try{

await API.delete(

`/workspace/${id}`,

{
headers:{
Authorization:
`Bearer ${token}`
}
}

);

toast.success(
"Workspace deleted"
);

setSelectedWorkspace(
null
);

setWorkspaceCreated(
false
);

loadWorkspace();

}
catch{

toast.error(
"Delete failed"
);

}

};



return(

<div className="flex min-h-screen bg-[#0B1020] text-white">

<Sidebar/>


<div className="flex-1 p-8">

<h1 className="text-5xl font-bold">

Workspace Dashboard

</h1>

<p className="text-gray-400">

Create → Open → Invite → Collaborate

</p>




<div className="grid md:grid-cols-2 gap-8 mt-10">


{

!workspaceCreated && (

<div className="bg-[#121A2F] p-8 rounded-3xl">

<h2 className="text-3xl font-bold mb-6">

Create Workspace

</h2>


<input

placeholder=
"Workspace Name"

value={workspaceName}

onChange={(e)=>

setWorkspaceName(
e.target.value
)

}

className="w-full p-5 bg-[#1B2440] rounded-2xl"
/>


<textarea

placeholder=
"Description"

value={description}

onChange={(e)=>

setDescription(
e.target.value
)

}

className="w-full mt-4 p-5 bg-[#1B2440] rounded-2xl"
/>



<button

onClick={
createWorkspace
}

className="w-full bg-purple-600 py-5 rounded-2xl mt-6"

>

Create Workspace

</button>

</div>

)

}




{

selectedWorkspace && (

<InviteForm

email={email}

setEmail={setEmail}

inviteMember={
inviteMember
}

/>

)

}

</div>





<div className="grid md:grid-cols-3 gap-6 mt-10">

{workspaces.map((w)=>(

<WorkspaceCard

key={w._id}

workspace={w}

selectWorkspace={(w)=>{

setSelectedWorkspace(
w
);

setWorkspaceCreated(
true
);

}}

deleteWorkspace={
deleteWorkspace
}

/>

))}

</div>





<MembersTable

members={
selectedWorkspace
?.members || []
}

/>


</div>

</div>

)

}

export default Workspace;
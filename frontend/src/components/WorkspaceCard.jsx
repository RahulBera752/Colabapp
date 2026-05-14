function WorkspaceCard({

workspace,

selectWorkspace,

deleteWorkspace

}){

return(

<div className="bg-[#121A2F] rounded-2xl p-6">

<h2 className="text-2xl font-bold">

{workspace.name}

</h2>

<p className="text-gray-400 mt-2">

{workspace.members.length}
 Members

</p>


<div className="mt-5 flex gap-3">

<button

onClick={()=>

selectWorkspace(
workspace
)

}

className="bg-purple-600 px-4 py-2 rounded-xl"

>

Open

</button>


<button

onClick={()=>

deleteWorkspace(
workspace._id
)

}

className="bg-red-600 px-4 py-2 rounded-xl"

>

Delete

</button>

</div>

</div>

)

}

export default WorkspaceCard;
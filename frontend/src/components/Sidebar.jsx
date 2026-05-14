function Sidebar(){

const menu=[

"Dashboard",
"Workspaces",
"Tasks",
"Chat",
"Calendar",
"Members",
"AI Assistant",
"Settings"

];

return(

<div className="w-64 bg-[#111827] p-6 border-r border-gray-800">

<h1 className="text-3xl text-purple-500 font-bold mb-10">

CollabApp

</h1>


<div className="space-y-3">

{menu.map(item=>(

<div
key={item}
className="p-4 rounded-xl hover:bg-[#1B2440] cursor-pointer"
>

{item}

</div>

))}

</div>

</div>

)

}

export default Sidebar;
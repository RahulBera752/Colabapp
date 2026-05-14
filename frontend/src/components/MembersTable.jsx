function MembersTable({members}){

return(

<div className="bg-[#121A2F] p-6 rounded-2xl mt-10">

<h2 className="text-2xl font-bold mb-6">

Members

</h2>


<div className="space-y-4">

{members.map((m,index)=>(

<div
key={index}
className="flex justify-between bg-[#1B2440] p-4 rounded-xl"
>

<div>

<p>

{m.email}

</p>

<p className="text-gray-500">

Member

</p>

</div>


<div className="text-green-400">

Online

</div>

</div>

))}

</div>

</div>

)

}

export default MembersTable;
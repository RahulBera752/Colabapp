function InviteForm({

email,
setEmail,
inviteMember

}){

return(

<div className="bg-[#121A2F] rounded-2xl p-6">

<h2 className="text-2xl font-bold mb-6">

Invite Members

</h2>

<input

placeholder=
"Enter Email"

value={email}

onChange={(e)=>

setEmail(
e.target.value
)

}

className="w-full bg-[#1B2440] p-4 rounded-xl"
/>

<button

onClick={
inviteMember
}

className="w-full mt-5 bg-purple-600 py-3 rounded-xl"

>

Send Invitation

</button>

</div>

)

}

export default InviteForm;
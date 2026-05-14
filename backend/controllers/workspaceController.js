const Workspace=
require("../models/Workspace");

const User=
require("../models/User");

const Notification=
require("../models/Notification");

const sendEmail=
require("../config/sendEmail");



// ======================
// CREATE WORKSPACE
// ======================

const createWorkspace=
async(req,res)=>{

try{

const {
name,
description
}=req.body;


const workspace=
await Workspace.create({

name,

description,

owner:req.user.id,

members:[
req.user.id
]

});


res.status(201)
.json(workspace);

}
catch(error){

res.status(500)
.json({
message:error.message
});

}

};




// ======================
// INVITE MEMBER
// ======================

const inviteMember=
async(req,res)=>{

try{

const {
email,
workspaceId
}=req.body;


const workspace=
await Workspace.findById(
workspaceId
);


if(!workspace){

return res
.status(404)
.json({

message:
"Workspace not found"

});

}



const user=
await User.findOne({
email
});




// USER EXISTS

if(user){

const alreadyMember=

workspace.members.some(

member=>

member.toString()===
user._id.toString()

);


if(alreadyMember){

return res.json({

message:
"Already member"

});

}



await Notification.create({

user:user._id,

workspaceId,

message:
`You were invited to ${workspace.name}`

});



await sendEmail(

email,

"Workspace Invitation",

`You were invited to join "${workspace.name}"

Login to CollabApp and accept invitation.`

);



return res.json({

message:
"Notification + Email sent"

});

}




// USER DOESN'T EXIST

const registerLink=

`http://localhost:5173/register?invite=${workspaceId}`;


await sendEmail(

email,

"Join CollabApp",

`You were invited to collaborate.

Create account here:

${registerLink}`

);


res.json({

message:
"Invitation email sent"

});


}
catch(error){

res.status(500)
.json({

message:error.message

});

}

};




// ======================
// GET WORKSPACES
// ======================

const getWorkspace=
async(req,res)=>{

try{

const workspaces=

await Workspace.find({

members:req.user.id

})
.populate(
"members"
);


res.json(
workspaces
);

}
catch(error){

res.status(500)
.json({

message:error.message

});

}

};




// ======================
// DELETE WORKSPACE
// ======================

const deleteWorkspace=
async(req,res)=>{

try{

const {id}=
req.params;


const workspace=

await Workspace.findById(
id
);


if(!workspace){

return res
.status(404)
.json({

message:
"Workspace not found"

});

}


await Workspace.findByIdAndDelete(
id
);


res.json({

message:
"Workspace deleted"

});

}
catch(error){

res.status(500)
.json({

message:error.message

});

}

};




// ======================
// EXPORTS
// ======================

module.exports={

createWorkspace,

inviteMember,

getWorkspace,

deleteWorkspace

};
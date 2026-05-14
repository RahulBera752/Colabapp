const Notification=
require("../models/Notification");

const Workspace=
require("../models/Workspace");


const getNotifications=
async(req,res)=>{

const data=
await Notification.find({

user:req.user.id

})
.populate("workspaceId");

res.json(data);

};


const acceptInvite=
async(req,res)=>{

const notification=

await Notification.findById(
req.params.id
);

if(!notification){

return res.status(404)
.json({
message:"Not found"
});

}

const workspace=

await Workspace.findById(
notification.workspaceId
);

if(
!workspace.members.includes(
req.user.id
)
){

workspace.members.push(
req.user.id
);

await workspace.save();

}

await Notification.findByIdAndDelete(
req.params.id
);

res.json({
message:"Joined"
});

};


module.exports={

getNotifications,
acceptInvite

};
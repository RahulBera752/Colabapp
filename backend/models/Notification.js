const mongoose=
require("mongoose");

const notificationSchema=
new mongoose.Schema({

user:{
type:
mongoose.Schema.Types.ObjectId,
ref:"User"
},

message:String,

workspaceId:{
type:
mongoose.Schema.Types.ObjectId,
ref:"Workspace"
},

read:{
type:Boolean,
default:false
}

},
{
timestamps:true
});

module.exports=
mongoose.model(
"Notification",
notificationSchema
);
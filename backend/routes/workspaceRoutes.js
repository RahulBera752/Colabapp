const express=
require("express");

const router=
express.Router();

const protect=
require(
"../middleware/authMiddleware"
);

const {

createWorkspace,

inviteMember,

getWorkspace,

deleteWorkspace

}=require(
"../controllers/workspaceController"
);



router.post(
"/create",
protect,
createWorkspace
);


router.post(
"/invite",
protect,
inviteMember
);


router.get(
"/my",
protect,
getWorkspace
);


router.delete(
"/:id",
protect,
deleteWorkspace
);


module.exports=
router;
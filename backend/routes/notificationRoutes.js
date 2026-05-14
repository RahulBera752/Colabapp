const router=
require("express").Router();

const protect=
require("../middleware/authMiddleware");

const{

getNotifications,
acceptInvite

}=require(
"../controllers/notificationController"
);

router.get(
"/",
protect,
getNotifications
);

router.post(
"/accept/:id",
protect,
acceptInvite
);

module.exports=
router;
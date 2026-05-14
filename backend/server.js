const dotenv = require("dotenv");

// LOAD .env FIRST
dotenv.config();

const express = require("express");
const cors = require("cors");
const dns = require("dns");

const authRoutes=
require("./routes/authroutes");

const workspaceRoutes=
require("./routes/workspaceRoutes");

const connectDB=
require("./config/db");


// ===== DNS FIX =====

dns.setDefaultResultOrder(
"ipv4first"
);

dns.setServers([
"8.8.8.8",
"1.1.1.1"
]);


// DEBUG

console.log(
"EMAIL:",
process.env.EMAIL
);

console.log(
"PASSWORD:",
process.env.EMAIL_PASSWORD
);


// CONNECT DATABASE

connectDB();

const app=
express();


// MIDDLEWARE

app.use(
cors()
);

app.use(
express.json()
);


// ROUTES

app.use(
"/api/users",
require("./routes/userRoutes")
);

app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/workspace",
workspaceRoutes
);
app.use(
"/api/notifications",
require(
"./routes/notificationRoutes"
)
);

// TEST ROUTE

app.get(
"/",
(req,res)=>{

res.json({

message:
"API Running Successfully!"

});

}
);


const PORT=
process.env.PORT || 5000;


app.listen(

PORT,

()=>{

console.log(
`🚀 Server Running on Port ${PORT}`
);

}

);
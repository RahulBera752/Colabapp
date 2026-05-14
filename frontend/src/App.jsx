import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";
import Notifications from "./pages/Notifications";

function App() {

return(

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/home"
element={<Home/>}
/>

<Route
path="/login"
element={<Login/>}
/>

<Route
path="/register"
element={<Register/>}
/>

<Route
path="/dashboard"
element={<Dashboard/>}
/>

<Route
path="/workspace"
element={<Workspace/>}
/>

<Route
path="/notifications"
element={
<Notifications/>
}
/>

</Routes>

);

}

export default App;
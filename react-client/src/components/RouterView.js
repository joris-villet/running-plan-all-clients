import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';



export default function RouterView() {
  console.log(Route)
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

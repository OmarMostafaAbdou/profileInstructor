import RegisterForm from "./Register/Register";
import LoginForm from "./Login/Login";
import { Route, Routes } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
function Registration() {
  return (
    <>
      <Routes>
        <Route path="/Register" element={<RegisterForm />}></Route>
        <Route path="/Login" element={<LoginForm />}></Route>
      </Routes>
    </>
  );
}

export default Registration;

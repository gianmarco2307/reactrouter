import { useContext } from "react";
import { authenticationContext } from "../authenticationProvider";
import { Button, FormLogin } from "./styledComp";

function Login() {
  const { setAuthenticated } = useContext(authenticationContext);
  return (
    <FormLogin>
      {/* <input type="email" required/> */}
      <Button onClick={() => setAuthenticated(true)}>Login</Button>
    </FormLogin>
  );
}

export default Login;

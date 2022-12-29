import React from "react";

const Login = () => {
    return(
      <div className="flex justify-center">
        <div className="flex flex-col absolute top-1/3 shadow-lg border-2 p-5 w-1/2">
            <div>
                <input type='text'
                 placeholder="username"/>
            </div>
            <div>
                <input type='password'
                 placeholder="password"/>
            </div>
            <div>
                <input type='button' value='login' />
            </div>
        </div>
        </div>

    )
}
export default Login;
import Login from "./src/views/Login/Login";
import SignUp from "./src/views/SingUp/SingUp";


const routes = [
    {
        path: '/',
        component: Login,
        name: Login
      },
      {
        path: '/singup',
        component: SignUp,
        name: SignUp
      },
]

export default routes;
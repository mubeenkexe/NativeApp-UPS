import HomeScreen from "../pages/HomeScreen";
import SignInScreen from "../pages/SignInScreen";
import SignUpScreen from "../pages/SignUpScreen";

export const routes = {
    SignIn: {
        screen: SignInScreen,
        navigationOtion: {
            title: "Sign In",
        },
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOtion: {
            title: "Sign Up",
        },
    },
    Home: {
        screen: HomeScreen,
        navigationOtion: {
            title: "Home",
        },
    },
};

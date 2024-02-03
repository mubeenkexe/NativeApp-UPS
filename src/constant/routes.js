import AddUpsScreen from "../pages/AddUpsScreen";
import ForgotPassScreen from "../pages/ForgotPassScreen";
import HomeScreen from "../pages/HomeScreen";
import SignInScreen from "../pages/SignInScreen";
import SignUpScreen from "../pages/SignUpScreen";

export const routes = {
    SignIn: {
        screen: SignInScreen,
        navigationOption: {
            title: "SignIn",
        },
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOption: {
            title: "SignUp",
        },
    },
    Home: {
        screen: HomeScreen,
        navigationOption: {
            title: "Home",
        },
    },
    ForgotPass: {
        screen: ForgotPassScreen,
        navigationOption: {
            title: "ForgotPass",
        },
    },
    AddUps: {
        screen: AddUpsScreen,
        navigationOption: {
            title: "AddUps",
        },
    },
};

import AddUpsScreen from "../pages/AddUpsScreen";
import EnterOtp from "../pages/EnterOtpScreen";
import ForgotPassScreen from "../pages/ForgotPassScreen";
import HomeScreen from "../pages/HomeScreen";
import ResetPassScreen from "../pages/ResetPassScreen";
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
    EnterOtp: {
        screen: EnterOtp,
        navigationOption: {
            title: "EnterOtp",
        },
    },
    ResetPass: {
        screen: ResetPassScreen,
        navigationOption: {
            title: "ResetPass",
        },
    },
};

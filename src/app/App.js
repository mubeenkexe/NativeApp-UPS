import { AuthProvider } from "../hooks/authContext";
import AppNavigator from "./appNavigator";

// import AuthProvider from "../hooks/AuthProvider";
import { registerRootComponent } from "expo";

const App = () => {
    return (
        <AuthProvider>
            <AppNavigator />
        </AuthProvider>
    );
};

export default registerRootComponent(App);

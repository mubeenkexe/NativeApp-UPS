import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "../constant/routes";
import useLogin from "../hooks/useLogin";

const AppNavigator = () => {
    const Stack = createStackNavigator();
    
    const {navigation} = useLogin();

    return (
        <NavigationContainer ref={navigation} >
            <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
                {Object.entries(routes).map(([name, { screen, navigationOption }]) => (
                    <Stack.Screen
                        key={name}
                        name={name}
                        component={screen}
                        options={navigationOption}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppNavigator;
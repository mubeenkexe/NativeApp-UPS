import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "../constant/routes";

const AppNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign In">
                {Object.entries(routes).map(([name, { screen, navigationOtion }]) => (
                    <Stack.Screen
                        key={name}
                        name={name}
                        component={screen}
                        options={navigationOtion}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppNavigator;
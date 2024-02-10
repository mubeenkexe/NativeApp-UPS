import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "../constant/routes";

const AppNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    animationEnabled: false,
                    gestureEnabled: false,
                    headerShown: false,
                }}
            >
                {Object.entries(routes).map(
                    ([name, { screen, navigationOption }]) => (
                        <Stack.Screen
                            key={name}
                            name={name}
                            component={screen}
                            options={navigationOption}
                        />
                    )
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

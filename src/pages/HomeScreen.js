import { View, Text } from "react-native";
import DefaultLayout from "../layouts/DefaultLayout";

const HomeScreen = ({ navigation }) => {
    return (
        <DefaultLayout>
            <View>
                <Text>Hello</Text>
            </View>
        </DefaultLayout>
    );
};

export default HomeScreen;
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import NavigationTab from "../components/NavigationBar.jsx/page";

const HomeScreen = ({ navigation }) => {
    const User = { name: "John Doe", email: "qoJLh@example.com" };

    return (
        <>
            <View className="bg-black h-full w-full px-5 space-y-5">
                {/* Status Bar */}
                <StatusBar
                    style="light"
                    backgroundColor="black"
                    translucent={false}
                />

                {/* Title */}
                <View className="mb-5">
                    <Text className="text-white font-bold text-5xl">Hello</Text>
                    <Text className="text-white font-bold text-5xl">
                        {User.name}.
                    </Text>
                </View>

                {/* Welcome Message */}
                <View className="w-full h-28 border border-gray-600 rounded-3xl flex-row items-center">
                    <View className="w-2/4 p-5">
                        <Text className="text-white font-bold text-2xl flex-col">
                            Welcome!
                        </Text>

                        <Text className="text-gray-600 text-base">
                            let's monitor your UPS system now
                        </Text>
                    </View>

                    <View className="w-2/4 items-center">
                        <Icon name="bolt" color="#6a994e" size={70} />
                    </View>
                </View>

                {/* Map UPS */}
                <View className="w-full h-auto border border-gray-600">
                    <Text className="text-white font-bold text-2xl text-center">
                        Your Devices
                    </Text>
                </View>

                <View className="absolute bottom-0 w-full self-center">
                    {/* Navigation Tab */}
                    <NavigationTab />
                </View>
            </View>
        </>
    );
};

export default HomeScreen;

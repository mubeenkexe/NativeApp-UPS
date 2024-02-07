import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import AddUpsButton from "../components/AddUpsButton/page";
import DropDown from "../components/DropDown/page";

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
                <View className="flex-row justify-between">
                    <View>
                        <Text className="text-white font-bold text-5xl">
                            Hello
                        </Text>
                        <Text className="text-white font-bold text-5xl">
                            {User.name}.
                        </Text>
                    </View>

                    {/* Profile Icon */}
                    <View className="w-16 h-16 self-center rounded-full items-center justify-center bg-slate-900">
                        <Icon name="user" color="#c77dff" size={30} />
                    </View>
                </View>

                {/* Welcome Message */}
                <View className="w-full h-28 border rounded-3xl flex-row items-center bg-slate-900">
                    <View className="w-2/4 p-5">
                        <Text className="text-white font-bold text-2xl flex-col">
                            Welcome!
                        </Text>

                        <Text className="text-gray-600 text-base">
                            let's monitor your UPS system now
                        </Text>
                    </View>

                    <View className="w-2/4 items-center">
                        <Icon name="bolt" color="#c77dff" size={70} />
                    </View>
                </View>

                {/* Map UPS */}
                <View className="w-full h-auto">
                    <DropDown />
                </View>

                <View className="absolute bottom-0 w-full self-center">
                    {/* Add UPS Button */}
                    <AddUpsButton />
                </View>
            </View>
        </>
    );
};

export default HomeScreen;

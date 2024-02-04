import { Text, TextInput, View } from "react-native";
import GoBackButton from "../components/GoBackButton/GoBackButton";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton/CustomButton";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ResetPassScreen = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <View className="bg-black h-full w-full px-5 space-y-5">
            {/* Status Bar */}
            <StatusBar
                style="light"
                backgroundColor="black"
                translucent={false}
            />

            {/* Go Back Button */}
            <GoBackButton handleClick={() => navigation.goBack()} />

            {/* Title */}
            <View className="mb-5">
                <Text className="text-white font-bold text-5xl">Reset</Text>
                <Text className="text-white font-bold text-5xl">Password.</Text>
            </View>

            {/* Discription */}
            <Text className="text-gray-600 font-bold">
                Enter your new password.
            </Text>

            {/* Password and Submit Button */}
            <View>
                <View className="relative justify-center mb-10">
                    <Text className="text-gray-600 font-bold">Password</Text>
                    <TextInput
                        placeholderTextColor={"grey"}
                        className="text-white border-b border-gray-600 p-3 mb-3"
                        autoCapitalize="none"
                        keyboardType="default"
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        className="absolute right-3"
                    >
                        <Icon name="eye" color={"grey"} size={20}>
                            {showPassword ? false : true}
                        </Icon>
                    </TouchableOpacity>
                </View>

                <View className="relative justify-center">
                    <Text className="text-gray-600 font-bold">
                        Confirm Password
                    </Text>
                    <TextInput
                        placeholderTextColor={"grey"}
                        className="text-white border-b border-gray-600 p-3 mb-3"
                        autoCapitalize="none"
                        keyboardType="default"
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        className="absolute right-3"
                    >
                        <Icon name="eye" color={"grey"} size={20}>
                            {showPassword ? false : true}
                        </Icon>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-5">
                    {/* Navigate to sign up screen */}
                    <CustomButton
                        title={"Reset Password"}
                        handleClick={() => navigation.navigate("SignIn")}
                        iconName={"lock"}
                        BtnColors={["#6a994e", "#a7c957"]}
                    />
                </View>
            </View>
        </View>
    );
};

export default ResetPassScreen;

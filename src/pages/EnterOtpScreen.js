import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import GoBackButton from "../components/GoBackButton/page";
import OtpInput from "../components/OtpInput/page";
import CustomButton from "../components/CustomButton/page";

const EnterOtp = ({ navigation }) => {
    return (
        <View className="bg-black h-full w-full px-5 space-y-5">
            {/* Go Back Button */}
            <GoBackButton handleClick={() => navigation.goBack()} />

            {/* Title */}
            <View className="mb-5">
                <Text className="text-white font-bold text-5xl">Enter</Text>
                <Text className="text-white font-bold text-5xl">Your OTP.</Text>
            </View>

            {/* Discription */}
            <Text className="text-gray-600 font-bold">
                Enter the OTP sent to your email.
            </Text>

            {/* OTP  and Submit Button */}
            <View>
                <OtpInput />
                <CustomButton
                    title={"Submit"}
                    handleClick={() => navigation.navigate("ResetPass")}
                    iconName={"check"}
                    BtnColors={["#6a994e", "#a7c957"]}
                />
            </View>

            <View className="flex-row justify-center mt-5">
                {/* Navigate to sign up screen */}
                <Text className="text-gray-600">Didn't receive OTP? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text className="text-sky-600 font-bold">Resend</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EnterOtp;

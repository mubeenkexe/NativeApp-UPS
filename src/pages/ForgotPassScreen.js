import React from "react";
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import GoBackButton from "../components/GoBackButton/page";
import CustomButton from "../components/CustomButton/page";

export default function ForgotPassScreen({ navigation }) {
    const { control } = useForm({
        defaultValues: {
            email: "",
        },
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View className="bg-black h-full w-full px-5 space-y-5">
                    <StatusBar
                        style="light"
                        backgroundColor="black"
                        translucent={false}
                    />

                    {/* GoBack Icon */}
                    <GoBackButton handleClick={() => navigation.goBack()} />

                    {/* Title */}
                    <View className="mb-5">
                        <Text className="text-white font-bold text-5xl">
                            Forgot
                        </Text>
                        <Text className="text-white font-bold text-5xl">
                            Password?
                        </Text>
                    </View>

                    {/* Description */}
                    <Text className="text-gray-600 font-bold mb-5">
                        To recieve OTP on your email, please enter your email
                        below.
                    </Text>

                    <View>
                        <Text className="text-gray-600 font-bold">Email</Text>
                        <TextInput
                            placeholderTextColor={"grey"}
                            className="text-white border-b border-gray-600 p-3 mb-5"
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                        <CustomButton
                            title={"Send me OTP"}
                            BtnColors={["#c77dff", "#7b2cbf"]}
                            iconName={"envelope"}
                            handleClick={() => navigation.navigate("EnterOtp")}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

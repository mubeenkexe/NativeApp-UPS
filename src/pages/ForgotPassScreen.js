import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import GoBackButton from "../components/GoBackButton/GoBackButton";

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

                    {/* title */}
                    {/* <View className="mb-5">
                        <Text className="text-white font-bold text-5xl">Forgot</Text>
                        <Text className="text-white font-bold text-5xl">Password?</Text>
                    </View> */}

                    {/* coming soon */}
                    <View className="flex-1 items-center justify-center">
                        <Text className="text-white font-bold text-center">
                            Coming Soon
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

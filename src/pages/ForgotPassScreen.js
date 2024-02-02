import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";

export default function ForgotPassScreen({ navigation }) {

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
                    <TouchableOpacity
                        className="border-gray-600 border w-14 h-10 rounded-full items-center justify-center mb-5"
                        onPress={() => navigation.navigate("SignIn")}
                    >
                        <Icon name="arrow-left" color="white" size={20} />
                    </TouchableOpacity>

                    {/* title */}
                    <View className="mb-5">
                        <Text className="text-white font-bold text-5xl">Forgot</Text>
                        <Text className="text-white font-bold text-5xl">Password?</Text>
                    </View>
                    
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

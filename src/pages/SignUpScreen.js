import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    ToastAndroid,
    BackHandler,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormSchema } from "../utils/formValidations";
import CustomButton from "../components/CustomButton/CustomButton";

/**
 * SignUpScreen component for user sign up
 * @param {object} navigation - navigation object for routing
 */
export default function SignUpScreen({ navigation }) {
    // Use react-hook-form for form management
    const { control, handleSubmit, formState } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        resolver: zodResolver(SignInFormSchema),
    });

    // Handle back button to exit app
    const handleExit = () => {
        ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);

        BackHandler.addEventListener("hardwareBackPress", () => {
            BackHandler.exitApp();
            return true;
        });
    };

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

                    {/* Title */}
                    <View className="mb-5 pt-5">
                        <Text className="text-white font-bold text-5xl">
                            Create
                        </Text>
                        <Text className="text-white font-bold text-5xl">
                            Account.
                        </Text>
                    </View>

                    {/* Login form */}
                    <View className="gap-3">
                        <View className="mb-10">
                            <Text className="text-gray-600 font-bold">
                                Username
                            </Text>
                            <Controller
                                name="username"
                                control={control}
                                render={({
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <TextInput
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        placeholderTextColor={"grey"}
                                        className="text-white border-b border-gray-600 p-3"
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                    />
                                )}
                            />
                        </View>

                        <View className="mb-10">
                            <Text className="text-gray-600 font-bold">
                                Email
                            </Text>
                            <Controller
                                name="email"
                                control={control}
                                render={({
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <TextInput
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        placeholderTextColor={"grey"}
                                        className="text-white border-b border-gray-600 p-3"
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                    />
                                )}
                            />
                        </View>

                        <View className="mb-5">
                            <Text className="text-gray-600 font-bold">
                                Password
                            </Text>
                            <Controller
                                name="password"
                                control={control}
                                render={({
                                    field: { onChange, onBlur, value },
                                }) => (
                                    <TextInput
                                        value={value}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        placeholderTextColor={"grey"}
                                        className="text-white border-b border-gray-600 p-3 mb-3"
                                        autoCapitalize="none"
                                        keyboardType="default"
                                        secureTextEntry
                                    />
                                )}
                            />
                        </View>

                        <View className="mt-5">
                            {/* Custom sign up button */}
                            <CustomButton
                                title={"Sign Up"}
                                BtnColors={["#c77dff","#7b2cbf"]}
                                handleClick={() =>
                                    navigation.navigate("AddUps")
                                }
                            />

                            <View className="flex-row justify-center mt-5">
                                <Text className="text-gray-600">
                                    Already have an account?{" "}
                                </Text>
                                {/* Navigate to sign in screen */}
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("SignIn")
                                    }
                                >
                                    <Text className="text-sky-600 font-bold">
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

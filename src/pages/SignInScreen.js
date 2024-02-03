import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormSchema } from "../utils/formValidations";

export default function SignInScreen({ navigation }) {

    const { control, handleSubmit, formState } = useForm({
        defaultValues: {
          username: "",
          email: "",
          password: "",
        },
        resolver: zodResolver(SignInFormSchema),
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
                        <StatusBar style="light" backgroundColor="black" translucent={false}/>

                        {/* title */}
                        <View className="mb-5 pt-5">
                            <Text className="text-white font-bold text-5xl">Welcome</Text>
                            <Text className="text-white font-bold text-5xl">Back.</Text>
                        </View>

                        {/* Google and Facebook */}

                        <View className="mt-5">
                            <TouchableOpacity activeOpacity={0.5} className="relative">
                                <LinearGradient
                                    colors={["#FF5252", "#FFAB91"]}
                                    className="py-4 rounded-full flex-row items-center"
                                >
                                    <View className="left-10">
                                        <Icon name="google" color="white" size={20} />
                                    </View>
                                    <Text className="text-white font-bold text-center w-full absolute text-base">
                                        Continue with Google
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                        <View className="mt-5">
                            <TouchableOpacity activeOpacity={0.5} className="relative">
                                <LinearGradient
                                    colors={["#1877F2", "#6B96D7"]}
                                    className="py-4 rounded-full flex-row items-center"
                                >
                                    <View className="left-10">
                                        <Icon name="facebook" color="white" size={20} />
                                    </View>
                                    <Text className="text-white font-bold text-center w-full absolute text-base">
                                        Continue with Facebook
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                        {/* login form */}

                        <View className="gap-3">
                            <View className="mb-10">
                                <Text className="text-gray-600 font-bold">Email</Text>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
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
                                <Text className="text-gray-600 font-bold">Password</Text>
                                <Controller
                                    name="password"
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
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
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("ForgotPass")}
                                >
                                    <Text className="text-gray-600 font-bold">
                                        Forgot Password?
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View className="mt-5">
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    onPress={() => navigation.navigate("AddUps")}
                                >
                                    <LinearGradient
                                        colors={["#FFA500", "#FFD700"]}
                                        className="p-4 rounded-full"
                                    >
                                        <Text className="text-white font-bold text-center text-base">
                                            Login
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <View className="flex-row justify-center mt-5">
                                    <Text className="text-gray-600">Don't have an Account? </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                                        <Text className="text-sky-600 font-bold">Signup</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
    );
}

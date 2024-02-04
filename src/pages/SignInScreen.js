import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { Controller } from "react-hook-form";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome5";
import useSignIn from "../hooks/useSignIn";

/**
 * SignUpScreen component for user sign up
 * @param {object} navigation - navigation object for routing
 */
export default function SignInScreen({ navigation }) {

    // Use react-hook-form for form management
    const 
    [control,
     showPassword,
     togglePasswordVisibility,
     handleSubmit,
     errors,
     isSubmitting,
     submittedData,
     onSubmit] = useSignIn();
    

    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, backgroundColor: "#000", paddingBottom: 50 }}
        >
            <ScrollView keyboardShouldPersistTaps="handled">
                <View className="bg-black h-full w-full px-5 space-y-5">
                    <StatusBar
                        style="light"
                        backgroundColor="black"
                        translucent={false}
                    />

                    {/* Title */}
                    <View className="mb-5 pt-5">
                        <Text className="text-white font-bold text-5xl">
                            Welcome
                        </Text>
                        <Text className="text-white font-bold text-5xl">
                            Back.
                        </Text>
                    </View>

                    {/* Google and Facebook */}

                    <View className="mt-5">
                        <CustomButton
                            title={"Continue with Google"}
                            BtnColors={["#FF5252", "#FFAB91"]}
                            handleClick={() => navigation.navigate("AddUps")}
                            iconName={"google"}
                        />
                    </View>

                    <View className="mt-5">
                        <CustomButton
                            title={"Continue with Facebook"}
                            BtnColors={["#1877F2", "#6B96D7"]}
                            handleClick={() => navigation.navigate("AddUps")}
                            iconName={"facebook"}
                        />
                    </View>

                    {/* Login form */}

                    <View className="gap-3">
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
                            {errors.email && 
                            <Text className="text-red-400 font-light text-[12px] mt-2">{errors?.email?.message}</Text>}
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
                                    <View className="relative justify-center">
                                        <TextInput
                                            value={value}
                                            onBlur={onBlur}
                                            onChangeText={onChange}
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
                                            <Icon
                                                name="eye"
                                                color={"#4a5568"}
                                                size={20}
                                            >
                                                {showPassword ? false : true}
                                            </Icon>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />
                             {errors.password && 
                                        <Text className="text-red-400 font-light text-[12px] mt-2">{errors?.password?.message}</Text>}
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("ForgotPass")
                                }
                            >
                                <Text className="text-sky-600 font-bold">
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View className="mt-5">
                            {/* Custom sign up button */}
                            <CustomButton
                                title={"Login"}
                                BtnColors={["#c77dff", "#7b2cbf"]}
                                handleClick={handleSubmit(onSubmit)}
                            />

                            <View className="flex-row justify-center mt-5">
                                {/* Navigate to sign up screen */}
                                <Text className="text-gray-600">
                                    Don't have an Account?{" "}
                                </Text>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("SignUp")
                                    }
                                >
                                    <Text className="text-sky-600 font-bold">
                                        Signup
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

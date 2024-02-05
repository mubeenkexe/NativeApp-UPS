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
import { StatusBar } from "expo-status-bar";
import { Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/FontAwesome5";
import useSignUp from "../hooks/useSignUp";
import CustomButton from "../components/CustomButton/page";

export default function SignUpScreen({ navigation }) {
    const [
        control,
        showPassword,
        togglePasswordVisibility,
        handleSubmit,
        errors,
        isSubmitting,
        submittedData,
        onSubmit,
    ] = useSignUp();

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
                            {errors.username && (
                                <Text className="text-red-400 font-light text-[12px] mt-2">
                                    {errors?.username?.message}
                                </Text>
                            )}
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
                            {errors.email && (
                                <Text className="text-red-400 font-light text-[12px] mt-2">
                                    {errors?.email?.message}
                                </Text>
                            )}
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
                                            className="text-white border-b border-gray-600 p-3"
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
                                                color={"grey"}
                                                size={20}
                                            >
                                                {showPassword ? false : true}
                                            </Icon>
                                        </TouchableOpacity>
                                        {errors.password && (
                                            <Text className="text-red-400 font-light text-[12px]">
                                                {errors?.password?.message}
                                            </Text>
                                        )}
                                    </View>
                                )}
                            />
                        </View>

                        <View className="mt-5">
                            {/* Custom sign up button */}
                            <CustomButton
                                title={"Sign Up"}
                                BtnColors={["#c77dff", "#7b2cbf"]}
                                handleClick={handleSubmit(onSubmit)}
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

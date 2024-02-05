import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import GoBackButton from "../components/GoBackButton/page";

export default function AddUpsScreen({ navigation }) {
    const [serialNumber, setSerialNumber] = useState("");

    const handleSubmit = () => {
        if (serialNumber.trim() === "") {
            Alert.alert("Error", "Please enter a valid serial number.");
            return;
        }
    };

    return (
        <View className="bg-black h-full w-full px-5 space-y-5">
            {/* GoBack Icon */}
            <GoBackButton handleClick={() => navigation.goBack()} />

            {/* title */}
            <View className="mb-5">
                <Text className="text-white font-bold text-5xl">Add</Text>
                <Text className="text-white font-bold text-5xl">Your UPS.</Text>
            </View>

            {/* Add UPS Form */}
            <View>
                <Text className="text-white mb-5">
                    To add your UPS, please enter its serial number below.
                </Text>

                <TextInput
                    value={serialNumber}
                    onChangeText={(text) => setSerialNumber(text)}
                    className="text-white border-b border-gray-600 p-3 mb-5"
                    placeholder="Enter Serial Number"
                    placeholderTextColor={"grey"}
                    keyboardType="numeric"
                />

                <TouchableOpacity>
                    <LinearGradient
                        colors={["#2a9d8f", "#264653"]}
                        className="p-4 rounded-full"
                    >
                        <Text
                            className="text-white font-bold text-center text-base"
                            onPress={handleSubmit}
                        >
                            Add
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View className="flex-row justify-center mt-5">
                    <Text className="text-gray-600">Don't have a UPS? </Text>
                    <TouchableOpacity onPress={() => Alert.alert("Khareed le aik UPS Gareeb!")}>
                        <Text className="text-sky-600 font-bold">Click Here!</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

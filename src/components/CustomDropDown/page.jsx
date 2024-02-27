import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomDropDownButton = ({ onPress, label }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="p-4 rounded-full border-[1px] border-white relative w-[70%] flex-1"
        >
            <Text className="text-[#ffffff] font-bold text-base text-center">
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomDropDownButton;

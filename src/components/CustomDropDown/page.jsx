import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useState, useEffect, useRef } from "react";

const CustomDropDown = ({ options, onSelect }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const translateY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: isDropdownOpen ? 200 : 1000,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isDropdownOpen]);

    const handleOptionSelect = (options) => {
        setSelectedOption(options);
        setIsDropdownOpen(false);
        onSelect(options);
    };

    return (
        <View className="relative w-full">
            <TouchableOpacity
                onPress={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-3 rounded-3xl bg-slate-900"
            >
                <Text className="text-white font-bold text-base text-center">
                    {selectedOption ? selectedOption.label : "Select an option"}
                </Text>
            </TouchableOpacity>

            <Animated.View
                className="fixed w-full rounded-3xl overflow-hidden h-screen bg-slate-900"
                style={{ transform: [{ translateY }] }}
            >
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.value}
                        onPress={() => handleOptionSelect(option)}
                        className="p-5 border-b border-gray-600 bg-slate-900 "
                    >
                        <Text className="text-white font-bold text-base">
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </Animated.View>
        </View>
    );
};

export default CustomDropDown;

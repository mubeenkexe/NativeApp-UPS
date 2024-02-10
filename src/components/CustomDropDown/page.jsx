import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useState, useEffect, useRef } from "react";

const CustomDropDown = ({ options, onSelect }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const translateY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: isDropdownOpen ? 0 : -1000,
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
        <View className="relative">
            <TouchableOpacity
                onPress={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <Text className="text-white font-bold text-2xl">
                    {selectedOption ? selectedOption.label : "Select an option"}
                </Text>
            </TouchableOpacity>

            <Animated.View
                className="absolute bg-white w-full rounded-3xl max-h-200 overflow-hidden "
                style={{ transform: [{ translateY }] }}
            >
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.value}
                        onPress={() => handleOptionSelect(option)}
                        className="p-5 border-b border-gray-300 bg-slate-900"
                    >
                        <Text className="text-white font-bold text-2xl">{option.label}</Text>
                    </TouchableOpacity>
                ))}
            </Animated.View>
        </View>
    );
};

export default CustomDropDown;

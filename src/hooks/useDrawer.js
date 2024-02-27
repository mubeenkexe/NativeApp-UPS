import { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { upsData } from "../constant/upsData";

const useDrawer = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const translateY = useRef(new Animated.Value(0)).current;

    const upsOptions =
        upsData &&
        upsData.map((data) => ({
            label: data.upsName,
            value: data.upsName,
        }));

    const handleOptionSelect = (options) => {
        setSelectedOption(options);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: isDropdownOpen ? 600 : 1000,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isDropdownOpen]);

    return {
        isDropdownOpen,
        setIsDropdownOpen,
        selectedOption,
        upsOptions,
        translateY,
        handleOptionSelect,
    };
};

export default useDrawer;

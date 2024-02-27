import React from "react";
import { Animated, TouchableOpacity, Text } from "react-native";

const CustomDrawer = ({ translateY, options, handleOptionSelect }) => {
  return (
    <Animated.View
      className="w-full rounded-[35px] overflow-hidden h-screen absolute self-center bg-[#fafafa]"
      style={{ transform: [{ translateY }] }}
    >
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => handleOptionSelect(option)}
          className="p-5 rounded-full bg-black mt-2 mx-2"
        >
          <Text className="text-[#fff] font-bold text-base text-center">
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
};

export default CustomDrawer;

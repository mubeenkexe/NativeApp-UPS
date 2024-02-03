import { LinearGradient } from "expo-linear-gradient"
import { Text, TouchableOpacity } from "react-native"

const CustomButton = ({ title, BtnColors, handleClick }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleClick}
        >
            <LinearGradient
                colors={[...BtnColors]}
                className="p-4 rounded-full"
            >
                <Text className="text-white font-bold text-center text-base">
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CustomButton;
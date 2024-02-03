import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomButton = ({ title, BtnColors, handleClick, iconName }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={handleClick}>
            <LinearGradient
                colors={[...BtnColors]}
                className="py-4 rounded-full flex-row items-center relative"
            >
                {iconName && (
                    <View className="left-10 absolute">
                        <Icon name={iconName} color="white" size={20} />
                    </View>
                )}

                <Text className="text-white font-bold text-center w-full text-base">
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default CustomButton;

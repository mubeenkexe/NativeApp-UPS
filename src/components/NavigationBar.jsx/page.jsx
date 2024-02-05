import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const NavigationTab = () => {
    return (
        <View className="w-full h-18 flex-row justify-center items-center">
            <LinearGradient
                colors={["#6a994e", "#a7c957"]}
                className="w-16 h-16 self-center rounded-full items-center justify-center -top-5"
            >
                <Icon name="plus" color="white" size={30} />
            </LinearGradient>
        </View>
    );
};

export default NavigationTab;

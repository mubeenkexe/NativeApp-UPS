import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome6";

const AddUpsButton = ({ handleClick }) => {
    return (
        <TouchableOpacity className="w-full h-18 flex-row justify-center items-center" onPress={handleClick}>
            <LinearGradient
                colors={["#c77dff", "#7b2cbf"]}
                className="w-16 h-16 self-center rounded-full items-center justify-center -top-5"
            >
                <Icon name="plus" color="white" size={30} />
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default AddUpsButton;

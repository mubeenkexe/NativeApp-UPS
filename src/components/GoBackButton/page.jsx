import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const GoBackButton = ({ handleClick }) => {
    return (
        <TouchableOpacity
            className="border-gray-600 border w-14 h-10 rounded-full items-center justify-center mt-5 mb-5"
            onPress={handleClick}
        >
            <Icon name="arrow-left" color="white" size={20} />
        </TouchableOpacity>
    );
};

export default GoBackButton;

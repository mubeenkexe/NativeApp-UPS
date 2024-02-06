import { Picker } from "@react-native-picker/picker";
const DropDown = ({ selectedValue, options, onValueChange }) => {
    return (
        <Picker selectedValue={selectedValue} onValueChange={onValueChange} mode="dropdown" className="bg-white">
            {options.map((option, index) => (
                <Picker.Item
                    key={index}
                    label={option.label}
                    value={option.value}
                    color="white"
                />
            ))}
        </Picker>
    );
};

export default DropDown;

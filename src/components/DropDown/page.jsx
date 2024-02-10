import { Picker } from "@react-native-picker/picker";

const DropDown = ({ options, selectedValue, onValueChange }) => {
    return (
        <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
            {options.map((option, index) => (
                <Picker.Item
                    key={index}
                    label={option.label}
                    value={option.value}
                />
            ))}
        </Picker>
    );
};

export default DropDown;

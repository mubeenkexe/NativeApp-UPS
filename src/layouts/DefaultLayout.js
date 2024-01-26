import { View, Text } from "react-native";

const DefaultLayout = ({ children }) => {
    return (
        <View className="flex-1 p-[16px] justify-center items-center">{children}</View>
    )
}

export default DefaultLayout;
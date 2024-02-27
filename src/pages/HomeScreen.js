import { StatusBar } from "expo-status-bar";
import CustomDropDownButton from "../components/CustomDropDown/page";
import CustomDrawer from "../components/CustomDropDown/drawer";
import useDrawer from "../hooks/useDrawer";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome5";
import { decodeStatus } from "../utils/decodeStatus";
import Popup from "../components/StatusPopup/page";

const HomeScreen = () => {
    const User = { name: "John Doe", email: "qoJLh@example.com" };

    const {
        isDropdownOpen,
        selectedOption,
        setIsDropdownOpen,
        translateY,
        handleOptionSelect,
        upsOptions,
    } = useDrawer();

    const [upsData, setUpsData] = useState({
        inVolt: "208.4",
        inFaultVolt: "140.0",
        outVolt: "208.4",
        outCurrent: "34",
        inFreq: "59.9",
        battVolt: "2.05",
        tempC: "35.0",
        status: "10001001",
    });

    const decodedStatus = decodeStatus(upsData.status);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <>
            <View className="bg-black h-full w-full px-2">
                {/* Status Bar */}
                <StatusBar
                    style="light"
                    backgroundColor="black"
                    translucent={false}
                />

                <Popup
                    isVisible={isModalVisible}
                    toggleModal={toggleModal}
                    upsData={upsData}
                />

                {/* Title */}
                <View className="mb-5 space-y-2 p-2">
                    <Text className="text-white font-bold text-5xl">
                        Monitor
                    </Text>
                    <Text className="text-white font-bold text-5xl">
                        your Device.
                    </Text>

                    {/* Custrom DropDown Button */}
                    <View className="flex-row justify-between items-center mt-5 space-x-2">
                        <CustomDropDownButton
                            label={
                                selectedOption
                                    ? selectedOption.label
                                    : upsOptions[0].label
                            }
                            onPress={() => setIsDropdownOpen(!isDropdownOpen)}
                        />

                        <TouchableOpacity
                            className="w-[30%] justify-between p-4 rounded-full border-[1px] border-white flex-row items-center"
                            onPress={toggleModal}
                        >
                            <Text className="text-[#ffffff] font-bold text-base text-center">
                                Status
                            </Text>
                            <Icon name="circle" color="green" size={15} solid />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* UPS Status */}
                <ScrollView className="space-y-2 p-2 rounded-[50px]">
                    <View className="flex-row  justify-center items-center space-x-2">
                        <View className="bg-[#f48a62] w-2/4 h-32 rounded-[50px] relative justify-between p-3 items-center flex-1">
                            <Text className="text-black font-bold text-1xl">
                                In Voltage
                            </Text>

                            <Text className="text-black font-black text-5xl">
                                {upsData.inVolt}
                            </Text>

                            <Text className="text-black font-bold text-1xl">
                                Deg . Open
                            </Text>
                        </View>

                        <View className="bg-[#f6dc51] w-2/4 h-32 rounded-[50px] relative justify-between p-3 items-center flex-1">
                            <Text className="text-black font-bold text-1xl">
                                In Fault Voltage
                            </Text>

                            <Text className="text-black font-black text-5xl">
                                {upsData.inFaultVolt}
                            </Text>

                            <Text className="text-black font-bold text-1xl">
                                Deg . Open
                            </Text>
                        </View>
                    </View>

                    <View className="h-32 w-full">
                        <LinearGradient
                            colors={["#f6ecc9", "#f4f1de"]}
                            className="flex-row h-full w-full rounded-[50px] justify-between items-center p-3"
                        >
                            <View className="justify-center items-center rounded-full bg-[#f6e8c9] h-20 w-20">
                                <Icon
                                    name="battery-full"
                                    color="black"
                                    size={30}
                                />
                            </View>

                            <Text className="text-black font-bold text-1xl">
                                Out Volt
                            </Text>

                            <Text className="text-black font-black text-5xl">
                                {upsData.outVolt}
                            </Text>
                        </LinearGradient>
                    </View>

                    <View className="flex-row  justify-center items-center space-x-2">
                        <View className="bg-[#b0f462] w-2/4 h-32 rounded-[50px] relative justify-between p-3 items-center flex-1">
                            <Text className="text-black font-bold text-1xl">
                                Out Current
                            </Text>

                            <Text className="text-black font-black text-5xl">
                                {upsData.outCurrent}
                            </Text>

                            <Text className="text-black font-bold text-1xl">
                                Deg . Open
                            </Text>
                        </View>

                        <View className="bg-[#f48a62] w-2/4 h-32 rounded-[50px] relative justify-between p-3 items-center flex-1">
                            <Text className="text-black font-bold text-1xl">
                                In Frequency
                            </Text>

                            <Text className="text-black font-black text-5xl">
                                {upsData.inFreq}
                            </Text>

                            <Text className="text-black font-bold text-1xl">
                                Deg . Open
                            </Text>
                        </View>
                    </View>

                    <View className="h-32 w-full">
                        <LinearGradient
                            colors={["#f6ecc9", "#f4f1de"]}
                            className="flex-row h-full w-full rounded-[50px] justify-between items-center p-3"
                        >
                            <View className="justify-center items-center rounded-full bg-[#f6e8c9] h-20 w-20">
                                <Icon name="bolt" color="black" size={30} />
                            </View>

                            <Text className="text-black font-bold text-1xl">
                                Battery Voltage
                            </Text>

                            <Text className="text-black font-black text-5xl">
                                {upsData.battVolt}
                            </Text>
                        </LinearGradient>
                    </View>

                    <View className="h-32 w-full mb-5">
                        <LinearGradient
                            colors={["#f6ecc9", "#f4f1de"]}
                            className="flex-row h-full w-full rounded-[50px] justify-between items-center p-3"
                        >
                            <View className="justify-center items-center rounded-full bg-[#f6e8c9] h-20 w-20">
                                <Icon
                                    name="thermometer-half"
                                    color="black"
                                    size={30}
                                />
                            </View>

                            <Text className="text-black font-bold text-1xl">
                                Temprature
                            </Text>

                            <Text className="text-black font-black text-5xl">
                                {upsData.tempC}
                            </Text>
                        </LinearGradient>
                    </View>
                </ScrollView>

                <CustomDrawer
                    translateY={translateY}
                    options={upsOptions}
                    handleOptionSelect={handleOptionSelect}
                />
            </View>
        </>
    );
};

export default HomeScreen;

import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { decodeStatus } from "../../utils/decodeStatus";

const Popup = ({ isVisible, toggleModal, upsData }) => {
    const decodedStatus = decodeStatus(upsData.status);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={toggleModal}
        >
            <View className="flex-1 justify-center items-center bg-[#00000060]">
                <View className="p-8 bg-white rounded-[50px]">
                    <Text className="text-lg font-bold mb-2">
                        UPS Status:
                    </Text>
                    <Text className="text-base mb-4">{decodedStatus}</Text>
                    <TouchableOpacity
                        onPress={toggleModal}
                        className="p-4 rounded-full  bg-green-400"
                    >
                        <Text className="text-[#000] font-bold text-base text-center">Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default Popup;

import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

const NewSignInScreen = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1, backgroundColor: "#f0f3f5", paddingBottom: 50 }}
        >
           <ScrollView keyboardShouldPersistTaps="handled">
              <View className="">
                <View className="bg-[#6393f0] w-full h-[400] rounded-3xl">

                </View>
              </View>
           </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default NewSignInScreen;

import { TextInput, View } from "react-native";
import { useRef, useState } from "react";
const OtpInput = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const containerRef = useRef(null);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== "" && index < otp.length - 1) {
          containerRef.current.children[index + 1].focus();
        }
    }

  return (
    <View className="flex-row justify-between mb-5">
        {otp.map((digit, index) => (
        <TextInput
          key={index}
          className='w-16 h-16 border border-gray-600 rounded-full text-center text-white text-3xl font-bold'
          value={digit}
          onChangeText={(value) => handleOtpChange(index, value)}
          keyboardType="numeric"
          maxLength={1}
        />
      ))}
    </View>
  )
}

export default OtpInput;
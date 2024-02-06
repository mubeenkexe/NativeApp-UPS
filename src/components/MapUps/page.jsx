import { Text, TouchableOpacity } from "react-native"
import { upsData } from "../../constant/upsData"

const MapUpsComponent = () => {
  return (
    <>
        {upsData.map((data, index) => (
            <TouchableOpacity key={index} className="rounded-3xl my-3 bg-slate-900 h-24 p-5">
                <Text className="text-white font-bold text-2xl">{data.upsName}</Text>
                <Text className="text-gray-500">{data.upsCompany}</Text>
                <Text className="text-gray-500">{data.serialNumber}</Text>
            </TouchableOpacity>
        ))}
    </>
  )
}

export default MapUpsComponent;
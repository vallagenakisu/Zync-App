import React from 'react';
import { Image, Text, View } from 'react-native';

const welcome_card = ({ title, imageSource , rotation }: { title: string; imageSource: any , rotation : string  }) => {
  return (
        <View className=" flex flex-col items-center justify-center rounded-2xl bg-white h-32 w-28 shadow-md border border-gray-300"
          style={{
            transform: [{ rotate: rotation }],
            }}
        >
          <Image style={{width:70,height:75}} source={imageSource} />
          <View className="px-2 flex flex-col items-start w-full">
            <Text className=" font-bold text-cardtext text-base"> {title} </Text>
          </View>
        </View>
  )
}

export default welcome_card 
import React from 'react';
import { Image, Text, View } from 'react-native';

const welcome_card = ({ title, imageSource , rotation }: { title: string; imageSource: any , rotation : string  }) => {
  return (
        <View 
          className="flex flex-col items-center justify-center rounded-2xl bg-white shadow-md border border-gray-300"
          style={{
            transform: [{ rotate: rotation }],
            width: 112,
            height: 130,
            paddingTop: 12,
            paddingRight: 14,
            paddingBottom: 12,
            paddingLeft: 14,
            gap: 10,
          }}
        >
          <Image style={{width: 84, height: 84}} resizeMode='contain' source={imageSource} />
          <View className="flex flex-col items-start w-full">
            <Text className="font-bold text-cardtext text-base"> {title} </Text>
          </View>
        </View>
  )
}

export default welcome_card 
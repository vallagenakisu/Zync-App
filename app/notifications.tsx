import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Notification = {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'system';
  user?: {
    name: string;
  };
  message: string;
  time: string;
  isRead: boolean;
  thumbnail?: any;
};

export default function Notifications() {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center" edges={['top']}>
      <StatusBar style="dark" />
      <Text className="text-2xl font-dm-sans-bold text-[#1D293D]">Notifications</Text>
    </SafeAreaView>
  );
}


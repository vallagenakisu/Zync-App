import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type SearchResult = {
  id: string;
  type: 'news' | 'user' | 'topic';
  title: string;
  subtitle?: string;
  thumbnail?: any;
};

export default function Search() {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center" edges={['top']}>
      <StatusBar style="dark" />
      <Text className="text-2xl font-dm-sans-bold text-[#1D293D]">Search</Text>
    </SafeAreaView>
  );
}

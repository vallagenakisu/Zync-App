import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

type ProfileTab = 'posts' | 'saved' | 'liked';

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center" edges={['top']}>
      <StatusBar style="dark" />
      <Text className="text-2xl font-dm-sans-bold text-[#1D293D]">Profile</Text>
    </SafeAreaView>
  );
}


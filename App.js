import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-black text-yellow-700 p-10 flex-1 items-center justify-center ">
      <Text className="text-white text-2xl font-thin">
        Hello , from Twaiwind Css
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}



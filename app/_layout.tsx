import { Text, View } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RoootLayout = ()=>{
  return(
    // <View>
    //   <Text>@dev_user</Text>
    // </View>
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      </Stack>
    </SafeAreaProvider>
  )
}

export default RoootLayout;
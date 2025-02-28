// screens/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <Text style={styles.text}>WeatherApp</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: 900,
  },
});

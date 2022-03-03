import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get("window").width;
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>

      <ScrollView pagingEnabled showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.weather}>
        <View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>

        <View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>

        <View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>

        <View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
      </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    backgroundColor: 'tomato'
  },
  city : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cityName : {
    fontSize: 60,
    fontWeight: "500"
  },
  weather : {

  },
  day : {
    width: SCREEN_WIDTH,
    alignItems: "center",

  },
  temp : {
    fontSize: 178
  },
  description : {
    marginTop: 50,
    fontSize: 60
  }
})
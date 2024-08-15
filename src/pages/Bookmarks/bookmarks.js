import { View, Text, Button, StatusBar, SafeAreaView, ScrollView, Image } from "react-native";
import styles from "./style";

export default function BookmarkScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.titile}>Saved Locations</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* saved location container  */}
          <View style={styles.bookmarkContainer}>
            <View style={styles.column1}>
              <Text style={styles.column2.label2}>22°C</Text>

              <Text style={styles.column1.label1}>Kochi, Kerala, India</Text>
            </View>
            <View style={styles.column2}>
              <View style={styles.column1.imageConatiner}>
                <Image
                  style={styles.column1.img}
                  source={require("../../../assets/images/cloudy.png")}
                />
              </View>
            </View>
          </View>

          {/* saved location container  */}
          <View style={styles.bookmarkContainer}>
            <View style={styles.column1}>
              <Text style={styles.column2.label2}>22°C</Text>

              <Text style={styles.column1.label1}>Kochi, Kerala, India</Text>
            </View>
            <View style={styles.column2}>
              <View style={styles.column1.imageConatiner}>
                <Image
                  style={styles.column1.img}
                  source={require("../../../assets/images/cloudy.png")}
                />
              </View>
            </View>
          </View>

          {/* saved location container  */}
          <View style={styles.bookmarkContainer}>
            <View style={styles.column1}>
              <Text style={styles.column2.label2}>22°C</Text>

              <Text style={styles.column1.label1}>Kochi, Kerala, India</Text>
            </View>
            <View style={styles.column2}>
              <View style={styles.column1.imageConatiner}>
                <Image
                  style={styles.column1.img}
                  source={require("../../../assets/images/cloudy.png")}
                />
              </View>
            </View>
          </View>

          {/* saved location container  */}
          <View style={styles.bookmarkContainer}>
            <View style={styles.column1}>
              <Text style={styles.column2.label2}>22°C</Text>

              <Text style={styles.column1.label1}>Kochi, Kerala, India</Text>
            </View>
            <View style={styles.column2}>
              <View style={styles.column1.imageConatiner}>
                <Image
                  style={styles.column1.img}
                  source={require("../../../assets/images/cloudy.png")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput
} from "react-native";
import { SocialIcon, Button } from "react-native-elements";
const { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/Entypo";
import { scale, moderateScale, verticalScale } from "../util/scale";
import { Actions } from "react-native-router-flux";
export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firsthalf}>
          <View style={styles.subcontainer}>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",

                flexDirection: "row"
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../assets/logo-new-footer.png")}
              />
              <Text
                style={{
                  marginTop: 1,
                  marginBottom: 2,
                  marginLeft: 5,
                  fontWeight: "bold",
                  fontSize: 18,
                  opacity: 0.7
                }}
              >
                BURST MENU
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.4,
              marginHorizontal: scale(10),

              justifyContent: "center"
            }}
          >
            <View
              style={{
                flex: 0.8,
                height: 5,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ opacity: 0.5, fontSize: 18 }}>Signup</Text>
            </View>

            <SocialIcon title="Register With Facebook" button type="facebook" />

            <SocialIcon
              title="Register with Google+"
              button
              type="google-plus-official"
            />
          </View>
          <View style={{ flex: 0.2 }}>
            <View
              style={{
                flex: 0.5,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10
              }}
            >
              <Text>--Or--</Text>
            </View>
            <View
              style={{
                flex: 0.5,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <Icon
                name="lock"
                size={18}
                color="#bdc3c7"
                style={{ marginRight: 5 }}
              />
              <Text>Register with Email</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 0.5 }}>
          <View
            style={{
              flex: 0.5,
              paddingHorizontal: 20,
              justifyContent: "center"
            }}
          >
            <TextInput
              style={styles.inputcontainer}
              placeholder="Enter your email"
              onChangeText={text => this.setState({ text })}
            />
            <TextInput
              style={styles.inputcontainer}
              placeholder="Choose password"
              onChangeText={text => this.setState({ text })}
            />
            <TextInput
              style={styles.inputcontainer}
              placeholder="Repeat password"
              onChangeText={text => this.setState({ text })}
            />
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View style={{ flex: 0.3 }}>
              <Button
                title="SIGN UP"
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                  backgroundColor: "#10FD63",
                  width: 180,
                  height: verticalScale(45),
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 50
                }}
                containerStyle={{ marginTop: verticalScale(10) }}
              />
            </View>
            <View
              style={{
                flex: 0.3,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ textAlign: "center", opacity: 0.4 }}>
                By signup,I agree wiht terms of service
              </Text>
              <Text style={{ textAlign: "center", opacity: 0.4 }}>
                {" "}
                and privacy policy
              </Text>
            </View>
            <View
              style={{
                flex: 0.3,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ opacity: 0.7 }}>Already have an account?</Text>
              <Text
                style={{ marginTop: 5, color: "#10FD63" }}
                onPress={() => Actions.pop()}
              >
                Login
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  firsthalf: {
    flex: 0.5
  },
  subcontainer: {
    flex: 0.4,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  inputcontainer: {
    height: verticalScale(40),

    backgroundColor: "#F8F7F6",

    padding: 10,
    margin: 5
  }
});

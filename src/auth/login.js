/**
 BurstMenu
 */

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
export default class Login extends Component {
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
              <Text style={{ opacity: 0.5, fontSize: 18 }}>Welcome Back!</Text>
            </View>

            <SocialIcon title="Login With Facebook" button type="facebook" />

            <SocialIcon
              title="Login with Google+"
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
                marginTop: 15
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
              <Text>Login with Grocery Guru account</Text>
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
              placeholder="Email"
              onChangeText={text => this.setState({ text })}
            />
            <TextInput
              style={styles.inputcontainer}
              placeholder="Password"
              onChangeText={text => this.setState({ text })}
            />
            <View
              style={{
                width,
                height: 20,

                alignItems: "flex-end",
                paddingHorizontal: 20
              }}
            >
              <Text
                style={{ textAlign: "left", marginRight: 20, marginTop: 5 }}
              >
                Forgot password?
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              justifyContent: "flex-start"
            }}
          >
            <View
              style={{
                flex: 0.4
              }}
            >
              <Button
                title="LOGIN"
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                  backgroundColor: "#10FD63",
                  width: 180,
                  height: verticalScale(45),
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 50
                }}
              />
            </View>

            <View
              style={{
                flex: 0.4,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ opacity: 0.7 }}>Don't an account?</Text>
              <Text
                style={{ marginTop: 5, color: "#10FD63" }}
                onPress={() => Actions.register()}
              >
                Signup
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

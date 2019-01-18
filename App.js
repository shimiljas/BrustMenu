/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./src/auth/login";
import Signup from "./src/auth/signup";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Router>
          <Stack key="root">
            <Scene
              key="login"
              component={Login}
              title="Login"
              hideNavBar={true}
              initial={true}
              sceneStyle={{ backgroundColor: "white" }}
            />
            <Scene
              key="register"
              component={Signup}
              title="Register"
              hideNavBar={true}
              sceneStyle={{ backgroundColor: "white" }}
            />
          </Stack>
        </Router>
      </View>
    );
  }
}

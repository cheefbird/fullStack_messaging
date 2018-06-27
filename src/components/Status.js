import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  NetInfo,
  StatusBar,
  Text,
  View
} from "react-native";
import { Constants } from "expo";

export default class Status extends Component {
  state = {
    info: null
  };

  render() {
    const { info } = this.state;

    const isConnected = info !== "none";
    const backgroundColor = isConnected ? "white" : "red";

    if (Platform.OS == "ios") {
      return <View style={[styles.status, { backgroundColor }]} />;
    }

    return null; // Temporary!
  }
}

const statusHeight = Platform.OS == "ios" ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight
  }
});

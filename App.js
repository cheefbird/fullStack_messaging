import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Status from "./src/components/Status";

export default class App extends Component {
  renderMessageList() {
    return <View style={styles.content} />;
  }

  renderInputMethodEditor() {
    return <View style={styles.inputMethodEditor} />;
  }

  renderToolbar() {
    return <View style={styles.toolbar} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Status />
        {this.renderMessageList()}
        {this.renderToolbar()}
        {this.renderInputMethodEditor()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    backgroundColor: "white"
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: "white"
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.04)",
    backgroundColor: "white"
  }
});

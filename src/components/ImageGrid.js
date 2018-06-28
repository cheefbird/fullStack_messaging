import React, { Component } from "react";
import { CameraRoll, Image, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Permissions } from "expo";

import Grid from "./Grid";

const keyExtractor = ({ uri }) => uri;

export default class ImageGrid extends Component {
  static propTypes = {
    onPressImage: PropTypes.func
  };

  static defaultProps = {
    onPressImage: () => {}
  };

  state = {
    images: []
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status !== "granted") {
      console.log("Camera roll permission denied!");
      return;
    }

    const results = await CameraRoll.getPhotos({
      first: 20
    });

    const { edges } = results;

    const loadedImages = edges.map(item => item.node.image);

    this.setState({ images: loadedImages });
  };

  renderItem = ({ item: { uri }, size, marginTop, marginLeft }) => {
    const style = {
      width: size,
      height: size,
      marginLeft,
      marginTop
    };

    return <Image source={{ uri }} style={style} />;
  };

  render() {
    const { images } = this.state;

    return (
      <Grid
        data={images}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1
  }
});

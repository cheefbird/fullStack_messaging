import React, { Component } from "react";
import { Dimensions, FlatList, PixelRatio, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class Grid extends Component {
  static propTypes = {
    renderItem: PropTypes.func.isRequired,
    numColumns: PropTypes.number,
    itemMargin: PropTypes.number
  };

  static defaultProps = {
    numColumns: 4,
    itemMargin: StyleSheet.hairlineWidth
  };

  renderGridItem = info => {
    // TODO
  };

  render() {
    return <FlatList {...this.props} renderItem={this.renderGridItem} />;
  }
}

import React, { Component } from "react";
import {
  BackHandler,
  LayoutAnimation,
  Platform,
  UIManager,
  View
} from "react-native";
import PropTypes from "prop-types";

export const INPUT_METHOD = {
  NONE: "NONE",
  KEYBOARD: "KEYBOARD",
  CUSTOM: "CUSTOM"
};

export default class MessagingContainer extends Component {
  static propTypes = {
    // From 'KeyboardState'
    containerHeight: PropTypes.number.isRequired,
    contentHeight: PropTypes.number.isRequired,
    keyboardHeight: PropTypes.number.isRequired,
    keyboardVisible: PropTypes.bool.isRequired,
    keyboardWillShow: PropTypes.bool.isRequired,
    keyboardWillHide: PropTypes.bool.isRequired,
    keyboardAnimationDuration: PropTypes.number.isRequired,

    // Managing the IME type
    inputMethod: PropTypes.oneOf(Object.values(INPUT_METHOD)).isRequired,
    onChangeInputMethod: PropTypes.func,

    // Rendering content
    children: PropTypes.node,
    renderInputMethodEditor: PropTypes.func.isRequired
  };

  static defaultProps = {
    children: null,
    onChangeInputMethod: () => {}
  };
}

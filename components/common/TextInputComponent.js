import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const TextInputComponent = ({ type, placeholder, value, onChange }) => {
  return (
    <View>
      <TextInput
        secureTextEntry={type === "password"}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={{
          marginBottom: 10,
          paddingLeft: 10,
          height: 50,
          width: 380,
          borderWidth: 1,
          borderRadius: 20,
          borderColor: "purple"
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TextInputComponent;

import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Car = () => {
    const carImage =
  'https://th.bing.com/th/id/OIP.tWWlDxxG5YuGpACY3v6-7wHaEK?w=326&h=183&c=7&r=0&o=7&pid=1.7&rm=3'
    return (
        <View style={styles.img_container}>
              <Image resizeMode='cover' source={{uri: carImage}} style={{width: 40, height: 40}} />
        </View>
    );
}

const styles = StyleSheet.create({
    img_container: {
        width: 80,
        height: 80,
        backgroundColor: 'white',
        padding: 10,
        margin: 10
    }
})

export default Car;

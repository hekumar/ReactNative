import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import TextInputComponent from '../components/common/TextInputComponent';

const UseCallbackDemo = () => {
    const [theme, setTheme] = useState('light');
    const [text, setText] = useState("12-12-1992");

    // const ageCalculator = () => { // is stored in some memory location -> changes on rerender
    //     return text + "extraTExt"
    // }

    const ageCalculator = useCallback(() => { // is stored in some memory location -> changes on rerender
        return text + "extraTExt"
    }, [text]);

    // ageCalculator  function reference is preserved between the rerender
    // usecallback will make sure memory location is fixed

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ padding: 15 }}>
                <Text style={{ padding: 15, backgroundColor: theme === 'dark' ? "#000" : "#fff", color: theme === 'dark' ? "#fff" : "#000" }}>WELCOME</Text>
            </View>

            <View style={{ margin: 15 }}>
                <Pressable onPress={() => {
                    setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
                }}>
                    <Text>
                        {theme === 'light' ? "EnableDarkMode" : "DisableDarkMode"}
                    </Text>
                </Pressable>
            </View>


            <TextInputComponent type="text" onChange={(text => setText(text))} />

            {/* // will rerender when ageCalculator reference changes */}
            <View style={{ margin: 15 }}>
                <ProfileComponent ageCalculator={ageCalculator} />
            </View>
        </View>
    );
}

// Parent component
// themechange  --> parent component will rerender

// Will the child component rerender ???



// dob change   -----> parent component rerender




// if parent component state changes ---> child rerenders

const ProfileComponent = ({ ageCalculator }) => {

    useEffect(() => {

        console.log("ProfileComponent is Rerendered");

    }, [ageCalculator]);

    return (
        <View>
            <Text>Profile component</Text>
            <Text>{ageCalculator()}</Text>
        </View>
    );
}



const styles = StyleSheet.create({})

export default UseCallbackDemo;

// Referential Equality
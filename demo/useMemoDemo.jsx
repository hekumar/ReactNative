import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import TextInputComponent from '../components/common/TextInputComponent';

const UseMemoDemo = () => {
    const [theme, setTheme] = useState('light');
    const [number, setNumber] = useState(1);
    const result = useMemo(() => processingFn(number), [number])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ padding: 15 }}>
                <Text style={{ padding: 15, backgroundColor: theme === 'dark' ? "#000" : "#fff", color: theme === 'dark' ? "#fff" : "#000" }}>WELCOME</Text>
                <View style={{ margin: 15 }}>
                    <Pressable onPress={() => {
                        setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
                    }}>
                        <Text>
                            {theme === 'light' ? "EnableDarkMode" : "DisableDarkMode"}
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View>
                <Text>Use MEMO Demo</Text>
                <TextInputComponent type="text" onChange={(text => setNumber(Number(text)))} />
                <Text>
                    {result}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default UseMemoDemo;

/* Memoization */
// using already calculated value

// function -> calculation - slow  -> called again and again - rerender

const processingFn = (number) => {
    console.time("Processing Function Executing ......");
    for (let index = 0; index < 2000000000; index++) { }
    console.timeEnd("Processing Function Executing ......")

    return number * 10;
}

// factorial 5 -> 10 -> 15





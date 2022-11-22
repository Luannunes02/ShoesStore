import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

export default function Dot(props) {
    return (
        <View style={[styles.container, { backgroundColor: props.color }]}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        borderRadius: 25,
        marginHorizontal: '2.5%',
        elevation: 5,
    }
})
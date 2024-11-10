import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

interface CustomProps {
    color?: string
}

const Loader = (props: CustomProps) => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={props.color ? props.color : '#035AC5'} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
})

export default Loader

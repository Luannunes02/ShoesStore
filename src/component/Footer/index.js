import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Shoes from '../Shoes'

export default function Footer() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/1.png')} cost="R$140,90">
                            Nike Air Max Dia
                        </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/5.png')} cost="R$120,90">
                            Nike Joyride Run Flyknit
                        </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/4.png')} cost="R$220">
                            Nike Epic React Flyknit 2
                        </Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/2.png')} cost="R$280,90">
                            Nike Downshifter 10
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})
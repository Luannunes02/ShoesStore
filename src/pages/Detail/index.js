import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {

    navigation.setOptions({
        headerTitle: 'Nike Downshifter 10'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/detail.png')}
                style={styles.image}
                resizeMode='cover'
            />
            <View>
                <View>
                    <View>
                        <Text style={[styles.title, { fontSize: 24 }]}>Nike Downshifter 10</Text>
                    </View>
                    <View opacity={0.4}>
                        <Text style={[styles.title, { fontSize: 30 }]}>280,90</Text>
                    </View>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color='#2379f4' />
                    <Dot color='#fb6e53' />
                    <Dot color='#ddd' />
                    <Dot color='#000' />
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton bgColor='#17181a' color='#fff'>42</SizeButton>
                        <SizeButton>41</SizeButton>
                        <SizeButton>40</SizeButton>
                        <SizeButton>38</SizeButton>
                    </ScrollView>
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Nike showfer 20
                    </Text>
                    <Text style={styles.textContent}>
                        Nosso modelo para treinamento conta com uma parte superior mais leve e respirável do que nossa edição anterior para complementar nossos padrões de durabilidade e conforto, para que você possa flutuar em seu cardio, forçar seus levantamentos e dominar seus treinos.
                    </Text>
                    <Text style={styles.textList}>
                        - Categoria: Amortecimento
                    </Text>
                    <Text style={styles.textList}>
                        - Material: Mesh
                    </Text>
                </View>

                <Button />

                <View style={styles.line} />

                <Footer />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    image: {
        width: '100%'
    },
    title: {
        paddingHorizontal: '2%',
        fontWeight: 'bold'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%',
        fontWeight: 'bold'
    },
    textList: {
        fontSize: 16,
        lineHeight: 25,
    },
    line: {
        borderWidth: 1,
        borderBottomColor: '#ddd',
        marginVertical: '2%'
    }
})


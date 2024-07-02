
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const images = [
    { id: 1, name: 'İLK BULUŞMA', source: require('../assets/c-firstDate.png'), pageNav: 'FirstDate', },
    { id: 3, name: 'İLİŞKİLER', source: require('../assets/c-coupleM.png'), pageNav: 'LongLove', }, 
    { id: 2, name: 'ARKADAŞLAR', source: require('../assets/c-friends.png'), pageNav: 'Friends', },
    { id: 7, name: 'İŞ ARKADAŞLARI', source: require('../assets/c-office.png'), pageNav: 'workFriends', }


];

export default function HomeScreen() { 
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Text style={styles.textstyle}>KATEGORİLER</Text>
            </View>
            <View style={styles.main} >
                <ScrollView contentContainerStyle={styles.imgMainContainer}
                    scrollEnabled={true} >
                    {images.map((image) => (
                        <TouchableOpacity
                            key={image.id}
                            style={styles.imageContainer}
                            onPress={() => navigation.navigate(image.pageNav)} >
                            <View key={image.id} style={styles.imageInnerContainer}>
                                <Image source={image.source} style={styles.image} />
                                <Text style={styles.imageName}>{image.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#271313',
        justifyContent: 'space-between',
    },
    header: {
        flex: 0.5,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#271313',
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#FFD369'
    },
    main: {
        flex: 6.5,
        paddingLeft: 20,
        paddingRight: 20,
        alignContent: 'center',
        backgroundColor: '#271313',
        fontWeight: 700,
    },
    textstyle: {
        color: '#EEEEEE',
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5
    },
    ftextstyle: {
        color: '#EEEEEE',
        fontWeight: 'bold',
        fontSize: 14,
        paddingBottom: 5,

    },

    svgImage: {
    },
    imgMainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 16,
        flexGrow: 1,
        alignItems: "center",
    },

    imageContainer: {
        width: '48%', // Display two images per row
        marginBottom: 16,
        alignItems: 'center',
    },
    imageInnerContainer: {
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 8,
        marginTop: 12,
        borderRadius: 20,
    },
    imageName: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 4
    },
});
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import questionsData from '../questions.json';

export default function QuestionScreen({ category, categoryName }) {
    var qD = questionsData;
    const questions = qD.find((questionsFD) => questionsFD.category === category).questions;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [shownQuestions, setShownQuestions] = useState([]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestionIndex(randomIndex);
    }, []);

    const navigation = useNavigation();

    const goMain = () => {
        navigation.navigate('HomeScreen');
    }

    const handleShowRandomQuestion = () => {
        if (shownQuestions.length === questions.length - 1) {
            alert("Tüm sorular gösterildi.");
        } else {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * questions.length);
            } while (randomIndex === currentQuestionIndex || shownQuestions.includes(randomIndex));
            setShownQuestions([...shownQuestions, currentQuestionIndex]);
            setCurrentQuestionIndex(randomIndex);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goMain}>
                    <Icon name="arrow-left" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textstyle}>{categoryName}</Text>
                <Text>   </Text>
            </View>

            <View style={styles.main}>
                <Text style={styles.questionStyle}>
                    {questions[currentQuestionIndex].question}
                </Text>
                <TouchableOpacity style={styles.roundButton} onPress={handleShowRandomQuestion}>
                    <Text style={styles.buttonText}>KONU BUL</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#271313',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.5,
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#271313', 
        marginTop: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#FFD369'
    },
    textstyle: {
        color: '#EEEEEE',
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10
    },
    questionStyle: {
        color: '#EEEEEE',
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5,
        textAlign: 'center',
        lineHeight:30,
    },
    main: {
        flex: 6.5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#271313',
        fontWeight: 700,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundButton: {
        backgroundColor: '#FFD369',
        paddingVertical: 60,
        paddingHorizontal: 20,
        borderRadius: 300,
        marginTop: 50,
        fontWeight: 700,
    },
    buttonText: {
        color: '#393E46',
        fontWeight: 'bold',
        fontSize: 20,
    },
    icon: {
        fontSize: 25,
        color: '#FFD369',
        paddingBottom:15,
        paddingLeft:10,
    },
    footer: {
        flex: 2
    }
});

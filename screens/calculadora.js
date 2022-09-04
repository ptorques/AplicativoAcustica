import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import React, { Component, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/stylesheet'

// input component for parameters
const Parametros = () => {
    const [number, setText] = useState('');
    return (
        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
            <TextInput
                style={styles.textInput}
                placeholder="Utilize pontos para valores decimais"
                onChangeText={newText => setText(newText)}
                defaultValue={number}
                keyboardType="numeric"
            />
        </View>
    );
}
// input component for results
const Resultados = () => {
    const [number, setText] = useState('');
    return (
        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
            <TextInput
                style={styles.textResult}
                onChangeText={newText => setText(newText)}
                defaultValue={number}
                placeholder={"000"}
                keyboardType="numeric"
                editable={false}
            />
        </View>
    );
}

// calculator elements for hanc model
const HANC = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.paramContainer}>
                <ScrollView>
                    <Text style={styles.textSobre}>Quantidade de veículos</Text>
                    <Parametros></Parametros>
                    <Text style={styles.textSobre}>Distância entre o ponto de observação e o centro da pista (em pés)</Text>
                    <Parametros></Parametros>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.buttonCalc}
                onPress={() => alert("Esta função ainda não está disponível")}
            >
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.titleSobre}>Resultados</Text>
            <View style={styles.resultContainer}>
                <ScrollView>
                    <View style={styles.resultRow}>
                        <Text style={{ color: "white", fontSize: 30 }}>L50</Text>
                        <Resultados></Resultados>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

// calculator elements for galloway model
const galloway = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.paramContainer}>
                <ScrollView>
                    <Text style={styles.textSobre}>Parâmetro 1</Text>
                    <Parametros></Parametros>
                    <Text style={styles.textSobre}>Parâmetro 2</Text>
                    <Parametros></Parametros>
                    <Text style={styles.textSobre}>Parâmetro 3</Text>
                    <Parametros></Parametros>
                    <Text style={styles.textSobre}>Parâmetro 4</Text>
                    <Parametros></Parametros>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.buttonCalc}
                onPress={() => alert("Esta função ainda não está disponível")}
            >
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.titleSobre}>Resultados</Text>
            <View style={styles.resultContainer}>
                <ScrollView>
                    <View style={styles.resultRow}>
                        <Text style={{ color: "white", fontSize: 30 }}>L50</Text>
                        <Resultados></Resultados>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

// calculator elements for burgess model
const burgess = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.paramContainer}>
                <ScrollView>
                    <Text style={styles.textSobre}>Parâmetro 1</Text>
                    <Parametros></Parametros>
                    <Text style={styles.textSobre}>Parâmetro 2</Text>
                    <Parametros></Parametros>
                    <Text style={styles.textSobre}>Parâmetro 3</Text>
                    <Parametros></Parametros>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.buttonCalc}
                onPress={() => alert("Esta função ainda não está disponível")}
            >
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.titleSobre}>Resultados</Text>
            <View style={styles.resultContainer}>
                <ScrollView>
                    <View style={styles.resultRow}>
                        <Text style={{ color: "white", fontSize: 30 }}>Leq</Text>
                        <Resultados></Resultados>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

// calculator elements for griffiths model
const griffiths = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.paramContainer}>
                <ScrollView>
                    <Text style={styles.textSobre}>Parâmetro 1</Text>
                    <Parametros></Parametros>
                    <Text style={styles.textSobre}>Parâmetro 2</Text>
                    <Parametros></Parametros>
                    <Text style={styles.textSobre}>Parâmetro 3</Text>
                    <Parametros></Parametros>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.buttonCalc}
                onPress={() => alert("Esta função ainda não está disponível")}
            >
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.titleSobre}>Resultados</Text>
            <View style={styles.resultContainer}>
                <ScrollView>
                    <View style={styles.resultRow}>
                        <Text style={{ color: "white", fontSize: 30 }}>Leq</Text>
                        <Resultados></Resultados>
                    </View>
                    <View style={styles.resultRow}>
                        <Text style={{ color: "white", fontSize: 30 }}>L10</Text>
                        <Resultados></Resultados>
                    </View>
                    <View style={styles.resultRow}>
                        <Text style={{ color: "white", fontSize: 30 }}>L50</Text>
                        <Resultados></Resultados>
                    </View>
                    <View style={styles.resultRow}>
                        <Text style={{ color: "white", fontSize: 30 }}>L90</Text>
                        <Resultados></Resultados>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

// calculator elements for fagotti model
const fagotti = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.paramContainer}>
                <ScrollView>
                    <Text style={styles.textSobre}>Parâmetro 1</Text>
                    <Parametros></Parametros>
                    <Text style={styles.textSobre}>Parâmetro 2</Text>
                    <Parametros></Parametros>
                    <Text style={styles.textSobre}>Parâmetro 3</Text>
                    <Parametros></Parametros>
                    <Text style={styles.textSobre}>Parâmetro 4</Text>
                    <Parametros></Parametros>
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.buttonCalc}
                onPress={() => alert("Esta função ainda não está disponível")}
            >
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.titleSobre}>Resultados</Text>
            <View style={styles.resultContainer}>
                <ScrollView>
                    <View style={styles.resultRow}>
                        <Text style={{ color: "white", fontSize: 30 }}>Leq</Text>
                        <Resultados></Resultados>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export class Calculadora extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownText: 'Modelo', // dropdown setting

            // states to decide element display on screen (number of parameter inputs and such)
            showHanc: false,
            showGalloway: false,
            showBurgess: false,
            showGriffiths: false,
            showFagotti: false,
        }
    }
    // dropdown setting 
    updateDropdown = (optiontext) => {
        this.setState({ dropdownText: optiontext })
    }
    updateModel = (model) => {
        switch (model) {
            case "hanc":
                this.setState({
                    showHanc: true,
                    showGalloway: false,
                    showBurgess: false,
                    showGriffiths: false,
                    showFagotti: false,
                })
                break;
            case "galloway":
                this.setState({
                    showGalloway: true,
                    showHanc: false,
                    showBurgess: false,
                    showGriffiths: false,
                    showFagotti: false,
                })
                break;
            case "burgess":
                this.setState({
                    showBurgess: true,
                    showGalloway: false,
                    showHanc: false,
                    showGriffiths: false,
                    showFagotti: false,
                })
                break;
            case "griffiths":
                this.setState({
                    showGriffiths: true,
                    showGalloway: false,
                    showBurgess: false,
                    showHanc: false,
                    showFagotti: false,
                })
                break;
            case "fagotti":
                this.setState({
                    showFagotti: true,
                    showGalloway: false,
                    showBurgess: false,
                    showHanc: false,
                    showGriffiths: false,
                })
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <>
                <LinearGradient
                    colors={['#0f96bf', '#043b99']}
                    start={{
                        x: 1,
                        y: 1
                    }}
                    end={{
                        x: 0,
                        y: 0
                    }}
                    style={styles.background}
                >

                    <View style={styles.bodyCalc}>
                        <View style={styles.menu}>
                            <Menu style={styles.dropdownMenu}>
                                <MenuTrigger style={styles.dropdownTrigger}><Text style={styles.text}>{this.state.dropdownText}</Text></MenuTrigger>
                                <MenuOptions>
                                    <MenuOption onSelect={() => { this.updateDropdown("Handbook of Acoustic Noise Control"); this.updateModel("hanc") }} text='Handbook of Acoustic Noise Control' />
                                    <MenuOption onSelect={() => { this.updateDropdown("Galloway et. al"); this.updateModel("galloway") }} text='Galloway et. al' />
                                    <MenuOption onSelect={() => { this.updateDropdown("Burgess"); this.updateModel("burgess") }} text='Burgess' />
                                    <MenuOption onSelect={() => { this.updateDropdown("Griffiths and Langdon"); this.updateModel("griffiths") }} text='Griffiths and Langdon' />
                                    <MenuOption onSelect={() => { this.updateDropdown("Fagotti et. al"); this.updateModel("fagotti") }} text='Fagotti et. al' />
                                </MenuOptions>
                            </Menu>
                            {this.state.showHanc ? HANC() : null}
                            {this.state.showGalloway ? galloway() : null}
                            {this.state.showBurgess ? burgess() : null}
                            {this.state.showGriffiths ? griffiths() : null}
                            {this.state.showFagotti ? fagotti() : null}
                        </View>
                    </View>
                </LinearGradient>
            </>
        )
    }
};

export default Calculadora;
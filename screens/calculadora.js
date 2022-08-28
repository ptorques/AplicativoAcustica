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

export class Calculadora extends Component {
    constructor() {
        super()
        this.state = {
            dropdownText: 'Modelo'
        }
    }
    updateDropdown = () => {
        this.setState({ dropdownText: this.props.text })
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
                                    <MenuOption style={styles.dropdownOptions} onSelect={this.updateDropdown} text='Opção 1' />
                                    <MenuOption style={styles.dropdownOptions} onSelect={this.updateDropdown} text='Opção 2' />
                                    <MenuOption onSelect={this.updateDropdown} text='Opção 3' />
                                    <MenuOption onSelect={this.updateDropdown} text='Opção 4' />
                                    <MenuOption onSelect={this.updateDropdown} text='Opção 5' />
                                    <MenuOption onSelect={this.updateDropdown} text='Opção 6' />
                                    <MenuOption onSelect={this.updateDropdown} text='Opção 7' />
                                </MenuOptions>
                            </Menu>
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
                                    <Text style={styles.textSobre}>Parâmetro 5</Text>
                                    <Parametros></Parametros>
                                    <Text style={styles.textSobre}>Parâmetro 6</Text>
                                    <Parametros></Parametros>
                                </ScrollView>
                            </View>
                            <TouchableOpacity style={styles.buttonCalc}
                                onPress={() => alert("Esta função ainda não está disponível")}
                            >
                                <Text style={styles.text}>Calcular</Text>
                            </TouchableOpacity>
                            <Text style={styles.titleSobre}>Resultados</Text>
                            <View style={styles.paramContainer}>
                                <ScrollView>
                                    <View style={styles.resultRow}>
                                        <Text style={{color: "white", fontSize: 30}}>L10</Text>
                                        <Resultados></Resultados>
                                    </View>
                                    <View style={styles.resultRow}>
                                        <Text style={{color: "white", fontSize: 30}}>L50</Text>
                                        <Resultados></Resultados>
                                    </View>
                                    <View style={styles.resultRow}>
                                        <Text style={{color: "white", fontSize: 30}}>L90</Text>
                                        <Resultados></Resultados>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </>
        )
    }
};

export default Calculadora;
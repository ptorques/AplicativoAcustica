import React, { Component, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/stylesheet'

// calculator elements for hanc model
export class HANC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            result: 0
        }
    }
    calcHanc = () => {
        if ((this.state.param1).length > 0 && (this.state.param2).length > 0) {
            this.setState({ result: 68 + 8.5 * Math.log(parseFloat(this.state.param1)) - 20 * Math.log(parseFloat(this.state.param2)) })
        }
        else {
            alert("Parâmetros não podem ser nulos")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.paramContainer}>
                    <ScrollView>
                        <Text style={styles.textSobre}>Quantidade de veículos</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param1}
                                onChangeText={(param1) => this.setState({ param1 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Distância entre o ponto de observação e o centro da pista (em pés)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param2}
                                onChangeText={(param2) => this.setState({ param2 })}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonCalc}
                    onPress={() => { this.calcHanc() }}
                >
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
                <Text style={styles.titleSobre}>Resultados</Text>
                <View style={styles.resultContainer}>
                    <ScrollView>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>L50</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.result * 10000)) / 10000}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// calculator elements for johnson model
export class Johnson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            param3: 0,
            result: 0
        }
    }
    calcJohnson = () => {
        if ((this.state.param1).length > 0 && (this.state.param2).length > 0 && (this.state.param3).length > 0) {
            this.setState({ result: 3.5 + 10 * Math.log((parseFloat(this.state.param1) * Math.pow(parseFloat(this.state.param3), 3)) / parseFloat(this.state.param2)) })
        }
        else {
            alert("Parâmetros não podem ser nulos")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.paramContainer}>
                    <ScrollView>
                        <Text style={styles.textSobre}>Quantidade de veículos</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param1}
                                onChangeText={(param1) => this.setState({ param1 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Distância entre o ponto de observação e o centro da pista (em pés)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param2}
                                onChangeText={(param2) => this.setState({ param2 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Velocidade mediana dos veículos (em milhas por hora)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param3}
                                onChangeText={(param3) => this.setState({ param3 })}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonCalc}
                    onPress={() => { this.calcJohnson() }}
                >
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
                <Text style={styles.titleSobre}>Resultados</Text>
                <View style={styles.resultContainer}>
                    <ScrollView>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>L50</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.result * 10000)) / 10000}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// calculator elements for galloway model
export class Galloway extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            param3: 0,
            param4: 0,
            result: 0
        }
    }
    calcGalloway = () => {
        if ((this.state.param1).length > 0 && (this.state.param2).length > 0 && (this.state.param3).length > 0 && (this.state.param4).length > 0) {
            this.setState({ result: 20 + 10 * Math.log((parseFloat(this.state.param1) * Math.pow(parseFloat(this.state.param3), 2)) / parseFloat(this.state.param2)) + 0.4 * parseFloat(this.state.param4) })
        }
        else {
            alert("Parâmetros não podem ser nulos")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.paramContainer}>
                    <ScrollView>
                        <Text style={styles.textSobre}>Quantidade de veículos</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param1}
                                onChangeText={(param1) => this.setState({ param1 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Distância entre o ponto de observação e o centro da pista (em pés)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param2}
                                onChangeText={(param2) => this.setState({ param2 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Velocidade mediana dos veículos (em milhas por hora)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param3}
                                onChangeText={(param3) => this.setState({ param3 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Porcentagem de veículos pesados em tráfego</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param4}
                                onChangeText={(param4) => this.setState({ param4 })}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonCalc}
                    onPress={() => { this.calcGalloway() }}
                >
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
                <Text style={styles.titleSobre}>Resultados</Text>
                <View style={styles.resultContainer}>
                    <ScrollView>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>L50</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.result * 10000)) / 10000}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/stylesheet'

export class Home extends Component {
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

                    <View style={styles.body}>
                        <StatusBar style="auto" />
                        <Text style={styles.title}>Bem-vindo!</Text>
                        <View style={styles.logo}>
                            <Image
                                style={{
                                    resizeMode: "center",
                                    marginTop: "10%",
                                }}
                                source={require("../../assets/iel.png")}
                            />
                        </View>

                        <View style={{ marginBottom: "35%" }}>
                            <TouchableOpacity style={styles.button}
                                onPress={() => this.props.navigation.push('Calculadora')}
                            >
                                <Text style={styles.text}>Calculadora</Text>
                            </TouchableOpacity>
                            <View style={styles.buttonRow}>
                                <TouchableOpacity style={styles.rowButton}
                                    onPress={() => this.props.navigation.push('Sobre')}
                                >
                                    <Text style={styles.text}>Sobre</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.rowButton}
                                    onPress={() => this.props.navigation.push('Info')}
                                >
                                    <Text style={styles.text}>Saiba mais</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </LinearGradient>
            </>
        );
    }
};

export default Home
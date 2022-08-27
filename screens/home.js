import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/stylesheet'

export class Home extends Component {
    render() {
        return (
            <>
                <LinearGradient
                    colors={['#0f96bf', '#043b99']}
                    start={{
                        x: 0,
                        y: 1
                    }}
                    end={{
                        x: 0,
                        y: 0
                    }}
                    style={styles.background}
                >

                    <View style={styles.body}>
                    <Text style={styles.title}>Bem-vindo!</Text>
                        <View style={styles.logo}>
                            <Image
                                style={{
                                    resizeMode: "center",
                                    marginTop: "10%",
                                }}
                                source={require("../assets/iel.png")}
                            />
                        </View>
                        <StatusBar style="auto"/>
                        <View style={{marginBottom: "20%"}}>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.push('Calculadora')}
                        >
                            <Text style={styles.text}>Calculadora</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.push('Sobre')}
                        >
                            <Text style={styles.text}>Sobre</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                            onPress={() => this.props.navigation.push('Contato')}
                        >
                            <Text style={styles.text}>Contato</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </>
        );
    }
};

export default Home
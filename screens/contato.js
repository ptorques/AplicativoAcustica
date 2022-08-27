import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/stylesheet'


export class Contato extends Component {
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
                        <View style={styles.border}>
                            <Text style={styles.title}>Contato</Text>
                            <StatusBar style="auto" />
                            <Button style={styles.button}
                                title="Tela inicial"
                                onPress={() => this.props.navigation.navigate('Home')}
                            />
                        </View>
                    </View>
                </LinearGradient>
            </>
        )
    }
};

export default Contato;
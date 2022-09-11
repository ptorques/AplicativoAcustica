import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import React, { Component, useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/stylesheet'
import { HANC, Johnson, Galloway} from '../models/models.js'


export class Calculadora extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownText: 'Modelo', // dropdown setting

            // states to decide element display on screen (number of parameter inputs and such)
            showHanc: false,
            showJohnson: false,
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
                    showJohnson: false,
                    showGalloway: false,
                    showBurgess: false,
                    showGriffiths: false,
                    showFagotti: false,
                })
                break;
            case "johnson":
                this.setState({
                    showHanc: false,
                    showJohnson: true,
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
                    showJohnson: false,
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
                    showJohnson: false,
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
                    showJohnson: false,
                    showFagotti: false,
                })
                break;
            case "fagotti":
                this.setState({
                    showFagotti: true,
                    showGalloway: false,
                    showBurgess: false,
                    showHanc: false,
                    showJohnson: false,
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
                                    <MenuOption onSelect={() => { this.updateDropdown("Johnson et. al"); this.updateModel("johnson") }} text='Johnson et. al' />
                                    <MenuOption onSelect={() => { this.updateDropdown("Galloway et. al"); this.updateModel("galloway") }} text='Galloway et. al' />
                                    <MenuOption onSelect={() => { this.updateDropdown("Burgess"); this.updateModel("burgess") }} text='Burgess' />
                                    <MenuOption onSelect={() => { this.updateDropdown("Griffiths and Langdon"); this.updateModel("griffiths") }} text='Griffiths and Langdon' />
                                    <MenuOption onSelect={() => { this.updateDropdown("Fagotti et. al"); this.updateModel("fagotti") }} text='Fagotti et. al' />
                                </MenuOptions>
                            </Menu>
                            {this.state.showHanc ? <HANC></HANC> : null}
                            {this.state.showJohnson ? <Johnson></Johnson> : null}
                            {this.state.showGalloway ? <Galloway></Galloway> : null}
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
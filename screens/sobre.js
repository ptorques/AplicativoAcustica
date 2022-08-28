import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/stylesheet'

export class Sobre extends Component {
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

                    <View style={styles.bodySobre}>
                        <View style={styles.textContainer}>
                        <ScrollView>
                            <Text style={styles.titleSobre}>O que é este aplicativo?</Text>
                            <Text style={styles.textSobre}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis bibendum felis in tincidunt. Quisque imperdiet, nulla sit amet facilisis viverra, odio purus egestas nulla, et suscipit dui arcu nec eros. Vivamus id enim nec leo pellentesque finibus. Nullam metus sapien, tincidunt eget interdum id, posuere vitae nunc. In eget ullamcorper arcu. Morbi vel eros ac nisi pulvinar rutrum et quis dolor. Sed at ligula tempus, aliquet sem quis, convallis mauris. {"\n"}{"\n"}Aliquam id velit volutpat, eleifend erat ut, malesuada odio. Sed lacinia urna ut mattis gravida. Suspendisse quis luctus arcu. Morbi consequat libero vel tortor feugiat, id maximus magna fringilla. Cras malesuada lectus ut odio consequat, vel maximus lorem tempus. Sed ex tellus, vulputate eget iaculis non, tincidunt sit amet augue. Proin condimentum nulla luctus justo tempor, ac tincidunt eros venenatis.</Text>
                            <Text style={styles.titleSobre}>Quem somos</Text>
                            <Text style={styles.textSobre}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis bibendum felis in tincidunt. Quisque imperdiet, nulla sit amet facilisis viverra, odio purus egestas nulla, et suscipit dui arcu nec eros. Vivamus id enim nec leo pellentesque finibus. Nullam metus sapien, tincidunt eget interdum id, posuere vitae nunc. In eget ullamcorper arcu. Morbi vel eros ac nisi pulvinar rutrum et quis dolor. Sed at ligula tempus, aliquet sem quis, convallis mauris. {"\n"}{"\n"}Aliquam id velit volutpat, eleifend erat ut, malesuada odio. Sed lacinia urna ut mattis gravida. Suspendisse quis luctus arcu. Morbi consequat libero vel tortor feugiat, id maximus magna fringilla. Cras malesuada lectus ut odio consequat, vel maximus lorem tempus. Sed ex tellus, vulputate eget iaculis non, tincidunt sit amet augue. Proin condimentum nulla luctus justo tempor, ac tincidunt eros venenatis.</Text>
                            <Text style={styles.titleSobre}>Como utilizar</Text>
                            <Text style={styles.textSobre}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis bibendum felis in tincidunt. Quisque imperdiet, nulla sit amet facilisis viverra, odio purus egestas nulla, et suscipit dui arcu nec eros. Vivamus id enim nec leo pellentesque finibus. Nullam metus sapien, tincidunt eget interdum id, posuere vitae nunc. In eget ullamcorper arcu. Morbi vel eros ac nisi pulvinar rutrum et quis dolor. Sed at ligula tempus, aliquet sem quis, convallis mauris. {"\n"}{"\n"}Aliquam id velit volutpat, eleifend erat ut, malesuada odio. Sed lacinia urna ut mattis gravida. Suspendisse quis luctus arcu. Morbi consequat libero vel tortor feugiat, id maximus magna fringilla. Cras malesuada lectus ut odio consequat, vel maximus lorem tempus. Sed ex tellus, vulputate eget iaculis non, tincidunt sit amet augue. Proin condimentum nulla luctus justo tempor, ac tincidunt eros venenatis.</Text>
                        </ScrollView>
                        </View>
                    </View>
                </LinearGradient>
            </>
        )
    }
};

export default Sobre;
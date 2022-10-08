import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/stylesheet'

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
                            <Text style={styles.textSobre}>Você está utilizando um software criado com a intenção de facilitar a aplicação de modelos analíticos de previsão de ruído rodoviário. O que isso significa, essencialmente, é que este aplicativo é uma calculadora pré-configurada com fórmulas matemáticas que têm o objetivo de descobrir o nível de intensidade acústica em decibels de uma estrada com base em certos parâmetros, como a quantidade de veículos, porcentagem de veículos pesados, distância do ponto de referência, etc. Todos os modelos disponíveis no aplicativo foram obtidos de artigos científicos altamente referenciados no campo da acústica e ruído rodoviário.</Text>
                            <Text style={styles.titleSobre}>Como utilizar</Text>
                            <Text style={styles.textSobre}>Há três menus principais no app: a calculadora, o informativo principal (você está aqui!) e as informações adicionais. O informativo principal apresenta tudo o que alguém que não sabe sobre o que o projeto se trata precisa ler para ter um entendimento básico do que é o software e como utilizar. As informações adicionais são um link externo para que você acesse o nosso artigo e os projetos dos nossos colegas da Iniciação Científica do SENAI. {"\n"}{"\n"}A calculadora é a peça principal, e seu funcionamento é relativamente simples. Quando ela é aberta, precisa-se selecionar um modelo da lista, que diferencia-os por meio do(s) autor(es) atribuídos do artigo ou do nome da obra de onde foi retirado. Após selecionar o modelo, os campos de parâmetros e resultados aparecerão, você só precisa inserir os dados que são pedidos respeitando as unidades e formatação especificadas e então clicar em "Calcular". Os resultados serão mostrados ao lado da medida que representam (L10, L50, L90 ou Leq) em dB. {"\n"}{"\n"}A interpretação destes dados está além do escopo deste software, portanto, se você está confuso sobre o que é tudo isso, recomendamos que confira o aplicativo de biblioteca introdutória ao assunto de acústica desenvolvido por nosso grupo parceiro no projeto de Iniciação Científica (detalhes no saiba mais).</Text>
                            <Text style={styles.titleSobre}>Quem somos</Text>
                            <Text style={styles.textSobre}>Afinal, o que é o projeto de Iniciação Científica? Basicamente, é uma inciativa organizada pelos colégios de ensino médio do sistema S (SESI/SENAI) para introduzir os alunos ao método científico utilizando uma abordagem prática. Um tema é decidido, e os alunos participantes são separados em grupos de pesquisa com objetivos diferentes porém centrados no tema e se interconectando. Cada grupo passa pelo processo de realizar uma pesquisa científica do zero, aprendendo sobre o assunto, fazendo revisões bibliográficas, desenvolvendo uma proposta e eventualmente escrevendo um artigo. {"\n"}{"\n"}O tema de nossa unidade é a medição de ruído rodoviário na cidade de Florianópolis, e o nosso grupo ficou responsável por desenvolver um aplicativo para digitalizar a aplicação de modelos analíticos de previsão de ruído de tráfego, que então será utilizado para validar estes modelos contra as medições reais realizadas por outro grupo em estradas da cidade, avaliando se as fórmulas são precisas em seu funcionamento.</Text>
                        </ScrollView>
                        </View>
                    </View>
                </LinearGradient>
            </>
        )
    }
};

export default Sobre;
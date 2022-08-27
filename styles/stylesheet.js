import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    body: {
        flex: 1,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center"
    },

    logo: {
        flex: 10,
    },

    title: {
        color: "white",
        fontSize: 30,
        top: "17%"
    },

    button: {
        width: 300,
        alignItems: "center",
        backgroundColor: "#E43397",
        padding: 10,
        margin: 10,
        borderRadius: 50
    }, 

    text: {
        color: "white"
    }
});

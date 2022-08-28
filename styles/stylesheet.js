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
        textAlign: "center",
        padding: 0
    },

    bodySobre: {
        flex: 1,
        flexDirection: "row",
        textAlign: "justify",
        padding: 0
    },

    bodyCalc: {
        flex: 1,
        flexDirection: "row",
        textAlign: "justify",
        padding: 0
    },

    logo: {
        flex: 10,
    },

    title: {
        color: "white",
        fontSize: 30,
        top: "15%",
    },

    button: {
        width: 300,
        alignItems: "center",
        backgroundColor: "#E43397",
        padding: 15,
        margin: 10,
        borderRadius: 10
    },

    buttonCalc: {
        width: "90%",
        alignItems: "center",
        backgroundColor: "#E43397",
        padding: 15,
        margin: 10,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10
    },

    rowButton: {
        width: 140,
        alignItems: "center",
        backgroundColor: "#E43397",
        padding: 15,
        margin: 10,
        marginTop: 20,
        borderRadius: 10
    },

    text: {
        color: "white"
    },

    buttonRow: {
        flexDirection: "row",
        width: 300,
    },

    textContainer: {
        height: "100%",
        width: "100%",
        justifyContent: "flex-start",
        textAlign: "justify",
        padding: "5%",
        paddingTop: "24%",
    },

    titleSobre: {
        color: "white",
        fontSize: 25,
        marginVertical: "2%"
    },

    textSobre: {
        marginVertical: "1%",
        color: "white",
        fontSize: 15
    },

    menu: {
        flex: 1,
        padding: "5%",
        alignItems: "center"
    },

    dropdownMenu: {
        width: "90%",
        height: "7%",
        backgroundColor: "gray",
        marginTop: "30%",
        marginBottom: "10%",
        borderRadius: 10
    }, 

    dropdownTrigger: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    paramContainer: {
        height: "32%",
        width: "90%",
    },

    textInput: {
        height: 40, 
        backgroundColor: "white",
        borderRadius: 10,
        paddingLeft: 10
    },

    resultRow: {
        flexDirection: "row",
        marginVertical: 10
    },

    textResult: {
        borderBottomWidth: 2,
        marginLeft: 10,
        width: 300,
        borderColor: "white",
        color: "white"
    }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
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
            <Text style={styles.title}>Bem-vindo!</Text>
            <StatusBar style="auto" />
          </View>
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  border: {
    backgroundColor: "transparent",
    width: "90%",
    height: "80%",
    marginTop: 100,
    borderWidth: 2,
    borderColor: "#EC3DC5",
    textAlign: "center"
  },

  title: {
    color: "white",
    fontSize: 30,
    margin: "auto",
  },
});

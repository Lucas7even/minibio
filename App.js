import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/foto.jpg")} style={styles.foto} />
      <Text style={styles.nome}>Lucas Hudson Caxilé</Text>
      <Text style={styles.bio}>
        sou um estudante do curso de ciências da computação pela universidade cátolica de pernambuco e gosto de codar
      </Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  foto: { width: 180, height: 180, borderRadius: 90, marginBottom: 20 },
  nome: { fontSize: 32, fontWeight: "bold", marginBottom: 12 },
  bio: { fontSize: 16, textAlign: "center", lineHeight: 24, color: "#444" },
});

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/images/fotoPerfil.jpeg")}
        style={styles.foto}
      />

      <Text style={styles.nome}>Maria Clara Ribeiro</Text>

      <View style={styles.card}>
        <Text style={styles.bio}>
          Meu Nome é Maria Clara, tenho 22 anos e sou de Recife-PE. Sou estudante de
          Ciência da Computação, atualmente no 5° período, meu desejo é me formar e trabalhar com desenvolvimento
          front-end.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#FCf4F0",
  },
  foto: {
    width: 180,
    height: 180,
    borderRadius: 30,
    marginBottom: 20,
  },
  nome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8D0101",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#C0D6FF",
    padding: 16,
    borderRadius: 12,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#8D0101",
  },
});
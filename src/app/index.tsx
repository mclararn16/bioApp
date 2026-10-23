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
    backgroundColor: "#FEEFB8",
  },
  foto: {
    width: 200,
    height: 280,
    borderRadius: 30,
    marginBottom: 26,
    borderWidth: 4,
    borderColor: "#432F2E",
    boxShadow: "0 8px 16px rgba(67, 47, 46, 0.5)",
  },
  nome: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 28,
    color: "#432F2E",
    marginBottom: 16,
  },
  bio: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 18,
    lineHeight: 27,
    textAlign: "center",
    color: "#432F2E",
  },
  card: {
    backgroundColor: "#C4DAE8",
    padding: 16,
    borderRadius: 12,
    boxShadow: "0 6px 0 #8FB0C9",
  },
});
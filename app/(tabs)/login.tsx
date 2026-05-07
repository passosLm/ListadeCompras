import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [modoLogin, setModoLogin] = useState<boolean>(true);
  const [mensagem, setMensagem] = useState<string>("");

  function entrar() {
    if (email.trim() === "" || senha.trim() === "") {
      setMensagem("Preencha todos os campos!");
      return;
    }
    setMensagem(
      modoLogin ? "✅ Login realizado!" : "✅ Conta criada com sucesso!",
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>
        {modoLogin ? "Entrar na conta" : "Criar conta"}
      </Text>

      <Text style={styles.subtitulo}>
        {modoLogin ? "Bem-vindo de volta! 👋" : "Crie sua conta grátis 🎉"}
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          placeholderTextColor="#bbb"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#bbb"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        {mensagem !== "" && (
          <Text
            style={[
              styles.mensagem,
              mensagem.includes("✅") ? styles.sucesso : styles.erro,
            ]}
          >
            {mensagem}
          </Text>
        )}

        <TouchableOpacity style={styles.botao} onPress={entrar}>
          <Text style={styles.botaoTexto}>
            {modoLogin ? "Entrar" : "Criar conta"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setModoLogin(!modoLogin);
            setMensagem("");
          }}
        >
          <Text style={styles.trocar}>
            {modoLogin ? "Não tem conta? Criar agora" : "Já tem conta? Entrar"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 24,
    paddingTop: 60,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2d2d2d",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    textAlign: "center",
    color: "#888",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    borderWidth: 0.5,
    borderColor: "#e0e0e0",
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#555",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    color: "#333",
    marginBottom: 16,
  },
  mensagem: {
    textAlign: "center",
    fontSize: 13,
    marginBottom: 12,
    fontWeight: "500",
  },
  sucesso: {
    color: "#4CAF50",
  },
  erro: {
    color: "#e53935",
  },
  botao: {
    backgroundColor: "#4CAF50",
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    marginBottom: 16,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  trocar: {
    textAlign: "center",
    color: "#4CAF50",
    fontSize: 14,
  },
});

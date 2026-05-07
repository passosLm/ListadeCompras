import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Configuracoes() {
  const [notificacoes, setNotificacoes] = useState<boolean>(true);
  const [modoEscuro, setModoEscuro] = useState<boolean>(false);
  const [ordenarFeitos, setOrdenarFeitos] = useState<boolean>(false);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Configurações</Text>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Preferências</Text>

        <View style={styles.item}>
          <View style={styles.itemTextos}>
            <Text style={styles.itemTitulo}>🔔 Notificações</Text>
            <Text style={styles.itemSub}>Receber lembretes da lista</Text>
          </View>
          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
            trackColor={{ false: "#ddd", true: "#4CAF50" }}
            thumbColor="#fff"
          />
        </View>

        <View style={styles.divisor} />

        <View style={styles.item}>
          <View style={styles.itemTextos}>
            <Text style={styles.itemTitulo}>🌙 Modo escuro</Text>
            <Text style={styles.itemSub}>Mudar aparência do app</Text>
          </View>
          <Switch
            value={modoEscuro}
            onValueChange={setModoEscuro}
            trackColor={{ false: "#ddd", true: "#4CAF50" }}
            thumbColor="#fff"
          />
        </View>

        <View style={styles.divisor} />

        <View style={styles.item}>
          <View style={styles.itemTextos}>
            <Text style={styles.itemTitulo}>✅ Ordenar comprados</Text>
            <Text style={styles.itemSub}>Mover itens comprados pro final</Text>
          </View>
          <Switch
            value={ordenarFeitos}
            onValueChange={setOrdenarFeitos}
            trackColor={{ false: "#ddd", true: "#4CAF50" }}
            thumbColor="#fff"
          />
        </View>
      </View>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Sobre o app</Text>

        <View style={styles.item}>
          <Text style={styles.itemTitulo}>📱 Versão</Text>
          <Text style={styles.itemValor}>1.0.0</Text>
        </View>

        <View style={styles.divisor} />

        <View style={styles.item}>
          <Text style={styles.itemTitulo}>👨‍💻 Desenvolvedor</Text>
          <Text style={styles.itemValor}>Você mesmo!</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botaoSair}>
        <Text style={styles.botaoSairTexto}>🚪 Sair da conta</Text>
      </TouchableOpacity>
    </ScrollView>
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
    width: 70,
    height: 70,
    alignSelf: "center",
    marginBottom: 12,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2d2d2d",
    marginBottom: 24,
  },
  secao: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: "#e0e0e0",
  },
  secaoTitulo: {
    fontSize: 12,
    fontWeight: "600",
    color: "#aaa",
    textTransform: "uppercase",
    marginBottom: 12,
    letterSpacing: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  itemTextos: {
    flex: 1,
  },
  itemTitulo: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
  itemSub: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 2,
  },
  itemValor: {
    fontSize: 14,
    color: "#aaa",
  },
  divisor: {
    height: 0.5,
    backgroundColor: "#eee",
    marginVertical: 8,
  },
  botaoSair: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ffcdd2",
    marginBottom: 40,
  },
  botaoSairTexto: {
    color: "#e53935",
    fontSize: 15,
    fontWeight: "500",
  },
});

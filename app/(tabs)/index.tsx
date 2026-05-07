import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Item = {
  id: string;
  nome: string;
  feito: boolean;
};

export default function Index() {
  const [texto, setTexto] = useState<string>("");
  const [lista, setLista] = useState<Item[]>([]);

  function adicionarItem() {
    if (texto.trim() === "") return;
    const novoItem: Item = {
      id: Date.now().toString(),
      nome: texto.trim(),
      feito: false,
    };
    setLista((anterior) => [...anterior, novoItem]);
    setTexto("");
  }

  function removerItem(id: string) {
    setLista((anterior) => anterior.filter((i) => i.id !== id));
  }

  function marcarFeito(id: string) {
    setLista((anterior) =>
      anterior.map((i) => (i.id === id ? { ...i, feito: !i.feito } : i)),
    );
  }

  function renderItem({ item }: { item: Item }) {
    return (
      <View style={styles.itemRow}>
        <TouchableOpacity
          onPress={() => marcarFeito(item.id)}
          style={styles.itemTextoArea}
        >
          <Text style={[styles.itemTexto, item.feito && styles.itemFeito]}>
            {item.feito ? "✅" : "⬜"} {item.nome}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removerItem(item.id)}>
          <Text style={styles.remover}>🗑️</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const totalFeitos = lista.filter((i) => i.feito).length;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Lista de Compras</Text>

      {lista.length > 0 && (
        <Text style={styles.contador}>
          {totalFeitos} de {lista.length} itens comprados
        </Text>
      )}

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item..."
          placeholderTextColor="#aaa"
          value={texto}
          onChangeText={setTexto}
          onSubmitEditing={adicionarItem}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
          <Text style={styles.botaoTexto}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum item ainda.{"\n"}Adicione algo acima! 👆
          </Text>
        }
      />
    </View>
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
    marginBottom: 12,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2d2d2d",
    marginBottom: 4,
  },
  contador: {
    textAlign: "center",
    fontSize: 13,
    color: "#888",
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "#333",
  },
  botao: {
    backgroundColor: "#4CAF50",
    borderRadius: 12,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: "#e0e0e0",
  },
  itemTextoArea: {
    flex: 1,
  },
  itemTexto: {
    fontSize: 16,
    color: "#333",
  },
  itemFeito: {
    textDecorationLine: "line-through",
    color: "#bbb",
  },
  remover: {
    fontSize: 20,
    paddingLeft: 8,
  },
  vazio: {
    textAlign: "center",
    color: "#bbb",
    marginTop: 60,
    fontSize: 15,
    lineHeight: 24,
  },
});

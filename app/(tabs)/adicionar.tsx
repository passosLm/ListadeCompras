import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type Categoria = "Alimentos" | "Bebidas" | "Limpeza" | "Higiene" | "Outros";

export default function Adicionar() {
  const [nome, setNome] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("1");
  const [preco, setPreco] = useState<string>("");
  const [categoria, setCategoria] = useState<Categoria>("Alimentos");
  const [mensagem, setMensagem] = useState<string>("");

  const categorias: Categoria[] = [
    "Alimentos",
    "Bebidas",
    "Limpeza",
    "Higiene",
    "Outros",
  ];

  const emojisCategoria: Record<Categoria, string> = {
    Alimentos: "🍎",
    Bebidas: "🥤",
    Limpeza: "🧹",
    Higiene: "🧴",
    Outros: "📦",
  };

  function salvar() {
    if (nome.trim() === "") {
      setMensagem("❌ Digite o nome do item!");
      return;
    }
    if (quantidade.trim() === "" || Number(quantidade) <= 0) {
      setMensagem("❌ Digite uma quantidade válida!");
      return;
    }
    setMensagem("✅ Item adicionado com sucesso!");
    setNome("");
    setQuantidade("1");
    setPreco("");
    setCategoria("Alimentos");
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Adicionar Item</Text>
      <Text style={styles.subtitulo}>Preencha os detalhes do produto</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nome do produto</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Arroz, Feijão, Leite..."
          placeholderTextColor="#bbb"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Quantidade</Text>
        <View style={styles.quantidadeRow}>
          <TouchableOpacity
            style={styles.btnQtd}
            onPress={() =>
              setQuantidade((q) => String(Math.max(1, Number(q) - 1)))
            }
          >
            <Text style={styles.btnQtdTexto}>−</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.inputQtd}
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="numeric"
            textAlign="center"
          />
          <TouchableOpacity
            style={styles.btnQtd}
            onPress={() => setQuantidade((q) => String(Number(q) + 1))}
          >
            <Text style={styles.btnQtdTexto}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Preço estimado (opcional)</Text>
        <TextInput
          style={styles.input}
          placeholder="R$ 0,00"
          placeholderTextColor="#bbb"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Categoria</Text>
        <View style={styles.categorias}>
          {categorias.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoria,
                categoria === cat && styles.categoriaSelecionada,
              ]}
              onPress={() => setCategoria(cat)}
            >
              <Text style={styles.categoriaEmoji}>{emojisCategoria[cat]}</Text>
              <Text
                style={[
                  styles.categoriaTexto,
                  categoria === cat && styles.categoriaTextoSelecionado,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

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

        <TouchableOpacity style={styles.botao} onPress={salvar}>
          <Text style={styles.botaoTexto}>Adicionar à lista ✅</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 40,
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
  quantidadeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  btnQtd: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  btnQtdTexto: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  inputQtd: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: "#333",
  },
  categorias: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  categoria: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
  },
  categoriaSelecionada: {
    backgroundColor: "#e8f5e9",
    borderColor: "#4CAF50",
  },
  categoriaEmoji: {
    fontSize: 14,
  },
  categoriaTexto: {
    fontSize: 13,
    color: "#888",
  },
  categoriaTextoSelecionado: {
    color: "#4CAF50",
    fontWeight: "500",
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
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

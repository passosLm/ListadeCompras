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

export default function Detalhes() {
  const [nome, setNome] = useState<string>("Arroz");
  const [quantidade, setQuantidade] = useState<string>("2");
  const [preco, setPreco] = useState<string>("25,90");
  const [categoria, setCategoria] = useState<Categoria>("Alimentos");
  const [comprado, setComprado] = useState<boolean>(false);
  const [editando, setEditando] = useState<boolean>(false);
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
    setEditando(false);
    setMensagem("✅ Item atualizado com sucesso!");
    setTimeout(() => setMensagem(""), 3000);
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Detalhes do Item</Text>

      <View
        style={[
          styles.statusBadge,
          comprado ? styles.statusComprado : styles.statusPendente,
        ]}
      >
        <Text
          style={[
            styles.statusTexto,
            comprado ? styles.statusTextoComprado : styles.statusTextoPendente,
          ]}
        >
          {comprado ? "✅ Comprado" : "⏳ Pendente"}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Nome do produto</Text>
        {editando ? (
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholderTextColor="#bbb"
          />
        ) : (
          <Text style={styles.valor}>
            {emojisCategoria[categoria]} {nome}
          </Text>
        )}

        <View style={styles.divisor} />

        <Text style={styles.label}>Quantidade</Text>
        {editando ? (
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
        ) : (
          <Text style={styles.valor}>{quantidade} unidade(s)</Text>
        )}

        <View style={styles.divisor} />

        <Text style={styles.label}>Preço estimado</Text>
        {editando ? (
          <TextInput
            style={styles.input}
            value={preco}
            onChangeText={setPreco}
            keyboardType="numeric"
            placeholderTextColor="#bbb"
            placeholder="R$ 0,00"
          />
        ) : (
          <Text style={styles.valor}>R$ {preco || "Não informado"}</Text>
        )}

        <View style={styles.divisor} />

        <Text style={styles.label}>Categoria</Text>
        {editando ? (
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
                <Text style={styles.categoriaEmoji}>
                  {emojisCategoria[cat]}
                </Text>
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
        ) : (
          <Text style={styles.valor}>
            {emojisCategoria[categoria]} {categoria}
          </Text>
        )}
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

      <TouchableOpacity
        style={[
          styles.botao,
          comprado ? styles.botaoDesfazer : styles.botaoComprado,
        ]}
        onPress={() => setComprado(!comprado)}
      >
        <Text style={styles.botaoTexto}>
          {comprado ? "↩️ Marcar como pendente" : "✅ Marcar como comprado"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.botao,
          editando ? styles.botaoSalvar : styles.botaoEditar,
        ]}
        onPress={editando ? salvar : () => setEditando(true)}
      >
        <Text style={styles.botaoTexto}>
          {editando ? "💾 Salvar alterações" : "✏️ Editar item"}
        </Text>
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
    marginBottom: 12,
  },
  statusBadge: {
    alignSelf: "center",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 99,
    marginBottom: 20,
  },
  statusComprado: {
    backgroundColor: "#e8f5e9",
  },
  statusPendente: {
    backgroundColor: "#fff8e1",
  },
  statusTexto: {
    fontSize: 13,
    fontWeight: "500",
  },
  statusTextoComprado: {
    color: "#4CAF50",
  },
  statusTextoPendente: {
    color: "#f9a825",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    borderWidth: 0.5,
    borderColor: "#e0e0e0",
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: "500",
    color: "#aaa",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  valor: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  divisor: {
    height: 0.5,
    backgroundColor: "#eee",
    marginVertical: 14,
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    color: "#333",
    marginBottom: 4,
  },
  quantidadeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
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
    marginBottom: 4,
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
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    marginBottom: 12,
  },
  botaoComprado: {
    backgroundColor: "#4CAF50",
  },
  botaoDesfazer: {
    backgroundColor: "#f9a825",
  },
  botaoEditar: {
    backgroundColor: "#1976D2",
  },
  botaoSalvar: {
    backgroundColor: "#4CAF50",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

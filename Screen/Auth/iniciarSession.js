import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { loginUser } from "../../Src/Navegation/Services/AuthService";

export default function IniciarSesion({ navigation }) {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [isCargando, setEstaCargando] = useState(false);

  const handleLogin = async () => {
    setEstaCargando(true);
    try {
      const result = await loginUser(correo, contrasena);
      if (result.success) {
        Alert.alert("Éxito", "Inicio de sesión exitoso", [
          { Text: "OK", onPress: () => console.log("Login exitoso, redirigiendo automanticamente....") },
        ]);
      } else {
        Alert.alert("Error de Login", result.message || "ocurrio un error al iniciar sesion",);
      }
    } catch (error) {
      console.error("Error inesperado en login:", error);
      Alert.alert("Error", "Ocurrio un erro inesperado al intentar inciar sesion");
    }
  }


  const manejarLogin = () => {
    if (!correo || !contrasena) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }
    setEstaCargando(true);
    setTimeout(() => {
      setEstaCargando(false);
      Alert.alert("Éxito", "Inicio de sesión exitoso");
    }, 1500);
  }



  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ScrollView
        contentContainerStyle={styles.contenedorScroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          {/* Avatar estilo circular */}
          <View style={styles.avatar}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/387/387561.png" }}
              style={styles.avatarImg}
            />
          </View>

          {/* Formulario */}
          <View style={styles.form}>
            <Text style={styles.titulo}>Iniciar Sesión</Text>

            <Text style={styles.label}>Correo Electrónico</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#050404ff"
              value={correo}
              onChangeText={setCorreo}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#999"
              value={contrasena}
              onChangeText={setContrasena}
              secureTextEntry={true}
              autoCapitalize="none"
            />

            <TouchableOpacity
              style={[
                styles.boton,
                isCargando && styles.botonDeshabilitado,
              ]}
              onPress={manejarLogin}
              disabled={isCargando}
            >
              <Text style={styles.textoBoton}>
                {isCargando ? "Iniciando..." : "Iniciar Sesión"}
              </Text>
            </TouchableOpacity>

            <View style={styles.registroContainer}>
              <Text style={styles.textoRegistro}>¿No tienes cuenta?</Text>
              <TouchableOpacity
                onPress={() => navigation?.navigate("Registrar")}
              >
                <Text style={styles.linkRegistro}> Regístrate aquí</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  contenedorScroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 28,
    shadowColor: "#1d0c0cff",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 1,
    borderColor: "#707070",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fafafa",
  },
  avatarImg: {
    width: "90%",
    height: "90%",
    borderRadius: 65,
  },
  form: {
    width: "100%",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "rgba(0,0,0,0.7)",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0,0,0,0.2)",
    paddingBottom: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#8f8f8f",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#000",
    marginTop: 6,
    marginBottom: 14,
  },
  boton: {
    backgroundColor: "#0969da",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  botonDeshabilitado: {
    backgroundColor: "#90caf9",
  },
  textoBoton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  registroContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  textoRegistro: {
    fontSize: 14,
    color: "#333",
  },
  linkRegistro: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0969da",
  },
});

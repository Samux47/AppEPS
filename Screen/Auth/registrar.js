import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function Registrar({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <ScrollView
        contentContainerStyle={styles.contenedorScroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          {/* Avatar estilo circular */}
          <View style={styles.avatar}>
            <Ionicons name="person-add" size={60} color="#1976D2" />
          </View>



          {/* Formulario */}
          <View style={styles.form}>
            <Text style={styles.titulo}>Crear Cuenta</Text>

            {/* Nombre */}
            <Text style={styles.label}>Nombre Completo</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="person-circle" size={22} color="#1976D2" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Tu nombre"
                placeholderTextColor="#999"
              />
            </View>


            <View style={styles.inputContainer}>
              <Ionicons name="email" size={24} color="#1976D2" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="ejemplo@gmail.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed" size={24} color="#1976D2" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Crear contraseña"
                placeholderTextColor="#999"
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="lock-open" size={24} color="#1976D2" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Repetir contraseña"
                placeholderTextColor="#999"
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>

            <TouchableOpacity style={styles.boton}>
              <Text style={styles.textoBoton}>Registrarse</Text>
            </TouchableOpacity>

            <View style={styles.registroContainer}>
              <Text style={styles.textoRegistro}>¿Ya tienes cuenta?</Text>
              <TouchableOpacity
                onPress={() => navigation?.navigate("IniciarSesion")}
              >
                <Text style={styles.linkRegistro}> Inicia sesión</Text>
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#707070",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fafafa",
  },
  avatarImg: {
    width: "85%",
    height: "85%",
    borderRadius: 60,
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

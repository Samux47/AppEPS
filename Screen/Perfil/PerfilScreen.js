import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
// Import axios or your API client
import axios from "axios";

export default function Perfil() {
    const [Usuario, setUsuario] = useState(null);

    useEffect(() => {
        const cargarPerfil = async () => {
            try {
                const token = await AsyncStorage.getItem("UserToken");
                // Puedes agregar lógica para usar el token aquí

                // Usando axios para obtener el perfil
                const response = await axios.get("/me", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUsuario(response.data);
            } catch (error) {
                console.error("Error al cargar el perfil:", error);
                if (error.isAuthError || error.shouldRedirectToLogin) {
                    console.log("Error de autenticacion manejado por el interceptor, redirigiendo al login");
                    Alert.alert("No se encontro el token de usuario, redirigiendo al login");
                    return;
                }
                if (error.response) {
                    Alert.alert(
                        "Error del servidor",
                        `Error ${error.response.status}: ${error.response.data.message || "Ocurrió un error al cargar el perfil"}`,
                        [
                            {
                                text: "OK",
                                onPress: async () => {
                                    await AsyncStorage.removeItem("UserToken");
                                }
                            }
                        ]
                    );
                } else if (error.request) {
                    Alert.alert(
                        "Error de conexión",
                        "No se pudo conectar al servidor, por favor intente más tarde",
                        [
                            {
                                text: "OK",
                                onPress: async () => {
                                    await AsyncStorage.removeItem("UserToken");
                                }
                            }
                        ]
                    );
                }
            }
        };
        cargarPerfil();
    }, []);

    if(!Usuario) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Perfil de usuario</Text>
                <View style={styles.containerPerfil}>
                    <Text style={styles.errorText}>No se pudo cargar el perfil.</Text>
                </View>
            </View>
        );
    }

    return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Perfil de Usuario</Text>
                <View style={styles.containerPerfil}>
                    <Text style={styles.label}>Nombre: {Usuario.user.name || "No dispnible"}</Text>
                    <Text style={styles.label}>Correo: {Usuario.user.email || "No dispnible"}</Text>
                </View>
            </View>
        );
    }
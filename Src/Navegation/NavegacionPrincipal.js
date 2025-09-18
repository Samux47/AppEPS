import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";
import PantallaInicio from "../Screens/Inicio/PantallaInicio";
import PerfilScreen from "../Screens/Perfil/PerfilScreen";
import ConfiguracionStack from "../Navegation/Stack/ConfiguracionStack";

const Tab = createBottomTabNavigator();

export default function NavegacionPrincipal() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#f8f8f8",
          borderTopWidth: 1,
          borderTopColor: "#504a4aff",
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#504a4aff",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={PantallaInicio}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Inicio",
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarLabel: "Perfil",
        }}
      />
      <Tab.Screen
        name="Configuracion"
        component={ConfiguracionStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
          tabBarLabel: "Configuración",
        }}
      />
    </Tab.Navigator>
  );
}

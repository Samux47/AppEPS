import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import IniciarSession from './Screen/Auth/iniciarSession';
import Registrar from './Screen/Auth/registrar';
import PacientesStack from './Src/Navegation/Stack/PacientesStack.js';
import MedicosStack from './Src/Navegation/Stack/MedicosStack.js';
import horariosDisponiblesStack from './Src/Navegation/Stack/horariosDisponiblesStack.js';
import EspecialidadesStack from './Src/Navegation/Stack/EspecialidadesStack.js';
import CitasStack from './Src/Navegation/Stack/CitasStack.js';



const Stack = createNativeStackNavigator();

function PantallaInicio({ navigation }) {
  return (
    <View style={styles.contenedor}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContenido} showsVerticalScrollIndicator={false}>

        <View style={styles.encabezado}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoTexto}>🏥</Text>
          </View>
          <View style={styles.textoEncabezado}>
            {/* Logo tipo texto */}
            <Text style={styles.logoTexto}>
              nue
              <Text style={styles.logoV}>v</Text>
              a
            </Text>
            <Text style={styles.logoSub}>eps</Text>

            {/* Tu slogan */}
            <Text style={styles.sloganApp}>𝐓𝐮 𝐬𝐚𝐥𝐮𝐝 𝐞𝐬𝐭𝐚 𝐞𝐧 𝐧𝐮𝐞𝐬𝐭𝐫𝐚𝐬 𝐦𝐚𝐧𝐨𝐬</Text>
          </View>

        </View>

        <View style={styles.cartaCita}>
          <View style={styles.cabeceraCarta}>
            <Text>💊</Text>
            <Text style={styles.tituloCarta}>Próximo Control</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
            <MaterialCommunityIcons name="doctor" size={20} color="#1E88E5" style={{ marginRight: 6 }} />
            <Text style={styles.nombreDoctor}>Doctora Laura Gómez</Text>
          </View>
          <Text style={styles.especialidad}>Medicina General</Text>


          <View style={styles.filaFecha}>
            <Ionicons name="calendar-outline" size={16} color="#6B7280" />
            <Text style={styles.textoFecha}>22 Ene 2025</Text>

            <Ionicons
              name="time-outline"
              size={16}
              color="#6B7280"
              style={{ marginLeft: 14 }}
            />
            <Text style={styles.textoFecha}>02:15 PM</Text>
          </View>

          <View style={styles.estado}>
            <Text style={styles.textoEstado}>Pendiente</Text>
          </View>
        </View>


        <Text style={styles.tituloAcciones}>Acciones Rápidas</Text>
        <View style={styles.gridAcciones}>
          <TouchableOpacity style={styles.cartaAccion} onPress={() => navigation.navigate('Citas')}>
            <Ionicons name="add-circle-outline" size={32} color="#1E88E5" />
            <Text style={styles.textoAccion}>Programar/Ver Citas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cartaAccion} onPress={() => navigation.navigate('Medicos')}>
            <MaterialCommunityIcons name="doctor" size={32} color="#4CAF50" />
            <Text style={styles.textoAccion}>Mis Médicos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cartaAccion} onPress={() => navigation.navigate('Pacientes')}>
            <Ionicons name="people-outline" size={32} color="#8E24AA" />
            <Text style={styles.textoAccion}>Pacientes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cartaAccion} onPress={() => navigation.navigate('Especialidades')}>
            <Ionicons name="medkit-outline" size={32} color="#EC407A" />
            <Text style={styles.textoAccion}>Especialidades</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cartaAccion} onPress={() => navigation.navigate('HorariosDisponibles')}>
            <Ionicons name="time-outline" size={32} color="#dac407ff" />
            <Text style={styles.textoAccion}>Horarios</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={PantallaInicio}
          options={({ navigation }) => ({
            title: '𝔅𝔦𝔢𝔫𝔳𝔢𝔫𝔦𝔡𝔬',
            headerRight: () => (
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('IniciarSesion')}>
                  <Text style={styles.botonLogin}>Iniciar sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Registrar')}>
                  <Text style={styles.botonLogin}>Registrar</Text>
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="IniciarSesion"
          component={IniciarSession}
          options={{ title: 'Iniciar Sesión' }}
        />
        <Stack.Screen
          name="Registrar"
          component={Registrar}
          options={{ title: 'Registro' }}
        />
        <Stack.Screen
          name="Pacientes"
          component={PacientesStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Medicos"
          component={MedicosStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HorariosDisponibles"
          component={horariosDisponiblesStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Especialidades"
          component={EspecialidadesStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Citas"
          component={CitasStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  // Pantalla principal
  contenedor: {
    flex: 1,
    backgroundColor: '#000000ff', // fondo suave profesional
  },
  scrollContenido: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },

  // Encabezado EPS
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#050505ff',
    padding: 18,
    borderRadius: 16,
    elevation: 4,
  },
  logoContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  logoTexto: {
    fontSize: 34,
    fontWeight: '900',
    color: '#1E88E5',
  },
  logoV: {
    color: '#FF0000',
    fontWeight: '900',
  },
  textoEncabezado: {
    flex: 1,
  },
  logoSub: {
    fontSize: 18,
    color: '#E3F2FD',
    marginTop: 2,
    fontWeight: '600',
  },
  sloganApp: {
    marginTop: 6,
    fontSize: 14,
    color: '#BBDEFB',
    fontStyle: 'italic',
  },

  // Carta próxima cita
  cartaCita: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  cabeceraCarta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tituloCarta: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '700',
    color: '#151d24ff',
  },
  nombreDoctor: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  especialidad: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  filaFecha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  textoFecha: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 6,
  },
  estado: {
    alignSelf: 'flex-start',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  textoEstado: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E88E5',
  },

  // Acciones rápidas
  tituloAcciones: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 14,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
    columnGap: 12,
  },
  cartaAccion: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 22,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  textoAccion: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
    textAlign: 'center',
  },

  // Botones login en header
  botonLogin: {
    marginRight: 15,
    color: '#ffffffff',
    fontWeight: '700',
    fontSize: 14,
    backgroundColor: '#000000ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
});

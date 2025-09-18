# 🏥 Nueva EPS - Sistema de Citas Médicas

Este proyecto es una aplicación móvil desarrollada en **React Native (Expo)** con conexión a una **API RESTful** para la gestión de **citas médicas**.  

El diseño está inspirado en la **Nueva EPS** con un estilo moderno, accesible y centrado en el usuario.

---

## 📌 Funcionalidades principales

- 🔐 **Autenticación de usuarios**  
  - Registro de pacientes.  
  - Inicio de sesión seguro.  

- 👨‍⚕️ **Gestión de médicos y pacientes**  
  - Listado de médicos.  
  - Registro y consulta de pacientes.  

- 📅 **Gestión de citas médicas**  
  - Programar nuevas citas.  
  - Ver próximas citas con fecha, hora y estado.  

- 🩺 **Especialidades y horarios**  
  - Listado de especialidades médicas.  
  - CRUD completo (crear, editar, eliminar, listar especialidades).  
  - Consulta de horarios disponibles.  

- 🎨 **Estilo visual Nueva EPS**  
  - Colores azules y blancos con detalles en gris.  
  - Tarjetas modernas con sombras.  
  - Íconos médicos e interfaz limpia.  

---

## 📂 Estructura del proyecto

APIS_citas/
├── assets/ # Recursos estáticos (imágenes, íconos, etc.)
│
├── components/ # Componentes reutilizables
│
├── node_modules/ # Dependencias del proyecto
│
├── Screen/ # Pantallas principales de la app
│ ├── Auth/ # Pantallas de autenticación
│ │ ├── iniciarSession.js # Pantalla de inicio de sesión
│ │ └── registrar.js # Pantalla de registro
│ │
│ ├── Citas/ # Pantallas para citas médicas
│ │ └── (pendiente agregar) # Programar, listar, detalles de citas
│ │
│ ├── Especialidades/ # CRUD de especialidades médicas
│ │ ├── Crear_EditarEspecialidades.js
│ │ ├── DetalleEspecialidades.js
│ │ ├── EliminarEspecialidades.js
│ │ └── ListarEspecialidades.js
│ │
│ ├── horariosDisponibles/ # Gestión de horarios médicos
│ │ └── (pendiente agregar)
│ │
│ ├── Medicos/ # Pantallas de médicos
│ │ └── (pendiente agregar)
│ │
│ └── Pacientes/ # Pantallas de pacientes
│ └── (pendiente agregar)
│
├── Src/ # Navegación y lógica auxiliar
│
├── .gitignore # Archivos y carpetas ignorados en git
├── App.js # Punto de entrada principal de la app


🎨 Diseño y estilos

Pantalla Inicio

Logo estilo “Nueva EPS”.

Slogan: "Tu salud está en nuestras manos".

Tarjeta con próxima cita (doctor, especialidad, fecha, estado).

Accesos rápidos a: Citas, Médicos, Pacientes, Especialidades, Horarios.

Pantalla Iniciar Sesión

Avatar circular.

Inputs estilizados con placeholder e íconos (person-circle, email).

Botón azul con estado de carga.

Enlace a registro.

Pantalla Registro

Avatar circular.

Formulario de registro con campos: Nombre, Correo, Contraseña, Confirmación.

Botón de registro.

Enlace a inicio de sesión.

Pantallas de Especialidades

Crear, editar, listar y eliminar especialidades.

UI simple con formularios e íconos médicos.

Paleta de colores

Azul primario: #0969da

Fondo claro: #f5f5f5

Blanco: #FFFFFF

Gris neutro: #6B7280

📚 Tecnologías utilizadas
Frontend

React Native
 + Expo

React Navigation

Ionicons
 y MaterialCommunityIcons

Backend

Node.js

Express.js

[MongoDB o MySQL] (dependiendo configuración BD)

[JWT] para autenticación

👨‍💻 Autore

Samuel Gonzalez → Desarrollo frontend (app móvil y diseño).

📌 Notas

Proyecto en desarrollo activo 🚀

Puede adaptarse a cualquier EPS o sistema de salud.

La API requiere configuración según la base de datos utilizada.


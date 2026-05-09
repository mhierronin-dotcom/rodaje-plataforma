# 🎬 Plataforma Rodaje Studio

Plataforma integral de gestión de producciones audiovisuales para productoras, agencias y estudios. Permite organizar, visualizar y compartir toda la información de rodajes de forma clara y profesional.

## 📦 Características

### ✨ Funcionalidades Principales

- **Multi-rodajes**: Gestiona múltiples producciones simultáneamente
- **Dashboard integrado**: Resumen visual de cada proyecto
- **5 Módulos principales**:
  - 📅 Planificación (cronograma y locaciones)
  - 👥 Casting (gestión de elenco)
  - 👗 Estilismo (vestuario, maquillaje, accesorios)
  - 💰 Presupuesto (control financiero completo)
  - 🎨 Visualización (paleta de colores y mood board)

### 🔐 Sistemas de Permisos

- **Rol Admin (Productora)**: Acceso completo a todas las funciones
- **Rol Cliente**: Visualización limitada (sin presupuesto ni planificación)
- **Diferenciación clara** entre vistas público y privado

### 📱 Interfaz

- Diseño moderno y profesional
- 100% responsive (desktop, tablet, móvil)
- Sidebar colapsable
- Navegación intuitiva
- Iconografía clara

---

## 🚀 Instalación y Uso

### Requisitos
- React 18+
- Tailwind CSS
- Lucide React Icons

### Opción 1: Usar en Claude.ai

1. Abre [Claude.ai](https://claude.ai)
2. Crea un nuevo mensaje
3. Copia y pega el contenido de `plataforma-rodaje.jsx`
4. La plataforma se renderizará automáticamente

### Opción 2: Integrar en tu proyecto React

```bash
# Instalar dependencias necesarias
npm install lucide-react

# Copiar archivo a tu proyecto
cp plataforma-rodaje.jsx src/components/
```

En tu archivo principal:
```jsx
import PlataformaRodaje from './components/plataforma-rodaje';

function App() {
  return <PlataformaRodaje />;
}

export default App;
```

### Opción 3: Deploy en Vercel/Netlify

1. Crea un proyecto React: `npx create-react-app rodaje-studio`
2. Copia `plataforma-rodaje.jsx` a `src/`
3. Instala Tailwind CSS y Lucide
4. Actualiza `src/App.jsx` para usar el componente
5. Deploy: `npm run build && npm deploy`

---

## 🎮 Cómo Usar

### Iniciar Sesión

Al abrir la aplicación, verás dos opciones:

```
👤 Acceso Productora/Agencia  → Admin (acceso total)
👁️ Acceso Cliente            → Cliente (vista limitada)
```

### Navegar

1. **Sidebar izquierdo**: Cambiar entre rodajes o crear nuevo
2. **Header superior**: Información del rodaje actual
3. **Tabs de navegación**: Acceder a diferentes secciones
4. **Contenido principal**: Detalle de cada sección

### Crear un Rodaje (Admin)

1. Click en "+ Nuevo Rodaje"
2. Ingresa nombre y cliente
3. Click "Crear"
4. Completa información en cada sección

### Ver Rodaje (Cliente)

1. Automáticamente ves los rodajes asignados
2. Accedes solo a: Dashboard, Casting, Estilismo, Visualización
3. Puedes leer pero no editar

---

## 📊 Estructura de Datos

### Objeto Rodaje

```javascript
{
  id: 1,
  nombre: "Campaña Nike 2026",
  cliente: "Nike Inc.",
  estado: "En producción", // o "Planeación", "Finalizado"
  fechaInicio: "2026-04-20",
  fechaFin: "2026-05-15",
  locacion: "Los Ángeles, CA",
  director: "María García",
  presupuesto: 150000,
  gastado: 95000,
  
  planificacion: {
    dias: 15,
    locaciones: ["Studio LA", "Playa Malibu"],
    schedule: [
      { dia: 1, actividad: "Pre-producción" },
      { dia: 2, actividad: "Rodaje interior" }
    ]
  },
  
  casting: [
    {
      nombre: "Actor Principal",
      edad: "25-35",
      nacionalidad: "Latinoamericano",
      estado: "Confirmado"
    }
  ],
  
  estilismo: {
    vestuario: ["Atuendo deportivo"],
    maquillaje: ["Natural"],
    accesorios: ["Zapatillas Nike"]
  },
  
  tratamiento: {
    paleta: ["#FF6B35", "#004E89"],
    moodBoard: "Energético, dinámico",
    referencias: ["Publicidad Nike clásica"]
  }
}
```

---

## 🎨 Personalización

### Colores Principales

Actualiza los colores en Tailwind:

```jsx
// Azul principal: blue-600
// Gris neutro: gray-900 / gray-600
// Estados: green-500 (positivo), red-500 (negativo)

// Para cambiar esquema de colores, busca:
// - "blue-600" → tu color primario
// - "gray-900" → tu texto oscuro
```

### Agregar Nuevas Secciones

1. Crea nuevo componente:
```jsx
const NuevaSeccion = ({ rodaje, userRole }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Tu contenido */}
    </div>
  );
};
```

2. Agrega al nav:
```jsx
getRodajeNavItems(userRole) {
  // Agrega nuevo item
  { id: 'nueva', label: 'Nueva', icon: <IconoNuevo size={18} /> }
}
```

3. Renderiza en el switch:
```jsx
{activeTab === 'nueva' && <NuevaSeccion rodaje={currentRodaje} />}
```

---

## 🔧 Próximas Funcionalidades (Roadmap)

- [ ] Sistema de usuarios y autenticación real
- [ ] Base de datos persistente (Firebase, PostgreSQL)
- [ ] Edición inline de datos
- [ ] Carga de imágenes y referencias visuales
- [ ] Comentarios y feedback en tiempo real
- [ ] Notificaciones y alertas
- [ ] Exportar a PDF
- [ ] Exportar presupuesto a Excel
- [ ] Historial de cambios
- [ ] Integración con Google Calendar
- [ ] Modo oscuro
- [ ] Soporte multiidioma

---

## 📱 Responsividad

La plataforma se adapta automáticamente:

### Desktop (1024px+)
- Sidebar expandido
- Layout de 2-4 columnas
- Todas las funciones visibles

### Tablet (768px - 1023px)
- Sidebar colapsable
- Layout de 2 columnas
- Navegación adaptada

### Móvil (<768px)
- Sidebar oculto (click en ☰)
- Layout de 1 columna
- Interfaz simplificada

---

## 🔒 Seguridad y Privacidad

### Datos Actuales
- Se almacenan en memoria (sesión)
- Se pierden al refrescar página
- Demo/prototipo

### Para Producción
- Implementar autenticación JWT
- Base de datos encriptada
- HTTPS obligatorio
- GDPR compliant
- Backups automáticos

---

## 🐛 Troubleshooting

### Problema: Component no renderiza
```
Solución: Asegúrate de que Lucide React esté instalado
npm install lucide-react
```

### Problema: Tailwind CSS no aplica estilos
```
Solución: Verifica que Tailwind esté configurado correctamente
en tu proyecto
```

### Problema: Datos desaparecen al refrescar
```
Solución: Es normal en versión demo. Para persistencia,
implementa Backend con base de datos.
```

---

## 📚 Documentación Adicional

- **GUIA_USO.md**: Guía completa para usuarios finales
- **Componentes disponibles**:
  - `PlataformaRodaje` - Componente principal
  - `PantallaLogin` - Autenticación
  - `Header` - Encabezado
  - `Sidebar` - Navegación
  - `DashboardSection` - Panel principal
  - `PlanificacionSection` - Cronograma
  - `CastingSection` - Elenco
  - `EstilismoSection` - Vestuario y maquillaje
  - `PresupuestoSection` - Control financiero
  - `VisualizacionSection` - Paleta y mood board

---

## 🤝 Contribuciones

Este proyecto está en desarrollo activo. Si tienes sugerencias:

1. Prueba la plataforma
2. Identifica mejoras
3. Propón nuevas funcionalidades
4. Comparte feedback

---

## 📄 Licencia

Proyecto de demostración creado con fines educativos.

---

## 📧 Contacto

- **Email**: info@rodajestudio.com
- **Sitio web**: www.rodajestudio.com
- **Documentación**: docs.rodajestudio.com

---

## 🎬 Versión

**v1.0.0** - Lanzamiento inicial (Abril 2026)

Características incluidas:
- ✅ Multi-rodajes
- ✅ 5 módulos principales
- ✅ 2 roles de usuario
- ✅ Dashboard integrado
- ✅ Responsive design
- ✅ Presupuesto visual
- ✅ Casting management
- ✅ Estilismo completo

---

**¡Gracias por usar Rodaje Studio! 🎬✨**

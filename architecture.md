# Arquitectura Refactorizada - Plataforma Rodaje

## Estructura de Carpetas

```
src/
├── components/
│   ├── common/
│   │   ├── Card.jsx
│   │   ├── Button.jsx
│   │   ├── Modal.jsx
│   │   ├── Header.jsx
│   │   └── Sidebar.jsx
│   ├── auth/
│   │   └── LoginScreen.jsx
│   ├── modules/
│   │   ├── Dashboard.jsx
│   │   ├── Planificacion.jsx
│   │   ├── Casting.jsx
│   │   ├── Estilismo.jsx
│   │   ├── Presupuesto.jsx
│   │   └── Visualizacion.jsx
│   └── App.jsx (componente principal)
├── hooks/
│   ├── useRodajes.js
│   ├── useAuth.js
│   └── useModal.js
├── context/
│   └── RodajeContext.js
├── utils/
│   ├── dataHelpers.js
│   └── formatters.js
└── data/
    └── initialData.js
```

## Componentes Principales

### Common Components
- **Card**: Tarjeta reutilizable con estilos consistentes
- **Button**: Botón con variantes (primary, secondary, danger)
- **Modal**: Modal genérico para formularios y confirmaciones
- **Header**: Encabezado con navegación
- **Sidebar**: Barra lateral con menú y rodajes

### Auth Components
- **LoginScreen**: Pantalla de login con roles (Admin/Cliente)

### Module Components
- **Dashboard**: Vista general de rodajes
- **Planificacion**: Plan de rodaje por días
- **Casting**: Gestión de actores/modelos
- **Estilismo**: Vestuario, maquillaje, accesorios
- **Presupuesto**: Control financiero
- **Visualizacion**: Paleta de colores y mood board

### Custom Hooks
- **useRodajes**: Gestión de rodajes (CRUD)
- **useAuth**: Lógica de autenticación
- **useModal**: Control de modales

### Context
- **RodajeContext**: Estado global compartido entre componentes

## Flujo de Datos

```
App (Provider RodajeContext)
├── useAuth (estado login)
├── useRodajes (lista de rodajes)
└── LoginScreen / MainApp
    ├── Header
    ├── Sidebar (usa RodajeContext)
    └── ModuleComponent (consume RodajeContext)
```

## Ventajas de esta arquitectura

✅ Componentes reutilizables
✅ Hooks personalizados (lógica extraída)
✅ Contexto global (evita prop drilling)
✅ Separación clara de responsabilidades
✅ Más fácil de mantener y testear
✅ Escalable para agregar nuevas features
✅ Mejor rendimiento (React.memo)

## Próximos pasos

1. Crear componentes common reutilizables
2. Implementar RodajeContext para estado global
3. Crear hooks personalizados
4. Refactorizar módulos principales
5. Optimizar rendimiento

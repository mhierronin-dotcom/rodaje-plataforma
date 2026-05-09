# 🎬 Rodaje+ Studio - Arquitectura de la Plataforma v3.0

## Visión General

Plataforma profesional de gestión de rodajes diseñada específicamente para productoras, agencias y estudios. Estructura modular con apartados clave para organizar todos los aspectos de una producción.

---

## 📋 Apartados Principales de la Plataforma

### 1. 🏠 DASHBOARD DE PROYECTOS
**Ubicación**: Página de inicio / Home

#### Funcionalidades
- **Vista General de Rodajes**
  - Cards visuales por proyecto
  - Estado del proyecto (Activo, Cerrado, Archivo)
  - Información resumida: cliente, director, presupuesto, fechas
  - Progreso visual del proyecto

- **Filtros y Búsqueda**
  - Por estado (Activos, Cerrados, Archivo)
  - Por cliente
  - Por fecha
  - Por director
  - Búsqueda por nombre

- **Acciones Rápidas**
  - Crear nuevo rodaje
  - Editar rodaje
  - Marcar como cerrado/archivado
  - Ver detalles completos
  - Duplicar rodaje existente

#### Estructura de Card de Proyecto
```
┌─────────────────────────────────┐
│  Nombre Rodaje                  │
│  Cliente: Nike Inc.             │
│  Director: María García         │
├─────────────────────────────────┤
│  Estado: 🔴 En Producción       │
│  Presupuesto: $150K / $200K     │
│  ████░░░░░░ 75%                 │
├─────────────────────────────────┤
│  Fechas: 20/04 - 15/05          │
│  Equipo: 12 personas            │
│  Casting: 8 actores             │
└─────────────────────────────────┘
```

---

### 2. 📅 PLANIFICACIÓN - PLAN DE RODAJE
**Ubicación**: Dentro de cada proyecto → Pestaña "Planificación"

#### Vista Principal: Timeline Interactivo por Día

**Estructura por Día:**
```
DÍA 1 - LUNES 20/04
┌─────────────────────────────────────────────────┐
│ ESCENA 2 - SET ESTUDIANTE                      │
│ Hora: 09:30 - 10:45                            │
├─────────────────────────────────────────────────┤
│ [▶ STORYBOARD]  [📋 GUIÓN]  [🎨 ESTILISMO]   │
│ [⏱️ HORARIOS]    [🎥 PLANOS]  [🎭 DIRECCIÓN] │
│ [🎬 PRODUCTE]   [📸 REFERENCIAS]              │
│                                                  │
│ Guión: "Reacció del personaje..."              │
│ Plano: CÁMARA + ÓPTICAS + TRÍPODE              │
│ Estilismo: Ropa casual, maquillaje natural     │
│ Dirección de Arte: Set estudiante/cortinas     │
│ Horarios: 09:30h inicio, 10:30h pausa          │
│                                                  │
│ Cast: GUILLIGAN ESTUDIANTE (Noi)               │
│ Producte: LLENÇOL                              │
└─────────────────────────────────────────────────┘
```

#### Componentes Interactivos

**Filtros/Toggles por Sección** (mostrar/ocultar):
- ☑️ Guión - Descripción de la acción
- ☑️ Storyboard - Imágenes de referencia
- ☑️ Planos - Técnica de cámara
- ☑️ Estilismo - Vestuario y maquillaje
- ☑️ Dirección de Arte - Decoración y ambientación
- ☑️ Horarios - Timeline y tiempos
- ☑️ Cast - Actores involucrados
- ☑️ Producte - Productos/objetos necesarios
- ☑️ Referencias - Links y documentos

**Vista de Día Completo:**
```
DÍA 1 - LUNES 20/04
├─ 08:00 - Citación general
├─ 09:00 - Citación cliente
├─ 09:30 - Ready to Shoot
│
├─ SET 1 - PREPARACIÓN (1h 30min)
│  └─ 09:30 - Escena 2 (45min)
│  └─ 10:15 - Escena 1 (45min)
│
├─ SET 2 - PREPARACIÓN (1h)
│  └─ 11:00 - Escena 3B (bodar sin diálogo)
│  └─ 11:45 - Escena 6X2 (con diálogo)
│
├─ 13:30 - COMIDA (30min break + 30min setup)
│
├─ SET 3 - PREPARACIÓN (1h)
│  └─ 14:00 - Escena 5A (sin diálogo)
│  └─ 14:45 - Escena 5B (sin diálogo)
│  └─ 15:30 - Escena 6X2 (versión sin diálogo)
│
└─ 13:30 - Cierre y wrap
```

**Características Avanzadas:**
- 📊 Gráfico Gantt por día
- 👥 Asignación de actores por escena
- 🎥 Desglose de locaciones
- ⏱️ Tiempo estimado por escena
- 📸 Galería de storyboards arrastrable
- 🔗 Links a documentos externos
- 📝 Notas y anotaciones por escena

---

### 3. 👥 CASTING
**Ubicación**: Dentro de cada proyecto → Pestaña "Casting"

#### Estructura de Ficha de Actor/Modelo

**Card Completa del Actor:**
```
┌──────────────────────────────────────────┐
│  [FOTO PERFIL - 200x200px]               │
├──────────────────────────────────────────┤
│ NOMBRE: Guilligan Estudiante Noi         │
│ ROL EN PROYECTO: Personaje Principal     │
│ GÉNERO: No binario                       │
├──────────────────────────────────────────┤
│ DATOS PERSONALES                         │
│ Edad: 25 años | Altura: 175cm            │
│ Nacionalidad: Catalana                   │
│ Idiomas: Catalán, Español, Inglés        │
├──────────────────────────────────────────┤
│ REFERENCIAS FÍSICAS                      │
│ Tipo: Joven urbano moderno               │
│ Características: Cabello largo, piercing │
│ Estilo: Casual alternativo               │
├──────────────────────────────────────────┤
│ CONTACTO                                 │
│ 📧 Email: actor@email.com                │
│ 📱 Teléfono: +34 XXX XXX XXX             │
│ 👤 Instagram: @usuarioinstagram          │
│ 🌐 Sitio Web: www.portfolio.com          │
├──────────────────────────────────────────┤
│ PERFILES / LINKS                         │
│ 🔗 IMDb: imdb.com/name/xxxxx             │
│ 🔗 Spotlight: spotlight.com/xxxxx        │
│ 🔗 Portfolio: behance.net/xxxxx          │
│ 🔗 Reel: vimeo.com/xxxxx                 │
├──────────────────────────────────────────┤
│ ESTADO DE CONTRATACIÓN                   │
│ 🟢 Confirmado | 📅 20/04 - 15/05         │
│ Tarifa: €500/día                         │
│ Contrato: Firmado ✓                      │
├──────────────────────────────────────────┤
│ ESCENAS ASIGNADAS                        │
│ • Escena 2 (Reacción POV) - 45min        │
│ • Escena 1 (Sobre el lit) - 45min        │
│ • Escena 3B (Transición) - 30min         │
├──────────────────────────────────────────┤
│ NOTAS / REQUERIMIENTOS ESPECIALES        │
│ - Requiere transporte desde estación     │
│ - Alergia a maquillaje de marca X        │
│ - Prefiere pausas cada 2 horas           │
│ - Disponible para reshoots el 20/05      │
└──────────────────────────────────────────┘
```

#### Funcionalidades de Casting

**Gestión de Fichas:**
- Crear/editar ficha de actor
- Subir fotos (perfil, galería, polaroids)
- Importar desde Excel/CSV
- Exportar listado de casting

**Filtros y Búsqueda:**
- Por rol/personaje
- Por estado (Confirmado, En audición, Rechazado)
- Por género, edad, nacionalidad
- Por disponibilidad

**Acciones:**
- Marcar como confirmado
- Enviar contrato
- Agregar a favoritos
- Comparar actores (side-by-side)
- Duplicar ficha como plantilla

**Vistas:**
- Grid (tarjetas visuales)
- Lista (tabla con detalles)
- Timeline (por confirmación)

---

### 4. 🎨 ESTILISMO
**Ubicación**: Dentro de cada proyecto → Pestaña "Estilismo"

#### Estructura

**Desglose por Categorías:**

1. **👗 VESTUARIO**
   - Por personaje/actor
   - Por escena
   - Color, tela, referencia
   - Estado (confeccionado, prestado, comprado)
   - Proveedor/sastre

2. **💄 MAQUILLAJE**
   - Tipo de maquillaje (natural, artístico, efectos)
   - Por escena/personaje
   - Productos usados
   - Tiempo estimado
   - Fotografías antes/después

3. **✨ ACCESORIOS**
   - Joyas, cinturones, bolsos
   - Props especiales
   - Estado y localización
   - Asignación por personaje

4. **💇 PEINADO**
   - Estilo por escena
   - Cambios principales
   - Productos/referencias
   - Fotografías

5. **🎭 EFECTOS ESPECIALES**
   - Maquillaje de heridas, cicatrices
   - Prótesis
   - Sangre/líquidos especiales
   - Seguridad y alergias

#### Card de Estilismo Completo

```
┌─────────────────────────────────────┐
│ ESCENA 2 - VESTUARIO                │
│ PERSONAJE: Guilligan Estudiante     │
├─────────────────────────────────────┤
│ [🖼️ FOTO VESTUARIO]                │
│                                     │
│ Prenda 1: Sudadera morada          │
│  • Marca/Proveedor: Vintage Shop   │
│  • Talla: M                         │
│  • Color: Morado oscuro             │
│  • Material: Algodón 100%           │
│  • Estado: Confeccionada ✓          │
│                                     │
│ Prenda 2: Jeans azul               │
│  • Marca: Levi's                    │
│  • Talla: 30                        │
│  • Color: Azul vintage              │
│  • Estado: Prestado                 │
│  • Proveedor: Brown Studio          │
│                                     │
│ ACCESORIOS:                         │
│  • Cinturón de cuero marrón         │
│  • Anillos plateados (3)            │
│  • Reloj de pulsera                 │
│                                     │
│ MAQUILLAJE: Natural                 │
│  • Base: Nyx Born to Glow           │
│  • Contouring: Mínimo               │
│  • Labios: Nude suave               │
│                                     │
│ PEINADO: Long waves                 │
│  • Estilo: Ondas sueltas            │
│  • Producto: Sea Salt Spray         │
│  • Tiempo: 20 minutos               │
│                                     │
│ NOTAS:                              │
│ - Cuidado con transpiración         │
│ - Retoques cada 45 minutos          │
│ - Foto de set día anterior          │
└─────────────────────────────────────┘
```

---

### 5. 💼 EQUIPO DEL RODAJE (CARGOS)
**Ubicación**: Dentro de cada proyecto → Pestaña "Equipo"

#### Jerarquía de Roles

**Nivel 1 - Dirección:**
- 🎬 Director
- 📹 Asistente de Dirección (AD)
- 📋 Script Supervisor

**Nivel 2 - Departamento Técnico:**
- 📸 DOP (Director de Fotografía/Cinematógrafo)
- 💡 Gaffer (Jefe de Iluminación)
- 🎧 Sonidista
- 🎥 Operador de Cámara
- 🔧 Assistente de Cámara (Focus Puller)

**Nivel 3 - Arte y Estilismo:**
- 🎨 Director de Arte
- 👗 Estilista/Vestuarista
- 💄 Maquillador
- 💇 Peluquero
- 🪴 Set Decorator

**Nivel 4 - Equipo de Rodaje:**
- 🚗 Transporte/Chofer
- 🍽️ Catering
- 🔐 Seguridad
- ⚡ Electricista
- 🔊 Técnico de Sonido Especializado
- 📐 Topógrafo

**Nivel 5 - Post-Producción:**
- ✂️ Editor
- 🎨 Color Grading
- 🔊 Diseñador de Sonido
- 📺 VFX/Motion Graphics

#### Card de Miembro del Equipo

```
┌──────────────────────────────────────────┐
│ [FOTO PERFIL]                            │
├──────────────────────────────────────────┤
│ NOMBRE: María García                     │
│ CARGO: 🎬 DIRECTOR                       │
│ DEPARTAMENTO: Dirección                  │
├──────────────────────────────────────────┤
│ CONTACTO PRINCIPAL                       │
│ 📱 Teléfono: +34 XXX XXX XXX             │
│ 📧 Email: maria@email.com                │
│ 🏢 Empresa/Agencia: Spora Films          │
├──────────────────────────────────────────┤
│ INFORMACIÓN PROFESIONAL                  │
│ Experiencia: 12 años en cine             │
│ Especialidad: Publicidad y spots         │
│ Portafolio: www.mariagarcia.com          │
│ IMDB: imdb.com/name/xxxxx                │
├──────────────────────────────────────────┤
│ DATOS CONTRACTUALES                      │
│ Tarifa: €800/día                         │
│ Fechas: 20/04 - 15/05                    │
│ Contrato: Firmado ✓                      │
│ Documentación: ✓ DNI, ✓ Seguro           │
├──────────────────────────────────────────┤
│ RESPONSABILIDADES                        │
│ • Dirección general del rodaje           │
│ • Aprobación de casting y estilismo      │
│ • Visión creativa del proyecto           │
│ • Coordinación con cliente               │
├──────────────────────────────────────────┤
│ REUNIONES Y NOTAS                        │
│ • Pre-producción: 18/04 10:00am          │
│ • Scout de locaciones: 19/04 14:00pm     │
│ • Revisión de storyboards: OK ✓          │
│ • Notas especiales: Requiere café negro  │
└──────────────────────────────────────────┘
```

#### Sistema Flexible de Cargos

**Características:**
- ✅ Cargos predefinidos (90 posiciones estándar)
- ✅ Crear cargos personalizados
- ✅ Asignar múltiples personas a mismo cargo
- ✅ Crear jerarquías personalizadas
- ✅ Historial de cambios

**Cargos Predefinidos (Ejemplos):**
```
DIRECCIÓN:
- Director
- Subdirector
- AD (1ª, 2ª, 3ª)
- Script Supervisor
- Realizador

FOTOGRAFÍA:
- DOP/Cinematógrafo
- Operador de Cámara
- Focus Puller (1ª, 2ª AC)
- DIT (Data Manager)
- Cámara B Operator

ILUMINACIÓN:
- Gaffer (Jefe Eléctrico)
- Best Boy (2º Eléctrico)
- Electricista (1, 2, 3...)
- Técnico de Grip
- Grip (1, 2, 3...)

SONIDO:
- Sonidista Jefe
- Micrófono Boom
- Técnico de Sonido Digital

ARTE:
- Director de Arte
- Set Decorator
- Utilero
- Props Master

ESTILISMO:
- Vestuarista
- Maquillador
- Peluquero
- Ayudante Estilismo

PRODUCCIÓN:
- Productor General
- Productor Ejecutivo
- Line Producer
- UPM (Gerente de Unidad)
- Jefe de Producción
- Coordinador de Producción

LOGÍSTICA:
- Chofer Principal
- Chofer Secundario
- Jefe de Transporte
- Catering Chef
- Catering Asistente
- Seguridad (1, 2, 3...)

POST-PRODUCCIÓN:
- Editor
- Color Grader
- Diseñador de Sonido
- Compositor
- VFX Supervisor
- Motion Graphics
- DCP Master Technician
```

---

## 🔗 Relaciones Entre Módulos

```
DASHBOARD (Home)
├─ Crear/Seleccionar Proyecto
│
└─ PROYECTO ESPECÍFICO
   ├─ PLANIFICACIÓN
   │  ├─ Escenas por día
   │  ├─ Horarios y tiempos
   │  ├─ Storyboards
   │  └─ Referencias (links)
   │
   ├─ CASTING
   │  ├─ Fichas de actores
   │  ├─ Fotos y perfiles
   │  ├─ Links a portfolios
   │  └─ Estado de contratación
   │
   ├─ ESTILISMO
   │  ├─ Vestuario (por escena)
   │  ├─ Maquillaje
   │  ├─ Accesorios
   │  └─ Galerías de referencias
   │
   ├─ EQUIPO
   │  ├─ Directorio de miembros
   │  ├─ Contacto y documentación
   │  ├─ Cargos y responsabilidades
   │  └─ Timeline de participación
   │
   └─ (Módulos existentes)
      ├─ Presupuesto
      ├─ Visualización
      └─ Documentos
```

---

## 📊 Datos y Estructura JSON

### Proyecto Extendido
```json
{
  "id": 1,
  "nombre": "Campaña Nike 2026",
  "cliente": "Nike Inc.",
  "estado": "activo", // activo, cerrado, archivo
  "fechaInicio": "2026-04-20",
  "fechaFin": "2026-05-15",
  "director": {
    "id": 1,
    "nombre": "María García",
    "cargo": "Director"
  },
  "presupuesto": 150000,
  "gastado": 95000,
  
  "planificacion": {
    "dias": [
      {
        "numero": 1,
        "fecha": "2026-04-20",
        "nombreDia": "Lunes",
        "horaStart": "08:00",
        "escenas": [
          {
            "numero": 2,
            "nombre": "Reacción del personaje",
            "guion": "Reacció desde POV del lienzo trencant. S'incorpora.",
            "storyboards": ["url1", "url2"],
            "planes": "CÁMARA + ÓPTICAS + TRÍPODE",
            "estilismo": "Set estudiante / cortinas - visillo",
            "direccionArte": "Lienzo, piso rojo, cortinas",
            "horaInicio": "09:30",
            "horaFin": "10:45",
            "duracion": 75,
            "cast": ["GUILLIGAN ESTUDIANTE NOI"],
            "producte": "LLENÇOL",
            "referencias": ["link1", "link2"]
          }
        ]
      }
    ]
  },
  
  "casting": [
    {
      "id": 1,
      "nombre": "Guilligan Estudiante Noi",
      "rol": "Personaje Principal",
      "edad": 25,
      "altura": 175,
      "nacionalidad": "Catalana",
      "idiomas": ["Catalán", "Español", "Inglés"],
      "fotos": {
        "perfil": "url",
        "galeria": ["url1", "url2"]
      },
      "contacto": {
        "email": "actor@email.com",
        "telefono": "+34XXXXXX",
        "instagram": "@usuario"
      },
      "perfiles": {
        "imdb": "url",
        "portfolio": "url",
        "reel": "url"
      },
      "estado": "confirmado",
      "tarifa": 500,
      "fechas": ["2026-04-20", "2026-05-15"],
      "escenesAsignadas": [2, 1, 3],
      "notas": "Alergia a maquillaje X"
    }
  ],
  
  "equipo": [
    {
      "id": 1,
      "nombre": "María García",
      "cargo": "Director",
      "departamento": "Dirección",
      "telefono": "+34XXXXXX",
      "email": "maria@email.com",
      "empresa": "Spora Films",
      "tarifa": 800,
      "estado": "confirmado",
      "fechasParticipacion": ["2026-04-20", "2026-05-15"],
      "responsabilidades": ["Dirección general"],
      "documentacion": {
        "dni": true,
        "seguro": true,
        "contrato": true
      }
    }
  ],
  
  "estilismo": {
    "byEscena": [
      {
        "escena": 2,
        "personaje": "Guilligan",
        "vestuario": [
          {
            "nombre": "Sudadera morada",
            "proveedor": "Vintage Shop",
            "talla": "M",
            "color": "#7B68EE",
            "material": "Algodón"
          }
        ],
        "maquillaje": "Natural",
        "accesorios": ["Anillos plateados"],
        "peinado": "Long waves"
      }
    ]
  }
}
```

---

## 🎯 Prioridad de Implementación

### FASE 1 (MVP - Mínimo Viable):
1. ✅ Dashboard de Proyectos (activos/cerrados)
2. ✅ Plan de Rodaje básico (por día)
3. ✅ Casting con fichas simples
4. ✅ Equipo con cargos predefinidos

### FASE 2 (Mejoras Funcionales):
5. Plan de Rodaje avanzado (filtros interactivos)
6. Estilismo con galerías
7. Fichas de casting con fotos y links
8. Cargos personalizados

### FASE 3 (Profesionalización):
9. Importar/exportar datos
10. Colaboración en tiempo real
11. Aprobaciones de cliente
12. Historial y versiones

---

## 📱 Responsividad

- **Desktop**: Vista completa con todas las columnas
- **Tablet**: Cols adaptadas, scrolls laterales
- **Móvil**: Stack vertical, cards compactas

---

**Versión**: 3.0 - Arquitectura Definitiva  
**Fecha**: Abril 2026  
**Estado**: Especificación Completa

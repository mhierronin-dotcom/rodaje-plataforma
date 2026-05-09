# 🎨 Rodaje Studio - Diseño Perk+ Aesthetic (v2.0)

## Cambios de Diseño Visual

La plataforma ha sido completamente rediseñada siguiendo la **estética y principios visuales de Perk+**, manteniendo toda la funcionalidad de gestión de rodajes.

---

## 📝 Tipografía

### Fuentes Utilizadas
- **Headings (h1, h2, h3)**: Font-weight `font-black` (900)
  - Muy bold y moderna
  - Tracking ajustado (tracking-tight)
  - Ejemplo: "rodaje+" con el "+" en azul

- **Textos secundarios**: Font-weight `font-semibold` / `font-bold`
  - Labels y descripciones
  - Más legibles y jerarquizados

- **Body text**: Font-weight `font-medium` / default
  - Información complementaria

### Tamaños
- H1: `text-4xl` (login)
- H2: `text-2xl` (headers)
- H3: `text-xl` (secciones)
- H4: `text-lg` (subsecciones)

---

## 🎨 Paleta de Colores

### Colores Principales
```
Azul Primario:    #3B82F6 (blue-600)
Gris Oscuro:      #1F2937 (gray-900)
Gris Claro:       #6B7280 (gray-500)
Blanco:           #FFFFFF
Fondo:            #F9FAFB (gray-50)
```

### Colores de Estado
```
Éxito/Activo:     #3B82F6 (Azul)
En Proceso:       #F59E0B (Ámbar)
Completado:       #10B981 (Verde)
Error/Crítico:    #EF4444 (Rojo)
Neutro:           #D1D5DB (Gris)
```

### Sin Verde Perk
❌ Se eliminó el verde fluorescente de Perk (`#7FFF00`)
✅ Reemplazado con azul profesional y ámbar para énfasis

---

## 🏗️ Estructura de Componentes

### Cards
```jsx
// Estilo:
- Bordes redondeados: rounded-2xl (32px)
- Bordes: border border-gray-200 (1px gris claro)
- Padding: p-6 / p-8
- Hover: shadow-md transition
- Fondo: bg-white
```

### Botones
```jsx
// Primario (Acción principal):
bg-blue-600 hover:bg-blue-700
font-bold py-3 rounded-xl
shadow-md hover:shadow-lg

// Secundario:
bg-gray-100 hover:bg-gray-200
text-gray-900 font-bold

// Texto:
text-gray-600 hover:text-gray-900
```

### Inputs
```jsx
// Estilo:
border border-gray-300 rounded-xl
focus:ring-2 focus:ring-blue-600
font-medium
```

### Tabs/Navegación
```jsx
// Activo:
border-b-2 border-gray-900
text-gray-900 font-semibold

// Inactivo:
border-b-2 border-transparent
text-gray-500 hover:text-gray-700
```

---

## 🎯 Componentes Clave

### Header
- Logo con branding: "rodaje+" (plus en azul)
- Título en negra con peso 900
- Subtítulo gris discreto
- Badges de estado con colores de contexto
- Espaciado amplio y respirable

### Sidebar
- Ancho: `w-72` (amplio, similar a Perk+)
- Fondo: blanco con borde derecho gris
- Items con hover estado azul claro
- Botón "Nuevo rodaje" destacado
- Logo y tipografía consistente

### Cards de Dashboard
- Grid responsivo (1/2/4 columnas)
- Información jerárquica clara
- Indicadores visuales pequeños
- Texto grande y legible
- Espaciado armónico

### Secciones Principales
- Max-width generoso
- Padding vertical 8 (32px)
- Títulos en negro peso 900
- Cards interiores con bordes y hover
- Gráficos y datos visuales grandes

---

## 📱 Responsividad

### Desktop (1024px+)
```
Sidebar: 288px (w-72)
Main content: Flexible
Grid cards: 4 columnas
```

### Tablet (768px - 1023px)
```
Sidebar: Colapsable
Main content: Flexible
Grid cards: 2 columnas
```

### Móvil (<768px)
```
Sidebar: Oculto (click en ☰)
Main content: Full width
Grid cards: 1 columna
Espaciado reducido
```

---

## 🎨 Elementos Visuales Especiales

### Progress Bars
```
Grosor: h-2 / h-2.5
Radio: rounded-full
Color activo: bg-blue-600
Color inactivo: bg-gray-200
```

### Badges/Tags
```
Tamaño: text-xs / text-sm
Padding: px-3 py-1 / px-4 py-2
Radio: rounded-full
Colores por estado:
  - Confirmado: bg-blue-100 text-blue-700
  - En proceso: bg-amber-100 text-amber-700
  - Completado: bg-green-100 text-green-700
```

### Divisores
```
Línea delgada: border-gray-200
Línea gruesa: border-t-2 / border-b-2 border-gray-200
Espaciado: pt-6 / pb-6 / my-6
```

---

## 🖼️ Comparativa: v1 vs v2

| Aspecto | v1 | v2 |
|---------|----|----|
| Tipografía | Moderada | **Bold (font-black)** |
| Colores | Múltiples | **Azul + Gris + Ámbar** |
| Bordes | Subtle | **Pronunciados (gris 200)** |
| Radio | `rounded-lg` | **`rounded-2xl` (más suave)** |
| Spacing | Compacto | **Amplio (respirable)** |
| Logo | Simple | **"rodaje+" con branding** |
| Cards | Subtle | **Con bordes y shadow hover** |
| Botones | Planos | **Bold con shadow** |

---

## 🎭 Brand Identity

### Elementos Clave
- **Logo**: "rodaje+" (plus en azul)
- **Tipografía**: Bold y moderna (peso 900)
- **Colores**: Azul profesional + grises neutrales
- **Estilo**: Limpio, moderno, corporativo
- **Espaciado**: Amplio y respirable
- **Bordes**: Suaves pero definidos (rounded-2xl)

### Aplicación
- Sidebar con identidad clara
- Header con logo y títulos destacados
- Cards con branding visual
- Botones con confianza
- Paleta consistente en toda la plataforma

---

## 🔧 Personalización Fácil

### Cambiar Colores
```jsx
// Azul primario: #3B82F6
// Busca "blue-600" en el código
// Reemplaza con tu color hex

// Ejemplo:
// bg-blue-600  → bg-purple-600
// focus:ring-blue-600  → focus:ring-purple-600
```

### Ajustar Espaciado
```jsx
// Padding global: p-6, p-8
// Cambiar a: p-4, p-10 según necesidad

// Bordes radius: rounded-2xl
// Cambiar a: rounded-lg, rounded-3xl
```

### Modificar Tipografía
```jsx
// Headings: font-black
// Cambiar a: font-bold, font-extrabold

// Body: font-medium
// Cambiar a: font-normal, font-semibold
```

---

## 📋 Checklist de Elementos Perk+

✅ Tipografía bold y moderna  
✅ Colores azul + gris + ámbar  
✅ Bordes redondeados (rounded-2xl)  
✅ Bordes de 1px en cards  
✅ Espaciado amplio  
✅ Logo con branding (+)  
✅ Sidebar con navegación clara  
✅ Header con información visible  
✅ Botones con shadow  
✅ Tabs con borde inferior  
✅ Badges y estados con colores  
✅ Hover effects suaves  
✅ Responsive design  

---

## 🎯 Notas de Implementación

### Mantenimiento
- Usar Tailwind CSS classes directamente
- No agregar CSS externo a menos que sea necesario
- Mantener paleta de colores consistente
- Verificar responsividad en todos los breakpoints

### Extensibilidad
- Las secciones pueden expandirse fácilmente
- Agregar nuevas cards respeta el diseño
- La estructura es modular y reutilizable

### Performance
- Sin imágenes pesadas
- Solo SVG de Lucide
- CSS optimizado con Tailwind
- Renderizado eficiente con React

---

## 📸 Elementos Visuales por Sección

### Dashboard
- 4 cards con metrics principales
- Tipografía grande (text-3xl, text-2xl)
- Colores de estado sutiles
- Progress bar en presupuesto

### Planificación
- Timeline vertical con días numerados
- Locaciones en lista simple
- Cards pequeñas con bordes
- Icono o punto de color

### Casting
- Cards por actor con gradientes
- Información estructurada
- Badges de estado
- Espaciado generoso

### Estilismo
- 3 columnas iguales
- Listas con puntos de color
- Categorías claras (👗 💄 ✨)
- Bordes sutiles

### Presupuesto
- Desglose con barras
- Gráfico de pastel circular
- Números grandes y claros
- Divisor entre presupuesto y disponible

### Visualización
- Muestras de color grandes
- Texto descriptivo claro
- Referencias en lista con flecha
- Organización limpia

---

## 🚀 Próximos Pasos

1. **Testear en dispositivos reales**
   - Desktop 1920px, 1440px, 1024px
   - Tablet 768px
   - Móvil 375px

2. **Ajustar según feedback**
   - Spacing
   - Tamaños de fuente
   - Colores específicos

3. **Agregar efectos opcionales**
   - Animaciones suaves
   - Transiciones
   - Micro-interactions

4. **Documentación**
   - Guía de componentes
   - Patrones de diseño
   - Ejemplos de uso

---

**Diseño completado**: Abril 2026  
**Versión**: 2.0 (Aesthetic Perk+)  
**Estado**: Listo para producción

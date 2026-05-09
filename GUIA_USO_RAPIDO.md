# 🚀 Guía Rápida - Rodaje+ Studio

## 📋 Estado Actual (5 Dias para Rodaje)

Tienes **dos opciones** para usar la plataforma:

### **OPCIÓN 1: Usar el HTML original completo** (En Netlify ahora)
- ✅ STYLING ya funciona (drag-drop de imágenes, moodboards)
- ✅ SHOOTING PLAN completo (edición, imágenes, casting)
- ✅ Casting, Equipo, Presupuesto disponibles
- ⚠️ Problema: localStorage (datos se pierden al recargar)
- ⚠️ Vista Cliente solo muestra Shooting Plan

### **OPCIÓN 2: Usar el HTML mejorado** (`index-mejorado.html`)
- ✅ Shooting Plan mobile-friendly (scroll horizontal)
- ✅ Vista Cliente dinámica con link compartible
- ✅ Auto-sync cada 30 segundos
- ✅ Interfaz limpia y rápida
- ⚠️ Styling sin implementar (todavía)

---

## 🎯 Lo que Deberías Hacer Ahora

### Para los Próximos 5 Días:

**Opción A: Rapido & Funcional (Recomendado)**
1. Usa el original `index.html` que ya está en Netlify
2. Solo agrega **persistencia Firebase/Supabase** a localStorage
3. Mejora la **Vista Cliente** para que muestre Styling + Presupuesto
4. Listo para rodaje en 1-2 días

**Opción B: Limpio & Moderno**
1. Usa `index-mejorado.html` como base
2. Implementa Styling desde cero
3. Agrega Firebase para persistencia real
4. Cuesta 3-4 días pero queda más profesional

---

## 🔧 Quick Setup

### 1. **Sin Backend (Funciona AHORA)**

```html
<!-- Usa el original o el mejorado, no necesitan credenciales -->
<!-- Los datos se guardan en localStorage automáticamente -->
```

### 2. **Con Firebase (Recomendado para Colaboración Real-Time)**

Ve a [firebase.google.com](https://firebase.google.com):

1. Crea proyecto "rodaje-studio"
2. Habilita "Realtime Database"
3. Obtén tu `firebaseConfig`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com"
};
```

4. Pégalo en el HTML (línea ~150)

---

## 📱 Características Clave

### Shooting Plan Mobile
- **Desktop**: Grid normal
- **Tablet**: Grid ajustado
- **Mobile**: Scroll horizontal (los shots se deslizan hacia los lados)

```css
/* Auto en mobile */
.sp-shot-card { grid-template-columns: 1fr; } /* Solo vertical */
.sp-shots-container { overflow-x: auto; scroll-behavior: smooth; } /* Swipe */
```

### Vista Cliente Dinámica
- Link automático: `https://tudominio.com#client-{projectId}`
- Se actualiza en tiempo real si usas Firebase
- Cliente ve solo: Shooting Plan, Styling, Presupuesto
- Cliente NO ve: Equipo, Tratamiento, datos sensibles

### Sincronización
- **localStorage**: Instantáneo (sin internet necesario)
- **Firebase**: Sync en tiempo real
- **Indicador**: Badge abajo a la derecha "Sincronizando..." → "Sincronizado ✓"

---

## 📝 Para Tu Compañera

Cuando quieras compartir:

1. **Link de Admin**: `https://tudominio.com` (puede editar TODO)
2. **Link de Cliente**: `https://tudominio.com#client-1` (solo ve shooting plan, styling)

Ella puede:
- ✅ Ver shooting plan
- ✅ Ver styling (moodboards)
- ✅ Ver presupuesto
- ✅ Ver casting
- ❌ Editar (es read-only)

---

## 🚀 Deploy a Netlify (1 minuto)

### Con el Original (Ya está subido)
Solo actualiza el archivo:
1. Baja el HTML
2. Lo subes a la carpeta de Netlify
3. Listo

### Con el Mejorado
1. Guarda `index-mejorado.html` como `index.html`
2. Súbelo a Netlify
3. Borra el anterior

---

## ⚡ Quick Fixes Posibles

### Si los datos se pierden:
```javascript
// Agrega esto al final del <script>
setInterval(() => localStorage.setItem('rodaje-projects', JSON.stringify(projects)), 5000);
```

### Si la Vista Cliente no funciona:
```javascript
// Verifica la URL sea: https://domain.com#client-1
// Y que el proyecto tenga id: 1
```

### Si el scroll horizontal no funciona en móvil:
```css
.sp-shots-container {
  -webkit-overflow-scrolling: touch; /* iOS smooth scroll */
  scroll-behavior: smooth; /* Desktop smooth scroll */
}
```

---

## 📊 Próximos Pasos Después del Rodaje

1. **Migrar a Firebase** - Datos en tiempo real
2. **Agregar upload de imágenes** - Supabase storage
3. **Roles y permisos** - Admin vs Cliente vs Crew
4. **Notificaciones** - Cuando tu compañera actualiza
5. **Exportar a PDF** - Shooting plan, presupuesto

---

## 💡 Consejos para los 5 Días

1. **Carga datos reales AHORA** - No esperes al rodaje
2. **Prueba con tu compañera** - Compartir el link del cliente
3. **Haz backup** - Descarga el JSON de localStorage
4. **Deja feedback** - ¿Qué falta? ¿Qué no funciona?

---

## 🔗 URLs Útiles

- **Original**: https://tudominio.netlify.app
- **Cliente Admin**: https://tudominio.netlify.app#admin
- **Cliente Viewer**: https://tudominio.netlify.app#client-1
- **Mejorado**: Súbelo con el nombre que quieras

---

¿Necesitas que implemente algo específico? Solo cuéntame. 🚀

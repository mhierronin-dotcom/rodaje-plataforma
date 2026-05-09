#!/bin/bash
# ─────────────────────────────────────────────
#  PUBLICAR RODAJE+ → GitHub Pages
#  Doble clic para subir los últimos cambios
# ─────────────────────────────────────────────

cd "$(dirname "$0")"

echo ""
echo "══════════════════════════════════════"
echo "  RODAJE+ · Publicando en GitHub Pages"
echo "══════════════════════════════════════"
echo ""

# 0. Limpiar posibles lock files de git
rm -f .git/HEAD.lock .git/refs/heads/master.lock 2>/dev/null

# 1. Copiar index-actual.html → index.html
echo "📋  Copiando index-actual.html → index.html..."
cp index-actual.html index.html

# 2. Añadir cambios al staging
git add index.html index-actual.html

# 3. Comprobar si hay algo que commitear
if git diff --cached --quiet; then
  echo "✓  Sin cambios nuevos. Ya estás al día."
  echo ""
  echo "🌐  URL pública:"
  echo "    https://mhierronin-dotcom.github.io/rodaje-plataforma/"
  echo ""
  read -p "Pulsa ENTER para cerrar..."
  exit 0
fi

# 4. Commit con fecha y hora automáticos
TIMESTAMP=$(date "+%Y-%m-%d %H:%M")
git commit -m "Actualización $TIMESTAMP"

# 5. Push
echo ""
echo "☁️   Subiendo a GitHub..."
git push origin master

# 6. Resultado
if [ $? -eq 0 ]; then
  echo ""
  echo "══════════════════════════════════════"
  echo "  ✅  Publicado correctamente"
  echo ""
  echo "  🌐  https://mhierronin-dotcom.github.io"
  echo "      /rodaje-plataforma/"
  echo ""
  echo "  (Los cambios tardan ~30 seg en verse)"
  echo "══════════════════════════════════════"
else
  echo ""
  echo "══════════════════════════════════════"
  echo "  ❌  Error al subir. Comprueba:"
  echo "     · Que tienes conexión a internet"
  echo "     · Que tienes acceso al repo de GitHub"
  echo "══════════════════════════════════════"
fi

echo ""
read -p "Pulsa ENTER para cerrar..."

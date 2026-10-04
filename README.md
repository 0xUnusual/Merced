# MERCED — Luxury Handbags & Haute Craftsmanship (República Dominicana)

Sitio web oficial de la marca de marroquinería y bolsos de lujo **MERCED**, concebido bajo los principios del *lujo silencioso* (*quiet luxury*), minimalismo editorial contemporáneo y preservación de la tradición artesanal dominicana.

---

## ✨ Características Principales

### 1. Navegación Simétrica con Logo Protagónico
- **Distribución Balanceada**:
  - **Izquierda**: `Inicio` | `Productos`
  - **Centro**: **Logo MERCED** en gran formato, con transparencia y contraste adaptativo según el tema activo.
  - **Derecha**: `Historia` | `Atelier` (*Bespoke*) + Conmutador de Tema + Bolso de compras interactivo.
- Efecto *glassmorphism* que se compacta y añade sombra sutil al hacer scroll.

### 2. Modo Claro y Modo Oscuro (*Haute Luxury Dual Theme*)
- **Modo Claro (Ivory Luxury Canvas)**: Fondos en marfil cálido (`#FAF8F5`) con tipografía editorial en grafito profundo (`#121212`) y el logo en versión carbón.
- **Modo Oscuro (Obsidian Noir & Gold Leaf)**: Fondos en negro terciopelo obsidiana (`#0B0B0B`) con tarjetas mate (`#151515`) y el logo en versión blanco radiante con halo dorado.
- **Acento de Marca**: Incorporación del amarillo dorado insignia de Instagram (**`#FFCD2E`**) en distintivos, botones y estados activos.
- **Persistencia**: Detección del esquema de color del sistema operativo y almacenamiento de la preferencia en `localStorage`.

### 3. Catálogo de Bolsos: Obras Selectas (3) & Catálogo Completo (6)
- **Colección Distintiva en Portada**: Presenta las **3 piezas más relevantes** de la marca en un grid simétrico de 3 columnas de alto impacto.
- **Catálogo Completo Dedicado (Blank Modal / Drawer)**: Al hacer clic en el enlace `"Productos"` del Navbar o en el botón de la sección, se despliega una vista completa con **6 creaciones de lujo**:
  - **MERCED Signature Sol Naciente Clutch** (Clutch semicircular en abanico tejido a mano con flecos fluidos en degradados cálidos).
  - **MERCED Woven Azure Shoulder Bag** (Bolso de hombro en cuero azul cerúleo *intrecciato* con asa artesanal y esferas de madera noble).
  - **Zona Colonial Mini Crossbody** (Edición en amarillo solar `#FFCD2E`).
  - **Bahía Slouchy Cloud Clutch** (Pouch escultural plisado con cadena de eslabones dorados).
  - **Palmar Terracota Bucket Bag** (Cilindro escultural en calfskin terracota caribeña con costuras vivas).
  - **Cordillera Cacao Doctor Satchel** (Bolso estructurado en piel grano cacao profundo con asa de bambú tratado).
- Botones de acción inmediata: *"Vista Rápida"* y *"Añadir al Bolso"*.

### 4. Carrito Deslizante (*Slide-out Drawer Cart*)
- Carrito lateral interactivo que calcula subtotales en tiempo real, permite añadir/remover piezas y emite notificaciones flotantes (*toast alerts*).

### 5. Modal de Vista Rápida (*Quick View*)
- Ficha técnica completa de cada bolso: dimensiones, tipo de piel, acabados de orfebrería y país de origen con encuadre dinámico.

### 6. Atelier & Simulador de Monograma Bespoke
- Apartado interactivo donde los clientes pueden escribir sus iniciales (hasta 3 letras) y visualizar en tiempo real su estampado en pan de oro de 24 quilates.

### 7. Storytelling Dominicano & Filosofía de Marca
- Homenaje visual y narrativo a los maestros marroquineros dominicanos, la curaduría de pieles y el diseño caribeño con proyección internacional.

---

## 📁 Estructura del Proyecto

```plaintext
Merced/
├── index.html                  # Estructura semántica, accesibilidad y SEO
├── styles.css                  # Tokens de diseño, temas duales, tipografías y animaciones
├── app.js                      # Lógica interactiva (Catálogo, Carrito, Modal, Monograma y Tema)
├── README.md                   # Documentación técnica del proyecto
└── assets/
    └── images/                 # Assets gráficos optimizados
        ├── logo_merced_dark.png    # Logo carbón para Modo Claro
        ├── logo_merced_white.png   # Logo blanco radiante para Modo Oscuro
        ├── logo_merced_gold.png    # Sello dorado insignia
        ├── bag_samana.png          # Fotografía real: Clutch Sol Naciente
        ├── bag_capcana.jpg         # Fotografía real: Woven Azure Shoulder Bag
        ├── bag_colonial.jpg        # Fotografía de catálogo: Zona Colonial Crossbody
        ├── bag_bahia.jpg           # Fotografía de catálogo: Bahía Slouchy Clutch
        ├── artisan_craft.jpg       # Fotografía documental: Taller artesano
        ├── atelier_monogram.jpg    # Fotografía macro: Grabado en pan de oro
        └── editorial_campaign.jpg  # Fotografía editorial de moda
```

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

El sitio está desarrollado con estándares nativos web modernos (HTML5, Vanilla CSS y ES6), sin necesidad de instalar frameworks pesados.

### Opción 1: Con Python (Recomendado)
Abre PowerShell o tu terminal en la carpeta raíz del proyecto y ejecuta:
```bash
python -m http.server 3000
```
Luego abre tu navegador en:
```
http://localhost:3000
```

### Opción 2: Con Node.js (`npx serve`)
```bash
npx serve -l 3000
```

### Opción 3: Extensión Live Server (VS Code / Antigravity IDE)
Haz clic derecho en `index.html` y selecciona **"Open with Live Server"**.

---

## 🎨 Paleta Cromática y Tipografía

| Token | Valor Hex | Uso Principal |
| :--- | :--- | :--- |
| **Signature Gold** | `#FFCD2E` | Acento corporativo de Instagram, badges y botones |
| **Deep Graphite Noir** | `#121212` | Textos principales en Modo Claro / Acentos oscuros |
| **Velvet Obsidian** | `#0B0B0B` | Fondo base en Modo Oscuro |
| **Warm Ivory Canvas** | `#FAF8F5` | Fondo base en Modo Claro |
| **Champagne Bronze** | `#C8A97E` | Herrajes, filetes y sutilezas orfebres |

- **Tipografía Editorial**: *Cormorant Garamond* (Google Fonts) — Serif de alta costura.
- **Tipografía Funcional**: *Montserrat* (Google Fonts) — Sans-serif limpia y geométrica.

---

## 📱 Responsividad
Totalmente adaptado para:
- Pantallas Ultra-Wide / 4K Desktop.
- Laptops y Tablets (iPad / Pro).
- Dispositivos Móviles (menú desplegable suave y tarjetas optimizadas).

---

## 📄 Licencia
© 2026 **MERCED**. Marca registrada. Hecho con orgullo y devoción en la **República Dominicana**.

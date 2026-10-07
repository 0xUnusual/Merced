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

### 3. Catálogo de Bolsos Artesanales de Lujo (RD$)
- **Carrusel Multi-imagen en cada Card**: Navegación fluida con flechas de lujo (`‹` / `›`), indicadores de puntos, insignia de conteo de fotos (`1 / 3`) y gestos táctiles (swipe).
- **Colección Distintiva en Portada (`index.html`)**: Presenta las primeras 3 piezas artesanales en un grid simétrico de alto impacto.
- **Página de Catálogo Completa (`productos.html`)**: Catálogo con los modelos emblemáticos de la marca:
  - **Prima** (RD$ 6,000): Primer modelo experimental de la marca, tejido a mano en trapillo con mango grueso y flecos vivos.
  - **Eloísa** (RD$ 5,500): Homenaje a una mujer de carácter; mango tejido con flecos, cuerpo en cuero sintético y 9 bolas de madera.
  - **Moka** (RD$ 6,500): Tonalidades café Moca, tejido en trapillo con paneles triangulares, tiras largas y 10 bolas de madera.
  - **Teresa** (RD$ 7,999): Modelo icónico semicircular en trapillo rojo coral con denso fleco en cascada y mango desmontable.
  - **Candela** (RD$ 7,500): Explosión bicolor naranja y rojo coral, silueta semicircular, mango desmontable y 5 bolas de madera.
  - **Jennie** (RD$ 7,490): Bolso artesanal en Denim / Jean reciclado con mango desmontable en trapillo blanco, placa dorada MERCED y acabado deshilachado.
- **Filtros por Categoría**: Botones interactivos en `productos.html` para filtrar por colección y estilo (Experimental, Signature, Hombro & Noche, Edición Sol, Alta Noche & Gala, Estructurados & Día).
- **Botones de acción inmediata**: *"Vista Rápida"* (con galería multi-imagen interactiva) y *"Añadir al Bolso"*, compartidos con persistencia en `localStorage`.

### 4. Carrito Deslizante & Finalización de Pedidos vía WhatsApp Concierge
- **Bolso de Compra Dinámico**: Carrito lateral interactivo persistente entre páginas que calcula subtotales en tiempo real y permite añadir/remover piezas.
- **Modal de Pedido por WhatsApp**:
  - Al presionar *"Finalizar Compra"*, se despliega un modal exclusivo de atención personalizada (*Concierge MERCED*).
  - Muestra el resumen de las piezas elegidas con fotos, cantidades y monto total calculado en pesos dominicanos (**RD$**).
  - Formulario de entrega en RD: Nombre, Teléfono, Ciudad/Provincia (Santo Domingo, Santiago, Punta Cana, etc.), Dirección/Sector, método de pago (Transferencias Banco Popular, Banreservas, BHD o coordinado) y dedicatoria/notas.
  - Al confirmar, genera un mensaje profesionalmente formateado y abre la conversación oficial en WhatsApp para coordinar pago y entrega directa con la marca.
  - Incluye botón de consulta rápida para enviar la orden con un solo clic.

### 5. Modal de Vista Rápida (*Quick View*)
- Ficha técnica completa de cada bolso: dimensiones, tipo de piel, acabados de orfebrería y país de origen con encuadre dinámico.

### 6. Centro de Preguntas Frecuentes (FAQ)
- Apartado interactivo tipo acordeón accesible desde la navegación principal y banner dedicado, con respuestas sobre confección artesanal a mano en RD, envíos nacionales, métodos de pago, cuidado del bolso y pedidos en colores personalizados, junto con canal directo de contacto.

### 7. Storytelling Dominicano & Filosofía de Marca
- Homenaje visual y narrativo a los maestros marroquineros dominicanos, la curaduría de pieles y el diseño caribeño con proyección internacional.

---

## 📁 Estructura del Proyecto

```plaintext
Merced/
├── index.html                  # Página principal (Colección selecta, Historia, Atelier, Comunidad)
├── productos.html              # Página dedicada al catálogo completo con los 6 modelos y filtros
├── styles.css                  # Tokens de diseño, temas duales, tipografías y animaciones
├── app.js                      # Lógica interactiva (Catálogo, Filtros, Carrito persistente, Modal, Monograma y Tema)
├── favicon.ico                 # Favicon multirresolución raíz (Monograma M en oro #FFCD2E)
├── apple-touch-icon.png        # Icono de pantalla de inicio para dispositivos Apple
├── README.md                   # Documentación técnica del proyecto
└── assets/
    └── images/                 # Assets gráficos optimizados
        ├── favicon.png             # Master del Monograma M en medallón obsidiana y oro
        ├── favicon-32x32.png       # Favicon estándar para pestañas de navegador
        ├── favicon-16x16.png       # Favicon compacto
        ├── favicon-192x192.png     # Icono para dispositivos móviles y PWA
        ├── apple-touch-icon.png    # Icono táctil de alta definición
        ├── logo_merced_dark.png    # Logo carbón para Modo Claro
        ├── logo_merced_white.png   # Logo blanco radiante para Modo Oscuro
        ├── logo_merced_gold.png    # Sello dorado insignia
        ├── bag_samana.png          # Fotografía real: Clutch Sol Naciente
        ├── bag_capcana.jpg         # Fotografía real: Woven Azure Shoulder Bag
        ├── bag_colonial.jpg        # Fotografía de catálogo: Zona Colonial Crossbody
        ├── bag_bahia.jpg           # Fotografía de catálogo: Bahía Slouchy Clutch
        ├── bag_terracota.jpg       # Fotografía de catálogo: Palmar Terracota Bucket
        ├── bag_cacao.jpg           # Fotografía de catálogo: Cordillera Cacao Satchel
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

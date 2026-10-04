/**
 * MERCED LUXURY HANDBAGS — Interactive Application Logic
 * Pure ES6, Cart drawer management, monogramming simulator, quick-view modal & smooth scroll.
 */

// Sample Catalog Data
// Sample Catalog Data (6 Luxury Pieces)
const PRODUCTS_DATA = [
  {
    id: 'samana-tote',
    title: 'MERCED Signature Sol Naciente Clutch',
    category: 'Colección Signature',
    price: 480,
    formattedPrice: '$480 USD',
    image: 'assets/images/bag_samana.png',
    origin: 'Tejido Artesanal a Mano en RD',
    badge: 'Pieza Emblemática',
    badgeAccent: true,
    description: 'Silueta escultural semicircular en abanico tejida meticulosamente a mano en vibrantes degradados de hilo caribeño naranja mandarina y amarillo sol con flecos cascada extralargos de movimiento fluido.',
    leatherType: 'Textil Crochet Escultural & Flecos de Caída Libre',
    dimensions: '38 cm x 26 cm (con flecos 58 cm)',
    hardware: 'Cuentas Artesanales & Estructura Ergonómica de Mano'
  },
  {
    id: 'cap-cana-baguette',
    title: 'MERCED Woven Azure Shoulder Bag',
    category: 'Hombro & Noche',
    price: 495,
    formattedPrice: '$495 USD',
    image: 'assets/images/bag_capcana.jpg',
    origin: 'Artesanía Fina Dominicana',
    badge: 'Edición Exclusiva',
    badgeAccent: false,
    description: 'Estructura trapezoidal confeccionada en cuero trenzado intrecciato color azul cerúleo, con asa superior tejida voluminosa, flecos laterales fluidos y cuentas ornamentales en madera noble talladas a mano.',
    leatherType: 'Piel Intrecciato Celeste & Textil Trenzado Escultural',
    dimensions: '32 cm x 24 cm x 10 cm',
    hardware: 'Herrajes en Latón Dorado & Esferas de Madera Artesanales'
  },
  {
    id: 'colonial-crossbody',
    title: 'Zona Colonial Mini Crossbody',
    category: 'Edición Limitada Sol',
    price: 360,
    formattedPrice: '$360 USD',
    image: 'assets/images/bag_colonial.jpg',
    origin: 'Santo Domingo Heritage',
    badge: 'Color Insignia',
    badgeAccent: true,
    description: 'La máxima expresión del color y luz dominicana. Confeccionado en cuero granulado amarillo radiante (#FFCD2E) con ribete crema y cerradura de seguridad giratoria en tono oro champaña.',
    leatherType: 'Piel Grano Natural Yellow Solar',
    dimensions: '22 cm x 17 cm x 9 cm',
    hardware: 'Cerradura Giratoria con Logo Grabado'
  },
  {
    id: 'bahia-clutch',
    title: 'Bahía Slouchy Cloud Clutch',
    category: 'Alta Noche & Gala',
    price: 420,
    formattedPrice: '$420 USD',
    image: 'assets/images/bag_bahia.jpg',
    origin: 'Piel Nappa de Primera Calidad',
    badge: 'Artesanía Escultural',
    badgeAccent: false,
    description: 'Pouch escultural plisado en suave piel nappa marfil, acompañado de delicada cadena de eslabones dorados y dije conector en cuero amarillo distintivo MERCED.',
    leatherType: 'Nappa Suave Marfil & Piel Amarilla',
    dimensions: '30 cm x 18 cm x 12 cm',
    hardware: 'Cadena Gourmette Bañada en Oro'
  },
  {
    id: 'palmar-terracota',
    title: 'Palmar Terracota Bucket Bag',
    category: 'Estructurados & Día',
    price: 440,
    formattedPrice: '$440 USD',
    image: 'assets/images/bag_terracota.jpg',
    origin: 'Curtido Vegetal Dominicano',
    badge: 'Nuevo Lanzamiento',
    badgeAccent: false,
    description: 'Silueta cilíndrica escultural confeccionada en calfskin terracota caribeña con costuras vivas en amarillo dorado (#FFCD2E), asa trenzada a mano y correa ajustable extraíble.',
    leatherType: 'Calfskin Terracota & Piel Grano Tostado',
    dimensions: '22 cm x 26 cm x 16 cm',
    hardware: 'Ojales y Mosquetones Bañados en Oro 24K'
  },
  {
    id: 'cordillera-satchel',
    title: 'Cordillera Cacao Doctor Satchel',
    category: 'Herencia Clásica',
    price: 510,
    formattedPrice: '$510 USD',
    image: 'assets/images/bag_cacao.jpg',
    origin: 'Maestría Artesana Cibao',
    badge: 'Edición Limitada',
    badgeAccent: true,
    description: 'Bolso estructurado de viaje y ciudad en piel grano cacao profundo con ribetes contrastantes en crema, asa de bambú tratado artesanalmente y broche de joyería dorada.',
    leatherType: 'Piel Grano Entero Chocolate & Ribete Marfil',
    dimensions: '34 cm x 25 cm x 14 cm',
    hardware: 'Asa Artesanal de Bambú & Cerradura de Presión en Latón'
  }
];

// Shopping Cart State (Persisted in localStorage across pages)
let cart = [];
try {
  const savedCart = localStorage.getItem('merced-cart');
  if (savedCart) cart = JSON.parse(savedCart);
} catch (e) {
  cart = [];
}

function saveCart() {
  try {
    localStorage.setItem('merced-cart', JSON.stringify(cart));
  } catch (e) {}
}

// DOM Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  renderCatalogPageProducts();
  setupCatalogFilters();
  setupNavbarScroll();
  setupCartDrawer();
  updateCartUI(); // Restore cart UI on load
  setupMonogramSimulator();
  setupQuickViewModal();
  setupSmoothScrolling();
  setupMobileMenu();
  setupThemeToggle();
});

// Helper: Generates HTML for a product card
function createProductCardHTML(product) {
  return `
    <article class="product-card" data-id="${product.id}">
      <div class="product-media-container">
        <div class="badge-collection">
          <span class="badge-tag ${product.badgeAccent ? 'accent-gold' : ''}">${product.badge}</span>
        </div>
        <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
        <div class="card-quick-actions">
          <button class="btn-card-action" onclick="openQuickView('${product.id}')">
            Vista Rápida
          </button>
          <button class="btn-card-action btn-card-cart" onclick="addToCart('${product.id}')">
            Añadir al Bolso
          </button>
        </div>
      </div>
      <div class="product-details">
        <div class="product-meta-row">
          <span class="product-category">${product.category}</span>
          <span class="product-origin">${product.origin}</span>
        </div>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-price-row">
          <span class="product-price">${product.formattedPrice}</span>
          <div class="product-leather-dot">
            <span class="swatch" style="background: ${product.badgeAccent ? '#FFCD2E' : '#222'}"></span>
            <span>Edición Hecha en RD</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

// 1. Render Featured Products (Top 3 most relevant in the main page)
function renderFeaturedProducts() {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  const featured = PRODUCTS_DATA.slice(0, 3);
  container.innerHTML = featured.map(createProductCardHTML).join('');
}

// 2. Render Full Catalog (All 6 Luxury Pieces in dedicated page productos.html)
function renderCatalogPageProducts() {
  const container = document.getElementById('catalog-all-grid');
  if (!container) return;

  container.innerHTML = PRODUCTS_DATA.map(createProductCardHTML).join('');
}

// 3. Interactive Category Filter Pills on productos.html
function setupCatalogFilters() {
  const filterBtns = document.querySelectorAll('.catalog-filter-bar .filter-btn');
  const catalogGrid = document.getElementById('catalog-all-grid');
  if (!filterBtns.length || !catalogGrid) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      let filtered = PRODUCTS_DATA;
      if (filter !== 'all') {
        const query = filter.toLowerCase();
        filtered = PRODUCTS_DATA.filter(p => 
          p.category.toLowerCase().includes(query) || 
          (p.badge && p.badge.toLowerCase().includes(query)) ||
          p.title.toLowerCase().includes(query)
        );
      }

      catalogGrid.innerHTML = filtered.map(createProductCardHTML).join('');
    });
  });
}

// Navbar Scroll Effect
function setupNavbarScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Slide-Out Cart Logic
function setupCartDrawer() {
  const cartBackdrop = document.getElementById('cart-backdrop');
  const cartDrawer = document.getElementById('cart-drawer');
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');

  function openCart() {
    cartBackdrop.classList.add('open');
    cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartBackdrop.classList.remove('open');
    cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', (e) => {
      if (e.target === cartBackdrop) closeCart();
    });
  }

  window.openCart = openCart;
  window.closeCart = closeCart;
}

// Add Item to Cart
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`"${product.title}" añadido al bolso de compra.`);
}

// Remove Item from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

// Update Cart Badge & Items
function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartBadge = document.getElementById('cart-count-badge');
  if (cartBadge) {
    cartBadge.textContent = totalCount;
    cartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  const itemsContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-val');

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <p style="font-family: var(--font-editorial); font-size: 1.4rem; color: #121212; margin-bottom: 0.5rem;">Tu bolso está vacío</p>
        <p>Descubre nuestra colección de bolsos artesanales dominicanos con pieles de lujo.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '$0.00 USD';
    return;
  }

  let subtotal = 0;
  itemsContainer.innerHTML = cart.map(item => {
    subtotal += item.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-price">${item.formattedPrice} × ${item.quantity}</div>
          <span class="cart-item-remove" onclick="removeFromCart('${item.id}')">Eliminar</span>
        </div>
      </div>
    `;
  }).join('');

  if (subtotalEl) {
    subtotalEl.textContent = `$${subtotal.toLocaleString()} USD`;
  }
}

// Monogram Simulator
function setupMonogramSimulator() {
  const input = document.getElementById('monogram-input');
  const preview = document.getElementById('monogram-preview');
  if (!input || !preview) return;

  input.addEventListener('input', (e) => {
    let val = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
    if (val.length > 3) val = val.slice(0, 3);
    e.target.value = val;
    preview.textContent = val ? val.split('').join('.') + '.' : 'M.E.';
  });
}

// Quick View Modal
function setupQuickViewModal() {
  const modalBackdrop = document.getElementById('quickview-modal');
  const modalCloseBtn = document.getElementById('quickview-close-btn');

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  window.openQuickView = function (productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const qvImg = document.getElementById('qv-img');
    qvImg.src = product.image;
    if (product.id === 'samana-tote') {
      qvImg.style.objectPosition = 'center 62%';
    } else if (product.id === 'cap-cana-baguette') {
      qvImg.style.objectPosition = 'center 46%';
    } else {
      qvImg.style.objectPosition = 'center center';
    }
    document.getElementById('qv-category').textContent = product.category;
    document.getElementById('qv-title').textContent = product.title;
    document.getElementById('qv-price').textContent = product.formattedPrice;
    document.getElementById('qv-desc').textContent = product.description;
    document.getElementById('qv-leather').textContent = product.leatherType;
    document.getElementById('qv-dimensions').textContent = product.dimensions;
    document.getElementById('qv-hardware').textContent = product.hardware;

    const addBtn = document.getElementById('qv-add-btn');
    addBtn.onclick = () => {
      addToCart(product.id);
      closeModal();
      openCart();
    };

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
}

// Toast Alert
function showToast(message) {
  let toast = document.getElementById('luxury-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'luxury-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#FFCD2E; box-shadow:0 0 8px #FFCD2E;"></span>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Mobile Menu
function setupMobileMenu() {
  const toggle = document.getElementById('mobile-toggle-btn');
  const navLeft = document.getElementById('nav-left');
  const navRight = document.getElementById('nav-right');

  if (toggle) {
    toggle.addEventListener('click', () => {
      navLeft.classList.toggle('mobile-open');
      navRight.classList.toggle('mobile-open');
    });
  }
}

// Smooth Scrolling for anchor links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Dark / Light Luxury Theme Switcher
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const logoImg = document.querySelector('.brand-logo-img');
  const storedTheme = localStorage.getItem('merced-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    const allLogos = document.querySelectorAll('.brand-logo-img, .brand-logo-responsive');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      allLogos.forEach(img => { img.src = 'assets/images/logo_merced_white.png'; });
      if (toggleBtn) toggleBtn.setAttribute('title', 'Cambiar a Modo Claro');
    } else {
      document.documentElement.removeAttribute('data-theme');
      allLogos.forEach(img => { img.src = 'assets/images/logo_merced_dark.png'; });
      if (toggleBtn) toggleBtn.setAttribute('title', 'Cambiar a Modo Oscuro');
    }
  }

  // Initialize theme
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      applyTheme(newTheme);
      localStorage.setItem('merced-theme', newTheme);
      
      showToast(newTheme === 'dark' ? 'Modo Oscuro (Obsidian Noir) activado' : 'Modo Claro (Marfil) activado');
    });
  }
}

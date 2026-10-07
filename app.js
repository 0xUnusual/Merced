/**
 * MERCED LUXURY HANDBAGS — Interactive Application Logic
 * Pure ES6, Cart drawer management, monogramming simulator, quick-view modal & smooth scroll.
 */

// Sample Catalog Data
// Luxury Catalog Data (Prima as 1st Experimental Model + Full Atelier Collection)
const PRODUCTS_DATA = [
  {
    id: 'prima',
    title: 'Prima',
    category: 'Modelo Experimental',
    price: 6000,
    formattedPrice: 'RD$ 6,000',
    images: [
      'assets/images/bag_prima_3.jpg',
      'assets/images/bag_prima_1.jpg',
      'assets/images/bag_prima_2.jpg'
    ],
    image: 'assets/images/bag_prima_3.jpg',
    origin: 'Tejido Artesanal a Mano en RD',
    badge: 'Primer Modelo',
    badgeAccent: true,
    description: 'Su nombre viene del italiano que significa primera, llamada así por ser el primer modelo experimental de la marca. Bolso artesanal tejido a mano en trapillo, silueta mediana con espacio para esenciales, mango grueso con flecos decorativos alrededor que aportan movimiento y un toque de diversión. Puedes llevarlo al hombro o como clutch. Llamativa, versátil, divertida, moderna, chic.',
    leatherType: 'Trapillo Artesanal Seleccionado & Flecos Perimetrales',
    dimensions: 'Silueta Mediana para Esenciales (Hombro & Clutch)',
    hardware: 'Placa MERCED Bañada en Oro Insignia'
  },
  {
    id: 'eloisa',
    title: 'Eloísa',
    category: 'Colección Signature',
    price: 5500,
    formattedPrice: 'RD$ 5,500',
    images: [
      'assets/images/bag_eloisa_1.jpg',
      'assets/images/bag_eloisa_3.jpg',
      'assets/images/bag_eloisa_2.jpg'
    ],
    image: 'assets/images/bag_eloisa_1.jpg',
    origin: 'Hecho a Mano en RD',
    badge: 'Pieza Insignia',
    badgeAccent: true,
    description: 'Llamado así en homenaje a una mujer de carácter y con personalidad. Bolso artesanal hecho a mano con un mango tejido en trapillo, acompañado de flecos, cuerpo en cuero sintético y nueve bolas de madera que dan un toque natural y elegante. Silueta mediana con espacio para esenciales. Puedes llevarlo al hombro y mano. Elegante, sofisticada, chic, moderna.',
    leatherType: 'Cuero Sintético Intrecciato & Trapillo con Cuentas de Madera',
    dimensions: 'Silueta mediana con espacio para esenciales (Hombro y Mano)',
    hardware: 'Placa MERCED en Oro, Flecos Laterales & 9 Bolas de Madera'
  },
  {
    id: 'moka',
    title: 'Moka',
    category: 'Hombro & Noche',
    price: 6500,
    formattedPrice: 'RD$ 6,500',
    images: [
      'assets/images/bag_moka_1.jpg',
      'assets/images/bag_moka_2.jpg',
      'assets/images/bag_moka_3.jpg'
    ],
    image: 'assets/images/bag_moka_1.jpg',
    origin: 'Tejido Artesanal a Mano en RD',
    badge: 'Edición Café Moka',
    badgeAccent: true,
    description: 'Llamado así por el color marrón característico del café estilo Moca. Bolso artesanal tejido a mano en trapillo, con flecos, tiras largas, y 10 bolas de madera en tonos claros y oscuros. Silueta mediana con paneles triangulares y mango ajustable. Puedes llevarlo al hombro, a mano, como clutch y crossed body. Boho-chic, versátil, elegante.',
    leatherType: 'Trapillo Marrón Moka Escultural con Paneles Triangulares',
    dimensions: 'Silueta mediana con mango ajustable (Hombro, Mano, Clutch & Crossbody)',
    hardware: 'Placa MERCED en Oro, Tiras Extralargas & 10 Bolas de Madera'
  },
  {
    id: 'teresa',
    title: 'Teresa',
    category: 'Edición Limitada Sol',
    price: 7999,
    formattedPrice: 'RD$ 7,999',
    images: [
      'assets/images/bag_teresa_1.jpg',
      'assets/images/bag_teresa_2.jpg',
      'assets/images/bag_teresa_3.jpg'
    ],
    image: 'assets/images/bag_teresa_1.jpg',
    origin: 'Tejido Artesanal a Mano en RD',
    badge: 'Edición Ícono Coral',
    badgeAccent: true,
    description: 'Inspirado en una mujer icónica, protagonista y sin miedo a destacar. Esa que dice “aquí estoy yo”. Si buscas presencia y no tienes miedo de acaparar todas las miradas del lugar Teresa es la indicada para ti. Cartera artesanal tejida a mano en trapillo color rojo coral, forma de semicírculo o media luna, silueta mediana con mango desmontable. Destaca por su largo y denso fleco que cae desde el cuerpo creando un efecto de movimiento. Puedes usarla a mano y como clutch. Empoderada, magnética, atractiva, vibrante.',
    leatherType: 'Trapillo Rojo Coral Escultural & Flecos en Cascada Fluida',
    dimensions: 'Silueta semicírculo mediana con mango desmontable (Mano y Clutch)',
    hardware: 'Placa MERCED en Oro, Mosquetones Desmontables & Fleco Denso'
  },
  {
    id: 'candela',
    title: 'Candela',
    category: 'Alta Noche & Gala',
    price: 7500,
    formattedPrice: 'RD$ 7,500',
    images: [
      'assets/images/bag_candela_1.jpg',
      'assets/images/bag_candela_2.jpg',
      'assets/images/bag_candela_3.jpg'
    ],
    image: 'assets/images/bag_candela_1.jpg',
    origin: 'Tejido Artesanal a Mano en RD',
    badge: 'Edición Fuego',
    badgeAccent: true,
    description: 'Llamado así por su llamativa combinación de colores que representan el fuego. Bolso artesanal tejido a mano en trapillo color naranja y rojo coral, 5 bolas de madera que caen junto a sus largos y abundantes flecos, forma de semicírculo o media luna y mango desmontable. Silueta mediana-grande. Puedes usarlo a mano y como clutch. Vibrante, llamativa, dinámica.',
    leatherType: 'Trapillo Bicolor Naranja & Rojo Coral con Flecos Abundantes',
    dimensions: 'Silueta semicírculo mediana-grande con mango desmontable (Mano y Clutch)',
    hardware: 'Mango Desmontable, Flecos en Cascada & 5 Bolas de Madera Centrales'
  },
  {
    id: 'jennie',
    title: 'Jennie',
    category: 'Estructurados & Día',
    price: 7490,
    formattedPrice: 'RD$ 7,490',
    images: [
      'assets/images/bag_jennie_1.jpg',
      'assets/images/bag_jennie_2.jpg',
      'assets/images/bag_jennie_3.jpg'
    ],
    image: 'assets/images/bag_jennie_1.jpg',
    origin: 'Tejido Artesanal en RD',
    badge: 'Upcycled Denim',
    badgeAccent: true,
    description: 'Bolso artesanal tejido con Denim / Jean reciclado de calidad, mango desmontable con un toque en trapillo blanco. Diseño que destaca por su acabado deshilachado y flecos que le dan un aspecto rústico y único. Rebelde, urbana, auténtica, fresca.',
    leatherType: 'Denim Reciclado Seleccionado & Trapillo Blanco',
    dimensions: 'Silueta compacta estructurada con mango desmontable',
    hardware: 'Placa MERCED en Oro, Mosquetones & Borde Deshilachado'
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
  } catch (e) { }
}

// DOM Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  renderCatalogPageProducts();
  setupCatalogFilters();
  setupNavbarScroll();
  setupCartDrawer();
  updateCartUI(); // Restore cart UI on load
  setupFaqAccordion();
  setupQuickViewModal();
  setupCheckoutModal();
  setupSmoothScrolling();
  setupMobileMenu();
  setupThemeToggle();
});

// Helper: Generates HTML for a product card with interactive multi-image carousel
function createProductCardHTML(product) {
  const images = (product.images && product.images.length > 0) ? product.images : [product.image];
  const hasMultiple = images.length > 1;

  return `
    <article class="product-card" data-id="${product.id}">
      <div class="product-media-container" data-card-carousel data-current-slide="0">
        <div class="badge-collection">
          <span class="badge-tag ${product.badgeAccent ? 'accent-gold' : ''}">${product.badge}</span>
        </div>

        ${hasMultiple ? `
          <div class="carousel-counter-badge">
            <span class="carousel-current-index">1</span>/<span class="carousel-total-count">${images.length}</span>
          </div>
        ` : ''}

        <div class="card-carousel-viewport">
          <div class="card-carousel-track" style="transform: translateX(0%);">
            ${images.map((imgSrc, idx) => `
              <div class="card-carousel-slide ${idx === 0 ? 'active' : ''}">
                <img src="${imgSrc}" alt="${product.title} - Vista ${idx + 1}" class="product-img" loading="lazy">
              </div>
            `).join('')}
          </div>
        </div>

        ${hasMultiple ? `
          <button class="carousel-arrow carousel-arrow-prev" type="button" aria-label="Foto anterior de ${product.title}" onclick="navigateCardCarousel(event, -1)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button class="carousel-arrow carousel-arrow-next" type="button" aria-label="Foto siguiente de ${product.title}" onclick="navigateCardCarousel(event, 1)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div class="carousel-indicators">
            ${images.map((_, idx) => `
              <button class="carousel-dot ${idx === 0 ? 'active' : ''}" type="button" aria-label="Ver foto ${idx + 1} de ${product.title}" onclick="goToCardCarouselSlide(event, ${idx})"></button>
            `).join('')}
          </div>
        ` : ''}

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
            <span>${product.origin.includes('RD') ? 'Hecho en RD' : 'Edición Hecha en RD'}</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

// Card Carousel Navigation Handlers
window.navigateCardCarousel = function (event, direction) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const container = event.currentTarget.closest('.product-media-container');
  if (!container) return;

  const track = container.querySelector('.card-carousel-track');
  const slides = container.querySelectorAll('.card-carousel-slide');
  const dots = container.querySelectorAll('.carousel-dot');
  const counterEl = container.querySelector('.carousel-current-index');
  if (!track || slides.length <= 1) return;

  let currentIndex = parseInt(container.getAttribute('data-current-slide') || '0', 10);
  let newIndex = (currentIndex + direction + slides.length) % slides.length;

  container.setAttribute('data-current-slide', newIndex);
  track.style.transform = `translateX(-${newIndex * 100}%)`;

  slides.forEach((slide, idx) => slide.classList.toggle('active', idx === newIndex));
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === newIndex));
  if (counterEl) counterEl.textContent = newIndex + 1;
};

window.goToCardCarouselSlide = function (event, targetIndex) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const container = event.currentTarget.closest('.product-media-container');
  if (!container) return;

  const track = container.querySelector('.card-carousel-track');
  const slides = container.querySelectorAll('.card-carousel-slide');
  const dots = container.querySelectorAll('.carousel-dot');
  const counterEl = container.querySelector('.carousel-current-index');
  if (!track || targetIndex < 0 || targetIndex >= slides.length) return;

  container.setAttribute('data-current-slide', targetIndex);
  track.style.transform = `translateX(-${targetIndex * 100}%)`;

  slides.forEach((slide, idx) => slide.classList.toggle('active', idx === targetIndex));
  dots.forEach((dot, idx) => dot.classList.toggle('active', idx === targetIndex));
  if (counterEl) counterEl.textContent = targetIndex + 1;
};

function initCarouselTouchEvents(container) {
  if (container.dataset.touchBound) return;
  container.dataset.touchBound = 'true';

  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        window.navigateCardCarousel({ currentTarget: container, stopPropagation: () => { }, preventDefault: () => { } }, 1);
      } else {
        window.navigateCardCarousel({ currentTarget: container, stopPropagation: () => { }, preventDefault: () => { } }, -1);
      }
    }
  }, { passive: true });
}

function attachCarousels(scope) {
  const containers = scope ? scope.querySelectorAll('.product-media-container[data-card-carousel]') : document.querySelectorAll('.product-media-container[data-card-carousel]');
  containers.forEach(initCarouselTouchEvents);
}

// 1. Render Featured Products (Top 3 most relevant in the main page)
function renderFeaturedProducts() {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  const featured = PRODUCTS_DATA.slice(0, 3);
  container.innerHTML = featured.map(createProductCardHTML).join('');
  attachCarousels(container);
}

// 2. Render Full Catalog (All luxury pieces in dedicated page productos.html)
function renderCatalogPageProducts() {
  const container = document.getElementById('catalog-all-grid');
  if (!container) return;

  container.innerHTML = PRODUCTS_DATA.map(createProductCardHTML).join('');
  attachCarousels(container);
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
      attachCarousels(catalogGrid);
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
    const hasDOP = cart.some(item => item.formattedPrice && item.formattedPrice.includes('RD$'));
    if (hasDOP) {
      subtotalEl.textContent = `RD$ ${subtotal.toLocaleString()}`;
    } else {
      subtotalEl.textContent = `$${subtotal.toLocaleString()} USD`;
    }
  }
}

// FAQ Accordion Interaction
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item[data-faq-item]');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const collapse = item.querySelector('.faq-answer-collapse');
    if (!btn || !collapse) return;

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all other items for sleek luxury feel
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherCollapse = otherItem.querySelector('.faq-answer-collapse');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherCollapse) otherCollapse.style.maxHeight = null;
        }
      });

      if (isExpanded) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        collapse.style.maxHeight = null;
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        collapse.style.maxHeight = collapse.scrollHeight + 'px';
      }
    });
  });
}

// ==========================================================================
// WHATSAPP CHECKOUT CONCIERGE & ORDER ROUTING
// ==========================================================================
// Número oficial de WhatsApp de MERCED para recibir y coordinar pedidos
// (Formato internacional sin signos ni espacios: ej. 18290000000 o 18490000000)
const MERCED_WHATSAPP_PHONE = '18494720790';

function openCheckoutModal() {
  if (!cart || cart.length === 0) {
    showToast('Tu bolso de compra está vacío. Agrega tus piezas favoritas primero.');
    return;
  }

  // Cerrar el carrito lateral si está visible
  if (typeof closeCart === 'function') {
    closeCart();
  }

  const modal = document.getElementById('checkout-modal');
  const itemsContainer = document.getElementById('checkout-items-list');
  const subtotalEl = document.getElementById('checkout-subtotal-val');
  const totalEl = document.getElementById('checkout-total-val');

  if (!modal) return;

  // Renderizar piezas seleccionadas en el resumen
  let subtotal = 0;
  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map(item => {
      const itemSubtotal = item.price * item.quantity;
      subtotal += itemSubtotal;
      return `
        <div class="checkout-item-row">
          <img src="${item.image}" alt="${item.title}" class="checkout-item-img">
          <div class="checkout-item-details">
            <h5 class="checkout-item-name">${item.title}</h5>
            <div class="checkout-item-meta">${item.formattedPrice} × ${item.quantity} ud.</div>
          </div>
          <div class="checkout-item-total">RD$ ${itemSubtotal.toLocaleString()}</div>
        </div>
      `;
    }).join('');
  }

  const formattedTotal = `RD$ ${subtotal.toLocaleString()}`;
  if (subtotalEl) subtotalEl.textContent = formattedTotal;
  if (totalEl) totalEl.textContent = formattedTotal;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function submitWhatsAppOrder() {
  if (!cart || cart.length === 0) {
    showToast('Tu bolso de compra está vacío.');
    return;
  }

  const nameInput = document.getElementById('checkout-name');
  const phoneInput = document.getElementById('checkout-phone');
  const cityInput = document.getElementById('checkout-city');
  const addressInput = document.getElementById('checkout-address');
  const paymentInput = document.getElementById('checkout-payment');
  const notesInput = document.getElementById('checkout-notes');

  const name = nameInput ? nameInput.value.trim() : '';
  const clientPhone = phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : 'Coordinar por WhatsApp';
  const city = cityInput && cityInput.value ? cityInput.value : 'Santo Domingo';
  const address = addressInput && addressInput.value.trim() ? addressInput.value.trim() : 'Coordinar con el asesor';
  const payment = paymentInput ? paymentInput.value : 'Transferencia Banco Popular Dominicano';
  const notes = notesInput && notesInput.value.trim() ? notesInput.value.trim() : '';

  if (!name) {
    showToast('Por favor introduce tu nombre para el pedido.');
    if (nameInput) nameInput.focus();
    return;
  }

  let subtotal = 0;
  const itemsText = cart.map(item => {
    const itemSubtotal = item.price * item.quantity;
    subtotal += itemSubtotal;
    return `• ${item.quantity}x *${item.title}* (${item.formattedPrice} c/u) = RD$ ${itemSubtotal.toLocaleString()}`;
  }).join('\n');

  const formattedTotal = `RD$ ${subtotal.toLocaleString()}`;

  const message =
    `✨ *NUEVO PEDIDO — MERCED REPÚBLICA DOMINICANA* ✨

Hola, deseo coordinar la compra de las siguientes piezas de su catálogo:

🛍️ *PIEZAS EN LA ORDEN:*
${itemsText}

💰 *TOTAL A PAGAR:* ${formattedTotal}
🚚 *ENVÍO NACIONAL:* De cortesía incluido en RD

👤 *DATOS DEL CLIENTE:*
• *Cliente:* ${name}
• *Teléfono:* ${clientPhone}
• *Ciudad/Provincia:* ${city}
• *Dirección/Sector:* ${address}
• *Preferencia de Pago:* ${payment}
${notes ? `• *Notas Especiales:* ${notes}\n` : ''}
Por favor confírmenme la disponibilidad y los datos de cuenta bancaria para proceder con la transferencia. ¡Muchas gracias!`;

  const waUrl = `https://wa.me/${MERCED_WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
  showToast('¡Abriendo WhatsApp para confirmar tu pedido!');
  closeCheckoutModal();
}

function submitQuickWhatsAppOrder() {
  if (!cart || cart.length === 0) {
    showToast('Tu bolso de compra está vacío.');
    return;
  }

  let subtotal = 0;
  const itemsText = cart.map(item => {
    subtotal += item.price * item.quantity;
    return `• ${item.quantity}x *${item.title}* (${item.formattedPrice})`;
  }).join('\n');

  const formattedTotal = `RD$ ${subtotal.toLocaleString()}`;

  const message =
    `✨ *CONSULTA DIRECTA DE COMPRA — MERCED RD* ✨

Hola, deseo ordenar las siguientes piezas artesanales:

${itemsText}

💰 *Total Estimado:* ${formattedTotal}
🚚 *Envío:* Nacional de cortesía incluido

Por favor indíquenme los pasos para coordinar la entrega y los datos de transferencia bancaria. ¡Gracias!`;

  const waUrl = `https://wa.me/${MERCED_WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
  showToast('¡Abriendo WhatsApp con tu pedido!');
  closeCheckoutModal();
}

function setupCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const closeBtn = document.getElementById('checkout-close-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeCheckoutModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCheckoutModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeCheckoutModal();
    }
  });

  window.openCheckoutModal = openCheckoutModal;
  window.closeCheckoutModal = closeCheckoutModal;
  window.submitWhatsAppOrder = submitWhatsAppOrder;
  window.submitQuickWhatsAppOrder = submitQuickWhatsAppOrder;
}

// Quick View Modal Multi-Image Gallery
let currentQvProduct = null;
let currentQvIndex = 0;

function applyQvImagePosition(productId, imgIndex) {
  const qvImg = document.getElementById('qv-img');
  if (!qvImg) return;
  if (productId === 'prima') {
    if (imgIndex === 0) qvImg.style.objectPosition = 'center 42%';
    else if (imgIndex === 1) qvImg.style.objectPosition = 'center 32%';
    else qvImg.style.objectPosition = 'center 40%';
  } else if (productId === 'eloisa') {
    if (imgIndex === 0) qvImg.style.objectPosition = 'center 55%';
    else if (imgIndex === 1) qvImg.style.objectPosition = 'center 65%';
    else qvImg.style.objectPosition = 'center 60%';
  } else if (productId === 'moka') {
    if (imgIndex === 0) qvImg.style.objectPosition = 'center 48%';
    else if (imgIndex === 1) qvImg.style.objectPosition = 'center 45%';
    else qvImg.style.objectPosition = 'center 55%';
  } else if (productId === 'teresa') {
    if (imgIndex === 0) qvImg.style.objectPosition = 'center 35%';
    else if (imgIndex === 1) qvImg.style.objectPosition = 'center 60%';
    else qvImg.style.objectPosition = 'center 30%';
  } else if (productId === 'candela') {
    if (imgIndex === 0) qvImg.style.objectPosition = 'center 38%';
    else if (imgIndex === 1) qvImg.style.objectPosition = 'center 40%';
    else qvImg.style.objectPosition = 'center 42%';
  } else if (productId === 'jennie') {
    if (imgIndex === 0) qvImg.style.objectPosition = 'center 48%';
    else if (imgIndex === 1) qvImg.style.objectPosition = 'center 52%';
    else qvImg.style.objectPosition = 'center 56%';
  } else {
    qvImg.style.objectPosition = 'center center';
  }
}

window.setQuickViewImage = function (index) {
  if (!currentQvProduct) return;
  const images = (currentQvProduct.images && currentQvProduct.images.length > 0)
    ? currentQvProduct.images
    : [currentQvProduct.image];
  if (index < 0 || index >= images.length) return;

  currentQvIndex = index;
  const qvImg = document.getElementById('qv-img');
  if (qvImg) {
    qvImg.style.opacity = '0.35';
    setTimeout(() => {
      qvImg.src = images[currentQvIndex];
      applyQvImagePosition(currentQvProduct.id, currentQvIndex);
      qvImg.style.opacity = '1';
    }, 120);
  }

  const thumbBtns = document.querySelectorAll('#qv-thumbnails .qv-thumb-btn');
  thumbBtns.forEach((btn, i) => {
    btn.classList.toggle('active', i === currentQvIndex);
  });
};

window.navigateQuickView = function (direction) {
  if (!currentQvProduct) return;
  const images = (currentQvProduct.images && currentQvProduct.images.length > 0)
    ? currentQvProduct.images
    : [currentQvProduct.image];
  if (images.length <= 1) return;
  const newIndex = (currentQvIndex + direction + images.length) % images.length;
  window.setQuickViewImage(newIndex);
};

function setupQuickViewModal() {
  const modalBackdrop = document.getElementById('quickview-modal');
  const modalCloseBtn = document.getElementById('quickview-close-btn');
  const prevBtn = document.getElementById('qv-arrow-prev');
  const nextBtn = document.getElementById('qv-arrow-next');

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

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.navigateQuickView(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.navigateQuickView(1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modalBackdrop || !modalBackdrop.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') window.navigateQuickView(-1);
    if (e.key === 'ArrowRight') window.navigateQuickView(1);
    if (e.key === 'Escape') closeModal();
  });

  window.openQuickView = function (productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    currentQvProduct = product;
    currentQvIndex = 0;

    const images = (product.images && product.images.length > 0) ? product.images : [product.image];
    const qvImg = document.getElementById('qv-img');
    qvImg.src = images[0];
    applyQvImagePosition(product.id, 0);

    const thumbsContainer = document.getElementById('qv-thumbnails');
    if (images.length > 1) {
      if (prevBtn) prevBtn.style.display = 'flex';
      if (nextBtn) nextBtn.style.display = 'flex';
      if (thumbsContainer) {
        thumbsContainer.style.display = 'flex';
        thumbsContainer.innerHTML = images.map((src, i) => `
          <button class="qv-thumb-btn ${i === 0 ? 'active' : ''}" type="button" aria-label="Ver vista ${i + 1}" onclick="setQuickViewImage(${i})">
            <img src="${src}" alt="${product.title} vista ${i + 1}">
          </button>
        `).join('');
      }
    } else {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      if (thumbsContainer) {
        thumbsContainer.style.display = 'none';
        thumbsContainer.innerHTML = '';
      }
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

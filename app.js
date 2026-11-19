const CATEGORIES = [
  { id: 'processors', label: 'Processors', icon: 'icon-chip' },
  { id: 'graphics', label: 'Graphics cards', icon: 'icon-graphics' },
  { id: 'motherboards', label: 'Motherboards', icon: 'icon-board' },
  { id: 'memory', label: 'Memory', icon: 'icon-memory' },
  { id: 'laptops', label: 'Laptops', icon: 'icon-laptop' },
  { id: 'monitors', label: 'Monitors', icon: 'icon-display' },
  { id: 'storage', label: 'Storage', icon: 'icon-storage' },
  { id: 'accessories', label: 'Accessories', icon: 'icon-box' },
  { id: 'cctv', label: 'CCTV', icon: 'icon-cctv' },
  { id: 'pos-systems', label: 'POS SYSTEMS', icon: 'icon-pos' },
];

// Example inventory and LKR amounts are for the storefront preview, not a live product feed.
let PRODUCTS = [
  {
    id: 'amd-ryzen-5-7500f', brand: 'AMD', category: 'processors', name: 'AMD Ryzen 5 7500F',
    short: 'AM5 · 6 cores · Up to 5.0 GHz · 32 MB cache', price: 78900, inStock: true, badge: 'Popular pick', featured: true,
    image: '', description: 'A six-core desktop processor for a balanced everyday or gaming build.',
    specs: [['Socket', 'AM5'], ['Cores / threads', '6 / 12'], ['Max boost', 'Up to 5.0 GHz'], ['Cache', '32 MB']],
  },
  {
    id: 'intel-core-i5-12400f', brand: 'Intel', category: 'processors', name: 'Intel Core i5-12400F',
    short: 'LGA 1700 · 6 cores · Up to 4.4 GHz · 18 MB cache', price: 44900, inStock: true, badge: 'Value pick', featured: true,
    image: '', description: 'A six-core processor option for LGA 1700 desktop builds.',
    specs: [['Socket', 'LGA 1700'], ['Cores / threads', '6 / 12'], ['Max boost', 'Up to 4.4 GHz'], ['Cache', '18 MB']],
  },
  {
    id: 'asus-prime-b760m-a-wifi', brand: 'ASUS', category: 'motherboards', name: 'ASUS Prime B760M-A WiFi',
    short: 'Micro-ATX · LGA 1700 · DDR5 · Wi-Fi', price: 56900, inStock: true, badge: 'DDR5', featured: true,
    image: '', description: 'A compact DDR5 motherboard built around Intel LGA 1700 processors.',
    specs: [['Form factor', 'Micro-ATX'], ['Socket', 'LGA 1700'], ['Memory', 'DDR5'], ['Wireless', 'Wi-Fi']],
  },
  {
    id: 'corsair-vengeance-rgb-16gb', brand: 'Corsair', category: 'memory', name: 'Corsair Vengeance RGB 16GB',
    short: 'DDR5 · 5600 MHz · Desktop memory', price: 27900, inStock: true, badge: 'RGB', featured: false,
    image: '', description: 'A 16 GB desktop memory kit with integrated RGB lighting.',
    specs: [['Capacity', '16 GB'], ['Memory type', 'DDR5'], ['Speed', '5600 MHz'], ['Use', 'Desktop']],
  },
  {
    id: 'msi-cyborg-15-a2rudx', brand: 'MSI', category: 'laptops', name: 'MSI Cyborg 15 A2RUDX',
    short: 'Core 5 210H · 16 GB · 512 GB SSD · RTX 3050', price: 399900, inStock: true, badge: 'Gaming laptop', featured: true,
    image: '', description: 'A 15.6-inch gaming laptop example listing with a Core 5 processor and GeForce RTX 3050 graphics.',
    specs: [['Processor', 'Intel Core 5 210H'], ['Memory', '16 GB'], ['Storage', '512 GB SSD'], ['Graphics', 'RTX 3050 6 GB']],
  },
  {
    id: 'msi-mag-275f-monitor', brand: 'MSI', category: 'monitors', name: 'MSI MAG 275F 27-inch Monitor',
    short: 'FHD · 180 Hz · 0.5 ms · IPS gaming monitor', price: 109900, inStock: false, badge: 'Demo stock: unavailable', featured: false,
    image: '', description: 'A 27-inch gaming monitor example listing with a Full HD IPS panel and 180 Hz refresh rate.',
    specs: [['Screen', '27-inch FHD'], ['Refresh rate', '180 Hz'], ['Response time', '0.5 ms'], ['Panel', 'IPS']],
  },
  {
    id: 'sample-graphics-card', brand: 'Sample brand', category: 'graphics', name: 'Performance Graphics Card',
    short: 'Example listing · Discrete graphics · 8 GB class', price: 189900, inStock: true, badge: 'Example listing', featured: false,
    image: '', description: 'A generic example catalog entry for a discrete graphics card. Replace the sample listing and image with an item from your own store.',
    specs: [['Product type', 'Discrete graphics'], ['Memory', '8 GB class'], ['Stock', 'Example only'], ['Listing', 'Replace before launch']],
  },
  {
    id: 'sample-nvme-storage', brand: 'Sample brand', category: 'storage', name: 'NVMe SSD · 1TB Class',
    short: 'Example listing · M.2 · PCIe storage', price: 29900, inStock: true, badge: 'Example listing', featured: false,
    image: '', description: 'A generic example catalog entry for an M.2 solid-state drive. Replace the sample listing and image with an item from your own store.',
    specs: [['Product type', 'M.2 NVMe SSD'], ['Capacity', '1 TB class'], ['Stock', 'Example only'], ['Listing', 'Replace before launch']],
  },
  {
    id: 'sample-keyboard-mouse-kit', brand: 'Sample brand', category: 'accessories', name: 'Keyboard & Mouse Set',
    short: 'Example listing · Wired desktop essentials', price: 8900, inStock: true, badge: 'Example listing', featured: false,
    image: '', description: 'A generic example catalog entry for everyday desktop accessories. Replace the sample listing and image with an item from your own store.',
    specs: [['Product type', 'Keyboard & mouse'], ['Connection', 'Wired'], ['Stock', 'Example only'], ['Listing', 'Replace before launch']],
  },
];

const PRODUCT_KEY = 'landmark-products-v1';
try { const savedProducts = JSON.parse(localStorage.getItem(PRODUCT_KEY) || 'null'); if (Array.isArray(savedProducts) && savedProducts.length) PRODUCTS = savedProducts; } catch {}
const CART_KEY = 'shopfront-cart-v1';
const ORDERS_KEY='landmark-orders-v1', REPAIRS_KEY='landmark-repairs-v1', MESSAGES_KEY='landmark-customer-messages-v1';
const readStore=(k)=>{try{return JSON.parse(localStorage.getItem(k)||'[]')}catch{return []}};
let ORDERS=readStore(ORDERS_KEY), REPAIR_REQUESTS=readStore(REPAIRS_KEY), CUSTOMER_MESSAGES=readStore(MESSAGES_KEY), isAdmin=sessionStorage.getItem('landmark-admin-session')==='yes';
const WHATSAPP_NUMBER = '94767995022';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
let byId = new Map(PRODUCTS.map((product) => [product.id, product]));
const money = (amount) => new Intl.NumberFormat('en-LK', {
  style: 'currency', currency: 'LKR', maximumFractionDigits: 0,
}).format(amount).replace(/\u00a0/g, ' ');

let activeCategory = 'all';
let toastTimer;
let cart = loadCart();

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || '{}');
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {};
    return Object.fromEntries(Object.entries(saved)
      .filter(([id, qty]) => byId.has(id) && Number.isInteger(qty) && qty > 0)
      .map(([id, qty]) => [id, Math.min(qty, 99)]));
  } catch {
    return {};
  }
}

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch { /* the page still works if storage is unavailable */ }
}

function categoryLabel(id) {
  return CATEGORIES.find((category) => category.id === id)?.label || id;
}

function categoryIcon(id, className = '') {
  const icon = CATEGORIES.find((category) => category.id === id)?.icon || 'icon-box';
  return `<svg class="${className}" aria-hidden="true"><use href="#${icon}"></use></svg>`;
}

function renderCategories() {
  const grid = $('#category-grid');
  grid.innerHTML = CATEGORIES.map((category, index) => `
    <button class="category-tile" type="button" data-category="${category.id}" aria-label="Browse ${category.label}" style="--category-photo:url('${CATEGORY_PHOTOS[category.id]}')">
      <span class="category-tile-copy"><span class="category-index">0${index + 1} / CATEGORY</span><strong>${category.label}</strong><span class="category-shop">SHOP NOW <b>↗</b></span></span>
      <span class="category-tile-art">${categoryIcon(category.id)}</span>
    </button>`).join('');
  $('#category-filter').innerHTML = '<option value="all">All categories</option>' + CATEGORIES.map((category) => `<option value="${category.id}">${category.label}</option>`).join('');
  const brands = [...new Set(PRODUCTS.map((product) => product.brand))].sort((a, b) => a.localeCompare(b));
  $('#brand-filter').innerHTML = '<option value="all">All brands</option>' + brands.map((brand) => `<option value="${brand}">${brand}</option>`).join('');
}

const CATEGORY_PHOTOS = {
  processors: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=900&q=82',
  graphics: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=82',
  motherboards: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=82',
  memory: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=900&q=82',
  laptops: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=82',
  monitors: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=82',
  storage: 'https://images.unsplash.com/photo-1597872200969-2b65d640f4b8?auto=format&fit=crop&w=900&q=82',
  accessories: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=82',
  cctv: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=900&q=82',
  'pos-systems': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=82',
};

function productCard(product) {
  const photo = product.image || CATEGORY_PHOTOS[product.category];
  const art = photo
    ? `<img src="${photo}" alt="Illustrative ${categoryLabel(product.category).toLowerCase()} product photo" loading="lazy" />`
    : `<span class="product-placeholder">${categoryIcon(product.category)}<small>Example listing</small></span>`;
  const stockLabel = product.inStock ? 'In stock · demo' : 'Out of stock · demo';
  const badgeClass = product.inStock ? 'product-badge' : 'product-badge stock-out';
  return `
    <article class="product-card" data-product-card="${product.id}">
      <span class="${badgeClass}">${product.badge}</span>
      <button class="product-image-button" type="button" data-action="details" data-id="${product.id}" aria-label="View ${product.name} details">${art}</button>
      <div class="product-meta">
        <p class="product-brand">${product.brand} <span aria-hidden="true">·</span> ${categoryLabel(product.category)}</p>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-spec-preview">${product.short}</p>
        <div class="product-price-row"><strong class="product-price">${money(product.price)}</strong>${product.previousPrice > product.price ? `<del class="old-price">${money(product.previousPrice)}</del>` : ''}<span class="product-stock ${product.inStock ? '' : 'out'}">${stockLabel}</span></div>
        <div class="card-actions">
          <button class="add-button" type="button" data-action="add" data-id="${product.id}" ${product.inStock ? '' : 'disabled'}>
            <svg aria-hidden="true"><use href="#icon-bag" /></svg>${product.inStock ? 'Add to cart' : 'Unavailable'}
          </button>
          <button class="quick-view-button" type="button" data-action="details" data-id="${product.id}" aria-label="Quick view ${product.name}">＋</button>
        </div>
      </div>
    </article>`;
}

function selectedProducts() {
  const term = ($('#catalog-search').value || '').trim().toLowerCase();
  const brand = $('#brand-filter').value;
  const availability = $('#stock-filter').value;
  const maxPrice = Number($('#price-filter').value);
  const sort = $('#sort-filter').value;
  let matches = PRODUCTS.filter((product) => {
    const text = `${product.name} ${product.brand} ${categoryLabel(product.category)} ${product.short}`.toLowerCase();
    return (activeCategory === 'all' || product.category === activeCategory)
      && (!term || text.includes(term))
      && (brand === 'all' || product.brand === brand)
      && (availability === 'all' || (availability === 'in' ? product.inStock : !product.inStock))
      && product.price <= maxPrice;
  });
  if (sort === 'price-low') matches.sort((a, b) => a.price - b.price);
  if (sort === 'price-high') matches.sort((a, b) => b.price - a.price);
  if (sort === 'name') matches.sort((a, b) => a.name.localeCompare(b.name));
  return matches;
}

function renderCatalog() {
  const matches = selectedProducts();
  $('#catalog-grid').innerHTML = matches.map(productCard).join('');
  $('#catalog-grid').hidden = matches.length === 0;
  $('#empty-state').hidden = matches.length > 0;
  $('#catalog-count').textContent = `${matches.length} ${matches.length === 1 ? 'sample item' : 'sample items'}`;
  $('#price-output').textContent = money(Number($('#price-filter').value));
  $$('.category-tile').forEach((tile) => {
    const active = tile.dataset.category === activeCategory;
    tile.classList.toggle('is-active', active);
    tile.setAttribute('aria-pressed', String(active));
  });
}

function renderFeatured() {
  $('#featured-grid').innerHTML = PRODUCTS.filter((product) => product.featured).slice(0, 4).map(productCard).join('');
}

function openCategoryPage(category) {
  if (!CATEGORIES.some(item => item.id === category)) return;
  activeCategory = category;
  $('#category-filter').value = category;
  $('#category-page-title').textContent = categoryLabel(category);
  $('#category-page-description').textContent = `Explore ${categoryLabel(category)} available at Landmark Computers.`;
  $('#category-page-sort').value = 'featured';
  document.body.classList.add('category-page-active');
  $('#category-page').hidden = false;
  renderCategoryPage();
  history.pushState({ category }, '', `#category/${encodeURIComponent(category)}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCategoryPage() {
  const category = activeCategory;
  const sort = $('#category-page-sort').value;
  let matches = PRODUCTS.filter(product => product.category === category);
  if (sort === 'price-low') matches.sort((a,b)=>a.price-b.price);
  if (sort === 'price-high') matches.sort((a,b)=>b.price-a.price);
  if (sort === 'name') matches.sort((a,b)=>a.name.localeCompare(b.name));
  $('#category-page-grid').innerHTML = matches.map(productCard).join('');
  $('#category-page-count').textContent = `${matches.length} ${matches.length === 1 ? 'product' : 'products'}`;
  $('#category-page-grid').hidden = matches.length === 0;
  $('#category-page-empty').hidden = matches.length > 0;
}

function closeCategoryPage() {
  document.body.classList.remove('category-page-active');
  $('#category-page').hidden = true;
  if (location.hash.startsWith('#category/')) history.pushState({}, '', '#categories');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setCategory(category) {
  if (category !== 'all') { openCategoryPage(category); return; }
  activeCategory = 'all';
  $('#category-filter').value = 'all';
  renderCatalog();
}

function clearFilters() {
  activeCategory = 'all';
  $('#category-filter').value = 'all';
  $('#brand-filter').value = 'all';
  $('#stock-filter').value = 'all';
  $('#sort-filter').value = 'featured';
  $('#price-filter').value = '500000';
  $('#catalog-search').value = '';
  $('#header-search').value = '';
  renderCatalog();
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2300);
}

function cartQuantity() {
  return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
}

function cartSubtotal() {
  return Object.entries(cart).reduce((sum, [id, quantity]) => sum + (byId.get(id)?.price || 0) * quantity, 0);
}

function renderCart() {
  const entries = Object.entries(cart).filter(([id, qty]) => byId.has(id) && qty > 0);
  const lines = $('#cart-lines');
  lines.innerHTML = entries.map(([id, quantity]) => {
    const product = byId.get(id);
    const image = product.image || CATEGORY_PHOTOS[product.category]
      ? `<img src="${product.image || CATEGORY_PHOTOS[product.category]}" alt="" loading="lazy" />`
      : categoryIcon(product.category);
    return `<article class="cart-line" data-cart-line="${id}">
      <div class="cart-line-image">${image}</div>
      <div><h3>${product.name}</h3><span class="cart-line-brand">${product.brand} · demo catalog</span>
        <div class="quantity-control" aria-label="Quantity for ${product.name}">
          <button type="button" data-action="quantity" data-id="${id}" data-delta="-1" aria-label="Decrease quantity">−</button>
          <output>${quantity}</output>
          <button type="button" data-action="quantity" data-id="${id}" data-delta="1" aria-label="Increase quantity">+</button>
        </div>
        <button class="cart-line-remove" type="button" data-action="remove" data-id="${id}">Remove</button>
      </div>
      <strong class="cart-line-price">${money(product.price * quantity)}</strong>
    </article>`;
  }).join('');
  const empty = entries.length === 0;
  $('#cart-empty').hidden = !empty;
  $('#cart-footer').hidden = empty;
  $('#cart-count').textContent = String(cartQuantity());
  $('#cart-count').setAttribute('aria-label', `${cartQuantity()} ${cartQuantity() === 1 ? 'item' : 'items'}`);
  $('#cart-total-header').textContent = money(cartSubtotal());
  $('#cart-subtotal').textContent = money(cartSubtotal());
}

function addToCart(id) {
  const product = byId.get(id);
  if (!product || !product.inStock) return;
  cart[id] = Math.min((cart[id] || 0) + 1, 99);
  saveCart();
  renderCart();
  showToast(`${product.name} added to your demo cart`);
}

function openWhatsAppOrder(lines, heading = 'Hello Landmark Computers! I would like to order:') {
  if (!lines.length) { showToast('Your cart is empty'); return; }
  const itemLines = lines.map(({ product, quantity }) => `• ${product.name} | Qty: ${quantity} | ${money(product.price * quantity)}`);
  const total = lines.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const order={id:'LC-'+Date.now(),date:new Date().toISOString(),items:lines.map(x=>({name:x.product.name,quantity:x.quantity,price:x.product.price})),total,status:'Pending'}; ORDERS.unshift(order); try{localStorage.setItem(ORDERS_KEY,JSON.stringify(ORDERS));}catch{}
  const message = [heading, '', ...itemLines, '', `Order total: ${money(total)}`, '', 'Please confirm availability and delivery/pickup details.'].join('\n');
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function orderSingleProduct(id) {
  const product = byId.get(id);
  if (!product || !product.inStock) return;
  openWhatsAppOrder([{ product, quantity: 1 }], 'Hello Landmark Computers! I would like to buy this product:');
}

function openDetails(id) {
  const product = byId.get(id);
  if (!product) return;
  const visual = product.image || CATEGORY_PHOTOS[product.category]
    ? `<img src="${product.image || CATEGORY_PHOTOS[product.category]}" alt="Illustrative ${categoryLabel(product.category).toLowerCase()} product photo" />`
    : `<span class="product-placeholder">${categoryIcon(product.category)}<small>Example listing</small></span>`;
  const detailSpecs = (product.specs && product.specs.length) ? product.specs : [['Brand', product.brand], ['Category', categoryLabel(product.category)], ['Availability', product.inStock ? 'In stock' : 'Out of stock']];
  const specs = detailSpecs.map(([label, value]) => `<li><span>${label}</span><strong>${value}</strong></li>`).join('');
  const dialog = $('#product-dialog');
  $('#product-detail-content').innerHTML = `
    <div class="detail-image">${visual}</div>
    <div class="detail-copy"><span class="section-kicker">${product.brand} · ${categoryLabel(product.category)}</span>
      <h2 id="product-dialog-title">${product.name}</h2><p class="detail-intro">${product.description}</p>
      <div class="detail-price">${money(product.price)}${product.previousPrice > product.price ? ` <del class="detail-old-price">${money(product.previousPrice)}</del>` : ''}</div>
      <p class="detail-stock ${product.inStock ? '' : 'out'}">${product.inStock ? 'In stock · sample availability' : 'Unavailable · sample availability'}</p>
      <ul class="detail-specs">${specs}</ul>
      <div class="detail-actions"><button class="add-button" type="button" data-action="add-detail" data-id="${product.id}" ${product.inStock ? '' : 'disabled'}>${product.inStock ? 'Add to cart' : 'Currently unavailable'}</button>
      <button class="whatsapp-order-button" type="button" data-action="buy-whatsapp" data-id="${product.id}" ${product.inStock ? '' : 'disabled'}>Buy via WhatsApp <span>↗</span></button></div>
    </div>`;
  dialog.showModal();
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

function syncSearch(source, destination) {
  destination.value = source.value;
  renderCatalog();
}


const BASE_CATEGORY_LABELS = Object.fromEntries(CATEGORIES.map(c=>[c.id,c.label]));
const SITE_KEY = 'landmark-site-settings-v1';
const DEFAULT_DETAIL_CARDS = [
  {title:'Visit or contact', description:'Add your shop address, phone number and opening hours.', linkText:'Your shop details', linkUrl:'#store-details'},
  {title:'Delivery & returns', description:'Add your delivery areas, shipping times and returns policy.', linkText:'Your customer policies', linkUrl:'#store-details'},
  {title:'Need a hand?', description:'Give customers a real way to reach your team when they need advice.', linkText:'Your support channel', linkUrl:'#store-details'},
  ];
const defaultSiteSettings = { heroTitle: 'All the gear for what’s next.', heroCopy: 'Build your setup with components, computers and everyday tech chosen to make sense.', heroImage: '', blue: '#3478e8', accent: '#75aaff', pageBackground: '#080d19', categories: {}, detailCards: DEFAULT_DETAIL_CARDS, sections: {benefits:false,categories:true,featured:true,build:true,catalog:true,details:true} };
let siteSettings = (() => { try { const saved=JSON.parse(localStorage.getItem(SITE_KEY)||'{}'); return {...defaultSiteSettings, ...saved, sections:{...defaultSiteSettings.sections,...(saved.sections||{})}, detailCards:Array.isArray(saved.detailCards)?saved.detailCards:DEFAULT_DETAIL_CARDS.map(x=>({...x}))}; } catch { return {...defaultSiteSettings}; } })();
function applySiteSettings() {
  const title = siteSettings.heroTitle || defaultSiteSettings.heroTitle;
  const parts = title.split(/\s+/); const split = Math.ceil(parts.length/2);
  $('#hero-title').innerHTML = `${parts.slice(0,split).join(' ')}<br><em>${parts.slice(split).join(' ')}</em>`;
  $('.hero-content > p').textContent = siteSettings.heroCopy || defaultSiteSettings.heroCopy;
  if (siteSettings.heroImage) $('.hero-art').src = siteSettings.heroImage;
  document.documentElement.style.setProperty('--site-background', siteSettings.pageBackground || '#080d19');
  document.documentElement.style.setProperty('--brand-blue', siteSettings.blue || '#3478e8');
  document.documentElement.style.setProperty('--brand-accent', siteSettings.accent || '#2563eb');
  CATEGORIES.forEach(c => { const cfg=siteSettings.categories?.[c.id]; c.label=cfg?.label || BASE_CATEGORY_LABELS[c.id]; if(cfg?.photo) CATEGORY_PHOTOS[c.id]=cfg.photo; });
  renderStoreDetailCards();
  const sectionMap={benefits:'.benefits',categories:'.category-section',featured:'.feature-shelf',build:'.build-band',catalog:'.catalog-section',details:'.store-details'};
  Object.entries(sectionMap).forEach(([key,selector])=>{const el=$(selector); if(el) el.hidden=siteSettings.sections?.[key]===false;});
  renderCategories(); renderFeatured(); renderCatalog();
}
function htmlSafe(value='') { return String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function safeCardUrl(value='') { const v=String(value||'').trim(); return /^(https?:|mailto:|tel:|#)/i.test(v)?v:'#store-details'; }
function renderStoreDetailCards() {
  const grid=$('#store-detail-grid'); if(!grid)return;
  const cards=Array.isArray(siteSettings.detailCards)?siteSettings.detailCards:DEFAULT_DETAIL_CARDS;
  grid.innerHTML=cards.filter(c=>c.kind!=='message').map((c,i)=>`<article class="store-detail-card ${c.kind==='message'?'store-message-card':''}"><span class="store-detail-number">${String(i+1).padStart(2,'0')}</span><div class="store-detail-card-copy"><h3>${htmlSafe(c.title||'New card')}</h3><p>${htmlSafe(c.description||'')}</p><a href="${c.kind==='message'?'#send-message':htmlSafe(safeCardUrl(c.linkUrl))}" ${c.kind==='message'?'data-open-message="true"':(/^https?:/i.test(String(c.linkUrl||''))?'target="_blank" rel="noopener noreferrer"':'')}>${htmlSafe(c.linkText||'Learn more')} <span aria-hidden="true">›</span></a></div></article>`).join('');
}
function renderDetailCardEditor() {
  const host=$('#site-detail-card-editor'); if(!host)return;
  host.innerHTML=(siteSettings.detailCards||[]).map((c,i)=>`<div class="site-detail-card-row" data-detail-card="${i}" data-detail-kind="${htmlSafe(c.kind||'')}"><div class="site-detail-card-row-head"><b>Card ${i+1}</b><button type="button" class="editor-reset" data-remove-detail-card="${i}">Remove</button></div><label>Card title<input data-detail-field="title" value="${htmlSafe(c.title||'')}"></label><label>Description<textarea data-detail-field="description" rows="2">${htmlSafe(c.description||'')}</textarea></label><div class="editor-two"><label>Link text<input data-detail-field="linkText" value="${htmlSafe(c.linkText||'')}"></label><label>Link URL<input data-detail-field="linkUrl" value="${htmlSafe(c.linkUrl||'')}"></label></div></div>`).join('');
}
function openSiteEditor() {
  if(!isAdmin){showToast('Admin login required');return;}
  $('#site-hero-title').value=siteSettings.heroTitle||defaultSiteSettings.heroTitle;
  $('#site-hero-copy').value=siteSettings.heroCopy||defaultSiteSettings.heroCopy;
  $('#site-hero-image').value=siteSettings.heroImage||''; $('#site-payment-url').value=siteSettings.paymentUrl||'';
  $('#site-blue').value=siteSettings.blue||'#3478e8'; $('#site-accent').value=siteSettings.accent||'#75aaff'; $('#site-background').value=siteSettings.pageBackground||'#080d19';
  renderDetailCardEditor();
  const toggles=['categories','featured','build','catalog','details'];
  toggles.forEach(k=>$('#site-show-'+k).checked=siteSettings.sections?.[k]!==false);
  $('#site-category-editor').innerHTML=CATEGORIES.map(c=>{const cfg=siteSettings.categories?.[c.id]||{};return `<div class="site-category-row"><b>${c.label}</b><label>Name<input data-cat-label="${c.id}" value="${(cfg.label||c.label).replace(/&/g,'&amp;').replace(/"/g,'&quot;')}"></label><label>Image URL<input data-cat-photo="${c.id}" type="url" value="${(cfg.photo||CATEGORY_PHOTOS[c.id]||'').replace(/"/g,'&quot;')}"></label></div>`}).join('');
  $('#site-editor-dialog').showModal();
}
function saveSiteEditor(e) {
  e.preventDefault();
  siteSettings={heroTitle:$('#site-hero-title').value.trim()||defaultSiteSettings.heroTitle,heroCopy:$('#site-hero-copy').value.trim(),heroImage:$('#site-hero-image').value.trim(),paymentUrl:$('#site-payment-url').value.trim(),blue:$('#site-blue').value,accent:$('#site-accent').value,pageBackground:$('#site-background').value,categories:{},detailCards:[],sections:{}};
  $$('[data-cat-label]').forEach(input=>{const id=input.dataset.catLabel;siteSettings.categories[id]={label:input.value.trim()||id,photo:$(`[data-cat-photo="${id}"]`).value.trim()};});
  $('#site-detail-card-editor').querySelectorAll('[data-detail-card]').forEach(row=>{const card={};row.querySelectorAll('[data-detail-field]').forEach(el=>card[el.dataset.detailField]=el.value.trim());if(row.dataset.detailKind)card.kind=row.dataset.detailKind;siteSettings.detailCards.push(card);});
  ['categories','featured','build','catalog','details'].forEach(k=>siteSettings.sections[k]=$('#site-show-'+k).checked);
  try { localStorage.setItem(SITE_KEY,JSON.stringify(siteSettings)); } catch { showToast('Could not save settings. Check browser storage.'); return; }
  applySiteSettings(); closeDialog($('#site-editor-dialog')); showToast('Website changes saved in this browser');
}

function bindEvents() {
  document.addEventListener('click',event=>{const link=event.target.closest('[data-open-message]');if(!link)return;event.preventDefault();$('#customer-message-dialog').showModal();});
  $('#customer-message-form').addEventListener('submit',event=>{event.preventDefault();const f=new FormData(event.currentTarget);const msg={name:String(f.get('name')).trim(),contact:String(f.get('contact')).trim(),subject:String(f.get('subject')).trim(),message:String(f.get('message')).trim(),date:new Date().toISOString()};CUSTOMER_MESSAGES.unshift(msg);try{localStorage.setItem(MESSAGES_KEY,JSON.stringify(CUSTOMER_MESSAGES));}catch{showToast('Could not save message in this browser.');return;}event.currentTarget.reset();closeDialog($('#customer-message-dialog'));showToast('Your message was sent to the store inbox.');});
  $('#admin-dashboard-view').addEventListener('click',event=>{const b=event.target.closest('[data-delete-message]');if(!b)return;CUSTOMER_MESSAGES.splice(Number(b.dataset.deleteMessage),1);try{localStorage.setItem(MESSAGES_KEY,JSON.stringify(CUSTOMER_MESSAGES));}catch{}showAdminView('messages');});
  $('#site-add-detail-card').addEventListener('click',()=>{siteSettings.detailCards=[...(siteSettings.detailCards||[]),{title:'New card',description:'Add a short description for your customers.',linkText:'Learn more',linkUrl:'#store-details'}];renderDetailCardEditor();});
  $('#site-detail-card-editor').addEventListener('click',event=>{const btn=event.target.closest('[data-remove-detail-card]');if(!btn)return;const i=Number(btn.dataset.removeDetailCard);siteSettings.detailCards.splice(i,1);renderDetailCardEditor();});
  $('#header-search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    syncSearch($('#header-search'), $('#catalog-search'));
    $('#catalog').scrollIntoView({ behavior: 'smooth' });
  });
  $('#header-search').addEventListener('input', () => syncSearch($('#header-search'), $('#catalog-search')));
  $('#catalog-search-form').addEventListener('submit', (event) => event.preventDefault());
  $('#catalog-search').addEventListener('input', () => syncSearch($('#catalog-search'), $('#header-search')));
  $('#category-filter').addEventListener('change', (event) => { if(event.target.value==='all'){closeCategoryPage();setCategory('all');} else openCategoryPage(event.target.value); });
  $('#category-back').addEventListener('click', closeCategoryPage);
  $('#category-page-sort').addEventListener('change', renderCategoryPage);
  window.addEventListener('popstate', () => { const match=location.hash.match(/^#category\/(.+)$/); if(match){const id=decodeURIComponent(match[1]);if(CATEGORIES.some(c=>c.id===id)){activeCategory=id;$('#category-page').hidden=false;document.body.classList.add('category-page-active');$('#category-page-title').textContent=categoryLabel(id);renderCategoryPage();}}else closeCategoryPage(); });
  ['brand-filter', 'stock-filter', 'sort-filter', 'price-filter'].forEach((id) => $(`#${id}`).addEventListener('input', renderCatalog));
  $('#clear-filters').addEventListener('click', clearFilters);
  $('#empty-reset').addEventListener('click', clearFilters);
  $('#category-grid').addEventListener('click', (event) => {
    const tile = event.target.closest('[data-category]');
    if (!tile) return;
    openCategoryPage(tile.dataset.category);
  });
  $$('[data-nav-category]').forEach((link) => link.addEventListener('click', () => {
    openCategoryPage(link.dataset.navCategory);
  }));
  document.body.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]');
    if (!action) {
      const card = event.target.closest('[data-product-card]');
      if (card) openDetails(card.dataset.productCard);
      return;
    }
    const id = action.dataset.id;
    if (action.dataset.action === 'details') openDetails(id);
    if (action.dataset.action === 'buy-whatsapp') orderSingleProduct(id);
    if (action.dataset.action === 'add') addToCart(id);
    if (action.dataset.action === 'add-detail') {
      addToCart(id);
      closeDialog($('#product-dialog'));
    }
    if (action.dataset.action === 'remove') {
      delete cart[id];
      saveCart();
      renderCart();
      showToast('Item removed from your demo cart');
    }
    if (action.dataset.action === 'quantity') {
      const next = (cart[id] || 0) + Number(action.dataset.delta);
      if (next <= 0) delete cart[id];
      else cart[id] = Math.min(next, 99);
      saveCart();
      renderCart();
    }
  });
  $('#open-cart').addEventListener('click', () => {
    renderCart();
    $('#cart-dialog').showModal();
  });
  $('#checkout-button').addEventListener('click', () => {
    const lines = Object.entries(cart).filter(([id, quantity]) => byId.has(id) && quantity > 0).map(([id, quantity]) => ({ product: byId.get(id), quantity }));
    openWhatsAppOrder(lines);
  });
  $$('[data-close-dialog]').forEach((button) => button.addEventListener('click', () => closeDialog(button.closest('dialog'))));
  ['cart-dialog', 'product-dialog', 'checkout-dialog'].forEach((id) => {
    const dialog = $(`#${id}`);
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });
  });
  $('#year').textContent = String(new Date().getFullYear());
  $('#admin-dialog').addEventListener('click', (event) => { if (event.target === $('#admin-dialog')) closeDialog($('#admin-dialog')); });
  $('#site-editor-open').addEventListener('click', openSiteEditor);
  $('#site-editor-form').addEventListener('submit', saveSiteEditor);
  $('#site-editor-reset').addEventListener('click', () => { siteSettings={...defaultSiteSettings,categories:{},sections:{...defaultSiteSettings.sections}}; try{localStorage.removeItem(SITE_KEY);}catch{} applySiteSettings(); openSiteEditor(); showToast('Website settings reset'); });
  $('#product-editor-form').addEventListener('submit', saveProductForm);
  $('#editor-image').addEventListener('change', previewEditorImage);
  $('#editor-reset').addEventListener('click', () => resetEditor());
  $('#editor-delete').addEventListener('click',()=>{const id=$('#editor-id').value;if(!id||!confirm('Delete this product?'))return;PRODUCTS=PRODUCTS.filter(p=>p.id!==id);saveProducts();renderAdminList();renderCategories();renderFeatured();renderCatalog();renderCart();resetEditor();showToast('Product deleted');});
  $('#admin-product-list').addEventListener('click', (event) => {
    const button = event.target.closest('[data-edit-product]'); if (!button) return;
    const product = byId.get(button.dataset.editProduct); if (product) fillEditor(product);
  });
}

function saveProducts() { localStorage.setItem(PRODUCT_KEY, JSON.stringify(PRODUCTS)); byId = new Map(PRODUCTS.map(p => [p.id,p])); }
function openAdmin() { if(!isAdmin){$('#admin-login-dialog').showModal();return;} renderAdminList(); resetEditor(); $('#admin-dialog').showModal(); }
function renderAdminList() { $('#admin-product-list').innerHTML = PRODUCTS.map(p => `<button type="button" class="admin-product-row" data-edit-product="${p.id}"><span>${p.image ? `<img src="${p.image}" alt=""/>` : '▣'}</span><b>${p.name}</b><strong>${money(p.price)}</strong><small>Edit</small></button>`).join(''); }
function resetEditor() { $('#editor-id').value=''; $('#editor-name').value=''; $('#editor-brand').value=''; $('#editor-category').value='processors'; $('#editor-price').value=''; $('#editor-old-price').value=''; $('#editor-stock').checked=true; $('#editor-quantity').value=1; $('#editor-featured').checked=false; $('#editor-description').value=''; $('#editor-image').value=''; $('#editor-image-data').value=''; $('#editor-image-preview').innerHTML='<span>Choose product photo</span>'; $('#editor-heading').textContent='Add a product'; $('#editor-delete').hidden=true; }
function fillEditor(p) { $('#editor-id').value=p.id; $('#editor-name').value=p.name; $('#editor-brand').value=p.brand; $('#editor-category').value=p.category; $('#editor-price').value=p.price; $('#editor-old-price').value=p.previousPrice||''; $('#editor-stock').checked=!!p.inStock; $('#editor-quantity').value=Number(p.stockQty??(p.inStock?1:0)); $('#editor-featured').checked=!!p.featured; $('#editor-description').value=p.description||''; $('#editor-image-data').value=p.image||''; $('#editor-image-preview').innerHTML=p.image?`<img src="${p.image}" alt="Preview"/>`:'<span>Choose product photo</span>'; $('#editor-heading').textContent='Edit product'; $('#editor-delete').hidden=false; }
function previewEditorImage(e) { const file=e.target.files?.[0]; if(!file)return; if(!file.type.startsWith('image/')) { showToast('Please choose an image file'); return; } const reader=new FileReader(); reader.onload=()=>{ $('#editor-image-data').value=reader.result; $('#editor-image-preview').innerHTML=`<img src="${reader.result}" alt="Preview"/>`; }; reader.readAsDataURL(file); }
function saveProductForm(e) { e.preventDefault(); const id=$('#editor-id').value || $('#editor-name').value.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'-'+Date.now().toString(36); const existing=byId.get($('#editor-id').value); const product={...(existing||{}),id,name:$('#editor-name').value.trim(),brand:$('#editor-brand').value.trim(),category:$('#editor-category').value,price:Number($('#editor-price').value),previousPrice:Number($('#editor-old-price').value)||0,inStock:$('#editor-stock').checked && Number($('#editor-quantity').value)>0,stockQty:Math.max(0,Number($('#editor-quantity').value)||0),featured:$('#editor-featured').checked,image:$('#editor-image-data').value,description:$('#editor-description').value.trim(),short:existing?.short||'Available at Landmark Computers',badge:existing?.badge||'New arrival',specs:existing?.specs||[]}; if(!product.name||!product.brand||!Number.isFinite(product.price)||product.price<=0){showToast('Enter product name, brand and valid price');return;} if(existing) PRODUCTS=PRODUCTS.map(p=>p.id===id?product:p); else PRODUCTS.unshift(product); try { saveProducts(); } catch { showToast('Image is too large. Try a smaller photo.'); return; } renderCategories(); renderAdminList(); renderFeatured(); renderCatalog(); renderCart(); fillEditor(product); showToast('Product saved successfully'); }

function updateAdminVisibility(){ $('#admin-open').hidden=!isAdmin; $('#site-editor-open').hidden=!isAdmin; $('#admin-logout').hidden=!isAdmin; }
function showAdminView(view='orders'){
 const host=$('#admin-dashboard-view');
 if(!host.dataset.statusBound){host.dataset.statusBound='yes';host.addEventListener('change',e=>{const sel=e.target.closest('[data-order-status]');if(!sel)return;const order=ORDERS.find(o=>o.id===sel.dataset.orderStatus);if(order){order.status=sel.value;localStorage.setItem(ORDERS_KEY,JSON.stringify(ORDERS));showToast('Order status updated');}});}
 if(view==='orders') host.innerHTML=`<h3>Orders (${ORDERS.length})</h3>${ORDERS.length?ORDERS.map(o=>`<article class="admin-data-row"><b>${htmlSafe(o.id)}</b><span>${new Date(o.date).toLocaleString()}</span><strong>${money(o.total)}</strong><label>Order status <select data-order-status="${htmlSafe(o.id)}"><option ${o.status==='Pending'?'selected':''}>Pending</option><option ${o.status==='Confirmed'?'selected':''}>Confirmed</option><option ${o.status==='Processing'?'selected':''}>Processing</option><option ${o.status==='Completed'?'selected':''}>Completed</option><option ${o.status==='Cancelled'?'selected':''}>Cancelled</option></select></label><p>${o.items.map(i=>`${htmlSafe(i.name)} × ${i.quantity}`).join(' · ')}</p></article>`).join(''):'<p>No orders saved in this browser yet.</p>'}`;
 if(view==='stock') host.innerHTML=`<h3>Stock overview</h3><div class="admin-stock-list">${PRODUCTS.map(p=>`<div class="admin-data-row"><b>${htmlSafe(p.name)}</b><span>${htmlSafe(p.brand)} · ${categoryLabel(p.category)}</span><strong>${Number(p.stockQty??(p.inStock?1:0))} units</strong><small>${p.inStock?'Available':'Out of stock'}</small></div>`).join('')}</div>`;
 if(view==='messages') host.innerHTML=`<h3>Customer messages (${CUSTOMER_MESSAGES.length})</h3>${CUSTOMER_MESSAGES.length?CUSTOMER_MESSAGES.map((m,i)=>`<article class="admin-data-row"><b>${htmlSafe(m.subject)}</b><span>${htmlSafe(m.name)} · ${htmlSafe(m.contact)}</span><p>${htmlSafe(m.message)}</p><small>${new Date(m.date).toLocaleString()}</small><button type="button" class="button button-light" data-delete-message="${i}">Delete message</button></article>`).join(''):'<p>No customer messages received yet.</p>'}`;
 if(view==='repairs') host.innerHTML=`<h3>Repair requests (${REPAIR_REQUESTS.length})</h3>${REPAIR_REQUESTS.length?REPAIR_REQUESTS.map(r=>`<article class="admin-data-row"><b>${htmlSafe(r.name)} · ${htmlSafe(r.service)}</b><span>${htmlSafe(r.phone)} · ${htmlSafe(r.device)}</span><p>${htmlSafe(r.message)}</p><small>${new Date(r.date).toLocaleString()}</small></article>`).join(''):'<p>No repair requests saved in this browser yet.</p>'}`;
}
function bindNewAdminFeatures(){
 updateAdminVisibility();
 // Private admin entry: Alt + Shift + L. No logo tapping or visible customer-facing admin link.
 window.addEventListener('keydown',e=>{if(e.altKey&&e.shiftKey&&!e.ctrlKey&&e.key.toLowerCase()==='l'){e.preventDefault();if(isAdmin){showAdminView('orders');$('#admin-dashboard-dialog').showModal();}else $('#admin-login-dialog').showModal();}},true);
 $('#admin-login-form').addEventListener('submit',e=>{e.preventDefault();const u=$('#admin-username').value.trim(),pw=$('#admin-password').value;if(u==='admin'&&pw==='Landmark@2026'){isAdmin=true;sessionStorage.setItem('landmark-admin-session','yes');$('#admin-login-error').textContent='';closeDialog($('#admin-login-dialog'));updateAdminVisibility();showAdminView('orders');$('#admin-dashboard-dialog').showModal();showToast('Admin signed in');}else $('#admin-login-error').textContent='Incorrect username or password.';});
 $('#admin-logout').addEventListener('click',()=>{isAdmin=false;sessionStorage.removeItem('landmark-admin-session');updateAdminVisibility();showToast('Logged out');});
 $('#admin-open').addEventListener('click',()=>{if(!isAdmin)return;showAdminView('orders');$('#admin-dashboard-dialog').showModal();});
 $$('[data-admin-view]').forEach(b=>b.addEventListener('click',()=>showAdminView(b.dataset.adminView)));
 $('#dashboard-manage-products').addEventListener('click',()=>{closeDialog($('#admin-dashboard-dialog'));openAdmin();});
 $('#dashboard-edit-site').addEventListener('click',()=>{closeDialog($('#admin-dashboard-dialog'));openSiteEditor();});
 $('#online-payment-button').addEventListener('click',()=>{const url=siteSettings.paymentUrl;if(url&&/^https:\/\//i.test(url))window.open(url,'_blank','noopener,noreferrer');else showToast('Admin: add your secure payment provider checkout URL in Edit website first.');});
 $('#repair-request-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget),r={name:f.get('name'),phone:f.get('phone'),service:f.get('service'),device:f.get('device'),message:f.get('message'),date:new Date().toISOString()};REPAIR_REQUESTS.unshift(r);try{localStorage.setItem(REPAIRS_KEY,JSON.stringify(REPAIR_REQUESTS));}catch{}const msg=`Hello Landmark Computers, I need a repair/service.\nName: ${r.name}\nPhone: ${r.phone}\nService: ${r.service}\nDevice: ${r.device}\nIssue: ${r.message}`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,'_blank','noopener,noreferrer');e.currentTarget.reset();showToast('Repair request prepared for WhatsApp');});
}

applySiteSettings();
renderCategories();
renderFeatured();
renderCatalog();
renderCart();
const initialCategory=location.hash.match(/^#category\/(.+)$/); if(initialCategory){const id=decodeURIComponent(initialCategory[1]);if(CATEGORIES.some(c=>c.id===id)){activeCategory=id;$('#category-page').hidden=false;document.body.classList.add('category-page-active');$('#category-page-title').textContent=categoryLabel(id);renderCategoryPage();}}
bindEvents();
bindNewAdminFeatures();

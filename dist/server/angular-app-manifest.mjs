
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/products"
  },
  {
    "renderMode": 2,
    "route": "/products/mango"
  },
  {
    "renderMode": 2,
    "route": "/products/orange"
  },
  {
    "renderMode": 2,
    "route": "/products/guava"
  },
  {
    "renderMode": 2,
    "route": "/products/onion"
  },
  {
    "renderMode": 2,
    "route": "/products/potato"
  },
  {
    "renderMode": 2,
    "route": "/products/corn"
  },
  {
    "renderMode": 2,
    "route": "/products/bedroom"
  },
  {
    "renderMode": 2,
    "route": "/products/mutton"
  },
  {
    "renderMode": 2,
    "route": "/products/beef"
  },
  {
    "renderMode": 2,
    "route": "/products/kitchen"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6007, hash: '7e11d7a50615d8120b1b1462fdf014fba9bad817bed283ad9456c170527c1f96', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1167, hash: '8d655892dd9d29f2a50272b59239a79ef32707b7a862acc19b0b1743baa36904', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 41567, hash: '0b673387d0be1ae6360d8b2fbc871e65b2fcb3f48fdce1e2649482472bb53f1f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 45556, hash: '3c886c9122c947462a73a991f9539eae645ef92c90d0374bb7a07afd55f2561a', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 35067, hash: 'c8a7400b70f03be4d991123978b67a2bb5de5fb44228b66c39ad805289dcbd90', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'index.html': {size: 53310, hash: '66abb82b418bef0373a168fb6834dfb02bba736a238d8f9bfb78b3e46cd873e3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'products/mango/index.html': {size: 33601, hash: 'bc24a2a1a6ac35b0327a852d784c50de629c465b971479d7a156902e8e030a2d', text: () => import('./assets-chunks/products_mango_index_html.mjs').then(m => m.default)},
    'products/orange/index.html': {size: 32362, hash: '65e448930a6ab68bbefdffb2e3296fc886959af1a481002fc0f75961d1721bf4', text: () => import('./assets-chunks/products_orange_index_html.mjs').then(m => m.default)},
    'products/guava/index.html': {size: 32284, hash: 'a62042eca8bcca431a4e14d7803c5238f25daed68c3021bb9b24458454c42cbb', text: () => import('./assets-chunks/products_guava_index_html.mjs').then(m => m.default)},
    'products/onion/index.html': {size: 32303, hash: 'b22e58382dea324c41589e0fd2f257d25d06253533fec8c839a5e8bc6feecbb7', text: () => import('./assets-chunks/products_onion_index_html.mjs').then(m => m.default)},
    'products/potato/index.html': {size: 32223, hash: '446d188b79b13dc1a6d8c5d901e945510cbb7b4c72a1ea7afefa8c9809a34ba5', text: () => import('./assets-chunks/products_potato_index_html.mjs').then(m => m.default)},
    'products/corn/index.html': {size: 32142, hash: '2d2a9d509d3261b12936fa123269d3a9e594859b750caae1cf1dff84bf4cc98b', text: () => import('./assets-chunks/products_corn_index_html.mjs').then(m => m.default)},
    'products/bedroom/index.html': {size: 32501, hash: '9da34a4378a8bc3f26425245ae5d982412cdf28f1b21c37e382278ae80d0a4c6', text: () => import('./assets-chunks/products_bedroom_index_html.mjs').then(m => m.default)},
    'products/mutton/index.html': {size: 31407, hash: '9298a3cfd0cbfcb5e9ad9114766f1ff3c8cfa77bc9a3b4dc0af58caa2f433ca3', text: () => import('./assets-chunks/products_mutton_index_html.mjs').then(m => m.default)},
    'products/beef/index.html': {size: 31469, hash: 'e533d4d758ed8e7f16d529a3f3564cbe583da263065c3d7bc41f22b0d165fe79', text: () => import('./assets-chunks/products_beef_index_html.mjs').then(m => m.default)},
    'products/kitchen/index.html': {size: 32630, hash: 'c40f6c3489659f17b9b383d1b53c40887d859a9119f57b23fa20908f650e5af5', text: () => import('./assets-chunks/products_kitchen_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 34467, hash: '494424fa820bf5c986210afec01392df2327847c581ef4c086a79b76e9c1572a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-KJK4HNLH.css': {size: 388971, hash: 'uRvPxysbq1Q', text: () => import('./assets-chunks/styles-KJK4HNLH_css.mjs').then(m => m.default)}
  },
};

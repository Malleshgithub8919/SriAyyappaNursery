import './style.css'
import { imageAssets } from './image-assets.js'
import {
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  googleMapsPlaceUrl,
  nurseryLocation,
} from './nursery-location.js'

const photos = {
  nurseryLily: '/nursery-flower-lily.png',
  nurseryBougainvilleaPink: '/nursery-bougainvillea-pink.png',
  nurseryBougainvilleaMix: '/nursery-bougainvillea-mix.png',
  nurseryBougainvilleaOrange: '/nursery-bougainvillea-orange.png',
  nurseryHibiscusYellow: '/nursery-hibiscus-yellow.png',
  nurseryHibiscusPink: '/nursery-hibiscus-pink.png',
  nurseryRoses: '/nursery-rose-plants.png',
  nurseryOrangeTree: '/nursery-orange-tree.png',
  nurseryGardeningGreenery: '/nursery-gardening-greenery.png',
  nurseryGardeningRoses: '/nursery-gardening-roses.png',
  garden: '/gallery-garden-courtyard.png',
  galleryAreca: '/gallery-areca-palms.png',
  galleryRoseNursery: '/gallery-rose-nursery.png',
  galleryRosePlants: '/gallery-rose-plants.png',
  galleryRoseGarden: '/gallery-rose-garden.png',
  galleryBougainvilleaColors: '/gallery-bougainvillea-colors.png',
  galleryBougainvilleaPink: '/gallery-bougainvillea-pink.png',
  galleryHibiscus: '/gallery-hibiscus.png',
  galleryArecaRow: '/gallery-areca-palms-row.png',
  galleryLandscapeStreet: '/gallery-landscape-street.png',
  galleryGardenCourtyard: '/gallery-garden-courtyard.png',
  galleryLandscapeRoad: '/gallery-landscape-road.png',
  galleryNewAreca: '/gallery-new-areca-nursery.png',
  galleryNewShrubs: '/gallery-new-shrub-nursery.png',
  galleryNewCoffee: '/gallery-new-coffee-plants.png',
  galleryNewPalms: '/gallery-new-palm-pots.png',
  galleryNewApartment: '/gallery-new-apartment-landscape.png',
  galleryNewVine: '/gallery-new-vine-courtyard.png',
  galleryNewParking: '/gallery-new-parking-landscape.png',
  galleryNewRoad: '/gallery-new-road-landscape.png',
  galleryNewBoundary: '/gallery-new-boundary-garden.png',
  galleryNurseryTeam: '/gallery-nursery-team.png',
  galleryMangoTree: '/gallery-fruit-mango-tree.png',
  galleryPurpleMango: '/gallery-fruit-purple-mango.png',
  galleryOranges: '/gallery-fruit-orange.png',
  galleryJackfruit: '/gallery-fruit-jackfruit.png',
  galleryAvocado: '/gallery-fruit-avocado.png',
  galleryGuavaCloseup: '/gallery-fruit-guava-closeup.png',
  galleryGuavaTree: '/gallery-fruit-guava-tree.png',
}

const galleryPhotos = [
  ['Mango tree with ripe fruit', photos.galleryMangoTree, 'Fruit Plants', 'contain'],
  ['Mangoes growing on a tree', photos.galleryPurpleMango, 'Fruit Plants', 'contain'],
  ['Oranges growing on a tree', photos.galleryOranges, 'Fruit Plants', 'contain'],
  ['Jackfruit growing on a tree', photos.galleryJackfruit, 'Fruit Plants', 'contain'],
  ['Avocados growing on a tree', photos.galleryAvocado, 'Fruit Plants', 'contain'],
  ['Guava growing on a tree', photos.galleryGuavaCloseup, 'Fruit Plants', 'contain'],
  ['Guava tree bearing fruit', photos.galleryGuavaTree, 'Fruit Plants', 'contain'],
  ['A member of our nursery team with plants', photos.galleryNurseryTeam, 'Outdoor Plants', 'contain'],
  ['Areca palms growing at the nursery', photos.galleryNewAreca, 'Outdoor Plants'],
  ['Rows of healthy nursery shrubs', photos.galleryNewShrubs, 'Outdoor Plants'],
  ['Coffee plants ready for planting', photos.galleryNewCoffee, 'Outdoor Plants'],
  ['Palm plants in nursery pots', photos.galleryNewPalms, 'Outdoor Plants'],
  ['Green landscaping near apartments', photos.galleryNewApartment, 'Landscaping'],
  ['Vine-covered courtyard garden', photos.galleryNewVine, 'Garden Designs'],
  ['Landscaped parking garden', photos.galleryNewParking, 'Lawn Designs'],
  ['Roadside commercial landscaping', photos.galleryNewRoad, 'Landscaping'],
  ['Decorative boundary garden', photos.galleryNewBoundary, 'Landscaping'],
  ['Areca palms at the nursery', photos.galleryAreca, 'Outdoor Plants'],
  ['Rose plants in bloom', photos.galleryRoseNursery, 'Flowering Plants'],
  ['Roses ready for the garden', photos.galleryRosePlants, 'Flowering Plants'],
  ['A nursery of rose blooms', photos.galleryRoseGarden, 'Flowering Plants'],
  ['Colourful bougainvillea', photos.galleryBougainvilleaColors, 'Flowering Plants'],
  ['Pink bougainvillea at the nursery', photos.galleryBougainvilleaPink, 'Flowering Plants'],
  ['Hibiscus in bloom', photos.galleryHibiscus, 'Flowering Plants'],
  ['Rows of areca palms', photos.galleryArecaRow, 'Outdoor Plants'],
  ['Landscaped residential street', photos.galleryLandscapeStreet, 'Landscaping'],
  ['Green courtyard landscaping', photos.galleryGardenCourtyard, 'Garden Designs'],
  ['Garden along the road', photos.galleryLandscapeRoad, 'Landscaping'],
  ['Potted bromeliad', '/nursery-plant-01.png', 'Indoor Plants'],
  ['Orange tree with fruit', photos.nurseryOrangeTree, 'Fruit Plants'],
]
const seenGalleryAssets = new Set()
const uniqueGalleryPhotos = galleryPhotos.filter(([, src]) => {
  const assetSrc = imageAssets[src]?.src || src
  if (seenGalleryAssets.has(assetSrc)) return false
  seenGalleryAssets.add(assetSrc)
  return true
})

const navItems = [
  ['Home', 'home'], ['About Us', 'about'], ['Our Plants', 'plants'], ['Gardening', 'gardening'],
  ['Landscaping Services', 'landscaping'], ['Gallery', 'gallery'], ['FAQs', 'faqs'],
  ['Blog', 'blog'], ['Contact Us', 'contact'],
]
const collectionPlants = [
  ['Bromeliad', 'Decorative Plants', 'A colourful potted plant from the nursery.', '/nursery-plant-01.png'],
  ['Flowering Plants', 'Flowering Plants', 'A colourful display of nursery-grown blooms.', '/nursery-plant-02.png'],
  ['Pink Hibiscus', 'Flowering Plants', 'A bright pink hibiscus in bloom.', '/nursery-plant-03.png'],
  ['Chrysanthemums', 'Flowering Plants', 'Pink chrysanthemums growing in nursery pots.', '/nursery-plant-04.png'],
  ['Rose Plants', 'Flowering Plants', 'Orange and soft pink roses among green foliage.', '/nursery-plant-05.png'],
  ['Mango Plant', 'Fruit Plants', 'A young fruit tree growing at the nursery.', '/nursery-plant-06.png'],
  ['Rose Plants', 'Flowering Plants', 'A close look at pale roses in bloom.', '/nursery-plant-07.png'],
  ['Bonsai Plant', 'Ornamental Plants', 'A shaped ornamental plant in a display pot.', '/nursery-plant-08.png'],
  ['Marigolds', 'Flowering Plants', 'Yellow and orange marigolds in bloom.', '/nursery-plant-09.png'],
  ['Bonsai Tree', 'Ornamental Plants', 'A clipped ornamental tree in a nursery pot.', '/nursery-plant-10.png'],
  ['Nursery Flowers', 'Flowering Plants', 'White blooms growing among the nursery plants.', '/nursery-plant-11.png'],
  ['Fruit Plant', 'Fruit Plants', 'A fruiting plant growing in the nursery.', '/nursery-plant-12.png'],
  ['Fruiting Shrub', 'Trees & Shrubs', 'A fruiting shrub with glossy green leaves.', '/nursery-plant-13.png'],
  ['Flowering Plant', 'Flowering Plants', 'A cluster of red blooms with fresh green foliage.', '/nursery-plant-14.png'],
  ['Cactus', 'Decorative Plants', 'A potted cactus for a sunny spot.', '/nursery-plant-15.png'],
  ['White Bougainvillea', 'Trees & Shrubs', 'A flowering bougainvillea covered in white bracts.', '/nursery-plant-16.png'],
  ['Chrysanthemums', 'Flowering Plants', 'A colourful mix of chrysanthemums in bloom.', '/nursery-plant-17.png'],
  ['Potted Citrus Tree', 'Fruit Plants', 'A potted citrus tree with ripe fruit.', '/nursery-plant-18.png'],
]

const categories = ['Indoor Plants', 'Outdoor Plants', 'Flowering Plants', 'Fruit Plants', 'Ornamental Plants', 'Avenue Plants', 'Medicinal Plants', 'Decorative Plants', 'Garden Plants', 'Trees & Shrubs']
const plantCards = [
  ['Pink Flowering Plant', 'A lovely bloom growing at our nursery.', photos.nurseryLily, 'Flowering plants'],
  ['Pink Bougainvillea', 'A graceful flowering shrub for outdoor spaces.', photos.nurseryBougainvilleaPink, 'Flowering plants'],
  ['Colourful Bougainvillea', 'A vibrant display of bougainvillea blooms.', photos.nurseryBougainvilleaMix, 'Flowering plants'],
  ['Orange Bougainvillea', 'Bright orange blooms bring colour to the garden.', photos.nurseryBougainvilleaOrange, 'Flowering plants'],
  ['Yellow Hibiscus', 'A sunny hibiscus flower among fresh green leaves.', photos.nurseryHibiscusYellow, 'Flowering plants'],
  ['Pink Hibiscus', 'A vivid pink hibiscus grown at the nursery.', photos.nurseryHibiscusPink, 'Flowering plants'],
  ['Rose Plants', 'A nursery view of rose plants in bloom.', photos.nurseryRoses, 'Flowering plants'],
  ['Orange Tree', 'A citrus tree to consider for a fruit garden.', photos.nurseryOrangeTree, 'Fruit plants'],
]

const services = [
  ['Home Gardening', 'Thoughtful planting and practical ideas to help your home feel greener.', '⌂', 'gardening'],
  ['Terrace Gardening', 'Make the most of your rooftop with a garden planned around your space.', '▤', 'gardening'],
  ['Garden Maintenance', 'Ongoing care to keep your outdoor spaces neat, healthy and inviting.', '✿', 'gardening'],
  ['Landscape Garden Design', 'A considered garden layout that works with your site and your vision.', '⌘', 'landscaping'],
]

const faqs = [
  ['General Questions', 'What is Sri Ayyappa Nursery?', 'Sri Ayyappa Nursery is a plant nursery offering different varieties of plants, gardening solutions and landscaping services.'],
  ['General Questions', 'Where is Sri Ayyappa Nursery located?', `We are located at ${nurseryLocation.address}.`],
  ['Plant Related Questions', 'What types of plants do you offer?', 'We offer indoor plants, outdoor plants, flowering plants, fruit plants, ornamental plants, avenue plants, medicinal plants and decorative plants.'],
  ['Plant Related Questions', 'How do I choose the right plants for my garden?', 'Plant selection depends on sunlight, available space, soil type, water requirements and your gardening preferences. Contact us for guidance.'],
  ['Plant Related Questions', 'Do you have indoor and outdoor plants?', 'Yes, we offer different varieties of indoor and outdoor plants. Contact us to enquire about current availability.'],
  ['Gardening Questions', 'Do you provide gardening services?', 'Yes, we provide gardening-related solutions and guidance for creating and maintaining beautiful green spaces.'],
  ['Gardening Questions', 'How can I maintain a healthy garden?', 'Provide suitable sunlight, proper watering, healthy soil, regular pruning and timely plant care.'],
  ['Gardening Questions', 'Do you provide terrace and kitchen gardening guidance?', 'We can help with plant selection and gardening guidance for terrace and kitchen gardens.'],
  ['Landscaping Questions', 'What landscaping services do you offer?', 'Our landscaping services include garden design, residential landscaping, commercial landscaping, lawn development, lawn maintenance and outdoor garden design.'],
  ['Landscaping Questions', 'Do you offer lawn cutting services?', 'Yes, lawn cutting and lawn maintenance are among our listed services.'],
  ['Landscaping Questions', 'How can I get a quote for landscaping?', 'Contact us through phone or WhatsApp and share your garden requirements. We can discuss your project and quotation.'],
  ['Orders & Contact', 'Do you deliver plants?', 'Please contact us to confirm delivery availability for your location.'],
  ['Orders & Contact', 'How can I contact Sri Ayyappa Nursery?', 'Call us or send a WhatsApp enquiry: Phone: 94405 36988; WhatsApp: 99498 65744 or 89198 62807.'],
]

const posts = [
  { slug: 'home-garden', title: 'A simple start to your home garden', category: 'Gardening Tips', time: '4 min read', image: '/blog-nursery-shrub-field.png', excerpt: 'Start small, get to know your space and let your garden grow at its own pace.', description: 'Learn how to start a home garden by observing your space, choosing a few plants and building a simple care routine.' },
  { slug: 'flowering-garden', title: 'Colourful flowering plants for the garden', category: 'Outdoor Gardening', time: '5 min read', image: '/blog-nursery-hibiscus-field.png', excerpt: 'Explore how flowering plants can bring lasting colour to outdoor spaces.', description: 'Explore flowering plants and simple ways to bring colour to outdoor garden spaces.' },
  { slug: 'yellow-hibiscus', title: 'A closer look at yellow hibiscus', category: 'Plant Care Guides', time: '4 min read', image: '/blog-nursery-yellow-hibiscus.png', excerpt: 'Notice the leaf shape, blooms and growing conditions of this bright nursery flower.', description: 'A short plant care guide to observing yellow hibiscus blooms, leaves and growing conditions.' },
  { slug: 'pink-hibiscus', title: 'Growing pink hibiscus with care', category: 'Indoor Gardening', time: '5 min read', image: '/blog-nursery-pink-hibiscus.png', excerpt: 'A few simple observations can help you care for flowering plants at home.', description: 'Get practical ideas for caring for pink hibiscus and other flowering plants at home.' },
  { slug: 'seasonal-garden', title: 'Give your garden a little seasonal reset', category: 'Seasonal Plant Guides', time: '6 min read', image: '/blog-nursery-palm-banner.png', excerpt: 'A gentle checklist for refreshing beds, containers and the little details in between.', description: 'Refresh your garden for the season with a simple check of garden beds, containers and plant care.' },
]

const icon = (name, size = 18) => {
  if (name === 'whatsapp') {
    const asset = imageAssets['/whatsapp-logo-light.png']
    return `<img class="whatsapp-icon" src="${asset?.src || '/whatsapp-logo-light.png'}" width="${size}" height="${size}" style="width:${size}px;height:${size}px" alt="" aria-hidden="true">`
  }
  const paths = {
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.7L7.1 10a16 16 0 0 0 6 6l1.8-1.9a2 2 0 0 1 1.7-.6l2.8.5a2 2 0 0 1 1.7 2Z"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    leaf: '<path d="M20 4c-9 0-15 4-15 11a5 5 0 0 0 5 5c7 0 11-6 10-16Z"/><path d="M4 21c3-6 7-9 13-13"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.leaf}</svg>`
}

const link = (to, text, cls = '') => `<a class="${cls}" href="#/${to}">${text}</a>`
function imageAttributes(src, sizes = '(max-width: 700px) 100vw, (max-width: 980px) 50vw, 25vw', fetchPriority = 'auto') {
  const asset = imageAssets[src]
  const source = asset?.src || src
  const responsive = asset
    ? ` srcset="${asset.srcSet}" sizes="${sizes}" width="${asset.width}" height="${asset.height}"`
    : ''
  const priority = fetchPriority === 'auto' ? '' : ` fetchpriority="${fetchPriority}"`
  return `src="${source}"${responsive}${priority}`
}

const image = (src, alt, cls = '', loading = 'lazy', sizes, fetchPriority = 'auto', style = '') => {
  const classes = ['image-loading', cls].filter(Boolean).join(' ')
  return `<img class="${classes}" ${imageAttributes(src, sizes, fetchPriority)} alt="${alt}" loading="${loading}" decoding="async"${style ? ` style="${style}"` : ''}>`
}

const categoryId = (label) => label.trim().toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const whatsappUrl = (number, message = 'Hello, I would like to enquire about Sri Ayyappa Nursery.') => `https://wa.me/91${number}?text=${encodeURIComponent(message)}`

function header(active) {
  return `
    <header class="site-header"><div class="wrap header-inner">
      <a class="brand" href="#/home" aria-label="Sri Ayyappa Nursery home">${image('/sri-ayyappa-logo-main.png', '', 'brand-logo', 'eager', '160px')}</a>
      <button class="menu-toggle" aria-label="Open navigation" aria-controls="site-navigation" aria-expanded="false">${icon('menu', 23)}</button>
      <nav class="main-nav" id="site-navigation" aria-label="Main navigation">${navItems.map(([label, key]) => `<a class="${active === key ? 'active' : ''}" ${active === key ? 'aria-current="page"' : ''} href="#/${key}">${label}</a>`).join('')}</nav>
    </div></header>`
}

function footer() {
  return `<footer class="footer"><div class="wrap footer-main">
    <div class="footer-about"><a class="brand brand-light" href="#/home">${image('/sri-ayyappa-logo-main.png', 'Sri Ayyappa Nursery — Where Green Dreams Grow', 'brand-logo footer-logo')}</a><p>A place for plants, fresh ideas and greener spaces. Visit us at Vemagiri and let’s grow something beautiful.</p><a class="footer-wa" href="${whatsappUrl('9949865744')}" target="_blank" rel="noreferrer">${icon('whatsapp', 18)} Chat with us ${icon('arrow', 15)}</a></div>
    <div class="footer-col"><h3>Explore</h3>${navItems.slice(0, 5).map(([label, key]) => link(key, label)).join('')}</div>
    <div class="footer-col"><h3>More to discover</h3>${navItems.slice(5).map(([label, key]) => link(key, label)).join('')}</div>
    <div class="footer-col footer-contact"><h3>Come say hello</h3><a href="tel:+919440536988">${icon('phone', 16)} 94405 36988</a><a href="${whatsappUrl('9949865744')}" target="_blank" rel="noreferrer">${icon('whatsapp', 16)} WhatsApp 99498 65744</a><a href="${whatsappUrl('8919862807')}" target="_blank" rel="noreferrer">${icon('whatsapp', 16)} WhatsApp 89198 62807</a><a href="mailto:nagasrinivikadapam@gmail.com">nagasrinivikadapam@gmail.com</a><span>${icon('pin', 16)} ${nurseryLocation.address}</span></div>
  </div><div class="footer-bottom"><div class="wrap"><span>© ${new Date().getFullYear()} Sri Ayyappa Nursery. All rights reserved.</span><span>Made for greener days <i>✳</i></span></div></div></footer>`
}

function eyebrow(text) { return `<span class="eyebrow"><span></span>${text}</span>` }
function sectionHeading(kicker, title, copy = '') {
  return `<div class="section-heading">${eyebrow(kicker)}<h2>${title}</h2>${copy ? `<p>${copy}</p>` : ''}</div>`
}

function pageBanner(kicker, title, copy, img = photos.garden, variant = '') {
  const slides = Array.isArray(img) ? img : null
  const slideMarkup = slides
    ? `<div class="page-banner-slides" aria-hidden="true">${slides.map((src, index) => image(src, '', `page-banner-slide${src.endsWith('plants-banner-poster.png') ? ' page-banner-slide-poster' : ''}`, index === 0 ? 'eager' : 'lazy', '100vw', index === 0 ? 'high' : 'low', `animation-delay:${index * 2}s`)).join('')}</div>`
    : image(img, '', 'page-banner-background', 'eager', '100vw', 'high')
  const slideClass = slides ? `page-banner-slideshow page-banner-slideshow-${slides.length}` : ''
  const slideDuration = slides ? `--slide-duration:${slides.length * 2}s;` : ''
  return `<section class="page-banner ${slideClass} ${variant}" style="${slideDuration}">${slideMarkup}<div class="wrap"><div class="banner-copy">${eyebrow(kicker)}<h1>${title}</h1><p>${copy}</p></div></div><div class="banner-leaf">${icon('leaf', 108)}</div></section>`
}

function plantGrid(cards = plantCards) {
  return `<div class="plant-grid">${cards.map(([name, desc, src, tag]) => `<article class="plant-card reveal" data-category="${categoryId(tag)}"><a class="plant-image" href="#/contact" aria-label="Enquire about ${name}">${image(src, name, '', 'lazy', '(max-width: 700px) 50vw, (max-width: 980px) 50vw, 25vw')}<span class="image-arrow">${icon('arrow', 17)}</span></a><div class="plant-card-body"><span>${tag}</span><h3>${name}</h3><p>${desc}</p><a href="#/contact" class="text-link">Enquire about plants ${icon('arrow', 14)}</a></div></article>`).join('')}</div>`
}

function serviceGrid(list = services) {
  return `<div class="service-grid">${list.map(([title, copy, symbol, page]) => `<article class="service-card reveal"><div class="service-icon">${symbol}</div><h3>${title}</h3><p>${copy}</p>${link(page, 'Discover more ' + icon('arrow', 14), 'text-link')}</article>`).join('')}</div>`
}

function mapSection() {
  return `<section class="map-section"><div class="wrap"><header class="map-section-heading"><span>${icon('pin', 15)} FIND US IN VEMAGIRI</span><h2>Find Our Nursery</h2><p>Visit us and explore our beautiful collection of plants and gardens.</p></header><div class="map-card"><div class="map-copy"><div class="map-location-details"><span class="map-address-icon">${icon('pin', 22)}</span><div><h3>${nurseryLocation.name}</h3><p>${nurseryLocation.address}</p></div></div><div class="map-actions"><button class="button button-dark" type="button" data-map-directions>${icon('arrow', 15)} Get Directions</button><a class="button button-outline-dark" href="${googleMapsPlaceUrl}" target="_blank" rel="noopener noreferrer">${icon('pin', 15)} Open in Google Maps</a></div><p class="map-directions-status" data-map-directions-status role="status" aria-live="polite" hidden></p><details class="map-manual-directions"><summary>Enter a starting location manually</summary><form data-map-manual-form><label for="map-manual-origin">Starting location</label><div class="map-manual-controls"><input id="map-manual-origin" name="origin" type="text" autocomplete="street-address" placeholder="City, address or postcode" required><button class="button button-outline-dark" type="submit">Get directions ${icon('arrow', 14)}</button></div></form></details></div><div class="map-frame"><div class="map-location-marker">${image('/sri-ayyappa-logo-main.png', nurseryLocation.name + ' logo', 'map-location-logo', 'lazy', '160px')}<span>${nurseryLocation.name}</span></div><iframe title="Google Map location of ${nurseryLocation.name}, Vemagiri" src="${googleMapsEmbedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div></div></div></section>`
}

function home() {
  return `<main>
    <section class="hero"><div class="hero-banner-slideshow" aria-label="Sri Ayyappa Nursery banner gallery">${image('/sri-ayyappa-signboard.png', 'Sri Ayyappa Nursery signboard with plants, landscaping and nursery contact details', 'hero-banner-slide', 'eager', '100vw', 'high', 'animation-delay:0s')}${image('/home-banner-terrace-garden.png', 'Green terrace garden at Sri Ayyappa Nursery', 'hero-banner-slide', 'lazy', '100vw', 'low', 'animation-delay:2s')}${image('/home-banner-palm-nursery.png', 'Palm plants at Sri Ayyappa Nursery', 'hero-banner-slide', 'lazy', '100vw', 'low', 'animation-delay:4s')}${image('/home-banner-bougainvillea.png', 'Colourful bougainvillea plants at Sri Ayyappa Nursery', 'hero-banner-slide', 'lazy', '100vw', 'low', 'animation-delay:6s')}</div><div class="hero-welcome"><div class="wrap hero-inner"><div class="hero-copy"><span class="hero-kicker"><span></span> WHERE GREEN DREAMS GROW</span><h1>Welcome<br><em>Sri Ayyappa Nursery</em></h1><p>Plants, gardening and landscaping to help you bring a little more green into your everyday.</p><div class="hero-actions">${link('plants', 'Explore our plants ' + icon('arrow', 16), 'button button-light')}${link('contact', 'Get in touch', 'button button-outline')}</div><div class="hero-location">${icon('pin', 16)} Rooted in Vemagiri, Andhra Pradesh</div></div><div class="hero-welcome-art">${image('/nursery-home-welcome.png', 'Sri Ayyappa Nursery with rows of plants and a central topiary tree', 'welcome-art-image', 'eager', '50vw', 'low')}<span class="welcome-art-note">${icon('leaf', 19)} Plants · Gardening · Landscaping</span></div></div></div></section>
    <section class="home-about"><div class="wrap">
      <div class="home-about-main"><div class="home-about-copy">${eyebrow('ABOUT SRI AYYAPPA NURSERY')}<h2>Growing Green,<br><em>Building a Greener Tomorrow</em></h2><p>Welcome to <strong>Sri Ayyappa Nursery</strong>, your trusted destination for quality plants, gardening solutions and professional landscaping services.</p><p>We believe that every plant brings life, beauty and freshness to our surroundings. Our nursery offers a wide variety of plants, including flowering plants, ornamental plants, fruit-bearing plants, indoor plants and outdoor greenery.</p><p>At Sri Ayyappa Nursery, we are passionate about helping people create beautiful gardens and greener spaces. Whether you want to decorate your home with beautiful plants, develop a garden or transform your outdoor space, we are here to help.</p><p>From selecting the right plants to providing gardening and landscaping solutions, we focus on quality, customer satisfaction and bringing nature closer to everyone.</p>${link('about', 'Learn more about us ' + icon('arrow', 15), 'text-link')}</div><div class="home-about-side"><div class="home-about-photo">${image('/sri-ayyappa-about.png', 'About Sri Ayyappa Nursery, with nursery plants, landscaping and mission and vision')}</div><div class="mission-vision"><article><span>OUR MISSION</span><p>To provide quality plants and reliable gardening and landscaping solutions while encouraging everyone to create greener and healthier surroundings.</p></article><article><span>OUR VISION</span><p>To become a trusted destination for plants, gardening and landscaping services, inspiring a greener environment for future generations.</p></article></div></div></div>
      <div class="home-about-bottom"><div class="why-choose"><h3>Why Choose Sri Ayyappa Nursery?</h3><ul>${['Wide variety of flowering and fruit plants.', 'Quality indoor and outdoor plants.', 'Professional landscaping solutions.', 'Gardening and lawn maintenance services.', 'Friendly customer support.', 'Passion for nature and greenery.'].map((item) => `<li>${icon('leaf', 16)}${item}</li>`).join('')}</ul></div><div class="promise-panel"><span>OUR PROMISE</span><h3>Every Plant Has a Purpose.<br>Every Garden Has a Story.</h3><p>Let’s grow together for a greener and more beautiful tomorrow!</p></div></div>
    </div></section>
    <section class="section categories-section"><div class="wrap">${sectionHeading('GROW SOMETHING LOVELY', 'Our Plants', 'A few flowering favourites from Sri Ayyappa Nursery. Contact us to enquire about plants and selection.')}${plantGrid(plantCards)}<div class="center-action">${link('plants', 'Explore all plants ' + icon('arrow', 15), 'button button-outline-dark')}</div></div></section>
    <section class="story-section"><div class="wrap story-grid"><div class="story-visual reveal">${image(photos.nurseryGardeningGreenery, 'Rows of green nursery plants being cared for', 'story-main')}<div class="story-small">${image(photos.nurseryGardeningRoses, 'Rows of flowering rose plants at the nursery')}</div><div class="story-badge"><span>GROW</span>${icon('leaf', 24)}<span>TOGETHER</span></div></div><div class="story-copy reveal">${eyebrow('GARDENING AT SRI AYYAPPA NURSERY')}<h2>Gardening<br><em>made greener.</em></h2><p>From caring for plants to creating a garden of your own, Sri Ayyappa Nursery is here to help you make room for more greenery.</p><p>Explore our gardening services for practical support with home gardens, terrace gardens and ongoing plant care.</p>${link('gardening', 'Explore gardening ' + icon('arrow', 15), 'text-link')}</div></div></section>
    <section class="section services-section"><div class="wrap">${sectionHeading('HOW CAN WE HELP?', 'A little help to grow a lot', 'From choosing the right plants to bringing a whole garden to life, let’s make it happen.')}${serviceGrid()}<div class="service-foot">${link('gardening', 'Explore gardening ' + icon('arrow', 15), 'text-link')}<span></span>${link('landscaping', 'Explore landscaping ' + icon('arrow', 15), 'text-link')}</div></div></section>
    <section class="reasons-section"><div class="wrap reasons-grid"><div class="reasons-copy">${eyebrow('WHY SRI AYYAPPA NURSERY')}<h2>Growing green,<br><em>the thoughtful way.</em></h2><p>Whether you need one lovely plant or a little guidance for your garden, we’re happy to help you grow at your own pace.</p>${link('contact', 'Come talk plants ' + icon('arrow', 15), 'text-link')}</div><div class="reason-list"><article><span>01</span><div><h3>A place for every plant person</h3><p>Explore a range of plants and find something that suits your space and style.</p></div>${icon('leaf', 21)}</article><article><span>02</span><div><h3>Help along the way</h3><p>Get in touch for friendly guidance on plant care, gardening and landscaping.</p></div>${icon('leaf', 21)}</article><article><span>03</span><div><h3>From nursery to garden</h3><p>Bring your ideas to us — we’re here to help with plants and outdoor spaces.</p></div>${icon('leaf', 21)}</article></div></div></section>
    <section class="gallery-preview section"><div class="wrap">${sectionHeading('A FEW GREEN MOMENTS', 'A glimpse of the good stuff', 'Step into a world of leafy corners, bright blooms and garden inspiration.')}<div class="gallery-grid home-gallery-grid">${uniqueGalleryPhotos.slice(0, 9).map(([title, src, category, fit], i) => `<a href="#/gallery" class="gallery-item gallery-${i % 3}${fit === 'contain' ? ' gallery-item-contain' : ''}" aria-label="View ${title} in the gallery">${image(src, title, fit === 'contain' ? 'image-contain' : '', 'lazy', '(max-width: 700px) 50vw, (max-width: 980px) 50vw, 25vw')}<span>${title}<small>${category}</small></span><i>${icon('arrow', 16)}</i></a>`).join('')}</div><div class="center-action">${link('gallery', 'See the gallery ' + icon('arrow', 15), 'text-link')}</div></div></section>
    ${mapSection()}
  </main>`
}

function postCard(post, i = 0) {
  const slug = post.slug || `garden-note-${i}`
  return `<article class="blog-card reveal"><a class="blog-image" href="#/blog/${slug}">${image(post.image, post.title)}<span>${post.category}</span></a><div class="blog-card-body"><div class="blog-meta"><span>${post.category}</span><span>${post.time}</span></div><h3><a href="#/blog/${slug}">${post.title}</a></h3><p>${post.excerpt}</p><a class="text-link" href="#/blog/${slug}">Read article ${icon('arrow', 14)}</a></div></article>`
}

function about() {
  return `<main class="about-page">${pageBanner('A LITTLE ABOUT US', 'Good things grow here.', 'A nursery rooted in Vemagiri, here for every plant, every garden and every green dream.', ['/sri-ayyappa-about-banner-palms.png', '/sri-ayyappa-about-banner-flowers.png'])}
    <section class="section about-story"><div class="wrap about-grid"><div class="about-image about-infographic reveal">${image('/sri-ayyappa-about-page.png', 'Sri Ayyappa Nursery About Us: nursery owner, plants, mission, vision and values')}</div><div class="about-copy reveal">${eyebrow('OUR STORY')}<h2>It starts with<br><em>a love for green.</em></h2><p>Sri Ayyappa Nursery is a place for people who love plants and the spaces they help create. From little potted greens to landscaping ideas, we bring together plants and gardening services to help you make room for more nature.</p><p>We’re based on NH-16 Road in Vemagiri, and we’d be glad to help you find your next plant or plan your next garden.</p>${link('contact', 'Come say hello ' + icon('arrow', 15), 'text-link')}</div></div></section>
    <section class="values-section"><div class="wrap">${sectionHeading('WHAT WE BELIEVE', 'A few things we grow by', 'Good gardens — and good relationships — begin with care.')}<div class="values-grid"><article class="value-card">${icon('leaf', 24)}<h3>Our mission</h3><p>Help more people bring plants and thoughtfully cared-for green spaces into their everyday lives.</p></article><article class="value-card">${icon('leaf', 24)}<h3>Our vision</h3><p>A greener community where every garden, big or small, has room to grow.</p></article><article class="value-card">${icon('leaf', 24)}<h3>Our values</h3><p>Care, trust, respect for nature and a warm welcome for every kind of plant lover.</p></article></div></div></section>
    </main>`
}

function plants() {
  const filters = ['All plants', ...categories]
  const cards = collectionPlants.map(([name, category, desc, src]) => [name, desc, src, category])
  return `<main>${pageBanner('OUR PLANTS', 'Find your kind of green.', 'A collection of leafy companions, colourful blooms and garden favourites. Tell us what caught your eye and we’ll help you from there.', ['/sri-ayyappa-plants-banner-hibiscus.png', '/sri-ayyappa-plants-banner-roses.png', '/sri-ayyappa-plants-banner-poster.png'])}
    <section class="section plants-page"><div class="wrap">${sectionHeading('A PLANT FOR EVERY CORNER', 'Browse the collection', 'Explore plant examples across our categories. Contact us to ask about current selection.')}<div class="filter-row" role="group" aria-label="Filter plants">${filters.map((f, i) => `<button class="filter-chip ${i === 0 ? 'selected' : ''}" type="button" aria-pressed="${i === 0}" data-filter="${i === 0 ? 'all' : categoryId(f)}">${f}</button>`).join('')}</div>${plantGrid(cards)}<p class="plant-empty-state" role="status" aria-live="polite" hidden>No plant examples are listed under this category yet. Contact us to ask about current selection.</p><p class="availability-note">${icon('leaf', 17)} Plant names shown for inspiration only; selection may vary. Contact us to ask about a particular plant.</p></div></section>
    <section class="plant-categories"><div class="wrap">${sectionHeading('MORE WAYS TO EXPLORE', 'Find the right family of plants', 'Have a particular plant in mind? We’d be happy to help you look.')}<div class="category-pills">${categories.map((c, i) => `<a href="#/contact" class="category-pill"><span>0${i + 1}</span>${c}${icon('arrow', 14)}</a>`).join('')}</div></div></section>
    </main>`
}

function gardening() {
  const gardenServices = [
    ['Home Gardening', 'Transform your home into a refreshing green space with beautiful plants and garden arrangements.', '⌂', 'contact'],
    ['Terrace Gardening', 'Make your rooftop beautiful with creative plant arrangements and greenery.', '▤', 'contact'],
    ['Kitchen Gardening', 'Grow fresh vegetables, herbs and useful plants at your home.', '✿', 'contact'],
    ['Garden Maintenance', 'Keep your garden clean, healthy and beautiful with regular maintenance.', '✿', 'contact'],
    ['Plant Care', 'Get guidance on watering, sunlight, pruning and plant health.', '❋', 'contact'],
  ]
  const tips = [
    ['Soil Preparation', 'Healthy soil supports healthy plant growth.'],
    ['Watering Techniques', 'Learn how to water plants correctly.'],
    ['Seasonal Gardening', 'Choose suitable plants for different seasons.'],
    ['Plant Care', 'Keep your plants fresh and healthy.'],
    ['Garden Design Ideas', 'Create beautiful outdoor spaces.'],
  ]
  const gardenPhotos = [
    ['Rows of green nursery plants', '/gardening-nursery-green-plants.png'],
    ['Pink roses growing at the nursery', '/gardening-nursery-rose-beds.png'],
    ['A nursery row of flowering roses', '/gardening-nursery-rose-row.png'],
    ['Pink hibiscus plants at the nursery', '/gardening-nursery-hibiscus.png'],
    ['Colourful bougainvillea plants', '/gardening-nursery-bougainvillea.png'],
    ['Tall plants growing at the nursery', '/gardening-nursery-tall-trees.png'],
  ]
  const reasons = ['Quality plants and greenery.', 'Gardening guidance.', 'Wide plant collection.', 'Landscaping support.', 'Customer-focused service.']
  return `<main>${pageBanner('GARDENING', 'Let’s get growing.', 'From a few pots on the terrace to a garden that brings everyone outside, find support for growing your own green space.', '/gardening-banner-poster.png', 'garden-poster-banner')}
    <section class="section gardening-intro"><div class="wrap split-intro"><div>${eyebrow('GARDENING')}<h2>Grow Green.<br><em>Live Healthy.</em></h2></div><div class="gardening-intro-copy"><p>Gardening is not just about growing plants; it’s about creating a greener, healthier and happier environment.</p><p>At <strong>Sri Ayyappa Nursery</strong>, we believe every garden has the power to bring beauty, freshness and positive energy into our lives. We help you create and maintain beautiful green spaces with quality plants and practical gardening guidance.</p></div></div></section>
    <section class="garden-services"><div class="wrap">${sectionHeading('GROW WHERE YOU ARE', 'Our Gardening Services', 'Practical support for your home, terrace and garden.')}${serviceGrid(gardenServices)}</div></section>
    <section class="tips-section"><div class="wrap">${sectionHeading('GROW WITH CONFIDENCE', 'Gardening Tips & Guides', 'A few useful ways to care for your plants and outdoor spaces.')}<div class="tips-grid">${tips.map(([t, d], i) => `<article class="tip-card reveal"><span>GARDEN GUIDE 0${i + 1}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></div></section>
    <section class="garden-photo-section"><div class="wrap">${sectionHeading('FROM OUR NURSERY', 'A little green inspiration', 'Explore plants and greenery growing at Sri Ayyappa Nursery.')}<div class="garden-photo-grid">${gardenPhotos.map(([alt, src], i) => `<figure class="garden-photo reveal garden-photo-${i + 1}">${image(src, alt)}<figcaption>${alt}</figcaption></figure>`).join('')}</div></div></section>
    <section class="garden-why"><div class="wrap">${sectionHeading('WHY SRI AYYAPPA NURSERY?', 'A helpful partner for your garden')}<ul class="garden-reasons">${reasons.map((reason) => `<li>${icon('leaf', 19)}${reason}</li>`).join('')}</ul></div></section>
    </main>`
}

function landscaping() {
  const list = [
    ['Landscape Garden Design', 'Creative garden layouts with beautiful plants, pathways and natural elements.', '/landscaping-residential-garden.png'],
    ['Residential Landscaping', 'Transform home gardens, front yards, backyards and outdoor spaces into beautiful green environments.', '/landscaping-rose-garden.png'],
    ['Commercial Landscaping', 'Professional greenery and landscape arrangements for offices, commercial buildings and business spaces.', '/landscaping-outdoor-plants.png'],
    ['Lawn Development', 'Create fresh, green and beautiful lawns for homes and commercial properties.', '/landscaping-palm-plants.png'],
    ['Lawn Maintenance', 'Keep lawns healthy, neat and attractive with regular maintenance and lawn cutting services.', '/landscaping-commercial-garden.png'],
    ['Outdoor Garden Design', 'Beautiful outdoor arrangements with flowering plants, ornamental plants, trees and decorative greenery.', '/landscaping-green-pergola.png'],
    ['Plant Installation', 'Select and arrange suitable plants to enhance your outdoor environment.', '/landscaping-road-garden.png'],
    ['Garden Renovation', 'Refresh existing gardens with improved plant arrangements and landscaping ideas.', '/landscaping-green-boundary.png'],
  ]
  const reasons = [
    'Creative landscaping ideas.',
    'Quality plants and materials.',
    'Personalized garden solutions.',
    'Professional gardening support.',
    'Lawn cutting and maintenance.',
    'Customer-focused service.',
  ]
  const processSteps = [
    ['Understand your garden requirements', 'We begin by listening to your ideas, needs and outdoor space.'],
    ['Plan the landscape design', 'We shape a practical layout around your space and preferences.'],
    ['Select suitable plants and materials', 'Choose greenery and materials that complement the design.'],
    ['Develop and arrange the garden', 'We carry out the landscaping and create the finished green space.'],
    ['Maintain your green space', 'Keep the garden and lawn healthy with ongoing care and support.'],
  ]
  return `<main>${pageBanner('LANDSCAPING SERVICES', 'Outdoor spaces, thoughtfully grown.', 'From the first sketch to the finishing plants, let’s shape an outdoor space that feels right for you.', ['/landscaping-banner.png', '/landscaping-banner-poster.png'], 'landscaping-poster-banner')}
    <section class="section landscape-intro"><div class="wrap split-intro"><div>${eyebrow('DESIGN • CREATE • MAINTAIN')}<h2>Beautiful outdoor<br><em>spaces to grow.</em></h2></div><div class="landscape-intro-copy"><p>Transform your outdoor spaces into beautiful, green and peaceful environments with Sri Ayyappa Nursery.</p><p>We provide landscaping solutions to make residential and commercial spaces more attractive with beautiful plants, lawns and creative garden designs.</p><p>From planning your dream garden to maintaining green outdoor spaces, we help bring nature closer to you.</p></div></div></section>
    <section class="landscape-services"><div class="wrap">${sectionHeading('WHAT WE CAN DO', 'Our Landscaping Services', 'Solutions for gardens, lawns and outdoor spaces.')}<div class="landscape-grid">${list.map(([t, d, src], i) => `<article class="landscape-card reveal"><div class="landscape-card-img">${image(src, t)}<span>0${i + 1}</span></div><div><h3>${t}</h3><p>${d}</p>${link('contact', 'Get a quote ' + icon('arrow', 14), 'text-link')}</div></article>`).join('')}</div></div></section>
    <section class="landscape-why"><div class="wrap">${sectionHeading('WHY CHOOSE SRI AYYAPPA NURSERY?', 'Thoughtful landscaping, from idea to care')}<ul class="landscape-reasons">${reasons.map((reason) => `<li>${icon('leaf', 19)}${reason}</li>`).join('')}</ul></div></section>
    <section class="landscape-process"><div class="wrap">${sectionHeading('OUR LANDSCAPING PROCESS', 'A clear path to a greener space')}<div class="process-steps process-steps-five">${processSteps.map(([t, d], i) => `<article><span>0${i + 1}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></div></section></main>`
}

function gallery() {
  return `<main>${pageBanner('OUR GALLERY', 'A little green inspiration.', 'Take a look around. There’s always something lovely growing.', '/sri-ayyappa-about-banner.png')}
    <section class="section gallery-section"><div class="wrap"><div class="gallery-filters" role="group" aria-label="Filter gallery">${['All', 'Indoor Plants', 'Outdoor Plants', 'Flowering Plants', 'Fruit Plants', 'Landscaping', 'Lawn Designs', 'Garden Designs'].map((f, i) => `<button class="filter-chip ${i === 0 ? 'selected' : ''}" type="button" aria-pressed="${i === 0}" data-gallery-filter="${i === 0 ? 'all' : categoryId(f)}">${f}</button>`).join('')}</div><div class="gallery-grid">${uniqueGalleryPhotos.map(([t, src, cat, fit], i) => `<button class="gallery-item gallery-${i % 3}${fit === 'contain' ? ' gallery-item-contain' : ''}" type="button" data-category="${categoryId(cat)}" data-src="${src}" data-alt="${t}" aria-label="View ${t}">${image(src, t, fit === 'contain' ? 'image-contain' : '', 'lazy', '(max-width: 700px) 50vw, (max-width: 980px) 50vw, 25vw')}<span>${t}<small>${cat}</small></span><i>${icon('arrow', 16)}</i></button>`).join('')}</div><p class="gallery-empty-state" role="status" aria-live="polite" hidden>No photos are currently listed in this category.</p></div></section>
    <div class="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image preview" aria-hidden="true" tabindex="-1"><button class="lightbox-close" type="button" aria-label="Close image">${icon('close', 24)}</button><button class="lightbox-prev" type="button" aria-label="Previous image">‹</button><img alt="" ${imageAttributes(uniqueGalleryPhotos[0][1], '90vw')} loading="lazy" decoding="async"><button class="lightbox-next" type="button" aria-label="Next image">›</button><p></p></div></main>`
}

function faqsPage() {
  const categories = [...new Set(faqs.map(([category]) => category))]
  let faqNumber = 0
  const faqGroups = categories.map((category) => `<section class="faq-category"><h2>${category}</h2>${faqs.filter(([itemCategory]) => itemCategory === category).map(([, question, answer]) => {
    faqNumber += 1
    return `<details class="faq-item" ${faqNumber === 1 ? 'open' : ''}><summary><span>${faqNumber}. ${question}</span><i>${icon('plus', 17)}</i></summary><p>${answer}</p></details>`
  }).join('')}</section>`).join('')
  return `<main>${pageBanner('FREQUENTLY ASKED QUESTIONS', 'Find Answers. Grow with Confidence.', 'Have questions about our plants, gardening or landscaping services? Find answers to some of the most common questions about Sri Ayyappa Nursery.', ['/faqs-banner-poster.png'], 'faqs-poster-banner')}
    <section class="section faq-section"><div class="wrap faq-layout"><div class="faq-aside">${eyebrow('STILL HAVE QUESTIONS?')}<h2>We are happy<br><em>to help you.</em></h2><p>Contact Sri Ayyappa Nursery for plant enquiries, gardening guidance and landscaping services.</p><a class="faq-phone" href="tel:+919440536988">${icon('phone', 18)} 94405 36988</a><a class="faq-phone" href="${whatsappUrl('9949865744')}" target="_blank" rel="noreferrer">${icon('whatsapp', 18)} 99498 65744</a></div><div class="faq-list">${faqGroups}</div></div></section></main>`
}

function blog() {
  return `<main>${pageBanner('THE GARDEN JOURNAL', 'A little inspiration to grow on.', 'Ideas, guides and gentle reminders for a greener everyday.', '/nursery-banner-blog-contact.png', 'nursery-business-poster')}
    <section class="section blog-page"><div class="wrap">${sectionHeading('NOTES FROM THE NURSERY', 'Stories for plant people', 'Browse a little inspiration for your home, garden and everything growing in between.')}<div class="blog-categories" role="group" aria-label="Filter blog stories">${['All stories', 'Gardening Tips', 'Plant Care Guides', 'Indoor Gardening', 'Outdoor Gardening', 'Seasonal Plant Guides'].map((f, i) => `<button class="filter-chip ${i === 0 ? 'selected' : ''}" type="button" aria-pressed="${i === 0}" data-blog-filter="${f}">${f}</button>`).join('')}</div><div class="blog-grid blog-list">${posts.map(postCard).join('')}</div></div></section></main>`
}

function article(slug) {
  const post = posts.find((item) => item.slug === slug)
  if (!post) return blog()
  return `<main>${pageBanner(post.category.toUpperCase(), post.title, post.excerpt, post.image)}
    <article class="article-wrap"><div class="article-meta">${post.category}<span>·</span>${post.time}</div>${image(post.image, post.title, 'article-hero')}<div class="article-copy"><p class="article-lead">${post.excerpt} A garden doesn’t need to be grand to feel special — a little attention and a good place to begin can make all the difference.</p><h2>Begin with the space you have</h2><p>Take a moment to notice your surroundings. Is your spot bright through the day, or does it get softer, filtered light? Is it an open terrace, a sunny windowsill or a corner of the garden? Starting with what you already have helps you make choices that feel natural.</p><h2>Keep it simple, and keep learning</h2><p>Choose a few plants you love and learn what they need. Check the soil before watering, make sure your pots can drain, and give new leaves a little time to settle in. Over time, you’ll get to know what works best in your home and garden.</p><p>Every garden grows at its own pace. If you’re looking for plants or a little help getting started, come by Sri Ayyappa Nursery or get in touch — we’d love to hear what you’re growing.</p>${link('contact', 'Ask us a gardening question ' + icon('arrow', 15), 'text-link')}</div><div class="related-posts"><h2>Keep growing</h2><div class="blog-grid">${posts.filter((p) => p !== post).map(postCard).join('')}</div></div></article></main>`
}

function contact() {
  return `<main>${pageBanner('CONTACT US', 'Order Plants Through WhatsApp.', 'Choose the plants you love and send your enquiry directly to Sri Ayyappa Nursery. We’ll help you with the available options.', '/nursery-banner-blog-contact.png', 'nursery-business-poster')}
    <section class="section contact-page"><div class="wrap contact-layout"><div class="contact-details">${eyebrow('COME SAY HELLO')}<h2>We’re just<br><em>around the corner.</em></h2><p>Get in touch or visit us in Vemagiri. We’re happy to talk plants, gardening and landscaping.</p>
      <a class="contact-line" href="tel:+919440536988"><span>${icon('phone', 19)}</span><div><small>GIVE US A CALL</small><b>94405 36988</b></div></a>
      <a class="contact-line whatsapp-line" href="${whatsappUrl('9949865744')}" target="_blank" rel="noreferrer"><span>${icon('whatsapp', 19)}</span><div><small>WHATSAPP</small><b>99498 65744</b></div></a>
      <a class="contact-line whatsapp-line" href="${whatsappUrl('8919862807')}" target="_blank" rel="noreferrer"><span>${icon('whatsapp', 19)}</span><div><small>WHATSAPP</small><b>89198 62807</b></div></a>
      <a class="contact-line whatsapp-line" href="${whatsappUrl('9949865744', 'Hello, I would like to order plants from Sri Ayyappa Nursery.')}" target="_blank" rel="noreferrer"><span>${icon('whatsapp', 19)}</span><div><small>ORDER PLANTS</small><b>Chat on WhatsApp</b></div></a>
      <a class="contact-line" href="mailto:nagasrinivikadapam@gmail.com"><span>✉</span><div><small>WRITE TO US</small><b>nagasrinivikadapam@gmail.com</b></div></a>
      <div class="contact-line"><span>${icon('pin', 19)}</span><div><small>FIND THE NURSERY</small><b>${nurseryLocation.address}</b></div></div>
    </div>    <div class="contact-form-wrap"><div class="form-heading"><h3>🌿 Order Your Plants</h3><p>Bring home nature with Sri Ayyappa Nursery.</p></div><form class="contact-form"><h4 class="form-section-title">Customer Details</h4><div class="form-row"><label>Full Name *<input name="name" autocomplete="name" required placeholder="Enter your full name"></label><label>Mobile Number *<input name="phone" type="tel" inputmode="numeric" autocomplete="tel" pattern="[6-9][0-9]{9}" maxlength="10" title="Enter a valid 10-digit Indian mobile number." required placeholder="10-digit mobile number"></label></div><h4 class="form-section-title">Plant Details</h4><label>Plant Category *<select name="category" required><option value="" disabled selected>Select a plant category</option><option>Indoor Plants</option><option>Outdoor Plants</option><option>Flowering Plants</option><option>Fruit Plants</option><option>Ornamental Plants</option><option>Avenue Plants</option><option>Medicinal Plants</option><option>Decorative Plants</option><option>Garden Plants</option><option>Trees and Shrubs</option></select></label><label>Plant Name *<input name="plantName" required placeholder="Enter plant name"></label><label>Required Quantity *<input name="quantity" type="number" min="1" required placeholder="Enter quantity"></label><h4 class="form-section-title">Delivery Details</h4><fieldset class="delivery-options"><legend>Delivery Preference</legend><label><input type="radio" name="delivery" value="Pickup from Nursery" checked> Pickup from Nursery</label><label><input type="radio" name="delivery" value="Home Delivery (subject to availability)"> Home Delivery (subject to availability)</label></fieldset><label>Delivery Address / Location<textarea name="address" rows="3" placeholder="Enter delivery address or location"></textarea></label><label>Additional Requirements<textarea name="requirements" rows="3" placeholder="Tell us about any additional requirements"></textarea></label><button class="button button-dark" type="submit">Submit Order Enquiry ${icon('whatsapp', 15)}</button><p class="form-hint">This opens WhatsApp with your plant order details. Review your message in WhatsApp and press Send to complete the enquiry.</p><p class="form-status" role="status" aria-live="polite"></p><a class="form-whatsapp-fallback text-link" target="_blank" rel="noreferrer" hidden>Open your order enquiry in WhatsApp ${icon('arrow', 14)}</a></form></div></div></section>
    <section class="contact-reviews"><div class="wrap review-card"><div class="review-mark">${icon('leaf', 26)}</div><div class="review-copy"><span>CUSTOMER REVIEWS</span><h2>Your experience matters.</h2><p>Have you visited Sri Ayyappa Nursery? We’d love to hear about your experience. Your feedback helps other plant lovers find us.</p></div><div class="review-actions"><a href="${googleMapsPlaceUrl}" target="_blank" rel="noopener noreferrer" class="button button-dark">Find us on Google Maps ${icon('arrow', 14)}</a><a href="${whatsappUrl('9949865744', 'Hello, I would like to share my review about Sri Ayyappa Nursery.')}" target="_blank" rel="noreferrer" class="text-link">Share feedback on WhatsApp ${icon('arrow', 14)}</a></div></div></section>
    ${mapSection()}</main>`
}

const renderers = { home, about, plants, gardening, landscaping, gallery, faqs: faqsPage, blog, contact }
const titles = {
  home: 'Sri Ayyappa Nursery | Where Green Dreams Grow',
  about: 'About Us | Sri Ayyappa Nursery',
  plants: 'Our Plants | Sri Ayyappa Nursery',
  gardening: 'Gardening | Sri Ayyappa Nursery',
  landscaping: 'Landscaping Services | Sri Ayyappa Nursery',
  gallery: 'Gallery | Sri Ayyappa Nursery',
  faqs: 'FAQs | Sri Ayyappa Nursery',
  blog: 'Garden Journal | Sri Ayyappa Nursery',
  contact: 'Contact Us | Sri Ayyappa Nursery',
}
const descriptions = {
  home: 'Discover plants, gardening and landscaping at Sri Ayyappa Nursery in Vemagiri, Andhra Pradesh.',
  about: 'Get to know Sri Ayyappa Nursery, a place for plants, gardening and green spaces in Vemagiri.',
  plants: 'Explore indoor, outdoor, flowering, fruit and garden plants at Sri Ayyappa Nursery.',
  gardening: 'Explore home gardening, terrace gardening, garden care and plant support from Sri Ayyappa Nursery.',
  landscaping: 'Discover garden design, lawn services and landscaping support from Sri Ayyappa Nursery.',
  gallery: 'Take a look at plant, garden and landscaping inspiration from Sri Ayyappa Nursery.',
  faqs: 'Answers to common questions about plants, gardening and landscaping at Sri Ayyappa Nursery.',
  blog: 'Read gardening tips, plant care guides and inspiration from Sri Ayyappa Nursery.',
  contact: 'Contact Sri Ayyappa Nursery in Vemagiri about plants, gardening and landscaping services.',
}

function render() {
  const raw = location.hash.replace(/^#\/?/, '')
  const [route, slug] = raw.split('/')
  const current = renderers[route] ? route : 'home'
  const post = current === 'blog' && slug ? posts.find((item) => item.slug === slug) : null
  const title = post ? `${post.title} | Sri Ayyappa Nursery` : titles[current]
  const description = post?.description || descriptions[current]
  const canonicalUrl = `${window.location.origin}${window.location.pathname}`
  const socialImage = `${window.location.origin}${imageAssets['/sri-ayyappa-about-banner.png']?.src || '/sri-ayyappa-about-banner.png'}`
  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:type"]')?.setAttribute('content', post ? 'article' : 'website')
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', post ? `${window.location.origin}${imageAssets[post.image]?.src || post.image}` : socialImage)
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', post ? `${window.location.origin}${imageAssets[post.image]?.src || post.image}` : socialImage)
  const schema = document.querySelector('#business-schema')
  if (schema) schema.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sri Ayyappa Nursery',
    url: canonicalUrl,
    image: socialImage,
    telephone: '+919440536988',
  })
  const page = post ? article(post.slug) : renderers[current]()
  const app = document.querySelector('#app')
  app.innerHTML = `${header(current)}${page}${footer()}<div class="floating-actions"><a class="floating-call" href="tel:+919440536988" aria-label="Call Sri Ayyappa Nursery">${icon('phone', 23)}</a><a class="floating-wa" href="${whatsappUrl('9949865744')}" target="_blank" rel="noreferrer" aria-label="Chat with Sri Ayyappa Nursery on WhatsApp">${icon('whatsapp', 30)}</a></div>`
  app.querySelector('main')?.classList.add('page-enter')
  window.scrollTo(0, 0)
  setupInteractions()
}

function setupInteractions() {
  document.querySelectorAll('img.image-loading').forEach((image) => {
    const settleImage = () => {
      image.classList.remove('image-loading')
      image.classList.add('image-loaded')
    }
    const failImage = () => {
      image.classList.remove('image-loading')
      image.classList.add('image-load-error')
      console.error('Failed to load image:', image.currentSrc || image.src)
    }
    if (image.complete) {
      if (image.naturalWidth) settleImage()
      else failImage()
    } else {
      image.addEventListener('load', settleImage, { once: true })
      image.addEventListener('error', failImage, { once: true })
    }
  })

  const menu = document.querySelector('.menu-toggle')
  const nav = document.querySelector('.main-nav')
  menu?.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true'
    menu.setAttribute('aria-expanded', String(!expanded))
    menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation')
    nav?.classList.toggle('open', !expanded)
    menu.innerHTML = icon(expanded ? 'menu' : 'close', 23)
  })
  nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    nav.classList.remove('open')
    menu?.setAttribute('aria-expanded', 'false')
    if (menu) {
      menu.setAttribute('aria-label', 'Open navigation')
      menu.innerHTML = icon('menu', 23)
    }
  }))

  const directionsButton = document.querySelector('[data-map-directions]')
  const directionsStatus = document.querySelector('[data-map-directions-status]')
  const manualDirections = document.querySelector('.map-manual-directions')
  const manualDirectionsForm = document.querySelector('[data-map-manual-form]')
  const showDirectionsStatus = (message, state = 'info') => {
    if (!directionsStatus) return
    directionsStatus.textContent = message
    directionsStatus.dataset.state = state
    directionsStatus.hidden = !message
  }

  directionsButton?.addEventListener('click', () => {
    if (!navigator.geolocation) {
      showDirectionsStatus('Location is not available in this browser. Enter a starting location below.', 'error')
      if (manualDirections) manualDirections.open = true
      return
    }

    const originalLabel = directionsButton.innerHTML
    directionsButton.disabled = true
    directionsButton.setAttribute('aria-busy', 'true')
    directionsButton.textContent = 'Finding your location…'
    showDirectionsStatus('Finding your current location. Please allow location access when prompted.')

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        window.location.assign(googleMapsDirectionsUrl(coords))
      },
      (error) => {
        const messages = {
          1: 'Location permission was denied. Allow location access in your browser or enter a starting location below.',
          2: 'Your location could not be determined. Try again or enter a starting location below.',
          3: 'Finding your location timed out. Try again or enter a starting location below.',
        }
        directionsButton.disabled = false
        directionsButton.removeAttribute('aria-busy')
        directionsButton.innerHTML = originalLabel
        showDirectionsStatus(messages[error.code] || 'We could not find your location. Enter a starting location below.', 'error')
        if (manualDirections) manualDirections.open = true
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 },
    )
  })

  manualDirectionsForm?.addEventListener('submit', (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const origin = new FormData(form).get('origin').toString().trim()
    if (!origin) return
    window.location.assign(googleMapsDirectionsUrl(origin))
  })

  const revealTargets = document.querySelectorAll([
    '.reveal',
    '.section-heading',
    '.home-about-copy',
    '.home-about-side',
    '.why-choose',
    '.promise-panel',
    '.value-card',
    '.filter-row',
    '.category-pill',
    '.gardening-intro .split-intro > div',
    '.garden-reasons li',
    '.landscape-reasons li',
    '.process-steps article',
    '.gallery-filters',
    '.gallery-item',
    '.faq-aside',
    '.faq-category',
    '.faq-item',
    '.article-meta',
    '.article-hero',
    '.article-copy',
    '.related-posts',
    '.contact-details',
    '.contact-form-wrap',
    '.review-card',
    '.map-copy',
    '.map-frame',
    '.footer-main > *',
  ].join(','))
  const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 }) : null
  const revealSiblings = new Map()
  revealTargets.forEach((el) => {
    el.classList.add('reveal')
    const siblingIndex = revealSiblings.get(el.parentElement) || 0
    revealSiblings.set(el.parentElement, siblingIndex + 1)
    el.style.setProperty('--reveal-delay', `${Math.min(siblingIndex, 4) * 55}ms`)
    if (revealObserver) revealObserver.observe(el)
    else el.classList.add('visible')
  })

  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((item) => {
      item.classList.toggle('selected', item === button)
      item.setAttribute('aria-pressed', String(item === button))
    })
    const value = button.dataset.filter
    const cards = [...document.querySelectorAll('.plant-card')]
    cards.forEach((card) => card.hidden = value !== 'all' && categoryId(card.dataset.category) !== value)
    const emptyState = document.querySelector('.plant-empty-state')
    if (emptyState) emptyState.hidden = cards.some((card) => !card.hidden)
  }))

  document.querySelectorAll('[data-gallery-filter]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-gallery-filter]').forEach((item) => {
      item.classList.toggle('selected', item === button)
      item.setAttribute('aria-pressed', String(item === button))
    })
    const value = button.dataset.galleryFilter
    const items = [...document.querySelectorAll('.gallery-section .gallery-item')]
    items.forEach((item) => item.hidden = value !== 'all' && item.dataset.category !== value)
    const emptyState = document.querySelector('.gallery-empty-state')
    if (emptyState) emptyState.hidden = items.some((item) => !item.hidden)
  }))

  const lightbox = document.querySelector('.lightbox')
  const galleryItems = [...document.querySelectorAll('.gallery-section .gallery-item')]
  let activeImage = 0
  let previouslyFocused = null
  const visibleGalleryItems = () => galleryItems.filter((item) => !item.hidden)
  const showLightbox = (index) => {
    const visibleItems = visibleGalleryItems()
    if (!lightbox || !visibleItems.length) return
    activeImage = (index + visibleItems.length) % visibleItems.length
    const item = visibleItems[activeImage]
    const preview = lightbox.querySelector('img')
    const asset = imageAssets[item.dataset.src]
    preview.src = asset?.src || item.dataset.src
    if (asset) {
      preview.srcset = asset.srcSet
      preview.sizes = '90vw'
      preview.width = asset.width
      preview.height = asset.height
    } else {
      preview.removeAttribute('srcset')
      preview.removeAttribute('sizes')
    }
    preview.alt = item.dataset.alt
    lightbox.querySelector('p').textContent = item.dataset.alt
    if (!lightbox.classList.contains('open')) previouslyFocused = document.activeElement
    lightbox.classList.add('open')
    lightbox.setAttribute('aria-hidden', 'false')
    document.body.classList.add('modal-open')
    lightbox.querySelector('.lightbox-close').focus()
  }
  const closeLightbox = () => {
    lightbox?.classList.remove('open')
    lightbox?.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('modal-open')
    if (lightbox) {
      const preview = lightbox.querySelector('img')
      preview.alt = ''
      previouslyFocused?.focus()
      previouslyFocused = null
    }
  }
  galleryItems.forEach((item) => item.addEventListener('click', () => {
    showLightbox(visibleGalleryItems().indexOf(item))
  }))
  lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox)
  lightbox?.querySelector('.lightbox-prev')?.addEventListener('click', () => showLightbox(activeImage - 1))
  lightbox?.querySelector('.lightbox-next')?.addEventListener('click', () => showLightbox(activeImage + 1))
  lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox() })
  lightbox?.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return
    const controls = [...lightbox.querySelectorAll('button')]
    const first = controls[0]
    const last = controls[controls.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })
  galleryKeyboardHandler = (event) => {
    if (!lightbox?.classList.contains('open')) return
    if (event.key === 'Escape') closeLightbox()
    if (event.key === 'ArrowRight') showLightbox(activeImage + 1)
    if (event.key === 'ArrowLeft') showLightbox(activeImage - 1)
  }
  menuKeyboardHandler = (event) => {
    if (event.key !== 'Escape' || menu?.getAttribute('aria-expanded') !== 'true') return
    nav?.classList.remove('open')
    menu?.setAttribute('aria-expanded', 'false')
    menu?.setAttribute('aria-label', 'Open navigation')
    if (menu) {
      menu.innerHTML = icon('menu', 23)
      menu.focus()
    }
  }

  document.querySelectorAll('[data-blog-filter]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-blog-filter]').forEach((item) => {
      item.classList.toggle('selected', item === button)
      item.setAttribute('aria-pressed', String(item === button))
    })
    const value = button.dataset.blogFilter
    document.querySelectorAll('.blog-list .blog-card').forEach((card, index) => {
      card.hidden = value !== 'All stories' && posts[index]?.category !== value
    })
  }))

  document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const body = [
      `Plant Order Enquiry`,
      '',
      `Full Name: ${data.get('name')}`,
      `Mobile Number: ${data.get('phone')}`,
      '',
      `Plant Category: ${data.get('category')}`,
      `Plant Name: ${data.get('plantName')}`,
      `Required Quantity: ${data.get('quantity')}`,
      '',
      `Delivery Preference: ${data.get('delivery')}`,
      `Delivery Address / Location: ${data.get('address') || 'Not provided'}`,
      `Additional Requirements: ${data.get('requirements') || 'Not provided'}`,
    ].join('\n')
    const url = whatsappUrl('9949865744', `Hello, I would like to place a plant order.\n\n${body}`)
    const fallback = form.querySelector('.form-whatsapp-fallback')
    const status = form.querySelector('.form-status')
    fallback.href = url
    fallback.hidden = false
    window.open(url, '_blank', 'noopener,noreferrer')
    status.textContent = 'Your enquiry is ready. In WhatsApp, review the details and press Send. If it did not open, use the link below.'
  })
}

let galleryKeyboardHandler = null
let menuKeyboardHandler = null
document.addEventListener('keydown', (event) => {
  galleryKeyboardHandler?.(event)
  menuKeyboardHandler?.(event)
})
window.addEventListener('hashchange', render)
render()

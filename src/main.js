import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import router from './router';
import store from './store'; 

// Import FontAwesome core library
import { library } from '@fortawesome/fontawesome-svg-core';

// Import the FontAwesome component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific icons
import { faUser, faBagShopping, faBars, faStar, faTruckFast, faCartFlatbed, faLeftLong, faLocationDot, faEnvelope, faPhone, faCheckCircle  } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faSquareFacebook, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Add the icons to the library
library.add(faUser, faBagShopping, faBars, farStar, faStar, faTruckFast, faCartFlatbed, faLeftLong,faSquareFacebook, faTwitter, faSquareInstagram, faLocationDot, faEnvelope, faPhone,faCheckCircle );

// Create Vue app
const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app
app.use(store);
app.use(router).mount('#app');

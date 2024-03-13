import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BankAccount from './components/BankAccount.vue';
import Business from './components/Business.vue';
// Import other new components

createApp(App)
  .use(router)
  .component('BankAccount', BankAccount)
  .component('Business', Business);
  // Register other new components

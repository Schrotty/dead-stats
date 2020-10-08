import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import DataService from "@/services/DataService";

import { IonicVue } from '@ionic/vue';

/* Custom PrimeVUE components */
import DataTable from 'primevue/datatable';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Card from 'primevue/card';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* PrimeVUE */
import "primevue/resources/themes/luna-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                           //icons

const app = createApp(App)
  .use(IonicVue)
  .use(router)

app.component('Card', Card)
app.component('DataTable', DataTable);
app.component('Row', Row);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Dialog', Dialog);
app.component('Dropdown', Dropdown);
app.component('Button', Button);

DataService.initiateDatabase();

router.isReady().then(() => {
  app.mount('#app');
});
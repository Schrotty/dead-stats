<template>
  <ion-page>
    <ion-content>
      <MatchDialog />

      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="matches" href="/tabs/matches">
            <ion-icon :icon="listSharp" />
          </ion-tab-button>
            
          <ion-tab-button disabled tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="barChartSharp" />
          </ion-tab-button>
          
          <ion-tab-button disabled tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="constructSharp" />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonContent, IonIcon, IonPage } from '@ionic/vue';
import { barChartSharp, constructSharp, pieChartSharp, listSharp } from 'ionicons/icons';
import MatchDialog from "@/components/MatchDialog.vue";

export default {
  name: 'Tabs',
  components: { IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, MatchDialog },
  setup() {
    return {
      pieChartSharp,
      constructSharp,
      barChartSharp,
      listSharp
    }
  }
}
</script>
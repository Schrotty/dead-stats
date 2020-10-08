<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <MatchComponent v-model:matches="matches" />

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button class="ion-color-secondary" href="/create-match">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonPage, IonContent } from '@ionic/vue';
  import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
  import { addIcons } from "ionicons";
  import { addSharp } from "ionicons/icons";
  import MatchService from "@/services/MatchService";
  import DataService from "@/services/DataService";
  import MatchComponent from "@/components/MatchComponent";

  addIcons({
    "add": addSharp
  })

  export default  {
    name: 'Tab1',
    components: {
      MatchComponent,
      IonContent, IonPage,
      IonFab, IonFabButton, IonIcon
    },
    data() {
      return {
        matches: [],
        dataService: null,
        matchService: null,
        expandedRowGroups: null,
        displayNewMatchDialog: false
      }
    },
    created() {
      this.dataService = new DataService();
      this.matchService = new MatchService();
    },
    mounted() {
      DataService.retrieveMatches().then(result => this.matches = result)
      this.dataService.getKiller().then(data => this.killer = data);
      this.dataService.getMaps().then(data => this.maps = data);
      this.dataService.getTags().then(data => this.tags = data)
      this.dataService.getResults().then(data => this.results = data)
    }
  }
</script>


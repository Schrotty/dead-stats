<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <MatchComponent v-model:matches="matches" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import MatchService from "@/services/MatchService";
import DataService from "@/services/DataService";
import MatchComponent from "@/components/MatchComponent";

export default  {
  name: 'Tab1',
  components: {
    MatchComponent,
    IonContent, IonPage
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


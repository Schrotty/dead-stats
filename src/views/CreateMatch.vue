<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title>Create new Match</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label>Select Killer:</ion-label>
              <ion-select placeholder="Select One" v-model="selectedKiller">
                <ion-select-option v-for="k in killer" v-bind:key="k">{{ k.killer }}</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label>Select Map:</ion-label>
              <ion-select placeholder="Select One" v-model="selectedMap">
                <ion-select-option v-for="m in maps" v-bind:key="m">{{ m.map }}</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label>Select Result:</ion-label>
              <ion-select placeholder="Select One" v-model="selectedResult">
                <ion-select-option v-for="r in results" v-bind:key="r">{{ r.result }}</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-item>
              <ion-label>Select Tags:</ion-label>
              <ion-select multiple="true" placeholder="Select One" v-model="selectedTags">
                <ion-select-option v-for="tag in tags" v-bind:key="tag">{{ tag.tag }}</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>

    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-button expand="full" color="primary" href="/tabs/matches">Abort</ion-button>
            </ion-col>

            <ion-col>
              <ion-button expand="full" color="primary" @click="saveMatch">Save</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonGrid, IonCol, IonRow, IonFooter, IonToolbar, IonButton, IonHeader, IonTitle, IonItem, IonSelect, IonLabel, IonSelectOption } from '@ionic/vue';
import { addIcons } from "ionicons";
import { addSharp } from "ionicons/icons";
import MatchService from "@/services/MatchService";
import DataService from "@/services/DataService";
import router from "@/router";

addIcons({
  "add": addSharp
})

export default {
  name: "CreateMatch",
  components: {
    IonContent, IonPage, IonGrid, IonCol, IonRow, IonFooter, IonToolbar, IonButton, IonHeader, IonTitle, IonItem, IonSelect, IonLabel, IonSelectOption
  },
  data() {
    return {
      dataService: null,
      matchService: null,
      displayDialog: false,
      killer: [],
      maps: [],
      tags: [],
      results: [],
      selectedKiller: null,
      selectedMap: null,
      selectedTags: null,
      selectedResult: null
    }
  },
  created() {
    this.dataService = new DataService();
    this.matchService = new MatchService();
  },
  mounted() {
    this.dataService.getKiller().then(data => this.killer = data);
    this.dataService.getMaps().then(data => this.maps = data);
    this.dataService.getTags().then(data => this.tags = data)
    this.dataService.getResults().then(data => this.results = data)
  },
  methods: {
    saveMatch() {
      const currDate = new Date()
      DataService.storeMatch({
        killer: this.selectedKiller,
        map: this.selectedMap,
        result: this.selectedResult,
        date: currDate.getDate() + '.' + (currDate.getMonth() + 1) + '.' + currDate.getFullYear()
      }).then(router.push('/tabs/matches'));
    }
  }
}
</script>

<style scoped>
  ion-fab {
    bottom: 75px;
  }

  .p-component, .p-component * {
    width: 100%;
  }
</style>
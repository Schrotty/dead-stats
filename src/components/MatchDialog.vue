<template>
  <Dialog class="p-dialog-maximized" header="Add Match" id="match-dialog" :visible="displayDialog" :modal="true" :closable="false"
          :contentStyle="{overflow: 'visible'}" :baseZIndex="1000">

    <div class="p-grid">
      <div class="p-col-12 p-md-4">
        <h5>Select Killer:</h5>
        <Dropdown v-model="selectedKiller" :options="killer" optionLabel="killer" />
      </div>

      <div class="p-col-12 p-md-4">
        <h5>Select Map:</h5>
        <Dropdown v-model="selectedMap" :options="maps" optionLabel="map" />
      </div>

      <div class="p-col-12 p-md-4">
        <h5>Select Match Result:</h5>
        <Dropdown v-model="selectedResult" :options="results" optionLabel="result" />
      </div>

      <div class="p-col-12">
        <h5>Select Tags:</h5>
        <Dropdown v-model="selectedTags" :options="tags" optionLabel="tag" />
      </div>
    </div>

    <template #footer>
      <Button label="Abort" icon="pi pi-times" class="p-button-text" @click="abortMatchDialog()"/>
      <Button label="Save" icon="pi pi-check" autofocus @click="submitMatchDialog()" />
    </template>
  </Dialog>

  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button @click="openNewMatchDialog">
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script>
import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { addIcons } from "ionicons";
import { addSharp } from "ionicons/icons";
import MatchService from "@/services/MatchService";
import DataService from "@/services/DataService";

addIcons({
  "add": addSharp
})

export default {
  name: "MatchDialog",
  components: {
    IonFab, IonFabButton, IonIcon
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
    openNewMatchDialog() {
      this.displayDialog = true
    },
    abortMatchDialog() {
      this.displayDialog = false
    },
    submitMatchDialog() {
      this.saveMatch()
      this.displayDialog = false
    },
    saveMatch() {
      const currDate = new Date()
      DataService.storeMatch({
        killer: this.selectedKiller.killer,
        map: this.selectedMap.map,
        result: this.selectedResult.result,
        date: currDate.getDate() + '.' + (currDate.getMonth() + 1) + '.' + currDate.getFullYear()
      }).then(location.reload());
    }
  }
}
</script>

<style scoped>
  ion-fab {
    bottom: 75px;
  }

  .p-dialog .p-component {
    width: 100%;
  }
</style>
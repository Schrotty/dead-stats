<template>
  <div class="p-d-flex">
    <DataTable :value="matches" :scrollable="true"
               scrollHeight="flex"
               :expandableRowGroups="true"
               v-model:expandedRows="expandedRows"
               v-model:expandedRowGroups="expandedRowGroups"
               rowGroupMode="subheader" groupRowsBy="date"
               sortMode="single" sortField="date">

      <Column field="date" />
      <template #groupheader="match">
          <span style="margin-right: 5px"><i class="pi pi-calendar"></i></span>
          <span style="font-weight: bold">{{match.data.date}}</span>
      </template>

      <Column field="killer" header="Killer"></Column>
      <Column field="map" header="Map" headerStyle="text-align: center" bodyStyle="text-align: center"></Column>
      <Column field="result" header="Result" headerStyle="text-align: center" bodyStyle="text-align: center"></Column>

      <Column headerStyle="width: 4rem">
        <template #body>
          <Button icon="pi pi-pencil" class="p-button-text p-button-secondary" />
        </template>
      </Column>

      <Column headerStyle="width: 4rem">
        <template #body>
          <Button icon="pi pi-window-maximize" class="p-button-text p-button-secondary" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>

export default {
  name: "MatchComponent",
  props: ['matches'],
  data() {
    return {
      expandedRows: [],
      expandedRowGroups: null
    }
  }
}
</script>
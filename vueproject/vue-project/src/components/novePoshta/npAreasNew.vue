<template>
  <h2>Регионы</h2>
  <button @click="loadAreas">Reload Areas</button>
  <select>
    <option v-for="(area, index) in novaPoshta" :key="index" :v-model="area.Ref">
      {{ area.Description }}
    </option>
  </select>

  <ul>
    <li v-for="(area, index) in areas" :key="index">
      {{ area.DescriptionRu }}
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from "vue";
import {useNovaPoshtaStore} from "../../store/novaPoshta";

// let areas = reactive([]);
let novaPoshta = useNovaPoshtaStore();

const loadAreas = () => {
  novaPoshta.loadFromServer();
};

onMounted(() => loadAreas());
</script>

<style scoped>
h2 {
  background: aqua;
}
</style>

<template>
  <h1>Peoples</h1>
  <ul v-if="peoples.length > 0">
    <li v-for="(people, index) in peoples" :key="index">{{ people }}</li>
  </ul>
  <div v-else>У вас нет людей в списке</div>
  <input id="newName" /><button @click="addPeople">+</button>
</template>

<script setup>
import { ref } from "vue";
const peoples = ref([]);
const addPeople = function () {
  peoples.value.push(document.getElementById("newName").value);
  console.log(peoples);
};
</script>

<style scoped></style>

<template>
  <div>
    <label>Введіть пароль
      <input v-model="password.symbols">
    </label>
    <p>{{validateAll.length}}</p>
    <hr>
    <p>{{validateAll.letters}}</p>
    <hr>
    <p>{{validateAll.numbers}}</p>
  </div>
</template>

<script setup>
import {computed, reactive} from "vue";

let password = reactive({
  symbols: "",});

let validateAll = computed( () => {
  return {
    length:
        password.symbols.length < 8
            ? "Пароль має містити 8 символів"
            : "Пароль відповідає вимозі",
    letters:
        !password.symbols.match(/[A-Z]/)
            ? "Пароль має містити не менше 1 великої літери"
            : "Пароль відповідає вимозі",
    numbers:
        !password.symbols.match(/[0-9]/)
            ? "Пароль має містити не менше 1 цифри"
            : "Пароль відповідає вимозі",
  };
});
console.log(password.symbols)
</script>

<style scoped>
div {
  border: 2px solid forestgreen;
  padding: 15px;
}
input {
  margin: 5px;
  padding: 5px;
  border: 1px solid darkblue;
}
label {
  font-style: italic;
  color: blueviolet;
}
p {
  font-size: 12px;
  color: black;
}
</style>
<template>
  <main>
    <nav>
      <ul>
        <!-- Для формирования ссылки -->
        <li><router-link to="/">Go to Home</router-link></li>
        <li><router-link to="/about">Go to About</router-link></li>
        <li><router-link to="/contact">Go to Contact</router-link></li>
        <li><router-link to="/todolist">Go to ToDoList</router-link></li>
      </ul>
    </nav>
    <!-- место вывода компонента по этой ссылке -->
    <router-view></router-view>
  </main>
</template>

<script setup></script>

<style scoped>
header {
  line-height: 1.5;
}
nav {
  display: flex;
}
li {
  list-style-type: none;
  color: #181818;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<template>
  <h2>Post</h2>
  <article>
    <header>
      <slot name="header"></slot>
    </header>

    <div>
      <slot name="body"></slot>
      <slot></slot>
    </div>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>

</template>

<script></script>

<style scoped></style>
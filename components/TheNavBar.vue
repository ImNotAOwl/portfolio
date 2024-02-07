<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isOpen = ref(false);
const openModal = () => (isOpen.value = true);
const closeModal = () => (isOpen.value = false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- RESPONSIVE NAVBAR : MODAL -->
  <button
    @click="openModal"
    class="sm:hidden block px-2 self-start py-1 hover:text-black focus:outline-none bg-white text-xl mx-4 my-2"
  >
    menu
  </button>
  <div
    v-if="isOpen"
    @click.self="closeModal"
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
  >
    <!-- Modal responsive -->
    <div
      @click.stop
      class="bg-white p-4 flex justify-center h-4/6 w-4/5 relative"
    >
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-600 p-2"
      >
        <svg
          class="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <!-- Copy of the navbar + footer -->
      <ul
        class="navbar-left flex flex-col justify-center items-center font-bold text-[46px] select-none"
      >
        <li class="cursor-pointer" @click="closeModal">
          <RouterLink to="/" class="nav-link-burger mx-4 select-none">
            accueil
          </RouterLink>
        </li>
        <li class="cursor-pointer" @click="closeModal">
          <RouterLink to="/" class="nav-link-burger mx-4 select-none"
            >détails</RouterLink
          >
        </li>
        <li class="cursor-pointer" @click="closeModal">
          <RouterLink to="/" class="nav-link-burger mx-4 select-none"
            >artistes</RouterLink
          >
        </li>
        <li class="cursor-pointer" @click="closeModal">
          <RouterLink to="/" class="nav-link-burger mx-4 select-none"
            >textes</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- CLASSIC NAVBAR -->
  <nav
    class="sm:flex hidden justify-between items-center w-full text-left select-none bg-white text-black py-8 font-serif border-red-600 border"
  >
    <ul
      class="navbar-left flex justify-center items-center select-none text-lg"
    >
      <li class="inline-block cursor-pointer">
        <RouterLink to="/" class="mr-12 select-none transition-colors text-xl">
          <b>Matthieu Siegel</b>
        </RouterLink>
      </li>
      <li class="cursor-pointer self-place-center">
        <RouterLink
          to="/about"
          class="nav-link mx-4 select-none transition-colors"
          >About</RouterLink
        >
      </li>
      <li class="cursor-pointer">
        <RouterLink
          to="/skills"
          class="nav-link mx-4 select-none transition-colors"
          >Skills</RouterLink
        >
      </li>
      <li class="cursor-pointer">
        <RouterLink
          to="/projects"
          class="nav-link mx-4 select-none transition-colors"
          >Projects</RouterLink
        >
      </li>
    </ul>
    <div class="flex space-x-3">
      <a href="https://www.linkedin.com/in/matthieu-siegel/" target="_blank">
        <IconLinkedIn width="2em" height="2em" class="cursor-pointer" />
      </a>
      <a href="https://github.com/ImNotAOwl" target="_blank">
        <IconGithub width="2em" height="2em" class="cursor-pointer" />
      </a>
    </div>
  </nav>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: black;
  cursor: default;
}

nav a {
  color: rgb(47, 43, 43);
}

nav .nav-link:hover {
  color: rgb(185, 86, 32);
}

li {
  display: inline-block;
  position: relative;
  padding: 0;
  margin: 0;
}

.nav-link:after,
.nav-link-burger:after {
  background: none repeat scroll 0 0 transparent;
  content: "";
  display: inline-block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: rgb(208, 97, 37);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.nav-link-burger:after {
  bottom: 12px;
}
.nav-link:after {
  bottom: 2px;
}

.nav-link.router-link-exact-active:after,
.nav-link-burger.router-link-exact-active:after {
  width: 100%;
  left: 0;
}
</style>

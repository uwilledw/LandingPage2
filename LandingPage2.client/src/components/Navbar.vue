<template>
  <nav id="nav" class="navbar navbar-expand-md navbar-dark bg-trans px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">

      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mobile" id="navbarText">
      <ul class="navbar-nav">
        <li>
          <h5 @click="goHome()" class="mx-2 nav-btn">Top</h5>
        </li>
        <h5 @click="goAbout()" class="mx-2 nav-btn">About</h5>
        <li>
        </li>
        <li>
          <h5 @click="goSkills()" class="mx-2 nav-btn">Skills</h5>
        </li>
        <li>
          <h5 @click="goPort()" class="mx-2 nav-btn">Portfolio</h5>
        </li>
        <li>
          <h5 @click="goContact()" class="mx-2 nav-btn">Contact</h5>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
    </div>
  </nav>
</template>

<script>
import { logger } from '../utils/Logger.js'
import Login from './Login.vue'
export default {
  setup() {
    return {

      goSkills() {
        let skillElem = document.getElementById("skills")
        let postiton = skillElem.offsetTop
        window.scrollTo(0, postiton - 60)
      },
      goAbout() {
        let aboutElem = document.getElementById("abtMe")
        let postiton = aboutElem.offsetTop
        window.scrollTo(0, postiton - 60)
      },
      goPort() {
        let portElem = document.getElementById("port")
        let postiton = portElem.offsetTop
        window.scrollTo(0, postiton - 60)
      },
      goContact() {
        window.scrollTo(0, 10000)
      },

      goHome() {
        window.scrollTo(0, 0)
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-btn {
  cursor: pointer;
  color: white;
}

.nav-btn:hover {
  color: #6cf9fe;
  text-decoration: underline rgb(108, 249, 254);
}

.bg-trans {
  background-color: rgba(69, 66, 132, 0);
}

.nav-link {
  text-transform: uppercase;
}

.mobile {
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 768px) {
  .mobile {
    display: none;
  }
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>

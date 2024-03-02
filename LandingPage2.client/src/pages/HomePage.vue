<template>
  <div class="container-fluid">
    <section id="hero" class="row hero-img justify-content-center align-items-center">
      <Navbar class="fixed-top" />
      <div class="col-md-6 text-light text-center">
        <span v-for="l in heroText" :key="l.id" :id="l.id" class="fs-1 text-black">{{ l.letter }}</span>
      </div>
    </section>
    <section id="abtMe" class="row bg-greyish justify-content-center align-items-center my-2">
      <div class="col-md-10 text-center my-3 title">
        <span v-for="l in abtMe" :id="l?.id" class="color titles">{{ l?.letter }}</span>
      </div>
    </section>
    <section class="row justify-content-around my-5">
      <div class="col-md-5 text-center">
        <img class="my-img" src="../assets/img/IMG_6399.jpg" alt="">
      </div>
      <div class="col-md-5">
        <p class="fs-5 mob-p py-3"> I am a motivated fullstack software developer with a passion for crafting efficient
          and
          intuitive
          applications. I
          recently completed a rigorous 13-week coding bootcamp, where I gained hands-on experience in modern web
          development technologies such as HTML, CSS, JavaScript, Vue and more. Prior to my coding bootcamp, I learned
          leadership, customer service, and problem solving skills that have helped me through my journey.
          As a software developer, I am always open to learning new skills and technologies, and I am excited about the
          opportunity to continue growing professionally.
          <!-- I am seeking an entry-level software developer position where I
          can utilize my skills and knowledge to produce innovative applications in a collaborative and dynamic team
          environment. -->
        </p>
      </div>
    </section>
    <section id="skills" class="row bg-greyish justify-content-center align-items-center my-2">
      <div class="col-md-10 text-center my-3 title">
        <span v-for="l in skills" :id="l?.id" class="color titles">{{ l?.letter }}</span>
      </div>
    </section>
    <section class="row justify-content-center my-5 p-2">
      <div class="col-6 col-md-2 py-2" title="Hyper Text Markup Language">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Cascading Style Sheets">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Bootstrap">
        <img class="img-fluid"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Figma">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Vue">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="JavaScript">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Node.js">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="Mongo DataBase">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="C Sharp">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="DotNet">
        <img class="img-fluid"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/180px-Microsoft_.NET_logo.svg.png"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="MySQL">
        <img class="img-fluid" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
          alt="">
      </div>
      <div class="col-6 col-md-2 py-2" title="VS Code">
        <img class="img-fluid"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="">
      </div>
    </section>
    <section id="port" class="row bg-greyish justify-content-center">
      <div class="col-md-10 text-center my-3">
        <span v-for="l in port" :id="l?.id" class="color titles">{{ l?.letter }}</span>
      </div>

    </section>
    <section class="row justify-content-center mt-5">
      <div class="col-md-8">
        <h4>These sites are being hosted using a free service, which may cause them to load slower than usual. I apologize
          for any inconvenience this may cause, and I appreciate your patience while accessing my content.</h4>
      </div>
    </section>
    <section class="row justify-content-center my-5">
      <div class="col-lg-6 my-2">
        <div class="text-center">
          <a href="https://keeper-uwilledw.onrender.com" title="https://keeper-uwilledw.onrender.com"
            class="fs-1 text-dark underline">Keepr</a>
        </div>
        <div @click="flip(100)" class="keepr rounded selectable border border-dark">
          <div id="100" class="clear p-3 rounded">
            <h4 class="text-light">Keepr is a rendition of pinterest that allows users to share their interests through
              images with features that allow collecting, browsing, and interacting. This application was built using
              Vue.js, C# with .Net and Dapper, MySql, and Auth0</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-6 my-2">
        <div class="text-center">
          <a href="http://gamestone.onrender.com/" title="http://gamestone.onrender.com/"
            class="fs-1 text-dark underline">GameStone</a>
        </div>
        <div @click="flip(101)" class="gameStone rounded selectable border border-dark">
          <div id="101" class="clear p-3 rounded">
            <h4 class="text-white">GameStone is a full-stack application designed to allow users to find and gather with
              others to play their favorite board games. Me and four other developers built this application with Vue.Js,
              Express, MongoDB with Mongoose, and Auth0 for identity</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-6 my-2">
        <div class="text-center">
          <a href="https://tower-williamedwards.onrender.com" title="https://tower-williamedwards.onrender.com"
            class="fs-1 text-dark underline">Tower</a>
        </div>
        <div @click="flip(102)" class="tower rounded selectable border border-dark">
          <div id="102" class="clear p-3 rounded">
            <h4 class="text-white">Tower is a full-stack application designed to help users organize and attend events
              with their social circles, built with VueJs, Express, MongoDB with Mongoose, and Auth0 for identity
              management.</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-6 my-2">
        <div class="text-center">
          <a href="https://redbarnleather.onrender.com" title="https://redbarnleather.onrender.com"
            class="fs-1 text-dark underline">RedBarnLeather</a>
        </div>
        <div @click="flip(103)" class="tower rounded selectable border border-dark">
          <div id="103" class="clear p-3 rounded">
            <h4 class="text-white">RedBarnLeather is a full-stack application designed to allow users to shop and buy
              leather products, built with Vue.js, Express, MongoDB with Mongoose, Auth0 for identity
              management, and PayPal for payments.</h4>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="row bg-greyish justify-content-center">
      <div class="col-md-10 text-center my-3">
        <span v-for="l in contact" :id="l?.id" class="color titles">{{ l?.letter }}</span>
      </div>
    </section>
    <section class="row justify-content-center">
      <div class="d-flex justify-content-center col-10 text-center">
        <div class="my-5 rise">
          <a title="William's Github" href="https://github.com/uwilledw" class="btn btn-light mx-3 px-3"><i
              class="mdi mdi-github fs-3"></i></a>
        </div>
        <div class="my-5 rise">
          <a title="William's LinkedIn" href="https://www.linkedin.com/in/uwilliamedwards/"
            class="btn btn-light mx-3 px-3"><i class="mdi mdi-linkedin fs-3"></i></a>
        </div>
        <div class="my-5 rise">
          <a title="William's Gmail" href="williamedwards7717@gmail.com" class="btn btn-light mx-3 px-3"><i
              class="mdi mdi-email fs-3"></i></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, watchEffect } from 'vue';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';

export default {
  setup() {
    let color = null
    let color2 = null
    function GetColor() {
      let i = Math.floor(Math.random() * AppState.colors.length)
      color = AppState.colors[i]
    }

    function GetColor2() {
      let i = Math.floor(Math.random() * AppState.colors2.length)
      color2 = AppState.colors2[i]
    }

    function heroTextChange() {
      let heroText = AppState.heroText
      heroText.forEach((letter, i) => {
        setTimeout(() => {
          let lett = document.getElementById(letter.id)
          lett.classList.remove("text-black");
          lett.classList.add("text-light")
        }, i * 200);
      });
    }



    function flow() {
      let abtMe = AppState.abtMe
      let port = AppState.port
      GetColor()
      abtMe.forEach((letter, i) => {
        setTimeout(() => {
          let lett = document.getElementById(letter.id)
          lett.style.color = color;
        }, i * 200);
      });
      port.forEach((letter, i) => {
        setTimeout(() => {
          let lett = document.getElementById(letter.id)
          lett.style.color = color;
        }, i * 190);
      });
    }

    function flow2() {
      let contact = AppState.contact
      let skills = AppState.skills
      GetColor2()
      contact.forEach((letter, i) => {
        setTimeout(() => {
          let lett = document.getElementById(letter.id)
          lett.style.color = color2;
        }, i * 200);
      });
      skills.forEach((letter, i) => {
        setTimeout(() => {
          let lett = document.getElementById(letter.id)
          lett.style.color = color2;
        }, i * 190);
      });
    }

    onMounted(() => {
      setInterval(flow, 5000)
      setInterval(flow2, 6000)
      setInterval(changeBg, 500)
      heroTextChange()
    })


    function changeBg() {
      // logger.log(document.documentElement.scrollTop, "top")
      let navElem = document.getElementById("nav")
      if (document.documentElement.scrollTop > 10) {
        navElem.classList.add("nav-bg")
      } else {
        navElem.classList.remove("nav-bg")
        navElem.classList.add("ease")
      }
    }


    return {
      color,
      abtMe: computed(() => AppState.abtMe),
      skills: computed(() => AppState.skills),
      port: computed(() => AppState.port),
      contact: computed(() => AppState.contact),
      heroText: computed(() => AppState.heroText),

      flip(id) {
        // logger.log(id)
        let elem = document.getElementById(`${id}`)
        if (elem.classList.contains("app-card")) {
          elem.classList.add("clear")
          elem.classList.remove("app-card")
        } else {
          elem.classList.remove("clear")
          elem.classList.add("app-card")
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bg-greyish {
  background-color: rgb(33, 37, 41);
}

.titles {
  font-size: 65px;
}

.underline:hover {
  text-decoration: underline #111927;

}

.color {
  transition: all .2s ease;
  color: white;
}

.title {
  height: 12vh;
}

.hero-img {
  background-image: url("../assets/img/moving background.gif");
  height: 75vh;
  background-position: center;
  background-size: cover;
}

.my-img {
  width: 100%;
  height: 55vh;
  object-fit: cover;
  object-position: top;
}

.ease {
  transition: ease .4s;

}

.nav-bg {
  background-color: rgb(0, 0, 0);
  transition: ease .4s;
}

.mob-p {
  padding-left: 0;
  padding-right: 0;
}

@media screen and (max-width: 768px) {
  .mob-p {
    padding-left: 10px;
    padding-right: 10px;
  }
}

// .app-img {
//   width: 100%;
//   height: 35vh;
//   object-position: center;
// }

.keepr {
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/Keepr.png");
}

.gameStone {
  width: 100%;
  height: 50vh;
  // margin-top: 5px;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/GameStoneSS.png");
}

.tower {
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/TowerSS.png");
}


.app-card {
  height: 100%;
  /* From https://css.glass */
  background: rgba(51, 46, 46, 0.51);
  // border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(.5px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(50, 46, 46, 0.2);
  // transition: ease .2s;
  display: flex;
  align-items: center;
}

.rise {
  padding-top: 4px;
}

.rise:hover {
  padding: 0px;
  margin-bottom: 3px;
  transition: ease .2s;
}

.rise:hover>a {
  background-color: black;
  box-shadow: 0 .10rem .25rem 0.15rem rgba(0, 0, 0, 0.36);
}

.rise:hover>a>i {
  color: white;
}

.clear {
  visibility: hidden;
  // transition: ease .2s;
  display: flex;
  align-items: center;
}
</style>
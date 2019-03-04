<template>
  <section>
    <div class="row grid-layout">
      <div
        class="col s12 m12 l12 contact-header"
        :style="{ backgroundImage: 'url(' + header.img + ')' }"
      >
        <h1 class="header title">{{header.title}}</h1>
      </div>
      <div class="col right contact-info red">
        <h5 class="subsection title">Careers</h5>

        <div class="address">
          <h2>Work with us</h2>
          <form class="col s12">
            <div class="row">
              <div class="input-field col s10 offset-s1 l6 offset-l3">
                <input placeholder id="email" type="text" class="validate">
                <label for="first_name">Enter your email</label>
              </div>
            </div>
            <div class="row col s10 offset-s1 l6 offset-l3">
              <button
                class="slategrey btn waves-effect waves-light col s12"
                type="submit"
                name="action"
              >
                Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col left contact-form">
        <h5 class="subsection title">Our Mission</h5>
        <div class="row">
          <p class="col s10 offset-s1">{{mission.text1}}</p>
          <p class="col s10 offset-s1">{{mission.text2}}</p>
          <p class="col s10 offset-s1">{{mission.text3}}</p>
          <p class="col s10 offset-s1">{{mission.text4}}</p>
        </div>
      </div>
    </div>
    <div class="row margin-b">
      <PageFooter/>
    </div>
  </section>
</template>

<script>
import PageFooter from "./PageFooter";
export default {
  name: "AboutPage",
  components: { PageFooter },
  data() {
    return {
      header: {
        img:
          "http://www.martinanthony.co.uk/images/martinuk/Low-Price-Adidas-Superstar-Mens-Shoes-Outlet-Online-Martin1816.jpg",
        title: "About Us"
      },
      mission: {
        text1:
          "AS PEOPLE, AND AS AN ORGANIZATION, WE ARE DRIVEN BY DEDICATION TO OUR WORK, THE PURSUIT OF OPPORTUNITY AND COMMITMENT TO THE BEST.",
        text2:
          "THIS IS THE SPIRIT THAT HAS URGED US ONWARDS FROM THE BEGINNING. WE ARE SPECIALISTS IN FOOTWEAR AND UNIQUE IN OUR SECTOR IN THAT WE ENCOMPASS THE ENTIRE SUPPLY CHAIN IN ALL DIMENSIONS OF OUR BUSINESS, FROM MANUFACTURING TO RETAIL.",
        text3:
          "THESE ACHIEVEMENTS ARE THE RESULT OF OUR DEDICATION AND COMMITMENT TO HONEST, SINCERE RELATIONSHIPS WITH THOSE WHO SHARE OUR IDEAL.",
        text4:
          "WE ARE ALWAYS LOOKING AHEAD, SECURE IN THE KNOWLEDGE THAT OUR EXPERIENCE HAS BROUGHT US THE CONVICTION AND CONSISTENCE NEEDED TO CHOOSE THE BEST PATHS"
      }
    };
  }
};
</script>

<style scoped>
.grid-layout {
  margin-top: -74px;
  display: grid;
  grid-template-rows: 60vh 60vh;
  grid-template-columns: 50vw 50vw;
  margin-bottom: 0px;
}
.contact-header {
  grid-column: 1 / span 3;
  background-position: center;
}
.contact-form {
}
.subsection.title {
  position: absolute;
  color: white;
  opacity: 0;
  will-change: transform;
  transition: 0.4s ease-in-out;
  transform: translateY(0%) translateX(0rem) scale(0.1);
  background-color: #0000009e;
  padding: 0 2rem;
}
.contact-form:hover .subsection.title,
.contact-info:hover .subsection.title {
  opacity: 1;
  transform: translateY(-174%) translateX(2rem) scale(1);
}
h1.header.title {
  text-align: center;
  font-weight: 900;
  color: white;
  letter-spacing: 2px;
  background-color: #0000009c;
  width: 24rem;
  margin: auto;
  margin-top: 10rem;
}
textarea {
  min-height: 88px;
  max-height: 88px;
  resize: none;
}
.margin-b {
  margin: 0px;
}
.margin-b.button-submit {
  margin: 0 0.95rem;
}
.map.card {
  min-height: 15rem;
  width: 40vw;
  margin-left: 5vw;
  margin-top: 2rem;
  background-position: center;
}
.address {
  width: 90%;
  margin-left: 5%;
  color: white;
  display: inline-block;
}

.address p {
  padding-left: 4rem;
  color: white;
  margin-bottom: 5px;
  margin-top: 3px;
}
.subscribe {
  height: 45vh;
  background-color: white;
  width: 100vw;
}
.subscribe form h4 {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
}
input#email {
  border: 6px solid black;
  border-radius: 10px;
  margin-left: -6px;
}
.input-field label {
  color: white;
}
button.slategrey {
  background-color: lightslategray !important;
}
</style>
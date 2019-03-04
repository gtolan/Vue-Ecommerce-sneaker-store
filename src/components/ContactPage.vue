<template>
  <section>
    <div class="row grid-layout">
      <div
        class="col s12 m12 l12 contact-header"
        :style="{ backgroundImage: 'url(' + header.img + ')' }"
      >
        <h1 class="header title">{{header.title}}</h1>
      </div>
      <div class="col left contact-form">
        <h5 class="subsection title">Send us a message</h5>
        <div class="row">
          <form class="col s12">
            <div class="row margin-b">
              <div class="input-field col s6">
                <input id="first_name" type="text" class="validate">
                <label for="first_name">Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate">
                <label for="last_name">Subject</label>
              </div>
            </div>
            <div class="row margin-b">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate">
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row margin-b">
              <div class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea" rows="4" cols="50"></textarea>
                <label for="textarea1">Message</label>
              </div>
            </div>
            <div class="row margin-b button-submit">
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
      <div class="col right contact-info red">
        <h5 class="subsection title">Get in Contact</h5>
        <div class="map card" :style="{ backgroundImage: 'url(' + map.img + ')' }"></div>
        <div class="address">
          <p>{{map.address1}}</p>
          <p>{{map.address2}}</p>
          <p>{{map.address3}}</p>
          <p>{{map.address4}}</p>
        </div>
        <div class="email phone">
          <p>{{map.phone}}</p>
          <p>{{map.email}}</p>
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
  name: "ContactPage",
  components: { PageFooter },
  data() {
    return {
      header: {
        img:
          "https://static1.squarespace.com/static/56d77c821d07c0ad6dda8d68/t/57ed46ce3e00be83f42c91a7/1475168025910/",
        title: "Contact Us"
      },
      map: {
        img:
          "https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg",
        address1: "13 Church Street",
        address2: "Cambridge",
        address3: "London",
        address4: "United Kingdom",
        phone: "(34) 651-781-129",
        email: "contact@sneakerstore.co.uk"
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
.address,
.email.phone {
  width: 49%;
  color: white;
  display: inline-block;
}
.email.phone {
  text-align: right;
  vertical-align: top;
}

.address p {
  padding-left: 4rem;
  color: white;
  margin-bottom: 5px;
  margin-top: 3px;
}
.email.phone p {
  margin-bottom: 5px;
  margin-top: 3px;
}
</style>
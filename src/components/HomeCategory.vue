<template>
  <main>
    <router-link
      class="wrapper"
      v-for="card in cards"
      :style="{ background:  card.img,backgroundSize:'cover', backgoundPosition:'center' }"
      :key="card.id"
      v-bind:to="{ name: 'product-page', params: { category: card.category, brand:card.brand }}"
    >
      <h2 class="col s6 m6 l6">{{card.title}}</h2>
      <h5 class="col s6 m6 l6">{{card.text}}</h5>
      <button
        v-show="card.button"
        class="waves-effect waves-light btn medium black find-out-more"
      >More</button>
    </router-link>
    <router-link
      class="wrapper bottom"
      v-for="card in bottomcards"
      :style="{ background:  card.img, backgroundSize:'cover' }"
      :key="card.id"
      v-bind:to="{ name: 'product-page', params: { category: card.category, brand:card.brand }}"
    >
      <h2 class="col s6 m6 l6">{{card.title}}</h2>
      <h5 class="col s6 m6 l6">{{card.text}}</h5>
      <button
        v-show="card.button"
        class="waves-effect waves-light btn medium black find-out-more"
      >More</button>
    </router-link>
  </main>
</template>

<script>
export default {
  name: "HomeCategory",
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Mens",
          text: null,
          button: false,
          link: "/mens/adidas/run-shift",
          img:
            "url(https://i.dmarge.com/2017/09/adidas-Swift-Run-2.jpg) 50% 0% / cover",
          category: "mens",
          brand: "adidas"
        },
        {
          id: 2,
          title: "Adidas Run Shift",
          text: null,
          button: true,
          link: "all/adidas/run-shift",
          img: "red",
          text:
            "Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias",
          category: "all",
          brand: "adidas"
        },
        {
          id: 3,
          title: "Womens",
          text: null,
          button: false,
          link: "womens/adidas/run-shift",
          img:
            "url(https://di2ponv0v5otw.cloudfront.net/posts/2018/01/30/5a70b734d22c662df0e58c85/m_5a70b7378df470f9515e57a9.jpeg) center",
          category: "womens",
          brand: "adidas"
        }
      ],
      bottomcards: [
        {
          id: 4,
          title: "Nike Cortez",
          text: null,
          button: true,
          link: "all/nike/cortez",
          img: "red",
          text:
            "Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias",
          category: "all",
          brand: "nike"
        },
        {
          id: 5,
          title: "Mens",
          text: null,
          button: false,
          link: "mens/nike/cortez",
          img:
            "url(http://www.telecliptv.es/images/large/products/Zapatillas%20252_LRG.jpg) 50% 68% / cover no-repeat",
          category: "mens",
          brand: "nike"
        },

        {
          id: 6,
          title: "Womens",
          text: null,
          button: false,
          link: "womens/nike/cortez",
          img:
            "url(https://i.pinimg.com/originals/a0/88/ff/a088ff4d896bbc9de53652970deb36ce.jpg) center",
          category: "womens",
          brand: "nike"
        }
      ]
    };
  }
};
</script>

<style scoped>
main {
  position: relative;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
main .wrapper {
  width: 100%;
  height: 40vh;
  display: inline-block;
  cursor: pointer;
  background-size: cover;
}
main .wrapper:nth-child(1) {
  grid-row: 1 / span 2;
  grid-column: 1 / span 1;
  height: 80vh;
}
main .wrapper:nth-child(1) h2,
main .wrapper:nth-child(5) h2 {
  will-change: transform;
  transition: 0.4s ease-in-out;
  transform: translateX(-30vw);
}
main .wrapper:hover:nth-child(1) h2,
main .wrapper:hover:nth-child(5) h2 {
  transform: translateX(0vw);
}
main .wrapper:nth-child(2) {
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
  height: 40vh;
}
main .wrapper h2,
main .wrapper h5 {
  padding-left: 3rem;
  padding-right: 1rem;
  color: white;
}
main .wrapper:nth-child(2):hover,
main .wrapper:nth-child(4):hover {
  transition: 0.4s;
  animation: cornerColor 0.4s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;
}

@keyframes cornerColor {
  0% {
    background: linear-gradient(235deg, black -60%, red 160%);
  }
  100% {
    background: linear-gradient(235deg, black 15%, red);
  }
}
main .wrapper:nth-child(3) h2,
main .wrapper:nth-child(6) h2 {
  will-change: transform;
  transition: 0.4s ease-in-out;
  transform: translateY(-3vw);
  opacity: 0;
}
main .wrapper:hover:nth-child(3) h2,
main .wrapper:hover:nth-child(6) h2 {
  transform: translateY(0vw);
  opacity: 1;
}
main .wrapper.bottom {
  height: 45vh;
}
main .wrapper:nth-child(6) {
  grid-row: 3 / span 2;
  grid-column: 2 / span 1;
  height: 90vh;
}
button.find-out-more {
  margin-left: 3rem;
  width: 9rem;
}
@media only screen and (max-width: 800px) {
  main .wrapper:nth-child(2),
  main .wrapper:nth-child(4) {
    transition: 0.4s;
    animation: cornerColor 0.4s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  }
  main .wrapper:nth-child(3) h2,
  main .wrapper:nth-child(6) h2 {
    transform: translateY(0vw);
    opacity: 1;
  }
  main .wrapper:nth-child(1) h2,
  main .wrapper:nth-child(5) h2 {
    transform: translateX(0vw);
  }
}
@media only screen and (max-width: 700px) {
  main {
    display: block;
  }
  main .wrapper h2,
  main .wrapper h5 {
    padding-left: 1rem;
  }
  main .wrapper button {
    margin-left: 1rem;
  }
   .product-line .scroll-control{
            width: 165px;
        }
 
}
</style>
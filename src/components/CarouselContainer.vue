<template>
  
    <div class="row carousel-wrap">
        <div class="slider-btns">
            <button @click="prevSlide" class="btn-floating btn-medium waves-effect waves-light blue-grey lighten-3 left-chevron"><i class="material-icons">chevron_left</i></button>
            <button @click="nextSlide" class="btn-floating btn-medium waves-effect waves-light blue-grey lighten-3 right-chevron"><i class="material-icons">chevron_right</i></button>
        </div>

        <div class="slide" v-for="slide in carousel" 
                :key="slide.id" 
                :style="{ backgroundImage: 'url(' + slide.img + ')' }"
                :class="{ active: (slide.id == activeSlide) }">
            <h1 class="col s12 m12 l12">{{slide.title}}</h1>
            <h5 class="col s12 m12 l12"> {{slide.text}}</h5>
        </div>
      
        <router-link class="waves-effect waves-light btn-large see-more red" v-bind:to="activeSlideLink">See More</router-link>
      
        <div class="row slider-control center-align" >
            <button v-for="slide in carousel" 
            :key="slide.id" class="btn-floating btn-small waves-effect waves-light white" 
                @click="viewSlide(slide.id)"
            :class="{ active: (slide.id == activeSlide) }">
                <i class="material-icons">trip_origin</i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Carousel',
        data() {
            return {
                viewSlideInProgress:false,
                activeSlide:1,
                autoSliding:true,
                carousel:[
                            {id:1,
                            img:'https://cdn.shopify.com/s/files/1/0877/2824/files/20181008_MG_1589.jpg?v=1539291947',
                            title:'Comfort',
                            link:'products/all/nike',
                            text:'Walk on clouds'},
                            {id:2,
                            img:'https://media.nicershoes.com/wp-content/uploads/2018/01/Best-Shoes-for-Rain.jpeg',
                            title:'Rain Ready',
                            link:'products/all/adidas',
                            text:'For all weather sneakers'},
                            {id:3,
                            img:'https://i.ytimg.com/vi/tWq_ifZzhdg/maxresdefault.jpg',
                            title:'Ready for Anything',
                            link:'products/all/nike',
                            text:'The right shoe for the right moment'},
                            {id:4,
                            img:'http://www.thebearbrighton.co.uk/images/large/fastsole.co.uk/TU%20R17VD7JjihBV6Y8d_LRG.jpg',
                            title:'adidas',
                            link:'products/all/nike',
                            text:'The best brands available'},
                            ]
            }
        },
        methods:{
            nextSlide() {
                (this.activeSlide >= (this.carousel.length)) ? (this.activeSlide = 1) : this.activeSlide++;

            },
            prevSlide(){
                (this.activeSlide === 1) ?  (this.activeSlide = this.carousel.length) : this.activeSlide--;
            },
            viewSlide(id){
                this.activeSlide = id;
                this.viewSlideInProgress = true;
                let self = this;
                if(this.autoSliding == false){
                    setTimeout(()=> {
                    self.viewSlideInProgress = false; 
                    self.startSlider();
                    }, 5000)
                }
            },
            startSlider() {
                let self = this;
                const runSlide = function(self){
                        setTimeout(()=> {
                            if(self.viewSlideInProgress == false){
                                self.nextSlide();
                                runSlide(self);
                            }
                        }, 3500)
                        self.autoSliding = false;
                }
                runSlide(self)
            }

        },
        computed:{
            activeSlideLink:function(){
                console.log('active', this.activeSlide)
                let index = Number.parseInt(this.activeSlide);
                index--;
                let link = this.carousel[index].link
                return link;
            }
        },
        mounted() {
            this.startSlider()
        }
    }
</script>

<style scoped>
.carousel-wrap{
    position: relative;
    width: 100vw;
    height: 90vh;
    margin-top: -75px;
    margin-bottom: 0px;
}

.carousel-wrap .slide{
    height: 100%;
    width: 100%;
    background-size: cover;
    position: absolute;
    opacity: 0;
    will-change: opacity;
    transition: 1s ease-in-out;
}
.carousel-wrap .slide.active{
    opacity: 1;
}
.carousel-wrap .slide h1 {
    margin-top: 0px;
    padding-top: 34vh;
    color: white;
    font-weight: 600;
    padding-left: 4rem;
}
.carousel-wrap .slide h5 {
    margin-top: 0px;
    padding-top: 5vh;
    color: white;
    font-weight: 300;
    padding-left: 4rem;
}
.carousel-wrap .see-more {
    text-align: center;
    z-index: 10;
    position: absolute;
    width: 12rem;
    margin-left: calc(50vw - 6rem);
    top: 65vh;
}
.slider-btns {
    position: absolute;
    margin-top: 25vh;
    display: flex;
}
.slider-btns .left-chevron {
    margin-left: 10px;
}
.slider-btns .right-chevron {
    margin-left:calc(100vw - 100px);
}
.slider-control {
    text-align: center;
    z-index: 10;
    position: absolute;
    width: 100vw;
    top:80vh;
}
.slider-control button{
    margin: 0px 5px;
    transition: .3s ease-in-out;
    transform-origin: center;
    transform: scale(.6)
}

.slider-control .btn-floating.active {
    background-color: lightslategray !important;
    transform: scale(1)
}
@media only screen and (max-width:550px){
    .carousel-wrap .slide h1{
    margin-top: 0px;
    padding-top: 29vh;
    }
}
</style>
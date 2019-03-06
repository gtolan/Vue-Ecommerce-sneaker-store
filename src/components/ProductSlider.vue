<template>
<div class="product-line">
    <div class="scroll-control"> 
         <h5>Scroll some sneakers</h5>
         <div class="slider-btns">
            <button @click="scrollLeft" class="btn-floating btn-medium waves-effect waves-light  left-chevron black lighten-2 "><i class="material-icons">chevron_left</i></button>
            <button @click="scrollRight" class="btn-floating btn-medium waves-effect waves-light lighten-3 right-chevron black lighten-2"><i class="material-icons">chevron_right</i></button>
        </div>
        </div>
    <div class="scroll-products">
        
        <div class="scroll-products-wrapper row">
            <div v-for="shoe in shoes" :key="shoe.id" class="product-scroll-item">
                <div class="image-container">
                    <img :src="shoe.img" class="main-img">
                    <img :src="shoe.hoverimg" class="hover-img">
                </div>
                <span class="shoe-title col s8 offset-s1">{{shoe.title}}</span>
                <span class="shoe-price">{{shoe.price | euros}}</span>
                <span class="shoe-color">{{shoe.color}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name:'ProductSlider',
        data() {
            return {
                shoes:[{
                    id:'s1',
                    img:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2015%2F03%2Fnike-air-cortez-forrest-gump-nearly-triples-in-value-over-the-weekend-1.jpg?q=75&w=800&cbr=1&fit=max',
                    hoverimg:'https://dhb3yazwboecu.cloudfront.net/851/zapatillas_nike_cortez_basic_sl_gs_904764_103_0_brutalzapas_l.jpg',
                    price:'120',
                    title:'Nike Air Cortez'
                },{
                    id:'s2',
                    img:'http://www.countrycovers.co.uk/images/countrycovers.co.uk/nike-cortez-black-shoes-mens-shoes-89YK.jpg',
                    hoverimg:'https://media.office.co.uk/medias/sys_master/root/h68/h50/8979303628830.jpg',
                    price:'99',
                    title:'Nike Air Cortez'
                },{
                    id:'s3',
                    img:'https://resources.mandmdirect.com/Images/_default/a/o/4/ao4291_5_cloudzoom.jpg',
                    hoverimg:'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/3092537/2018/6/11/c89a04c1-aed3-4618-8bd9-5049e382a0691528696255059-Men-Adidas-Originals-Casual-Shoes-X_PLR-1981528696251728-1.jpg',
                    price:'120',
                    title:'Nike Air Cortez'
                },{
                    id:'s4',
                    img:'https://media.office.co.uk/medias/sys_master/root/h79/hcf/9142021685278.jpg',
                    hoverimg:'https://drff4istxjic.cloudfront.net/Adidas/Swift-Run/Grey-Four-Core-Black-Footwear-White/Adidas-Swift-Run-Grey-Four-Core-Black-Footwear-White_oP8JI.jpg',
                    price:'120',
                    title:'Adidas run swift',
                    color:'grey'
                }
                ,{
                    id:'s5',
                    img:'https://media.journeys.ca/images/products/1_472061_ZM.JPG',
                    hoverimg:'https://images.prod.meredith.com/product/b8bd7def1ba2ab45711ce0a5b48050a2/1532753482410/l/adidas-originals-swift-run-w-icy-pink-white-black-womens-shoes',
                    price:'120',
                    color:'pink',
                    title:'Adidas run swift'
                },{
                    id:'s6',
                    img:'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/gsuin11ptg5qgktmzoat/air-force-1-07-shoe-JkTGzADv.jpg',
                    hoverimg:'https://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/iot1dbjmzr7z6kfkoxrb/nike-air-force-1-lead-1',
                    price:'120',
                    title:'Nike Air Force One',
                    color:'white'
                }]
            }
        },
        methods:{
            scrollLeft() {
                const ProductSliderButton = document.querySelector('.scroll-products');
                let count = 50;
                function step(timestamp) {
                    count--
                    ProductSliderButton.scrollLeft = (ProductSliderButton.scrollLeft - 6) 
                    if (count > 0) {
                        window.requestAnimationFrame(step);
                    }
                }
                window.requestAnimationFrame(step);

            },
            scrollRight() {
                const ProductSliderButton = document.querySelector('.scroll-products');
                let count = 50;
                function step(timestamp) {
                    count--
                    ProductSliderButton.scrollLeft = (ProductSliderButton.scrollLeft + 6); 
                    if (count > 0) {
                        window.requestAnimationFrame(step);
                    }
                }
                window.requestAnimationFrame(step);
                
            }
        },
        filters: {
            euros: function (value) {
                if (!value) return ''
                return "€" + value;
            }
        }
    }
</script>

<style scoped>
    .scroll-products {
        height: 300px;
        max-height: 300px;
        overflow-x: scroll;
        overflow-y: hidden;
        width: 100vw;
    }

    .product-scroll-item {
        height: 300px;
        width: 300px;
        display: inline-block;
        overflow: hidden;
        cursor: pointer;
    }
    .product-scroll-item .image-container img {
        height: 100%;
        width: 100%;
    }
    .image-container {
            overflow: hidden;
    height: 262px;
    }
    .scroll-products-wrapper {
        overflow-x: scroll;
        overflow-y: hidden;
        height: 300px;
        width: 200%;
        border-bottom: 1px solid lightgray;
    }
    .image-container .hover-img{
        transition: .3s ease-in-out;
    }
    .image-container:hover .hover-img{
        transform: translateY(-100%);
    }
    .image-container .main-img{
        transition: .3s ease-in-out;
    }
    .image-container:hover .main-img{
        transform: translateY(100%);
    }
    .scroll-control {
        width: 300px;
        height: 300px;
        background-color: red;
        display: inline-block;
            padding: 1.5rem;
    }
    .scroll-control h5{
        color: white;
    }
    .scroll-control .slider-btns button {
        margin: 2.5rem;
    }
    .product-line {
        height: 300px;
        overflow: hidden;
        display: grid;
        grid-template-columns: auto auto;
    }
    @media only screen and (max-width:750px){
        .product-line .scroll-control{
            width: 165px;
        }
    }
</style>
<template>
    <div class="row subscribe">
        <div class="toast-sub"></div>
        <form class="col s12">
        <h4 class="subscribe-title">Sign up for News</h4>
        <div class="row">
            <div class="input-field col s10 offset-s1 l6 offset-l3">
                <input placeholder="" id="email" type="text" class="validate">
                <label for="first_name">Enter your email</label>
            </div>
        </div>
        <div class="row col s10 offset-s1 l6 offset-l3">
            <button @click.prevent="subscribeButton"
             class="slategrey btn waves-effect waves-light col s12" >Submit
                <i class="material-icons right">send</i>
            </button>
        </div>
        </form>
    </div>
</template>

<script>
    export default {
        name:'Subscribe',
        data() {
            return {
                subscribed:null
            }
        },
        methods:{
            subscribeButton(){
                let email = document.getElementById('email').value;
                if(email !== ''){
                    let toast = document.querySelector('.toast-sub');
                    toast.classList.add('active')
                    toast.innerText = `Thank you!
                                        ${email} will receive a confirmation email`;
                    let title = document.querySelector('.subscribe-title');
                    title.innerText = "Thank you for subscribing!";
                }
            }
        }

    }
</script>

<style scoped>
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
    input#email{
        border: 6px solid black;
        border-radius: 10px;
            margin-left: -6px;
    }
    button.slategrey {
            background-color: lightslategray !important
    }
    .toast-sub {
            height: auto;
            min-height: 48px;
            line-height: 1.5em;
            word-break: break-all;
            background-color: #a9a9a9b5;
            padding: 10px 25px;
            font-size: 1.1rem;
            font-weight: 300;
            color: #fff;
            transform:translateX(-100%);
            opacity:0;
            visibility:hidden;
            position:absolute;
            
    }
    .toast-sub.active {
        animation:slide-in 4.4s ease-in;
        opacity:1;
        visibility:visible;
    }
    @keyframes slide-in{
        0%{
            transform:translateX(-100%)
        }5%{
            transform:translateX(0%)
        }95%{
            transform:translateX(0%)
        }100%{
            transform:translateX(-100%)
        }
    }
</style>
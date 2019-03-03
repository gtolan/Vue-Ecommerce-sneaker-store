<template>
    <div class="row subscribe">
        <form class="col s12">
        <h4>Sign up for News</h4>
        <div class="row">
            <div class="input-field col s10 offset-s1 l6 offset-l3">
                <input placeholder="" id="email" type="text" class="validate">
                <label for="first_name">Enter your email</label>
            </div>
        </div>
        <div class="row col s10 offset-s1 l6 offset-l3">
            <button class="slategrey btn waves-effect waves-light col s12" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
            </button>
        </div>
        </form>
    </div>
</template>

<script>
    export default {
        name:'Subscribe',

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
</style>
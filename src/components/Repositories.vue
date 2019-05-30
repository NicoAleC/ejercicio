<template>
    <div>
        <h1>HOLAAAAA</h1>
        <button v-on:click="imprimir">Imprimir</button>
    </div>
</template>

<script>
//import Data from "../assets/data.json"
import fs from 'fs'

export default {
    data() {
        return {
            //Data
        }
    },
    methods: {
        imprimir(){
            const file = fs.readFile('../assets/data.json')
            const data = JSON.parse(file)
            console.log(data)
            //console.log(require("../assets/data.json"))
        }
    },
    name: 'repositories'
}
</script>
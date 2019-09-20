import Vue from 'vue'
import Jquery from 'jquery'

if (process.BROWSER_BUILD) { 
    Vue.use(Jquery)
 }


import vue from 'vue'
import vuex from 'vuex'
import modules from '@/store/modules'; 

vue.use(vuex)

export default new vuex.Store({
    strict: true,
    modules
})
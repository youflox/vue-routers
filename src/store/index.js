import Vuex from 'Vuex';
import Vue from 'Vue';
import todos from './modules/todos';

// Load Vues
Vue.use(Vuex);


//Create store
export default new Vuex.store({
    modules: {
        todos
    }
});
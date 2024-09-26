import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            totalPrice: 0,
        }
    },
    mutations: {
        addProduct(state, price) {
            state.totalPrice = state.totalPrice + price;
        }
    },
    actions: {
        addProduct(context, price) {
            context.commit('addProduct',price);
        }
    },
    getters: {
        totalPrice(state) {
            return state.totalPrice;
        }
    }
})

export default store;
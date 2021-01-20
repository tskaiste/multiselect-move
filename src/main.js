import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";

Vue.use(Vuex);

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

const store = new Vuex.Store({
    state: {
        defaultItemsOnLeft: [
            "Item Left 1",
            "Item Left 2",
            "Item Left 3",
            "Item Left 4",
            "Item Left 5",
            "Item Left 6",
        ],
        defaultItemsOnRight: [
            "Item Right 1",
            "Item Right 2",
            "Item Right 3",
            "Item Right 4",
            "Item Right 5",
            "Item Right 6",
        ],
        itemsOnLeft: [],
        itemsOnRight: [],
        selectedLeft: [],
        selectedRight: [],
    },
    getters: {
        isSelected: (state) => ({ type, item }) => {
            let selected = false;
            switch (type) {
                case "left":
                    selected = state.selectedLeft.includes(item);
                    break;

                case "right":
                    selected = state.selectedRight.includes(item);
                    break;

                default:
                    break;
            }
            return selected;
        },
    },
    mutations: {
        populateData(state) {
            state.itemsOnLeft = state.defaultItemsOnLeft;
            state.itemsOnRight = state.defaultItemsOnRight;
        },
        changeSelected(state, { type, item }) {
            switch (type) {
                case "left":
                    if (state.selectedLeft.includes(item)) {
                        state.selectedLeft.splice(state.selectedLeft.indexOf(item), 1);
                    } else {
						// If elements are selected randomly, sort them by default list
                        let tempArray = [];
                        for (let i = 0; i < state.defaultItemsOnLeft.length; i++) {
							if (state.selectedLeft.includes(state.defaultItemsOnLeft[i])) {
								tempArray.push(state.defaultItemsOnLeft[i]);
							}
							if (item == state.defaultItemsOnLeft[i]) {
                                tempArray.push(item);
							}
                        }
                        state.selectedLeft = tempArray;
                    }
                    break;

                case "right":
                    if (state.selectedRight.includes(item)) {
                        state.selectedRight.splice(state.selectedRight.indexOf(item), 1);
                    } else {
                        let tempArray = [];
						// If elements are selected randomly, sort them by default list
                        for (let i = 0; i < state.defaultItemsOnRight.length; i++) {
							if (state.selectedRight.includes(state.defaultItemsOnRight[i])) {
								tempArray.push(state.defaultItemsOnRight[i]);
							}
							if (item == state.defaultItemsOnRight[i]) {
								tempArray.push(item);
							}
                        }
                        state.selectedRight = tempArray;
                    }
                    break;

                default:
                    break;
            }
		},
		// Moves all elements that were selected
        moveOne(state, direction) {
            switch (direction) {
                case "left":
                    for (let i = 0; i < state.selectedRight.length; i++) {
                        let item = state.selectedRight[i];
                        state.itemsOnLeft.push(item);
                        state.itemsOnRight.splice(state.itemsOnRight.indexOf(item), 1);
                        state.selectedRight.splice(i, 1);
                        i--;
                    }
                    break;

                case "right":
                    for (let i = 0; i < state.selectedLeft.length; i++) {
                        let item = state.selectedLeft[i];
                        state.itemsOnRight.push(item);
                        state.itemsOnLeft.splice(state.itemsOnLeft.indexOf(item), 1);
                        state.selectedLeft.splice(i, 1);
                        i--;
                    }
                    break;

                default:
                    break;
            }
        },
		// Moves all elements
        moveAll(state, direction) {
            switch (direction) {
                case "left":
                    for (let i = 0; i < state.itemsOnRight.length; i++) {
                        let item = state.itemsOnRight[i];
                        state.itemsOnLeft.push(item);
                        state.itemsOnRight.splice(state.itemsOnRight.indexOf(item), 1);
                        state.selectedRight.splice(state.selectedRight.indexOf(item), 1);
                        i--;
                    }
                    break;

                case "right":
                    for (let i = 0; i < state.itemsOnLeft.length; i++) {
                        let item = state.itemsOnLeft[i];
                        state.itemsOnRight.push(item);
                        state.itemsOnLeft.splice(state.itemsOnLeft.indexOf(item), 1);
                        state.selectedLeft.splice(state.selectedLeft.indexOf(item), 1);
                        i--;
                    }
                    break;

                default:
                    break;
            }
        },
    },
    actions: {},
});

new Vue({
    store: store,
    render: (h) => h(App),
    created: () => {
        store.commit("populateData");
    },
}).$mount("#app");

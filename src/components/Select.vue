<template>
    <div class="col-xs-12 col-md-5">
        <input
            type="text"
            class="form-control"
            name="search"
            v-model="searchQuery"
            placeholder="Search for cart"
            autocomplete="off"
        />
        <ul class="box">
            <span v-if="filteredItems.length == 0">No results</span>
            <li
                v-for="(item, index) in filteredItems"
                :key="index"
                class="element"
                :class="{'selected': $store.getters.isSelected({type, item})}"
                @click="$store.commit('changeSelected', {type, item})"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Select",
    props: {
        items: Array,
        type: String,
    },
    data() {
        return {
            searchQuery: "",
        };
    },
    computed: {
        filteredItems() {
            return this.items.filter((item) => {
                return item
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase());
            });
        },
    },
};
</script>

<style lang="scss">
    .box {
        border-radius: 5px;
        border: 1px solid #ced4da;
        list-style: none;
        padding: 0;
        margin: 1em 0;
        width: 100%;
    }
    .element {
        text-align: left;
        padding: .5em;
        cursor: pointer;
        &:hover {
            background-color: rgba(0, 172, 172, 0.2);
        }
        &.selected {
            background-color: rgba(0, 172, 172, 0.5);
        }
    }
</style>

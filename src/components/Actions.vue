<template>
    <div class="actions col-xs-12 col-md-2 d-flex justify-content-center align-items-center px-4">
        <button type="button" class="btn btn-gray my-2 mx-2 chevron double-right" @click="$store.commit('moveAll', 'right')"></button>
        <button type="button" class="btn btn-cyan my-2 mx-2 chevron right" @click="$store.commit('moveOne', 'right')"></button>
        <button type="button" class="btn btn-cyan my-2 mx-2 chevron left" @click="$store.commit('moveOne', 'left')"></button>
        <button type="button" class="btn btn-gray my-2 mx-2 chevron double-left" @click="$store.commit('moveAll', 'left')"></button>
    </div>
</template>
<script>
export default {
    name: 'Actions',
    props: {},
    data() {
        return {
        }
    },
    computed: {
        filteredItems() {
            return this.items.filter((item) => {
                return item.toLowerCase().includes(this.searchQuery.toLowerCase())
            })
        }
    }

}
</script>

<style lang="scss">
    $button_gray: #6c757d;
    $button_gray_hover: #51585f;
    $button_cyan: #00acac;
    $button_cyan_hover: #009494;

    .actions {
        flex-direction: row;
        margin-bottom: 1em;

    .btn {
        height: 30px;
        width: 30px;
        transform: rotateZ(90deg);

        &.btn-gray {
            border-color: $button_gray;
            background-color: $button_gray;
            &:hover {
                background-color: $button_gray_hover;
                border-color: $button_gray_hover;
            }
        }
        &.btn-cyan {
            border-color: $button_cyan;
            background-color: $button_cyan;

            &:hover {
                background-color: $button_cyan_hover;
                border-color: $button_cyan_hover;
            }
        }

        &.chevron {
            background-repeat: no-repeat;
            background-position: center;
            &.left {
                background-image: url('../assets/chevron-left.svg');
                background-size: 8px;
            }
            &.double-left {
                background-image: url('../assets/chevron-double-left.svg');
                background-size: 15px;
            }
            &.right {
                background-image: url('../assets/chevron-right.svg');
                background-size: 8px;
            }
            &.double-right {
                background-image: url('../assets/chevron-double-right.svg');
                background-size: 15px;
            }
        }
    }
    }

    @media (min-width: 768px) {
        .actions {
            flex-direction: column;

            .btn {
                transform: rotateZ(0deg);
            }
        }
    }

</style>

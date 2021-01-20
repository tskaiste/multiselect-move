<template>
	<div id="app">
		<div>
			<div class="container">
				<div class="row text-left">
					<p class="col-12">Carts</p>
				</div>
				<div class="row">
					<Select :items="$store.state.itemsOnLeft" :type="'left'"></Select>
					<Actions></Actions>
					<Select :items="$store.state.itemsOnRight" :type="'right'"></Select>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Select from "./components/Select.vue";
import Actions from "./components/Actions.vue";

export default {
	name: "App",
	components: {
		Select,
		Actions
	},
    data() {
        return {
        }
    },
};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>

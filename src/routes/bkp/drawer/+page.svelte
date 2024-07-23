<script>
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';
	import Footer from '$lib/components/layout/Footer.svelte_bkp';
	import SideBar from '$lib/components/layout/SideBar.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	let isDrawerOpen = false;
</script>

<div class="app">
	<div class="drawer lg:drawer-open">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} />
		<div class="drawer-content flex flex-col">
			<!-- Header -->
			<Header />

			<!-- Page content here -->
			<main>
				<DefaultBodyContainer>
					<slot />
				</DefaultBodyContainer>
			</main>

			<!-- Footer -->
			<Footer />
		</div>

		<SideBar />
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		/* margin-left: 264px; */
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

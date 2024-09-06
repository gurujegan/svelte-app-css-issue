<script>
	import '$lib/assets/css/app.css';	
	

	import Footer from '$lib/components/layout/Footer.svelte';
	import SideBar from '$lib/components/layout/SideBar.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import { setContext } from 'svelte';
	import { user } from '$lib/stores/UserStore.js';

	setContext('user', user);

	let isDrawerOpen = false;
</script>

<div class="app">
	<div
		class="bg-white [&.dark]:bg-main-dark font-jost relative text-[15px] font-normal leading-[1.5] m-0 p-0"
	>
		<div
			class="relative flex flex-col flex-1 xl:ps-[280px] xl:[&.expanded]:ps-[80px] xl:[&.TopExpanded]:ps-[0px] !transition-all !duration-[0.2s] ease-linear delay-[0s] bg-normalBG dark:bg-main-dark"
			id="content"
		>
			<!-- Header -->
			<Header />

			<!-- Page content here -->
			<!-- Main Content -->
			<main class="bg-normalBG dark:bg-main-dark">
				<div class=" mx-[30px] min-h-[calc(100vh-195px)] mb-[30px] ssm:mt-[30px] mt-[15px]">
					<div class="grid grid-cols-12 gap-[25px]">
						<div class="col-span-12">
							<div class="p-[25px] bg-white rounded-10 dark:bg-box-dark">
								<slot />
								<h1 class="mb-0 text-lg text-dark dark:text-subtitle-dark">Skeleton Page</h1>
							</div>
						</div>
					</div>
				</div>
			</main>
			<!-- End: Main Content -->

			<!-- Footer -->
			<Footer />
		</div>

		<SideBar />
	</div>
</div>

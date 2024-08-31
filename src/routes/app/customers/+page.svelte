<script>
	import { writable } from 'svelte/store';
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';
	import CustomerStore, { customers } from '$lib/stores/CustomerStore';
	import { goto } from '$app/navigation';
	import ListRecords from '$lib/components/elements/ListRecords.svelte';
	import { page } from '$app/stores';

	const formElements = CustomerStore.formElements;
</script>

<div class="flex flex-col">
	<div class="row1 flex justify-end">

		<button class="capitalize bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-title-dark text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] [&amp;>span]:inline-flex gap-[6px] transition duration-300 ease-in-out"
			on:click={() => goto(`${$page.route.id}/create`)}>
			<i class="uil uil-estate"></i>
			<span> Create Customer </span>
		 </button>
		
	</div>
	<div class="row2">
		<h1 class="font-bold text-xl">Total Customers: {$customers.length}</h1>
		<br />

		<!-- ListPage START-->
		<ListRecords {formElements} store={customers} />
		<!-- ListPage END-->
	</div>
</div>

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
		
		<button class="btn btn-info w-1/4" on:click={() => goto(`${$page.route.id}/create`)}
			>(+) Create Customer</button
		>
	</div>
	<div class="row2">
		<h1 class="font-bold text-xl">Total Customers: {$customers.length}</h1>
		<br />

		<!-- ListPage START-->
		<ListRecords {formElements} store={customers} />
		<!-- ListPage END-->
	</div>
</div>

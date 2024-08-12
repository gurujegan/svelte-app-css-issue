<script>
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';
	import { goto } from '$app/navigation';
	import CustomerAccountStore, { customerAccounts } from '$lib/stores/CustomerAccountStore.js';
	import { writable } from 'svelte/store';
	import ListRecords from '$lib/components/elements/ListRecords.svelte';
	import { page } from '$app/stores';

	const formElements = CustomerAccountStore.formElements;
</script>

<div class="flex flex-col">
	<div class="row1 flex justify-end">
		<button class="btn btn-info w-1/4" on:click={() => goto(`${$page.route.id}/create`)}
			>(+) Create Account</button
		>
	</div>
	<div class="row2">
		<h1 class="font-bold text-xl">Total Customers: {$customerAccounts.length}</h1>
		<br />

		<!-- List START-->
		<ListRecords {formElements} store={customerAccounts} />
		<!-- List END-->
	</div>
</div>

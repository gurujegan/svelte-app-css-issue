<script>
	import LabelInput from '$lib/components/elements/LabelInput.svelte'
	import { getContext } from 'svelte'
	import { customers } from '$lib/stores/CustomerStore'
	import CustomerAccountStore,{ customerAccounts } from '$lib/stores/CustomerAccountStore.js'
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte'

	let user = getContext('user');

	/** @type {import('./$types').PageData} */
	export let data;

	let formElements = [
		{ id: 'bankAccNo', value: 'Bank Account No' },
		{ id: 'bankName', value: 'Bank Name' },
	]

	let formData = {};

	function createCustomerAccount() {

		CustomerAccountStore.addCustomerAccount(formData);
		formData = {}
	}
</script>
<!-- <nav>
	<div class="navbar-center">
		<div class="flex flex-rows justify-center gap-4">
			<label class="label mb-2 text-sm font-medium" for="cust-name">Customer Name</label>
			<select class="select select-bordered w-1/4" bind:value={formData.orgId}>
				<option disabled selected>Select Org</option>
				<option value={$org.orgId}>{$org.orgName}</option>
				<option value="2">Org2</option>
			</select>
		</div>
	</div>
</nav> -->


	<form class="form-control flex flex-row justify-center">
		<div class="w-1/2  gap-2">
			<div class="rounded grid grid-rows-3 gap-2">
				<div class="w-full">
					<label class="label mb-2 text-sm font-medium" for="cust-name">Customer</label>
					<select class="select select-bordered w-full" bind:value={formData.custId}>
						<option disabled selected>Select Customer</option>
						{#each $customers as customer}
						<option value={customer.id}>{customer.customerName} - {customer.panId}</option>
						{/each}
					</select>
				</div>

				{#each formElements as formElement}
					<LabelInput {formElement} bind:value={formData[formElement.id]}></LabelInput>
				{/each}
			</div>

			<div class="flex flex-row justify-around w-full gap-2">
					<button
						class="btn btn-info transition ease-in-out delay-150
		hover:-translate-y-1 hover:scale-110
		hover:bg-indigo-500 hover:text-white
		 duration-300 h-8 rounded-md w-1/2"
						on:click={createCustomerAccount}
					>
						Create Customer Account
					</button>

					<button
						class="btn btn-info transition ease-in-out delay-150
		hover:-translate-y-1 hover:scale-110
		hover:bg-indigo-500 hover:text-white
		 duration-300 h-8 rounded-md w-1/2"
						on:click={createCustomerAccount}
					>
						Reset
					</button>
			</div>
		</div>
	</form>


{JSON.stringify($customerAccounts)}

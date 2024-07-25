<script>
	import LabelInput from '$lib/components/elements/LabelInput.svelte';
	import { customerAccount } from '$lib/stores/CustomerAccountStore.js';
	import { getContext } from 'svelte';
	import { org } from '$lib/stores/OrgStore.js';
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';

	let user = getContext('user');

	/** @type {import('./$types').PageData} */
	export let data;

	let formElements = [
		{ id: 'panId', value: 'Pan Id' },
		{ id: 'customerName', value: 'Customer Name' },
		{ id: 'bankAccNo', value: 'Bank Account No' },
		{ id: 'bankName', value: 'Bank Name' },
		{ id: 'email', value: 'Email' },
		{ id: 'mobNo', value: 'Mob no' }
	];

	let formData = {
		// panId: '',
		// customerName: '',
		// bankAccNo: '',
		// bankName: '',
		// email: '',
		// mobNo: '',
		userId: $user.userId,
		orgId: '',
		createdAt: Date.now().toString(),
		updatedAt: ''
	};

	function createCustomerAccount() {
		console.log('SDsfd');
		customerAccount.set(formData);
	}
</script>

<DefaultBodyContainer>
	<form class="form-control w-full rounded flex-row flex-wrap grid grid-cols-2">
		<div class="w-11/12">
			<label class="label mb-2 text-sm font-medium">Org Name</label>
			<select class="select select-bordered w-full" bind:value={formData.orgId}>
				<option disabled selected>Select Org</option>
				<option value={$org.orgId}>{$org.orgName}</option>
				<option value="2">Org2</option>
			</select>
		</div>

		{#each formElements as formElement}
			<LabelInput formElement={formElement} bind:value={formData[formElement.id]}></LabelInput>
		{/each}

		<div class="w-11/12"></div>

		<div class="mt-10 w-11/12">
			<button
				class="w-full btn btn-info transition ease-in-out delay-150
    hover:-translate-y-1 hover:scale-110
    hover:bg-indigo-500 hover:text-white
     duration-300 h-8 rounded-md"
				on:click={createCustomerAccount}
			>
				Create Customer Account
			</button>
		</div>

		<div class="mt-10 w-11/12">
			<button
				class="w-full btn btn-info transition ease-in-out delay-150
    hover:-translate-y-1 hover:scale-110
    hover:bg-indigo-500 hover:text-white
     duration-300 h-8 rounded-md"
				on:click={createCustomerAccount}
			>
				Reset
			</button>
		</div>
	</form>
</DefaultBodyContainer>

{JSON.stringify($customerAccount)}

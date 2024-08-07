<script>
	import LabelInput from '$lib/components/elements/LabelInput.svelte';
	import { customerAccount } from '$lib/stores/CustomerAccountStore.js';
	import { getContext } from 'svelte';
	import { org } from '$lib/stores/OrgStore.js';
	import customerStore,{newCustomer} from '$lib/stores/CustomerStore.js';
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';


	let user = getContext('user');

	/** @type {import('./$types').PageData} */
	export let data;

	let formElements = [
		{ id: 'customerName', value: 'Customer Name' },
		// { id: 'bankAccNo', value: 'Bank Account No' },
		// { id: 'bankName', value: 'Bank Name' },
		{ id: 'mobNo', value: 'Mob no' },
		{ id: 'email', value: 'Email' },
		{ id: 'panId', value: 'Pan Id' },
	];

	let formData = {
		// panId: '',
		// customerName: '',
		// bankAccNo: '',
		// bankName: '',
		// email: '',
		// mobNo: '',
		userId: $user.userId,
		orgId: $org.orgId,
		createdAt: Date.now().toString(),
		updatedAt: ''
	};


	function createCustomerAccount() {
		console.log('SDsfd');
		// customerAccount.set(formData);
		customerStore.addNewCustomer(formData)
	}
</script>


<DefaultBodyContainer>
	<form class="form-control">
		<div class="grid grid-rows-2 w-full gap-2">
			<div class="rounded grid grid-cols-2 gap-2">
				<!-- <div class="w-full">
					<label class="label mb-2 text-sm font-medium" for="orgname">Org Name</label>
					<select class="select select-bordered w-full" bind:value={formData.orgId}>
						<option disabled selected>Select Org</option>
						<option value={$org.orgId}>{$org.orgName}</option>
						<option value="2">Org2</option>
					</select>
				</div> -->

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
						Create Customer
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
</DefaultBodyContainer>

{JSON.stringify($customerStore)}

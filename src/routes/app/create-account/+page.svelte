<script>
	import CenteredBodyContainer from '$lib/components/container/CenteredBodyContainer.svelte';
	import LabelInput from '$lib/components/elements/LabelInput.svelte';
	import { customerAccount } from '$lib/stores/CustomerAccountStore.js';
	import { getContext } from 'svelte';
	import { org } from '$lib/stores/OrgStore.js';

	let user = getContext('user');

	/** @type {import('./$types').PageData} */
	export let data;

	let formData = {
		panId: '',
		customerName: '',
		bankAccNo: '',
		bankName: '',
		email: '',
		mobNo: '',
		userId: $user.userId,
		orgId: '',
		createdAt: Date.now().toString(),
		updatedAt: ''
	};

	function createCustomerAccount() {
		
        console.log("SDsfd");
        customerAccount.set(formData);
	}
</script>

<CenteredBodyContainer>
	<form class="form-control md:w-1/2 w-full rounded">
		<label class="label mb-2 text-sm font-medium">Org Name</label>
		<select class="select select-bordered w-full max-w-xs" bind:value={formData.orgId}>
			<option disabled selected>Select Org</option>
			<option value={$org.orgId}>{$org.orgName}</option>
			<option value="2">Org2</option>
		</select>
		<LabelInput label="Pan Id" bind:value={formData.panId}></LabelInput>
		<LabelInput label="Customer Name" bind:value={formData.customerName}></LabelInput>
		<LabelInput label="Bank Account No" bind:value={formData.bankAccNo}></LabelInput>
		<LabelInput label="Bank Name" bind:value={formData.bankName}></LabelInput>
		<LabelInput label="E-Mail" bind:value={formData.email}></LabelInput>
		<LabelInput label="Mobile No" bind:value={formData.mobNo}></LabelInput>
		<button class="btn btn-info" on:click={createCustomerAccount}>Create Account</button>
	</form>
</CenteredBodyContainer>

{JSON.stringify($customerAccount)}

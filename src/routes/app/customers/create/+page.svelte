<script>
	import LabelInput from '$lib/components/elements/LabelInput.svelte';
	import { getContext, setContext } from 'svelte';
	import { orgList, currentOrg } from '$lib/stores/OrgStore.js';
	import CustomerStore from '$lib/stores/CustomerStore.js';
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';
	import BackToParentNav from '$lib/components/elements/BackToParentNav.svelte';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	let customers = CustomerStore.customers
	let user = getContext('user');

	setContext('listPageUrl', '/app/customers');

	/** @type {import('./$types').PageData} */
	export let data;

	let formElements = CustomerStore.formElements;
	let newCustomer = {}

	function createCustomerAccount() {

		CustomerStore.addCustomer(newCustomer)
		newCustomer = {}
	}

	const { form, errors, state, isValid, isSubmitting, isValidating, touched, handleChange, handleSubmit, handleReset } = createForm({
		initialValues: {
			customerName: '',
			mobNo: '',
			email: '',
			panId: '',
			aadhaarNo: ''
		},
		validationSchema: yup.object().shape({
			customerName: yup
			.string()
			.required(),
			mobNo: yup.number().required()
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		}
	});

</script>

{JSON.stringify($touched)}
<DefaultBodyContainer>
	<BackToParentNav />
	<form class="form-control" on:submit={handleSubmit}>
		<div class="grid grid-rows-2 w-full gap-2">
			<div class="rounded grid grid-cols-2 gap-2">
				<!-- <div class="w-full">
					<label class="label mb-2 text-sm font-medium" for="orgname">Org Name</label>
					<select class="select select-bordered w-full" bind:value={newCustomer.orgId}>
						<option disabled selected>Select Org</option>
						<option value={$org.orgId}>{$org.orgName}</option>
						<option value="2">Org2</option>
					</select>
				</div> -->

				{#each formElements as formElement}
					<LabelInput formElement={formElement} handleChange={handleChange} errors={$errors} touched={$touched} bind:value={newCustomer[formElement.id]}></LabelInput>
				{/each}
			</div>

			<div class="flex flex-row justify-around w-full gap-2">
					<button type="submit"
						class="btn btn-info transition ease-in-out delay-150
		hover:-translate-y-1 hover:scale-110
		hover:bg-indigo-500 hover:text-white
		 duration-300 h-8 rounded-md w-1/2"

					>
						Create Customer
					</button>

					<button
						class="btn btn-info transition ease-in-out delay-150
		hover:-translate-y-1 hover:scale-110
		hover:bg-indigo-500 hover:text-white
		 duration-300 h-8 rounded-md w-1/2"
						on:click={handleReset}
					>
						Reset
					</button>
			</div>
		</div>
	</form>
</DefaultBodyContainer>

{JSON.stringify($currentOrg.orgId)}
{JSON.stringify($customers)}
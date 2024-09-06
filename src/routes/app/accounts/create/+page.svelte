<script>
	import LabelInput from '$lib/components/elements/LabelInput.svelte'
	import { getContext, setContext } from 'svelte'
	import { customers } from '$lib/stores/CustomerStore'
	import CustomerAccountStore,{ customerAccounts } from '$lib/stores/CustomerAccountStore.js'
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte'
	import BackToParentNav from '$lib/components/elements/BackToParentNav.svelte'
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	
	let user = getContext('user');

	setContext('listPageUrl', '/app/accounts');

	/** @type {import('./$types').PageData} */
	export let data;

	let formElements = CustomerAccountStore.formElements;

	let formData = {};

	function createCustomerAccount(values) {

		CustomerAccountStore.addCustomerAccount(values);
		formData = {}
	}

	const formLib = createForm({
		initialValues: {
			bankAccNo : '',
			bankName : '',
			ifscCode : ''
		},
		validationSchema: yup.object().shape({
			custId: yup.string().oneOf($customers.map((c) => c.id),"Select Customer").required(),
			bankAccNo: yup.string().required(),
			bankName: yup.string().required(),
			ifscCode: yup.string().required()
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values));
			createCustomerAccount(values)
		}
	});

	const { form, errors, handleChange } = formLib
</script>

<DefaultBodyContainer>
	<BackToParentNav />
	<form class="form-control flex flex-row justify-center" on:submit={formLib.handleSubmit}>
		<div class="w-1/2  gap-2">
			<div class="rounded grid grid-rows-3 gap-2">
				<div class="w-full">
		
					<label class="label mb-2 text-sm font-medium" for="cust-name">Customer</label>
					<select class="select select-bordered w-full" name="custId"
					on:change={handleChange} bind:value={$form.custId}>
						<!-- <option disabled selected>Select Customer</option> -->
						 <option/>
						{#each $customers as customer}
						<option value={customer.id}>{customer.customerName} - {customer.panId}</option>
						<!-- <option value={customer.id}>{customer.customerName}</option> -->
						{/each}
					</select>
					{#if $errors.custId}
						<small>{$errors.custId}</small>
					{/if}
				</div>

				{#each formElements as formElement}
					<LabelInput {formElement} {formLib}  ></LabelInput>
				{/each}
			</div>

			<div class="flex flex-row justify-around w-full gap-2">
					<button	class="btn btn-info w-1/2"> Create Customer Account</button>

					<button class="btn btn-info w-1/2" on:click={formLib.handleReset}>Reset</button>
			</div>
		</div>
	</form>
</DefaultBodyContainer>


{JSON.stringify($customerAccounts)}

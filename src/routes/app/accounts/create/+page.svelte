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

					<div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-home3" role="tabpanel" data-te-tab-active aria-labelledby="tabs-home-tab3">
						<div class="flex flex-col gap-y-5">
						   <div class="pb-4">
					 
							<label class="label mb-2 text-sm font-medium
							inline-flex items-center w-[178px] mb-2 text-sm font-medium capitalize text-dark dark:text-title-dark" for="">Customer Name</label>
							  <div>
								
								 <select data-te-select-init data-te-select-size="lg">
									{#each $customers as customer}
						   <option value={customer.id}>{customer.customerName} - {customer.panId}</option>
						   <!-- <option value={customer.id}>{customer.customerName}</option> -->
						   {/each}
									<option value="1">Option 1</option>
									<option value="2">Option 2</option>
									<option value="3">Option 3</option>
									<option value="4">Option 4</option>
									<option value="5">Option 5</option>
									<option value="6">Option 6</option>
								 </select>
								 {#if $errors.custId}
						   <small>{$errors.custId}</small>
						   {/if}
							  </div>
					 
					 
						   </div>
						</div>
					 </div>
					  
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

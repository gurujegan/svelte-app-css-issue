<script>
	import LabelInput from '$lib/components/elements/LabelInput.svelte';
	import { getContext, setContext } from 'svelte';
	import { orgList, currentOrg } from '$lib/stores/OrgStore.js';
	import CustomerStore from '$lib/stores/CustomerStore.js';
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';
	import BackToParentNav from '$lib/components/elements/BackToParentNav.svelte';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	let customers = CustomerStore.customers;
	let user = getContext('user');

	setContext('listPageUrl', '/app/customers');

	/** @type {import('./$types').PageData} */
	export let data;

	let formElements = CustomerStore.formElements;

	function createCustomerAccount(values) {
		CustomerStore.addCustomer(values);
	}

	const formLib = createForm({
		initialValues: {
			customerName: '',
			mobNo: '',
			email: '',
			panId: '',
			aadhaarNo: ''
		},
		validationSchema: yup.object().shape({
			customerName: yup.string().required(),
			mobNo: yup.string().required(),
			email: yup.string().email().required(),
			panId: yup.string().required(),
			aadhaarNo: yup.string().required()
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values));
			createCustomerAccount(values)
		}
	});

</script>

<DefaultBodyContainer>
	<BackToParentNav />
	<form class="form-control" on:submit={formLib.handleSubmit}>
		<div class="grid grid-rows-2 w-full gap-2">
			<div class="rounded grid grid-cols-2 gap-2">

				{#each formElements as formElement}
					<LabelInput {formElement} {formLib}></LabelInput>
				{/each}
				
			</div>

			<div class="flex flex-row justify-around w-full gap-2">
				<button class="btn btn-info rounded-md w-1/2"> Create Customer </button>

				<button class="btn btn-info rounded-md w-1/2" on:click={formLib.handleReset}> Reset </button>
			</div>
		</div>
	</form>
</DefaultBodyContainer>

{JSON.stringify($currentOrg.orgId)}
{JSON.stringify($customers)}

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
			mobNo: yup.string().min(10, 'Enter your 10 digit mobile number').max(10).required(),
			email: yup.string().email().required(),
			panId: yup
			.string()
			.required("Please enter PAN ID")
			.matches('^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$', "Invalid Pan Id"),
			aadhaarNo: yup
			.string()
			.required()
			.matches('^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$', "Invalid Aadhaar"),
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
				<button class="btn btn-info rounded-md w-1/2
				capitalize bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-title-dark text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px] [&amp;>span]:inline-flex gap-[6px] transition duration-300 ease-in-out">
				 Create Customer </button>

				<button class="btn btn-info rounded-md w-1/2
				px-[30px] h-[44px] text-body dark:text-subtitle-dark bg-regular dark:bg-box-dark-up border-regular dark:border-box-dark-up font-medium rounded-4 text-sm sm:w-auto text-center inline-flex items-center justify-center capitalize transition-all duration-300 ease-linear hover:opacity-60
				"data-te-ripple-init="" data-te-ripple-color="dark" style="" on:click={formLib.handleReset}>
				 Reset </button>
			</div>
		</div>
	</form>
</DefaultBodyContainer>

<!-- {JSON.stringify($currentOrg.orgId)}
{JSON.stringify($customers)} -->

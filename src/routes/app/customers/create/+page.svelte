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


	<BackToParentNav />
	<!-- <form class="form-control" on:submit={formLib.handleSubmit}>
		<div class="grid grid-rows-2 w-full gap-2
			sm:grid sm:grid-cols-12 max-sm:flex max-sm:flex-col gap-[25px]">

			  {#each formElements as formElement}
			  <div class="col-span-12 xl:col-span-6">
				<LabelInput {formElement} {formLib}></LabelInput>
			  </div>
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
	 </form> -->

	 <div class="col-span-12">
		<div class="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative">
		   <div
			  class="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto border-b border-regular dark:border-box-dark-up">
			  <h1
				 class="mb-0 inline-flex items-center py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark capitalize">
				 Multiple Column
			  </h1>
		   </div>
		   <div class="p-[25px]">
			  <form class="form-control" on:submit={formLib.handleSubmit}>
				 <div class="grid grid-rows-2 w-full gap-2
					sm:grid sm:grid-cols-12 max-sm:flex max-sm:flex-col gap-[25px]">

					  {#each formElements as formElement}
					  <div class="col-span-12 xl:col-span-6">
					   <LabelInput {formElement} {formLib}></LabelInput>
					  </div>
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
			   </form>
		   </div>
		</div>
	 </div>


<!-- {JSON.stringify($currentOrg.orgId)}
{JSON.stringify($customers)} -->

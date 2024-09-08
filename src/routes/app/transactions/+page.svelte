<script>
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';
	import LabelInput from '$lib/components/elements/LabelInput.svelte';
	import { writable } from 'svelte/store';
	import CustomerStore, { customers } from '$lib/stores/CustomerStore';
	import CustomerAccountStore, { customerAccounts } from '$lib/stores/CustomerAccountStore.js';
	import TransactionAccountStore from '$lib/stores/TransactionAccountStore';
	import ListRecords from '$lib/components/elements/ListRecords.svelte';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	let formElements = TransactionAccountStore.formElements;

	/** @type {import('./$types').PageData} */
	export let data;

	const formLib = createForm({
		initialValues: {
			date: '',
			description: '',
			type: '',
			amount: '',
			category: ''
		},
		validationSchema: yup.object().shape({
			date: yup.string().required(),
			description: yup.string().required(),
			type: yup.string().required(),
			amount: yup.number().required(),
			category: yup.string().required()
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values));
			TransactionAccountStore.addTransaction(values);
		}
	});

	const { form, state, errors, handleChange, handleSubmit, handleReset } = formLib;

	const savedTxns = TransactionAccountStore.transactions;

	const selectedBankAccount = writable({});

	// $: bankAccNo = $selectedBankAccount

	// To hold selected customer & respective accounts
	const selectedCustomer = writable({});
	$selectedCustomer.accounts = [];

	function deleteRow(index) {
		$savedTxns.splice(index, 1);
		$savedTxns = $savedTxns;
	}

	function accountOnChange() {
		$selectedBankAccount = {};
		selectedBankAccount.set(CustomerAccountStore.getCustomerAccountById($form.bankAccId));
	}

	function customerOnChange() {
		selectedCustomer.set(CustomerStore.getCustomerById($form.custId));

		$selectedBankAccount = {};
		$selectedCustomer.accounts = [];
		$selectedCustomer.accounts = CustomerAccountStore.getCustomerAccountsByCustId($form.custId);
	}
</script>

<div class="flex gap-4">
	<div class="col-1 flex flex-col gap-4 h-full w-8/12">
		<div class="row-1 flex gap-4">
			<div class="item1 flex flex-col gap-8 justify-center w-1/2">
				<div class="flex justify-between items-baseline">
					<label class="label text-sm font-medium" for="cust-name">Customer</label>
					<select
						class="select select-bordered w-1/2"
						bind:value={$form.custId}
						on:change={customerOnChange}
					>
						<option disabled selected>Select Customer</option>
						{#each $customers as customer}
							<option value={customer.id}>{customer.customerName} - {customer.panId}</option>
						{/each}
					</select>
				</div>

				<div class="flex justify-between items-baseline">
					<label class="label text-sm font-medium w-1/2" for="accNo">Bank Account Number</label>
					<select
						class="select select-bordered w-1/2"
						bind:value={$form.bankAccId}
						on:change={accountOnChange}
					>
						<option selected>Select Account</option>
						{#each $selectedCustomer.accounts as customerAccount}
							<option value={customerAccount.id}
								>{customerAccount.bankAccNo}-{customerAccount.bankName}</option
							>
						{/each}
					</select>
				</div>
			</div>
			<div class="item2 w-1/2">
				<!-- customerName: {$customerAccounts.customerName}
				bankAccNo: {$customerAccounts.bankAccNo}
				bankName:{$customerAccounts.bankName}
				panId:{$customerAccounts.panId} -->
				<div class="card bg-lime-300 shadow-xl">
					<div class="card-body">
						<h2 class="card-title">Customer Name: {$selectedCustomer.customerName}</h2>
						<p>Customer Account:{$selectedBankAccount?.bankAccNo}</p>
					</div>
				</div>
			</div>
		</div>

		<div class="row-2">
			<div class="relative shadow-md sm:rounded-lg">
				<ListRecords {formElements} store={savedTxns} />
			</div>
		</div>
	</div>

	<div class="col-2 w-4/12 flex flex-col">
		<h1 class="text-2xl font-semibold">Add New Transaction</h1>
		<br />
		<form class="form-control gap-8" on:submit={handleSubmit}>
			<div class="">
				<input
					type="date"
					class="input input-bordered focus:bg-orange-100 focus:border-solid focus:border-2 focus:border-sky-500 w-full"
					id="birthday"
					name="date"
					bind:value={$form.date}
					on:click={handleChange}
					on:blur={handleChange}
				/>
				{#if $errors.date}
					<small>{$errors.date}</small>
				{/if}
			</div>

			<div class="">
				<input
					name="description"
					type="text"
					placeholder="Txn desc"
					class="input input-bordered focus:bg-orange-100 focus:border-solid focus:border-2 focus:border-sky-500 w-full"
					bind:value={$form.description}
					on:click={handleChange}
					on:blur={handleChange}
				/>

				{#if $errors.description}
					<small>{$errors.description}</small>
				{/if}
			</div>

			<div class="flex flex-row justify-around">
				<div class="flex gap-2	">
					<input
						type="radio"
						id="debit"
						value="debit"
						name="type"
						class="radio radio-secondary"
						checked="checked"
						bind:group={$form.type}
						on:click={handleChange}
						on:blur={handleChange}
					/>
					<label for="debit1">Debit</label>
				</div>

				<div class="flex gap-2">
					<input
						type="radio"
						id="credit"
						value="credit"
						name="type"
						class="radio radio-secondary mb-2"
						bind:group={$form.type}
						on:click={handleChange}
						on:blur={handleChange}
					/>
					<label for="credit1">Credit</label>
				</div>
				{#if $errors.type}
					<small>{$errors.type}</small>
				{/if}
			</div>

			<div>
				<input
					name="amount"
					type="text"
					placeholder="Enter amount"
					class="input input-bordered focus:bg-orange-100 focus:border-solid focus:border-2 focus:border-sky-500 w-full"
					bind:value={$form.amount}
					on:click={handleChange}
					on:blur={handleChange}
				/>
				{#if $errors.amount}
					<small>{$errors.amount}</small>
				{/if}
			</div>

			<div>
				<input
					name="category"
					type="text"
					placeholder="Category of txn"
					class="input input-bordered focus:bg-orange-100 focus:border-solid focus:border-2 focus:border-sky-500 w-full"
					bind:value={$form.category}
					on:click={handleChange}
					on:blur={handleChange}
				/>
				{#if $errors.category}
					<small>{$errors.category}</small>
				{/if}
			</div>

			<div class="flex flex-row justify-around w-full gap-2">
				<button class="btn btn-info rounded-md w-1/2"> Add </button>

				<button
					class="btn btn-warning transition ease-in-out delay-150
hover:-translate-y-1 hover:scale-110
hover:bg-indigo-500 hover:text-white
 duration-300 h-8 rounded-md w-1/2"
					on:click={handleReset}
				>
					Reset
				</button>
			</div>
		</form>
	</div>
</div>

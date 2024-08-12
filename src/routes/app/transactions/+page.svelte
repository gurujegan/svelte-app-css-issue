<script>
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';
	import LabelInput from '$lib/components/elements/LabelInput.svelte';
	import { writable } from 'svelte/store';
	import CustomerAccountStore, { customerAccounts } from '$lib/stores/CustomerAccountStore.js';

	/** @type {import('./$types').PageData} */
	export let data;

	const savedTxns = writable([]);

	const selectedCustomerAccount = writable({});

	let newItem = { description: '', amount: '', category: '' };

	function deleteRow(index) {
		$savedTxns.splice(index, 1);
		$savedTxns = $savedTxns;
	}

	function addNewTxn() {
		savedTxns.set([...$savedTxns, newItem]);
		newItem = { description: '', amount: '', category: '' };
	}

	function getCustomerAccount() {
		selectedCustomerAccount.set(CustomerAccountStore.getCustomerAccountById(formData.id));
	}

	let formData = {
		isChecked: false
	};
</script>

<div class="flex flex-col h-full">
	<div class="row1">
		<div class="grid grid-rows-3 grid-flow-col gap-4">
			<div class="grid gap-4 row-span-3">
				<div class="flex justify-evenly">
					<label class="label text-sm font-medium w-1/2" for="accNo">Bank Account Number</label>
					<select
						class="select select-bordered w-1/2"
						bind:value={formData.id}
						on:change={getCustomerAccount}
					>
						<option disabled selected>Select Account</option>
						{#each $customerAccounts as customerAccount}
							<option value={customerAccount.id}
								>{customerAccount.bankAccNo}-{customerAccount.bankName}</option
							>
						{/each}
					</select>
				</div>
			</div>
			<div class="col-span-2">
				customerName: {$customerAccounts.customerName}
				bankAccNo: {$customerAccounts.bankAccNo}
				bankName:{$customerAccounts.bankName}
				panId:{$customerAccounts.panId}
			</div>
		</div>
	</div>

	<div class="row2 flex flex-row gap-1 h-full">
		<div class="relative shadow-md sm:rounded-lg w-9/12">
			<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead
					class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
				>
					<tr>
						<th scope="col" class="p-4">
							<div class="flex items-center">
								<input
									id="checkbox-all"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label for="checkbox-all" class="sr-only">checkbox</label>
							</div>
						</th>
						<th scope="col" class="px-6 py-3"> #Id </th>
						<th scope="col" class="px-6 py-3"> Description </th>
						<th scope="col" class="px-6 py-3"> Amount </th>
						<th scope="col" class="px-6 py-3"> Category </th>
						<th scope="col" class="px-6 py-3"> Action </th>
					</tr>
				</thead>
				<tbody>
					{#each $savedTxns as txn, i}
						<tr
							class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							<td class="w-4 p-4">
								<div class="flex items-center">
									<input
										id="checkbox-table-1"
										type="checkbox"
										class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label for="checkbox-table-1" class="sr-only">checkbox</label>
								</div>
							</td>
							<td class="px-6 py-4">
								{txn.id}
							</td>
							<td class="px-6 py-4">
								{txn.description}
								<!-- <input
                                        type="text"
                                        placeholder="Type here"
                                        class="input input-bordered mb-4"
                                        bind:value={txn.description}
                                    /> -->
							</td>
							<td class="px-6 py-4">
								{txn.amount}
							</td>
							<td class="px-6 py-4">
								{txn.category}
							</td>
							<td class="px-6 py-4">
								<a
									href="#/"
									class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
									on:click={() => addRow(txn)}
									>Save
								</a>
								<a
									href="#/"
									class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
									on:click={() => deleteRow(i)}
									>Delete
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="w-3/12 flex flex-col items-center">
            <h1 class="text-2xl">Add New Transaction</h1>
            <br>
			<form class="form-control">
				<div class="mb-4">
					<input
						type="date"
						class="input input-bordered focus:bg-orange-100 focus:border-solid focus:border-2 focus:border-sky-500"
						id="birthday"
						name="Date"
					/>
				</div>
				{#each Object.entries(newItem) as [key, value]}
					<div class="mb-4">
						<!-- <label class="label mb-2 text-sm font-medium" for={key}
							>{key[0].toUpperCase() + key.substr(1)}</label
						> -->
						<input
							name={key}
							type="text"
							placeholder={key[0].toUpperCase() + key.substr(1)}
							class="input input-bordered focus:bg-orange-100 focus:border-solid focus:border-2 focus:border-sky-500"
							bind:value={newItem[key]}
						/>
					</div>
				{/each}
                <div class="flex flex-row justify-around w-full gap-2">
					<button
						class="btn btn-info transition ease-in-out delay-150
		hover:-translate-y-1 hover:scale-110
		hover:bg-indigo-500 hover:text-white
		 duration-300 h-8 rounded-md w-1/2"
						on:click={null}
					>
						Add
					</button>

					<button
						class="btn btn-warning transition ease-in-out delay-150
		hover:-translate-y-1 hover:scale-110
		hover:bg-indigo-500 hover:text-white
		 duration-300 h-8 rounded-md w-1/2"
						on:click={null}
					>
						Reset
					</button>
                </div>
			</form>
		</div>
	</div>
</div>

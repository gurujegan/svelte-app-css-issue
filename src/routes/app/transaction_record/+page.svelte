<script>
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';
	import LabelInput from '$lib/components/elements/LabelInput.svelte';
	import { org } from '$lib/stores/OrgStore.js';
	import { writable } from 'svelte/store';

	/** @type {import('./$types').PageData} */
	export let data;

	const savedTxns = writable([])

	let newItem = { id: '', description: '', amount: '', category: '' }

	function deleteRow(index) {
		$savedTxns.splice(index, 1);
		$savedTxns = $savedTxns;
	}

	function addNewTxn() {
		
		savedTxns.set([...$savedTxns, newItem]);
		newItem = { id: '', description: '', amount: '', category: '' };
	}

	console.log('script');
	let formData = {
		isChecked: false
	};
</script>

{JSON.stringify($savedTxns)}

<div class="w-full grid grid-cols-2">
	<div class="w-11/12">
		<label class="label mb-2 text-sm font-medium">Org Name</label>
		<select class="select select-bordered w-full" bind:value={formData.orgId}>
			<option disabled selected>Select Org</option>
			<option value={$org.orgId}>{$org.orgName}</option>
			<option value="2">Org2</option>
		</select>
	</div>
</div>

<div class=" flex-row flex-wrap grid grid-cols-2">
	<div class="w-11/12">
		<label class="label mb-2 text-sm font-medium" for="accNo">Bank Account No</label>
		<input
			name="accNo"
			type="text"
			placeholder="Type here"
			class="input input-bordered w-full mb-4"
			bind:value={formData.bankAccNo}
		/>
	</div>

	<div class="w-11/12">
		<label class="label mb-2 text-sm font-medium" for="bankName">Bank Name</label>
		<input
			name="bankName"
			type="text"
			placeholder="Type here"
			class="input input-bordered w-full mb-4"
			bind:value={formData.bankName}
		/>
	</div>
</div>

<!-- <div class="w-11/12">
	<form class="w-full flex justify-between">
		{#each newItem as item, i}
		<LabelInput txn={item} bind:value={item[]}></LabelInput>
		{/each}
	</form>
</div> -->

<h1 class="text-2xl font-bold">Add New Transaction</h1>

<div class="divider"></div>

<div class="w-full">
	<form class="form-control flex flex-row justify-between">
		{#each Object.entries(newItem) as [key, value]}
			<div class="mb-4">
				<label class="label mb-2 text-sm font-medium" for={key}
					>{key[0].toUpperCase() + key.substr(1)}</label
				>
				<input
					name={key}
					type="text"
					placeholder="Type here"
					class="input input-bordered focus:bg-orange-100 focus:border-solid focus:border-2 focus:border-sky-500"
					bind:value={newItem[key]}
				/>
			</div>
		{/each}
	</form>
</div>

<div class="w-full">
	<button class="w-full btn btn-info h-8 rounded-md" on:click={addNewTxn}> Save </button>
</div>

<div class="divider"></div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
	<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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

<style>
	.checkbox {
		width: 1rem;
		height: 1rem;
		accent-color: currentColor; /* Ensures the checkbox color matches text color */
	}
</style>

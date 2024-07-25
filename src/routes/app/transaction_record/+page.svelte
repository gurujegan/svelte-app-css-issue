<script>
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';
	import LabelInput from '$lib/components/elements/LabelInput.svelte';
	import { org } from '$lib/stores/OrgStore.js';

	/** @type {import('./$types').PageData} */
	export let data;

	let formElements = [
		{ id: 'id', value: '#Id' },
		{ id: 'description', value: 'Desc' },
		{ id: 'amount', value: 'Trans Amout' },
		{ id: 'category', value: 'Category' }
	];

	let count = [];
	count.push(formElements);

  function addRow() {

    count.push(formElements);
    console.log(count)
  }

  console.log("script")
	let formData = {
		isChecked: false
	};
</script>

<DefaultBodyContainer>
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

	<form class="form-control w-full">
		{#each count as item, i}
			<div
				class="form-control w-full rounded flex-row flex-wrap grid grid-cols-6"
        id={i + `sdjkksskdjs`}
			>
				{#each count[i] as formElement, i}
					<LabelInput {formElement} bind:value={formData[formElement.id]}></LabelInput>
				{/each}

				<!-- <div class="w-11/12">
					<label class="label mb-2 text-sm font-medium">checkbox</label>
					<input type="checkbox" bind:checked={formData.isChecked} class="checkbox" />
				</div> -->
			</div>
		{/each}
	</form>

	<div class="mt-10 w-11/12">
		<button
			class="w-full btn btn-info transition ease-in-out delay-150
  hover:-translate-y-1 hover:scale-110
  hover:bg-indigo-500 hover:text-white
   duration-300 h-8 rounded-md"
			on:click={addRow}
		>
			Add
		</button>
	</div>
</DefaultBodyContainer>

<style>
	.checkbox {
		width: 1rem;
		height: 1rem;
		accent-color: currentColor; /* Ensures the checkbox color matches text color */
	}
</style>

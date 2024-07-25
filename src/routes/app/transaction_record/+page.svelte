<script>
import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';
import LabelInput from '$lib/components/elements/LabelInput.svelte';

/** @type {import('./$types').PageData} */
export let data;

let formData = {
  Id: '',
  bankAccNo: '',
	bankName: '',
  Description: '',
  Amount: '',
  Category: '',
  isChecked: false
};
</script>

<DefaultBodyContainer>
  <div class="w-full flex-row flex-wrap grid grid-cols-2">
    <LabelInput label="Bank Account No" bind:value={formData.bankAccNo}></LabelInput>
  </div>
  <div class="w-11/12 flex-row flex-wrap grid grid-cols-2">
    <LabelInput label="Bank Account No" bind:value={formData.bankAccNo}></LabelInput>
		<LabelInput label="Bank Name" bind:value={formData.bankName}></LabelInput>
  </div>
  <form class="form-control w-full rounded flex-row flex-wrap grid grid-cols-6">
    <LabelInput label="#Id" bind:value={formData.Id}></LabelInput>
    <LabelInput label="Description" bind:value={formData.Description}></LabelInput>
    <LabelInput label="Amount" bind:value={formData.Amount}></LabelInput>
    <LabelInput label="Category" bind:value={formData.Category}></LabelInput>
    <div class="w-11/12">
      <label class="label mb-2 text-sm font-medium">checkbox</label>
      <input type="checkbox" bind:checked={formData.isChecked} class="checkbox" />
      </div>



  </form>

  <div class="mt-10 w-11/12">
    <button
      class="w-full btn btn-info transition ease-in-out delay-150
  hover:-translate-y-1 hover:scale-110
  hover:bg-indigo-500 hover:text-white
   duration-300 h-8 rounded-md"
      on:click={createCustomerAccount}
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

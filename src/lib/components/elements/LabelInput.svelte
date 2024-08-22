<script>
	export let formElement;
	export let formLib;

	const { form, errors } = formLib

</script>

{#if formElement.id !== 'id'}

	<div class="w-full">
		<label class="label mb-2 text-sm font-medium" for={formElement.id}>{formElement.value}</label>
		<input
			name={formElement.id}
			type="text"
			placeholder="Type here"
			class="input input-bordered w-full mb-4"
			bind:value={$form[formElement.id]}
			on:click={formLib.handleChange}
			on:blur={formLib.handleChange}
		/>

		{#if $errors[formElement.id]}
			<small>{$errors[formElement.id]}</small>
		{/if}
	</div>
{/if}

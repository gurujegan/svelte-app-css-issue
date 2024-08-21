<script>
	export let formElement;
	export let value;
	export let handleChange;
	export let errors;
	export let touched;
</script>

{#if formElement.id !== 'id'}
	<div class="w-full">
		<label class="label mb-2 text-sm font-medium" for={formElement.id}>{formElement.value}</label>
		<input
			name={formElement.id}
			type="text"
			placeholder="Type here"
			class="input input-bordered w-full mb-4"
			bind:value
			on:keyup={handleChange}
		/>
		{#if errors[formElement.id] && touched[formElement.id]}
			<small>{errors[formElement.id]}</small>
		{/if}
	</div>
{/if}

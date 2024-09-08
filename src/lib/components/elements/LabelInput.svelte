<script>
	export let formElement;
	export let formLib;

	const { form, errors, handleChange } = formLib

</script>

{#if formElement.id !== 'id'}

	<div class="pb-4">
		<label class="label mb-2 text-sm font-medium
		inline-flex items-center w-[178px] mb-2 text-sm font-medium capitalize text-dark dark:text-title-dark" for={formElement.id}>{formElement.value}</label>
		<div class="flex items-center flex-1">
			<div
			   class="w-full rounded-4 border-normal border-1 text-[15px] dark:bg-box-dark-up dark:border-box-dark-up px-[15px] py-[12px] min-h-[50px] focus:ring-primary focus:border-primary gap-[12px]  flex items-center">
			   <span class="inline-flex items-center text-sm text-light dark:text-subtitle-dark me-[8px]">
				  <i class="{formElement.icon}"></i>
			   </span>
			   <input name={formElement.id} type="text" placeholder="Type here" class="
			   outline-none placeholder:text-[#A0A0A0] text-body dark:text-subtitle-dark w-full bg-transparent"
				  bind:value={$form[formElement.id]} on:click={handleChange} on:blur={handleChange} />
			</div>
		 </div>
	</div>
	<div>
		{#if $errors[formElement.id]}
				<small>{$errors[formElement.id]}</small>
			{/if}
	</div>
{/if}

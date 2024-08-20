<script>
	import { goto } from '$app/navigation';
	import CenteredBodyContainer from '$lib/components/container/CenteredBodyContainer.svelte';
	import OrgStore, { orgList } from '$lib/stores/OrgStore.js';
	import { getContext } from 'svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	let user = getContext('user');

	let newOrg = {};

	let showToast = writable(false);

	const { form, errors, state, isValid, isSubmitting, isValidating, handleChange, handleSubmit, handleReset } = createForm({
		initialValues: {
			orgName: ''
		},
		validationSchema: yup.object().shape({
			orgName: yup.string().required()
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		}
	});

	async function createOrg(event) {
		event.preventDefault();

		OrgStore.addOrg(newOrg);

		showToast.set(true);

		setTimeout(() => {
			showToast.set(false);
			// goto('/app/create-account');
		}, 3000);

		newOrg = {};
		//goto('/app/create-account');
	}
</script>

<CenteredBodyContainer>
	<form class="form-control md:w-1/2 w-full rounded flex flex-col gap-2"
	class:valid={$isValid}
	on:submit={handleSubmit}>
		<label class="label text-2xl font-medium">Create Organization </label>
		<input
			type="text"
			placeholder="Org Name"
			class="input input-bordered w-full"
			on:keyup={handleChange}
			bind:value={$form.orgName}
		/>
		{#if $errors.orgName}
			<small>{$errors.orgName}</small>
		{/if}

		<button class="btn btn-info" disabled={$isValid}>Create Organization</button>
	</form>

	{#if $showToast}
		<div class="toast toast-top toast-end">
			<div class="alert alert-success">
				<div>
					<span>Organization created successfully!</span>
				</div>
			</div>
		</div>
	{/if}
</CenteredBodyContainer>

{JSON.stringify($orgList)}

<style>
	.toast {
		position: fixed;
		top: 5rem;
		right: 1rem;
		z-index: 50;
		transition: opacity 0.5s;
	}

	.valid {

		background-color: greenyellow;
	}
</style>

<script>
	import { goto } from '$app/navigation';
	import CenteredBodyContainer from '$lib/components/container/CenteredBodyContainer.svelte';
	import OrgStore, { orgList } from '$lib/stores/OrgStore.js';
	import { getContext } from 'svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let user = getContext('user');

	let newOrg = {}

	let showToast = writable(false);

	async function createOrg(event) {
		event.preventDefault();

		OrgStore.addOrg(newOrg);

		showToast.set(true);

		setTimeout(() => {
			showToast.set(false);
			// goto('/app/create-account');
		}, 3000);

		newOrg = {}
		//goto('/app/create-account');
	}
</script>

<CenteredBodyContainer>
	<form class="form-control md:w-1/2 w-full rounded">
		<label class="label mb-2 text-2xl font-medium" for="createOrg">Create Organization </label>
		<input
			type="text"
			placeholder="Type here"
			class="input input-bordered w-full mb-4"
			bind:value={newOrg.orgName}
		/>
		<button class="btn btn-info" on:click={createOrg}>Create Organization</button>
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
</style>

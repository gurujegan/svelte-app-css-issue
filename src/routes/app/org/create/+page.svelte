<script>
	import CenteredBodyContainer from '$lib/components/container/CenteredBodyContainer.svelte';
	import { org } from '$lib/stores/OrgStore.js';
	import { getContext } from 'svelte';

	let user = getContext('user');

	let formData = {
		orgId: '1',
		orgName: '',
		userId: $user.userId,
		createdAt: Date.now().toString(),
		updatedAt: ''
	};

	function createOrg() {
		
    org.set(formData);
    console.log($org);
	}
</script>

<CenteredBodyContainer>
	<form class="form-control md:w-1/2 w-full rounded">
		<label class="label mb-2 text-2xl font-medium">Create Organization </label>
		<input
			type="text"
			placeholder="Type here"
			class="input input-bordered w-full mb-4"
			bind:value={formData.orgName}
		/>
		<button class="btn btn-info" on:click={createOrg}>Create Organization</button>
	</form>
</CenteredBodyContainer>

{JSON.stringify($org)}

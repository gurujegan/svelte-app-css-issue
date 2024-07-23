<script>
	import DefaultBodyContainer from '$lib/components/container/DefaultBodyContainer.svelte';
	import { getContext } from 'svelte';
	import { org } from '$lib/stores/OrgStore.js'

	// Retrieve user store from context
	const user = getContext('user');
</script>

<DefaultBodyContainer>
	Hey {$user.name}

	<p>Organization Name: {$org.orgName}
	createdAt: {$org.createdAt}</p>
</DefaultBodyContainer>

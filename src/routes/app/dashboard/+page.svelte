<script>
	import DrawerContentContainer from '$lib/components/container/DrawerContentContainer.svelte';
	import { getContext } from 'svelte';
	import { org } from '$lib/stores/OrgStore.js'

	// Retrieve user store from context
	const user = getContext('user');
</script>

<DrawerContentContainer>
	Hey {$user.name}

	<p>Organization Name: {$org.orgName}
	createdAt: {$org.createdAt}</p>
</DrawerContentContainer>

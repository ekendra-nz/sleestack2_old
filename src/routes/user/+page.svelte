<script lang="ts">
	import { currentUser } from '$lib/supabase';
</script>

<div class="container mx-auto flex justify-center items-center mt-10">
	<h3 class="h3">Account Information for {$currentUser?.email}</h3>
</div>

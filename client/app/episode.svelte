<script>
  export let link;
  let episode = null;

  import axios from 'axios';
  import { onMount } from 'svelte';

  const load = async () => {
    const { data } = await axios.get(link);

    episode = data;
  };

  onMount(load);
</script>

{#if episode}
  <p>name <strong>{episode.name}</strong></p>
  <p>air date <strong>{episode.air_date}</strong></p>
  <p>created <strong>{episode.created}</strong></p>
  <p>episode <strong>{episode.episode}</strong></p>
  <hr />
{/if}

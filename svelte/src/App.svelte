<script>
  import { onMount } from 'svelte';
  import { navigate } from "svelte-routing";
  import RouterView from './lib/RouterView.svelte'

  onMount(() => {
    navigate('/dashboard')
  })
</script>

<main id="main">
  <RouterView />
</main>

<style>

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* background: url("./assets/bg-running.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh; */
  }

</style>

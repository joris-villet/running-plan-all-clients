<script>
// @ts-nocheck
  import { onMount, onDestroy } from 'svelte';
  import { globalHistory } from 'svelte-routing/src/history';
  import { Router, Link } from "svelte-routing";
  import RouterView from './lib/RouterView.svelte';
  import { currentPath } from "./store";
  import url from './stores/url';

  let unsub;
  const checkUrl = () => {
    unsub = globalHistory.listen(({ location, action }) => {
      $currentPath = location.pathname;
    })
  }

  onMount(() => {
    checkUrl();
    console.log($url)
  })

  onDestroy(() => {
    unsub()
  })
  
  // onMount(() => {
  //   navigate('/dashboard')
  // })

 
</script>

<main id="main">
  <RouterView />

  <Router>
    {#if $url.pathname == "/login"}
      <button>
        <Link to="/signup">S'inscrire</Link>
      </button>
    {:else if $url.pathname == "/signup"}
      <button>
        <Link to="/login">Se connecter</Link>
      </button>
    {:else}
      ""
    {/if}
  </Router>

  <!-- {#if $currentPath === "/login"}
    <Router>
      <Link to="/signup">S'inscrire</Link>
    </Router>
  {/if} -->

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

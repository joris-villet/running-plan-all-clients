<script>
// @ts-nocheck
  import { Router, link } from "svelte-routing";
  import RouterView from './lib/RouterView.svelte';
  import url from './stores/url';
</script>


<h1 class="title_main">Running Plan</h1>

<main id="main">
  <RouterView />

  

  <!-- <Router>
    {#if $url.pathname == "/login"}
      <a href="/signup" use:link>
        <button class="switch-form">S'inscrire</button>
      </a>
    {:else if $url.pathname == "/signup"}
      <a href="/login" use:link>
        <button class="switch-form">Se connecter</button>
      </a>
    {:else}
      <span></span>
    {/if}
  </Router> -->
  
  <Router>
    {#if $url.pathname == "/login"}
      
      <a href="/signup" use:link>
        <button class="switch-form">S'inscrire</button>
      </a>

    {:else if $url.pathname == "/signup"}

      <a href="/login" use:link>
        <button class="switch-form">Se connecter</button>
      </a>

    {/if}
  </Router>

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

  .switch-form {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    cursor: pointer;
    padding: .5rem 2rem;
    background: none;
    border: 1px solid rgb(169, 227, 230);
    border-radius: 50px;
    color: rgb(169, 227, 230);
    text-decoration: none;
    font-size: 1.2rem;
    transition: .2s ease;
  }
  
  .switch-form:hover {
    background: rgba(169, 227, 230, 0.205);
  }

  .title_main {
    position: absolute;
    left: 140px;
    font-family: 'Gruppo', cursive;
    background: rgb(34,43,35);
    background: linear-gradient(103deg, rgba(34,43,35,1) 0%, rgba(251,185,152,1) 99%); 
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

</style>

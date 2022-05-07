<script>
// @ts-nocheck
  import { Router, Route } from "svelte-routing";
  import Dashboard from '../pages/Dashboard.svelte';
  import Login from '../pages/Login.svelte';

  export let url = "";
</script>

<Router url="{url}">
  <Route path="/dashboard">
    <Dashboard />
  </Route>
  <Route path="/login">
    <Login />
  </Route>
</Router>
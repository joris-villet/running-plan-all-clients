<script>
// @ts-nocheck
  import { Router, Route } from "svelte-routing";
  import Dashboard from '../pages/Dashboard.svelte';
  import Login from '../pages/Login.svelte';
  import Signup from '../pages/Signup.svelte';
  import PageTransitions from './PageTransitions.svelte';

  export let url = "";
</script>

<Router url="{url}">
  <Route path="/dashboard">
    <Dashboard />
  </Route>
  <Route path="/login">
    <Login />
  </Route>
  <PageTransitions>
    <Route path="/signup">
      <Signup />
    </Route>
  </PageTransitions>
  <!-- <Route 
    path="/dashboard" 
    component="{Dashboard}"
  />
  <Route 
    path="/login" 
    component="{Login}"
  /> -->


</Router>
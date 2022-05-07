<script>
  import { Router, Route } from "svelte-routing";
  import Dashboard from '../pages/Dashboard.svelte'
  export let url = "";
</script>

<Router url="{url}">
  <Route path="/dashboard"><Dashboard /></Route>
</Router>
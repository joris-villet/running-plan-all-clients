<script>
  import axios from 'axios';
  import { onMount } from 'svelte';

  // export let date;
  // export let time;
  // export let trainingType;
  // export let weight;

  let events = [];

  const getEvents = () => {
    axios.get('http://localhost:5000/events')
      .then(({ data }) => {
        console.log(data);
        events = events.concat(data);
      })
      .catch(err => console.log(err))
  }

  onMount(getEvents)

</script>

{#each events as event}
  <td class="classTd">{ event.date }</td>
  <td class="classTd">{ event.time }</td>
  <td class="classTd">{ event.trainingType }</td>
  <td class="classTd">{ event.weight === '' ? '/' : event.weight + ' kg' }</td>
  <span class="material-icons icon-edit-event">
    edit
  </span> 
{/each}


<style>
  .icon-edit-event {
    /* color: #90ffff; */
    position: absolute;
    left: 0rem;
    line-height: 1.3rem;
    cursor: pointer;
    z-index: 2;
    font-size: 1rem;
  }
</style>
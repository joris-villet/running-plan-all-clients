<script>
  import axios from 'axios';
  import { onMount } from 'svelte';

  // export let date;
  // export let time;
  // export let trainingType;
  // export let weight;

  let events = [];

  const getEvents = () => {
    axios.get('https://running-plan-strapi.herokuapp.com/api/events')
      .then(({ data }) => {
        console.log(data.data);
        events = events.concat(data.data);
      })
      .catch(err => console.log(err))
  }

  // onMount(getEvents)

</script>

{#each events as event}
  <td class="classTd">{ event.attributes.date }</td>
  <td class="classTd">{ event.attributes.time }</td>
  <td class="classTd">{ event.attributes.trainingType }</td>
  <td class="classTd">{ event.attributes.weight === '' ? '/' : event.attributes.weight + ' kg' }</td>
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
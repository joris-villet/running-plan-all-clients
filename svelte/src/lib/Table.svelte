<script>
  import Events from '../lib/Events.svelte'
</script>

<table class="table">
  <thead class="table__thead">
    <tr class="table__row">
      <td class="table__thead__td">Date</td>
      <td class="table__thead__td">Temps</td>
      <td class="table__thead__td">Type d'entrainements</td>
      <td class="table__thead__td">Poids</td>
    </tr>
  </thead>

  <tbody class="table__tbody">
     <!-- <tr class="table__row" v-for="event in eventStore.events" :key="event.id">
      <Events
        classTd="table__tbody__td"
        :date="event.date"
        :time="event.time"
        :trainingType="event.trainingType"
        :weight="event.weight === '' ? '/' : event.weight + ' kg'"
      >
        <i @click="openModal(event)" class="table__tbody__icon fas fa-edit"></i>
      </Events>
    </tr>  -->
    <tr class="table__row">
      <Events />
    </tr> 

    <!-- MODAL EDIT EVENT-->
  </tbody>
</table>

<style>
  .table {
    width: 90%;
    margin-top: 5rem;
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
  }

  /* .table__modal {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 20% 10% 1fr 10%;
    grid-template-columns: 20% 10% 1fr 10%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    text-align: center;
    border-bottom: 1px solid #129999;
    z-index: 0;
  } */

  .table__thead {
    background: #129999;
    padding: 0.3rem 0;
    border-right: 1px solid black;
  }

  .table__thead__td {
    color: #fff;
    font-weight: bold;
  }

  .table__row {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 20% 10% 1fr 10%;
    grid-template-columns: 20% 10% 1fr 10%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-column-gap: 2px;
    column-gap: 2px;
    position: relative;
    text-align: center;
    border-bottom: 1px solid #129999;
    z-index: 1;
  }

  /* .table__tbody__td {
    color: #90ffff;
  }

  .table__tbody__td:last-child {
    border-right: 0px;
  }

  .table__tbody__icon {
    color: #90ffff;
    position: absolute;
    left: 0rem;
    line-height: 1.3rem;
    cursor: pointer;
    z-index: 2;
  } */

  /****************** TRANSITION FORM ***************************/
  /* .v-enter-active {
    -webkit-animation: 0.2s ease slideModalUp;
    animation: 0.2s ease slideModalUp;
  } */
</style>

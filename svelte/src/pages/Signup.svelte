<script>
 
</script>

<form class="form">
  <label>
    <input 
      type="text"
      placeholder="Email"
      class="form__input"
    >
  </label>
  <label>
    <input 
      type="text"
      placeholder="Mot de passe"
      class="form__input"
    >
  </label>
  <label>
    <input 
      type="text"
      placeholder="Confirmez le mot de passe"
      class="form__input"
    >
  </label>
  <button class="form__btn">S'inscrire</button>
</form>

<style>
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }

.form__input {
  border: none;
  display: block;
  width: 300px;
  padding: 0.7rem 0 0.7rem 1rem;
  margin: 0.5rem auto;
  font-style: italic;
  font-size: 1rem;
  outline: none;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.733);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  color: #2e5755;
}

.form__btn {
  width: 310px;
  border: none;
  border-radius: 100px 10px;
  margin: 2rem auto;
  padding: 0.5rem 0;
  background: linear-gradient(#b1ffff, #0fff8e);
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  box-shadow: 2px 2px 1px #606060;
  color: #487b72;
}
</style>
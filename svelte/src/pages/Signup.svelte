<script>
 
</script>

<form class="signup__form">
  <label>
    <input 
      type="text"
      placeholder="Email"
      class="signup__form__input"
    >
  </label>
  <label>
    <input 
      type="text"
      placeholder="Mot de passe"
      class="signup__form__input"
    >
  </label>
  <label>
    <input 
      type="text"
      placeholder="Confirmez le mot de passe"
      class="signup__form__input"
    >
  </label>
  <button class="signup__form__btn">S'inscrire</button>
</form>

<style>
  .signup__form {
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

.signup__form__input {
  border: none;
  display: block;
  width: 300px;
  padding: 0.5rem 0 0.5rem 1rem;
  margin: 0.5rem auto;
  font-style: italic;
  font-size: 1rem;
  outline: none;
  border-radius: 10px;
  color: #2e5755;
}

.signup__form__btn {
  width: 310px;
  border: none;
  border-radius: 50px 10px;
  margin: 2rem auto;
  padding: 0.5rem 0;
  -webkit-box-shadow: 1px 1px 2px #e98425;
          box-shadow: 1px 1px 2px #e98425;
  background: #e98425;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  -webkit-box-shadow: 2px 2px 2px #282828;
          box-shadow: 2px 2px 2px #282828;
  color: #242424;
}
</style>
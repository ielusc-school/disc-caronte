<template>
  <div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link">
          Login
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cadastro" class="nav-link">
          Cadastro
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
   name: 'NavBarLogin',
}
</script>
<template>
  <header>
    <div class="logo">Your Bank Name</div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/accounts">Accounts</router-link></li>
        <li><router-link to="/transactions">Transactions</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style>
@import url('./styles/base.css');
@import url('./styles/main.css');


header {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>

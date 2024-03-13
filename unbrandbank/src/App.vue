<script setup>
import BankAccount from './components/BankAccount.vue';
import Business from './components/Business.vue';
import Contacts from './components/Contacts.vue';
import CreditCard from './components/CreditCard.vue';
import CreditLoans from './components/CreditLoans.vue';
import Dashboard from './components/Dashboard.vue';
import Database from './components/Database.vue';
import Employement from './components/Employement.vue';
import Home from './components/Home.vue';
import Kids from './components/Kids.vue';
import Loans from './components/Loans.vue';
import Login from './components/Login.vue';
import Mortgage from './components/Mortgage.vue';
import ParentLoans from './components/ParentLoans.vue';
import Parents from './components/Parents.vue';
import Partners from './components/Partners.vue';
import Send from './components/Send.vue';
import Signup from './components/Signup.vue';
import StudentsLoans from './components/StudentsLoans.vue';
import Transactions from './components/Transactions.vue';
import Transfer from './components/Transfer.vue';
import Users from './components/Users.vue';
</script>

<template>
  <div id="app">
    <header>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
    </footer>
  </div>
</template>

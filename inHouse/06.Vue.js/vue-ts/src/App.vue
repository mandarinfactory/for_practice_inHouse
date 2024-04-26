<script setup lang="ts">
import { ref } from "vue";
import Card from "./components/Card.vue";

enum GENDER {
  MALE,
  FEMALE,
}

interface Invitees {
  id: number;
  name: string;
  gender: GENDER;
}

const name = ref("");
const gender = ref(GENDER.MALE);
const invitees = ref<Invitees[]>([]);

const addInvitees = (): void => {
  if (name.value) {
    invitees.value.push({
      id: Math.floor(Math.random() * 10000),
      name: name.value,
      gender: gender.value,
    });
    (name.value = ""), (gender.value = GENDER.MALE);
  }
};
</script>

<template>
  <main>
    <div>
      <h1>People Invited to My Party</h1>
      <div class="inputContainer">
        <input
          v-model="name"
          type="text"
          placeholder="Name...."
          @keypress.enter="addInvitees"
        />
        <select v-model="gender" @keypress.enter="addInvitees">
          <option :value="GENDER.MALE">Male</option>
          <option :value="GENDER.FEMALE">Female</option>
        </select>
      </div>
      <div class="cardsContainer">
        <Card
          v-for="invitee in invitees"
          :key="invitee.id"
          :invitee="invitee"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
}
input,
select {
  width: 100%;
  padding: 5px;
  margin-bottom: 3px;
}
</style>

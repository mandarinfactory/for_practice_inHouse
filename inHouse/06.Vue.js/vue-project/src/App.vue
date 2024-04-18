<script setup>
import { ref } from "vue";

const showModal = ref(false);
const newNote = ref("");
const notes = ref([]);

const getRandomLightColor = () => {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
};

const addNote = () => {
  if (newNote.value > 10)
  notes.value.push({
    id: Math.floor(Math.random() * 10000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomLightColor(),
  });
  showModal.value = false;
  newNote.value = [];
};
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea
          v-model="newNote"
          name="note"
          id="note"
          cols="30"
          rows="10"
        ></textarea>
        <button @click="addNote">Add Note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cardsContainer">
        <div
          v-for="note in notes"
          :key="note.id"
          class="card"
          :style="{ backgroundColor: note.backgroundColor }"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("ko-KR") }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

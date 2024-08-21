<template>
    <div class="movie-details-container">
        <h1>DETALLES DE LA PELÍCULA CON EL ID:  {{ movieId }}</h1>
        <div v-if="movie">
            <h2>{{ movie.Title }}</h2>
            <img :src="movie.Poster" alt="Movie Poster" />
            <p><strong>Year:</strong> {{ movie.Year }}</p>
            <p><strong>Rated:</strong> {{ movie.Rated }}</p>
            <p><strong>Released:</strong> {{ movie.Released }}</p>
            <p><strong>Runtime:</strong> {{ movie.Runtime }}</p>
            <p><strong>Genre:</strong> {{ movie.Genre }}</p>
            <p><strong>Director:</strong> {{ movie.Director }}</p>
            <p><strong>Writer:</strong> {{ movie.Writer }}</p>
            <p><strong>Actors:</strong> {{ movie.Actors }}</p>
            <p><strong>Plot:</strong> {{ movie.Plot }}</p>
            <p><strong>Language:</strong> {{ movie.Language }}</p>
            <p><strong>Country:</strong> {{ movie.Country }}</p>
            <p><strong>Awards:</strong> {{ movie.Awards }}</p>
            <div class="ratings-container">
                <h3>Ratings:</h3>
                <ul>
                  <li v-for="(rating, index) in movie.Ratings" :key="index">
                    <strong>{{ rating.Source }}:</strong> {{ rating.Value }}
                  </li>
                </ul>
              </div>
            <p><strong>Metascore:</strong> {{ movie.Metascore }}</p>
            <p><strong>IMDB Rating:</strong> {{ movie.imdbRating }}</p>
            <p><strong>IMDB Votes:</strong> {{ movie.imdbVotes }}</p>
            <p><strong>Box Office:</strong> {{ movie.BoxOffice }}</p>
            <p><strong>Production:</strong> {{ movie.Production }}</p>
            <p><strong>Website:</strong> {{movie.Website}}</p>
        </div>
        <div v-else>
            <p>Cargando detalles de esta película...</p>
        </div>
        <router-link :to="{ name: 'home' }" class="back-button">Regresar a la lista de películas</router-link>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMoviesStore } from '@/store/movies.store';

const route = useRoute();
const movieId = route.params.id as string;

const store = useMoviesStore();

onMounted(async () => {
    await store.getMovieById(movieId);
});

const movie = computed(() => store.movie);
</script>

<style lang="scss" scoped>
  .movie-details-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #1c1c1e;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }

  h1 {
    color: #f5f5f5;
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
  }

  h2 {
    color: #8656f5;
    margin-bottom: 15px;
    font-size: 22px;
    text-align: center;
  }

  img {
    display: block;
    margin: 20px auto;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  }

  p {
    color: #e5e5e5;
    margin: 10px 0;
    line-height: 1.5;

    strong {
      color: #8656f5;
    }
  }

  .ratings-container {
    margin: 20px 0;
    color: #f5f5f5;

    h3 {
      margin-bottom: 10px;
      font-size: 20px;
      color: #8656f5;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 5px 0;
        padding: 8px 12px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
      }
    }
  }

  .back-button {
    display: block;
    margin: 30px auto;
    padding: 12px 24px;
    background-color: #8656f5;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    transition: background-color 0.2s ease, transform 0.2s ease;
    text-decoration: none;

    &:hover {
      background-color: #7b46f7;
      transform: scale(1.05);
    }
  }
</style>

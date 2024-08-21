import type { Movie, MovieDetails } from "@/model/movie.model";
import HTTP from "@/api/client-http"
import { defineStore } from "pinia";

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        listMovies: [] as  Movie[],
        movie: null as MovieDetails | null
    }),
    actions: {
        async getMovies(search:string = 'movies'){
            const resp =  await HTTP.get('',{
                params: {
                    s: search
                }
            })
            this.listMovies = resp.data.Search;
        },
        async getMovieById(id: string) { 
            const resp = await HTTP.get('', {
                params: {
                    i: id
                }
            });
            this.movie = resp.data;
        }
    }
})
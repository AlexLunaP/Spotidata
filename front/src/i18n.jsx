import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      fr: {
        translation: {
          login: "Se connecter avec Spotify",
          worldTrends: "Dernières tendances mondiales",
          trends: "Tendances",
          tops: "Tops",
          analysis: "Analyses",
          playlists: "Playlists",
          summary: "Résumé",
          makeRequest: "Faire une requête",
          tracks: "morceaux",
          meanAccousticness: "Mean accousticness",
          meanDanceability: "Mean danceability",
          meanEnergy: "Mean energy",
          meanInstrumentalness: "Mean instrumentalness",
          meanLiveness: "Mean liveness",
          meanLoudness: "Mean loudness",
          meanSpeechiness: "Mean speechiness",
          meanValence: "Valence moyenne",
          meanTempo: "Tempo moyen",
          meanDuration: "Durée moyenne",
          meanPopularity: "Popularité moyenne",
          meanKey: "Clé moyenne",
          meanMode: "Mode moyen",
          topArtistsInPlaylist: "Top artistes dans la playlist",
          loading: "Chargement",
          errorAuthentication:
            "Il y a eu une erreur lors de l'authentification",
        },
      },
      en: {
        translation: {
          login: "Login with Spotify",
          worldTrends: "Latest world trends",
          trends: "Trends",
          tops: "Tops",
          analysis: "Analysis",
          playlists: "Playlists",
          summary: "Summary",
          makeRequest: "Make a request",
          tracks: "tracks",
          meanAccousticness: "Mean accousticness",
          meanDanceability: "Mean danceability",
          meanEnergy: "Mean energy",
          meanInstrumentalness: "Mean instrumentalness",
          meanLiveness: "Mean liveness",
          meanLoudness: "Mean loudness",
          meanSpeechiness: "Mean speechiness",
          meanValence: "Mean valence",
          meanTempo: "Mean tempo",
          meanDuration: "Mean duration",
          meanPopularity: "Mean popularity",
          meanKey: "Mean key",
          meanMode: "Mean mode",
          topArtistsInPlaylist: "Top artists in playlist",
          loading: "Loading",
          errorAuthentication: "There was an error during the authentication",
        },
      },
      es: {
        translation: {
          login: "Iniciar sesión con Spotify",
          worldTrends: "Tendencias mundiales",
          trends: "Tendencias",
          tops: "Tops",
          analysis: "Análisis",
          playlists: "Listas de reproducción",
          summary: "Resúmen",
          makeRequest: "Hacer una petición",
          tracks: "pistas",
          meanAccousticness: "Acústica media",
          meanDanceability: "Bailabilidad media",
          meanEnergy: "Energía media",
          meanInstrumentalness: "Instrumentalidad media",
          meanLiveness: "Lividez media",
          meanLoudness: "Sonoridad media",
          meanSpeechiness: "Locuacidad media",
          meanValence: "Valencia media",
          meanTempo: "Tempo medio",
          meanDuration: "Duración media",
          meanPopularity: "Popularidad media",
          meanKey: "Clave media",
          meanMode: "Modo medio",
          topArtistsInPlaylist: "Top artistas en lista de reproducción",
          loading: "Cargando",
          errorAuthentication: "Se ha producido un error durante la autenticación",
        },
      },
      ru: {
        translation: {
          login: "Login with Spotify",
          worldTrends: "Latest world trends",
          trends: "Trends",
          tops: "Tops",
          analysis: "Analysis",
          playlists: "Playlists",
          summary: "Summary",
          makeRequest: "Make a request",
          tracks: "tracks",
          meanAccousticness: "Mean accousticness",
          meanDanceability: "Mean danceability",
          meanEnergy: "Mean energy",
          meanInstrumentalness: "Mean instrumentalness",
          meanLiveness: "Mean liveness",
          meanLoudness: "Mean loudness",
          meanSpeechiness: "Mean speechiness",
          meanValence: "Mean valence",
          meanTempo: "Mean tempo",
          meanDuration: "Mean duration",
          meanPopularity: "Mean popularity",
          meanKey: "Mean key",
          meanMode: "Mean mode",
          topArtistsInPlaylist: "Top artists in playlist",
          loading: "Loading",
          errorAuthentication: "There was an error during the authentication",
        },
      },
    },
  });

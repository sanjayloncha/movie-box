# Movie Box 🎬

A modern **React** app to browse movies and manage a personal watchlist using the **TMDB API**.  
Users can **search movies**, **add them to a watchlist**, and **remove movies**.  
The app is **responsive**, **accessible**, and stores the watchlist locally using **localStorage**.

---

## Features

- Browse popular movies on page load.  
- Search for movies by title with **debounced input**.  
- Add or remove movies from your personal watchlist.  
- Responsive **grid layout** for multiple screen sizes.  
- **Loading skeletons** while fetching data for smooth UX.
- Subtle **hover animations** for a polished look.  
- Client-side routing between Home and Watchlist pages.  

---

## Quick Start (Local Setup)

### Prerequisites
- Node.js >= 18
- npm or yarn

### Steps
1. **Clone the repo**  
```
git clone <your-repo-link>
cd movie-library
```

2. **Install dependencies**  
```
npm install
```

3. **Add your TMDB API key**  
Create a `.env` file in the root directory and add your API key from [TMDB](https://www.themoviedb.org/settings/api):
```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

4. **Start the development server**
```
npm run dev
or
yarn dev

```

## Assumptions & Design Choices

- **Only first page of TMDB results** fetched for simplicity.  
- **Watchlist** is stored in `localStorage` to persist across reloads.    
- **Redux Toolkit** used for state management.  
- **Mobile-friendly header** with icons for small screens.  
- **Loader skeletons** are used while fetching data to enhance UX.




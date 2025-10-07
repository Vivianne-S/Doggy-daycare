Doggy-Daycare

Doggy-Daycare is a responsive React web application built to manage and explore a daycare’s dog registry. The app allows users to search, filter, and view detailed information about each dog in a modern, user-friendly interface. The project follows the MVVM (Model-View-ViewModel) architecture, where all fetching, filtering, and sorting logic is handled inside a dedicated ViewModel for clear separation between logic and presentation.

⸻

Features

Users can search for dogs by name, filter the catalog by breed and age, and display only dogs currently present at the daycare. Each dog profile contains detailed information such as breed, age, gender, chip number, owner name, and contact details. The interface includes gender-based styling with a pink glow for females and a blue glow for males, as well as smooth hover animations and soft gradients for a polished appearance. All styling is written in pure CSS with gradient backgrounds, rounded cards, and a responsive grid layout that adapts to both desktop and mobile screens.

⸻

Tech Stack

Doggy-Daycare is built with React using the Vite framework. It implements the MVVM architecture for structure and scalability, React Router DOM for navigation, pure CSS for styling and layout, and JSONBin for external data fetching. The entire project is optimized for responsiveness and clean user interaction.

⸻

Installation

To run the project locally, clone the repository and install dependencies:
git clone https://github.com/Vivianne-S/Doggy-daycare.git
cd Doggy-daycare
npm install
npm run dev

http://localhost:5173/


⸻

Project Structure

The project is organized according to the MVVM pattern:
	•	models/ contains the Dog.js data model
	•	viewmodels/ includes DogsViewModel.js, which manages fetching, filtering, and sorting logic
	•	views/ contains all UI components and views: WelcomeView.jsx for the landing page, CatalogView.jsx for the searchable list of dogs, and DogDetailView.jsx for detailed profiles
	•	css/ contains dedicated stylesheets for each view with gradients, hover effects, and gender-based glow
	•	App.jsx and main.jsx handle the main application layout and routing

⸻

Design Overview

The Welcome Page introduces the app with a soft pink-to-blue gradient background and a call-to-action button that leads to the catalog.
The Catalog Page presents a responsive grid of dogs, complete with search functionality, dropdown filters for breed and age, and an optional toggle to display only present dogs.
The Dog Detail Page displays each dog’s full profile with gender-colored borders, rounded images, and subtle animation effects. Each card has light scaling and glow effects on hover for a more dynamic visual experience.

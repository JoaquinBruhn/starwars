# App Navigation

This aplication is quite small so it´s easy to use. On the `Home` section you´ll find a header with the screen crawl of episode 4, just bellow it there is a randomly generated encounter. The code gets 2 random characters, a ship and a planet from the API to form a random situation that can happen in space. The cards will change on refresh.

The `Explore the galaxy` section has a list of filters to change the list of cards being displayed, The API doesn´t provide images so all the cards have a placeholder image in them. The list of cards is separated in pages with 10 cards each, on the bottom of the section you´ll see a bar to select the current page. The number of pages changes acording to the number of cards. Clicking on a card will take you to the `Profile` section of that card.

Lastly the `Profile` section you´ll have a more detailed view of whatever was selected on `Explore the galaxy` type of data changes depending on the type of thing that was searched.

The whole app is Responsive and can be used in desktop as well as cellphones and tablets.

## Dependencies Used

| Dependecy        | Purpose                                                                  |
| ---------------- | ------------------------------------------------------------------------ |
| react-router-dom | Used to easily render wichever component was needed for the app.         |
| react-bootstrap  | Used for a lot of the styling and to make the app responsive more easily |
| bootstrap        | Necesary dependency for react-bootstrap to work                          |

## How It Works

### recData

Less of a regular componont this file stores al the "fetch()" requests functions as well as the methods to extract specific data.

- reqAnyPage: Searches the first page (first 10 results) of any type of category (people, planets, spaceships).

- reqObjNumb(): Calls on `reqAnyPage` to get the first pageof a type along with it´s specific thata, then it extracts the total numbers of elements on that category.

- reqCharById(): Searches an object by using its ID and it´s type.

- reqRndmChar(): It recives a type to search and calls on `reqObjNumb` and `reqCharById` to get to total number of elements of that type and searching one randomly by ID.

- reqFilters(): It searches the array of types that the API has avaliable to make it more dynaic in the future.

- reqNumbPage(): It searches a specific page of a type.

- reqCharByName(): It searches an element by name rather than ID

### Home

It shows the crawl of the fourth episode along with a ship, the text is static, but just as the second part of the component it can easily be made static though the IMG resources need to be taken from somewhere else.

- DailiCard: recives the type of data to look for and using `reqRndmChar` generates a card with an element randomly picked of that type. If the returned element is an error it´ll only dysplay "unknown" wich fits withthe rollplay aspect of the component

### Galaxy

The Galaxy component is in charge of displaying the list of all the elements along with a filter bar. It handles the states of it´s subcomponents and spreads the code in fragments so that it isn´t all in one big chunk. I uses two useEffects to avois looping a request.

- Filterbar: The component that handles the filters, it uses `reqFilters` to get all the diferent types of elements from the API and maps them into a bar.

- GalaxyCard: It renders a medium sized card of one of the element on the filtered list. The elements have an onClick event tha redirects the user to the detailed profile of that element, it uses the Link component from `react-router-dom`

- Pagination: It gets fed the amount of pages on the rendered type and maps them into a pagination bar.

### Profile

The comonent purpose is to display a detailed card of the element selected from the `Galaxy` component. Obtaining the element´s name and type as props, it uses the `reqCharByName` function to get that element´s data.

- ProfileCard: it recives the element´s type and data as props and uses a `switch` to pick with subcomponent to render. It´s purpose is to not bloat the code.

## Credits

This project was made by [Joaquin Bruhn](https://github.com/JoaquinBruhn).

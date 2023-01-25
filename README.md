# ***IMPORTANT***

## create `.env` file in root dir and add `REACT_APP_API_KEY = 'YOUR_KEY'`
### link to api https://rapidapi.com/psimavel/api/steam2/

### App Concept

- User should be able to search exact product (game) by the name
- User should be able to add/remove apps to like list
- Liked list should be available even after page reloading
- User should be able to reach out more app details by clicking at application card
- User should be able sort founded apps by **Price** and **Publication Date**
- User should be able to change sort order (from bigger to smaller → from smaller to bigger)
- Pagination is required for each of search, so user should be able to switch between pages

### Things to use

- React router (dom) v6+
- Redux/MobX
- Styled Components
- TypeScript (proper strong typization required)

### Result

Can't understand why sorting is on client side. But I did it.
Missed part with Redux/Mobx and used Redux-toolkit, maybe they wanted pure Redux.
0 feedback after all

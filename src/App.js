import React from 'react';
import ShoppingList from "./components/ShoppingList/ShoppingList";
import ColorRating from "./components/ColorRating/ColorRating";
import Game from "./components/Game/Game";
import {ColorRatingServiceContextProvider} from "./components/Services/ColorRatingService";

const App = () => (
    <>
        <Game />
        <ShoppingList name="ddA" />
        <ColorRatingServiceContextProvider>
            <ColorRating />
        </ColorRatingServiceContextProvider>
    </>
);

export default App;

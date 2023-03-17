import React, { useState } from "react";
import axios from "axios";
import PlacesAutocomplete from "react-places-autocomplete";

function CitySelector() {
    const [city, setCity] = useState("");
    const [places, setPlaces] = useState([]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        );
        setPlaces(response.data.results);
    };

    const handleCityChange = (value) => {
        setCity(value);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <PlacesAutocomplete
                value={city}
                onChange={handleCityChange}
                onSelect={handleCityChange}
                >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                    <input {...getInputProps({ placeholder: "Enter a city" })} />
                    <div>
                        {loading ? <div>Loading...</div> : null}

                        {suggestions.map((suggestion) => {
                        const style = {
                            backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                        };

                        return (
                            <div
                            {...getSuggestionItemProps(suggestion, { style })}
                            key={suggestion.placeId}
                            >
                            {suggestion.description}
                            </div>
                        );
                        })}
                    </div>
                    </div>
                )}
                </PlacesAutocomplete>
                <button type="submit">Search</button>
            </form>

            <ul>
                {places.map((place) => (
                <li key={place.id}>{place.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CitySelector
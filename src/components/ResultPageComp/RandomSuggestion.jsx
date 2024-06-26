import { useState } from 'react';
import supabase from '../../supabase/supabase';
import { FoodImage, ResultContainer, SuggestionButton } from '../../styles/ResultPageStyles/ResultPageStyle';

const RandomSuggestion = ({ food }) => {
  const [drinkPairing, setDrinkPairing] = useState(undefined);
  const [dessertPairing, setDessertPairing] = useState(undefined);
  const [drinkClicked, setDrinkClicked] = useState(false);
  const [dessertClicked, setDessertClicked] = useState(false);

  const fetchRandomDrinkPairing = async () => {
    try {
      if (!drinkPairing) {
        const { data, error } = await supabase.rpc('get_random_drink_pairing');
        if (error) throw error;

        if (data.length > 0) {
          setDrinkPairing({
            name: data[0].alcohol_name,
            image_url: data[0].alcohol_image_url
          });
          setDrinkClicked(true);
        } else {
          console.error('No random drink pairing found.');
        }
      }
    } catch (error) {
      console.error('Error fetching random drink pairing:', error.message);
    }
  };

  const fetchRandomDessertPairing = async () => {
    try {
      if (!dessertPairing) {
        const { data, error } = await supabase.rpc('get_random_dessert_pairing');
        if (error) throw error;

        if (data.length > 0) {
          setDessertPairing({
            name: data[0].dessert_name,
            image_url: data[0].dessert_image_url
          });
          setDessertClicked(true);
        } else {
          console.error('No random dessert pairing found.');
        }
      }
    } catch (error) {
      console.error('Error fetching random dessert pairing:', error.message);
    }
  };

  return (
    <>
      <div>
        <SuggestionButton onClick={fetchRandomDrinkPairing} clicked={drinkClicked}>
          {food.name}(이)랑 가장 어울리는 주종은?
        </SuggestionButton>
        {drinkPairing && (
          <ResultContainer>
            <h1>{drinkPairing.name}</h1>
            <FoodImage src={drinkPairing.image_url} alt={drinkPairing.name} />
          </ResultContainer>
        )}
      </div>
      <div>
        <SuggestionButton onClick={fetchRandomDessertPairing} clicked={dessertClicked}>
          {food.name}(이)랑 가장 어울리는 디저트는?
        </SuggestionButton>
        {dessertPairing && (
          <ResultContainer>
            <h1>{dessertPairing.name}</h1>
            <FoodImage src={dessertPairing.image_url} alt={dessertPairing.name} />
          </ResultContainer>
        )}
      </div>
    </>
  );
};

export default RandomSuggestion;

import { CarProps } from "@/types";


export async function fetchCars(){
    const headers = {
        
        'X-Api-Key':
        '7qAmHMByFuX5UjiNr8BqIQ==JYuUHMuve9TnV8MU',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    
    }

    const response = await fetch('https://api.api-ninjas.com/v1/cars?model=q3', {
        headers: headers, 
    });

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export const generateCarImageUrl = (car: CarProps, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", String(year));
  if (angle) url.searchParams.append("angle", angle);

  return url.toString();
};

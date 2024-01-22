import api from "@/api";
import { Restaurant } from "@/api";
import RestaurantCard from "@/components/RestaurantCard";

export async function generateStaticParams() {
  const restaurants = await fetch("http://localhost:3000/restaurants").then(
    (res) => res.json()
  );

  return restaurants.map((restaurant: Restaurant) => ({
    id: restaurant.id,
  }));
}

const HomePage = async ({ params: { id } }: { params: { id: string } }) => {
  let restaurant: Restaurant | undefined;

  try {
    restaurant = await api.fetch(id);
  } catch (err) {
    console.error(err);
  }

  if (!restaurant) {
    return <div>Restaurant not found.</div>;
  }

  return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
};

export default HomePage;

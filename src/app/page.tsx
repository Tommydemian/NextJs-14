import api from "@/api";
import { Restaurant } from "@/api";
import RestaurantCard from "@/components/RestaurantCard";
import Link from "next/link";

const HomePage = async () => {
  let restaurants: Restaurant[];

  try {
    restaurants = await api.list();
  } catch (err) {
    console.error(err);
    restaurants = [];
  }

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 ">
      {restaurants.map((restaurant) => {
        return <RestaurantCard restaurant={restaurant} key={restaurant.id} />;
      })}
      <Link prefetch={true} href={"/users"}>
        Users Page
      </Link>
      ;
    </section>
  );
};

export default HomePage;

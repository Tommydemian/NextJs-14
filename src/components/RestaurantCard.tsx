import Link from "next/link";
("use-client");
import React from "react";
import { type Restaurant } from "@/api";

type Props = {
  restaurant: Restaurant;
};

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  return (
    <article key={restaurant.id}>
      <img
        className="mb-3 h-[300px] w-full object-cover rounded-lg"
        src={restaurant.image}
        alt={restaurant.name}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <Link href={`/${restaurant.id}`}>{restaurant.name}</Link>
        <small className="inline-flex gap-1">
          <span>⭐️</span>
          <span>{restaurant.score}</span>
          <span className="font-normal opacity-75">{restaurant.ratings}</span>
        </small>
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
      <Link href={"/"}>
        <p className="text-blue-300">go back</p>
      </Link>
    </article>
  );
};

export default RestaurantCard;

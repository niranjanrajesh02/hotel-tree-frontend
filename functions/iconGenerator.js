import { Beach, City, Dining, Drink, Gym, Parking, Pets, Pool, Tree } from "@components/Icons";

export default function iconGenerator(item) {
  if (item === "luxury") {
    return (
      <li className="mt-2 items-center flex gap-2">
        <Dining />
        <p>Restaurant</p>
      </li>
    )
  }
  else if (item === "pets") {
    return (
      <li className="mt-2 flex gap-2">
        <Pets />
        <p>Pets Allowed</p>
      </li>
    )
  }
  else if (item === "bar") {
    return (
      <li className="mt-2 flex gap-2">
        <Drink />
        <p>Bar</p>
      </li>
    )
  }
  else if (item === "swimming_pool") {

    return (
      <li className="mt-2 flex gap-2">
        <Pool />
        <p>Swimming Pool</p>
      </li>
    )
  }
  else if (item === "parking") {
    return (
      <li className="mt-2 flex gap-2">
        <Parking />
        <p>Car Parking</p>
      </li>
    )
  }
  else if (item === "gym") {
    return (
      <li className="mt-2 flex gap-2">
        <Gym />
        <p>Gym</p>
      </li>
    )
  }
  else if (item === "city") {
    return (
      <City />
    )
  }
  else if (item === "sea" || item === "lake" || item === "river" || item === "pool") {
    return (
      <Beach />
    )
  }
  else if (item === "park" || item === "mountain" || item === "countryside") {
    return (
      <Tree />
    )
  }

}
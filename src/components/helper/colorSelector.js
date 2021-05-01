export const getTypeColor = type => {
  switch (type) {
    case "water":
      return "#6890F0"

    case "steel":
      return "#B8B8D0"

    case "rock":
      return "#B8A038"

    case "psychic":
      return "#F85888"

    case "poison":
      return "#A040A0"

    case "normal":
      return "#A8A878"

    case "ice":
      return "#98D8D8"

    case "ground":
      return "#E0C068"

    case "grass":
      return "#78C850"

    case "ghost":
      return "#705898"

    case "flying":
      return "#A890F0"

    case "fire":
      return "#F08030"

    case "fighting":
      return "#C03028"

    case "fairy":
      return "#EE99AC"

    case "electric":
      return "#F8D030"

    case "dragon":
      return "#7038F8"

    case "dark":
      return "#705848"

    case "bug":
      return "#A8B820"

    default:
      return "#000000"
  }
}

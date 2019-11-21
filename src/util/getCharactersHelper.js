const getCharactersArr = async() => {
  const rawRes = await fetch("https://melroune.github.io/starwars-api/api/all.json");
  const res = await rawRes.json();
  return res;
}

export { getCharactersArr };
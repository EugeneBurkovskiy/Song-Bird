const apiAdress = 'http://localhost:3000';

export async function getAllBirds() {
  const response = await fetch(`${apiAdress}/birds`);
  const result = response.json();
  return result;
}

const apiURL: string = "https://672d6cc5fd89797156426232.mockapi.io/places";
export async function getStays() {
  const response = await fetch(apiURL, {
    next: {
      revalidate: 300,
    },
  });
  if (response.ok) {
    const data: Place[] = await response.json();
    return data;
  }
}


export async function getSingleStay(id:number) {
  const response =  await fetch(`${apiURL}/${id}`, {
    next: {
      revalidate: 300,
    },
  });
  const data: Place = await response.json();
  return data;
}
export const GithubInfoLoader = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/MayankGaur1301`);
    if (!response.ok) {
      throw new Error("Error while fetching the data");
    }
    console.log(response);
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export default async function fetchImages (term) {
  try {
    const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`);
    const jsonFormat = await response.json();
    return jsonFormat;
  } catch (error) {
    console.error(error);
  }
}
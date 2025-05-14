
export default function CoreConcept({image, title, description}) { // object destructuring (needs to be spelled the same as the )
  return (
  <li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
  );
}
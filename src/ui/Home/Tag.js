export const Tag = ({type}) => {
  console.log("Type: ", type)
  const capitalizeType = type[0].toUpperCase() + type.substring(1).toLowerCase();
  return (
    <div className={`card__types--${type.toLowerCase()}`}>
      {capitalizeType}
    </div>
  );
};

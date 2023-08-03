const Results = ({ image }) => {
  return (
    <div className="results">
      {image.map((singleData, index) => (
        <>
          <a key={index} href={singleData.links.html}>
            <img
              src={singleData.urls.regular}
              alt={singleData.alt_description}
            />
          </a>
        </>
      ))}
    </div>
  );
};

export default Results;

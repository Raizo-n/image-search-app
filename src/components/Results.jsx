const Results = ({ image }) => {
  return (
    <div className="results">
      {image.map((singleData, index) =>
        <>
          <a href={singleData.links.html} key={index}>
            <img
              src={singleData.urls.regular}
              alt={singleData.alt_description}
            />
          </a>
        </>
      )}
    </div>
  );
};

export default Results;

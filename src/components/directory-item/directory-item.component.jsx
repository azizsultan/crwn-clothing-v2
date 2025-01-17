import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="body">
        <h1>{title}</h1>
        <p>shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;

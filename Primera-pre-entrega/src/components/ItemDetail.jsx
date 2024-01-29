const ItemDetail = ({item}) => {
  return (
    <>
   
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={item.img} alt={item.titulo} className="img-fluid" />
          </div>
          <div className="col-md-4">
            <h1> {item.titulo} </h1>
            <h5> {item.descripcion} </h5>
            <p>
              <b> ${item.precio}</b>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
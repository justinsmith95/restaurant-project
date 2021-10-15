function MenuItem(props) {
    console.log(props);

    return (
        <div className="col-4">
            <div className="card">
                <img src={'./Images/' + props.src} className="card-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="description">{props.data.description}</p>
                    <p className="Price">{props.price}</p>
                </div>
            </div>
        </div>
    )
}


export default MenuItem;
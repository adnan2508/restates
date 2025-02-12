import { Link } from "react-router-dom";

const EstatesCard = ({estates}) => {
    
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mt-10 animate__animated animate__fadeInDown">
  <figure><img src={estates.image} alt="Shoes" className="w-[500px] h-80" /></figure>
  <div className="p-5 space-y-5">
    <h2 className="text-4xl font-bold">{estates.title}</h2>
    <p className="text-2xl text-green-700 font-semibold">{estates.status}</p>
    <div className="flex justify-between items-center">
    <p className="text-lg">Price: {estates.price}</p>
    <p className="text-lg">Location: {estates.location}</p>
    </div>
    {/* <p>{estates.facilities.map(facility => <li>{facility}</li>)}</p> */}
    <div className="card-actions justify-end">
      <Link to={`/estates/${estates.id}`}>
      <button className="btn btn-success rounded-xl text-white">View Property</button>
      </Link>
    </div>
  </div>
</div>

    </div>
    );
};

export default EstatesCard;
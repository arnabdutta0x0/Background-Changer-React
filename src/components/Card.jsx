// eslint-disable-next-line react/prop-types
function Card({username="Guest"}) {
  return (
    <>
        <div className="max-w-sm rounded-xl overflow-hidden border border-yellow-200 mx-auto m-10 w-64">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{username}</div>
                <p className="text-white text-base "> Hi My name is Arnab Dutta your friend and Brother. </p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Buy Me Coffee </button>
            </div>
        </div>
    </>
    
  );
}

export default Card

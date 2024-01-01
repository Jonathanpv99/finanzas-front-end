
const Card = (props) => {
    return (
        <div className="card-bg rounded-md flex flex-col gap-3 border border-azul-f">
            <div className="flex justify-between mx-2">
                <div className="flex flex-col gap-5 justify-start  mt-16 ml-5">
                    <p className="text-xs">{ props.bank }</p>
                    <img src={ '../../../../chip.jpg' } className="w-14 " alt="chip" />
                </div>
                <div className="flex justify-end mt-5">
                    <img src={ '../../../../visa.png'  } className="w-14 h-10" alt="visa" />
                </div>
            </div>
            <div className="text-2xl font-bold mt-2 mx-2 text-center">
                <h1>{ props.number }</h1>
            </div>
            <div className="flex justify-between pb-2">
                <div className="flex flex-col ml-5">
                    <p className="text-xs">Name:</p>
                    <p>{ props.name }</p>
                </div>
                <div className="flex flex-col mr-4">
                    <p className="text-xs">Valid until:</p>
                    <p className="ml-2">{ props.date }</p>
                </div>

            </div>
        </div>
    )
}

export default Card;
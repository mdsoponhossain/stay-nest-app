

const MyBooking = ({booking}) => {
    console.log(booking);
    const {price ,image ,title,roomSize,bed} = booking ;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>
                {/* Zemlak, Daniel and Leannon */}
                <br />
                <span className="badge badge-ghost badge-sm">{roomSize}</span>
            </td>
            <td>{bed}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">confirm</button>
            </th>
        </tr>
    );
};

export default MyBooking;
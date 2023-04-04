
const TableUser = (props) => {

    return (
        <div>
            {props.data.map((item) => {
                return (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td><button onClick={props.onDelete}>Delete</button></td>
                    </tr>
                )
            })}
        </div>
    );
  };
  
  export default TableUser;
  
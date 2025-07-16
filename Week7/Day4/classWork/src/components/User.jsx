/**
 * Create folder components
 * Create User component in the components folder
 * User will have - name, email, username
 * Render User on App
 */
import "./user.css";
import Button from '@mui/material/Button';

const User = (props) => {
    console.log(props);
    const { id, name, email, username, phone } = props.userInfo;
    const show = props.show;

    if (!show) {
        return <h2>You are not authorize to see this!</h2>
    }

    // if (id < 5) {
    //     return (
    //         <>
    //             <div>
    //                 <h2>Name: {name}</h2>
    //             </div>
    //         </>
    //     )
    // }

    const styleUser = {
        display: 'inline-block',
        border: '1px solid #000',
        borderRadius: '12px',
        margin: '20px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'lightcyan'
    };

    return (
        <>
            <div className="box">
                <img src={`https://robohash.org/${id}?size=150x150`} alt="" />
                <h2>Name: {name}</h2>
                <h4>Email: {email}</h4>
                <p>Username: {username}</p>
                <p>{phone}</p>
                <Button variant="contained">Click!</Button>
            </div>
        </>
    );
}

export default User;
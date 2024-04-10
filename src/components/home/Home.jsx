import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext);

    return (
        <div>
            <h2>This is home: {authInfo.name}</h2>
            
        </div>
    );
};

export default Home;
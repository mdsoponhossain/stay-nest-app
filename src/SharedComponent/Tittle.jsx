import { Helmet } from "react-helmet";

const Tittle = ({ title }) => {
    return (
        <div>
            <Helmet>
                
                <title>{title}</title>
                
            </Helmet>
        </div>
    );
};

export default Tittle;
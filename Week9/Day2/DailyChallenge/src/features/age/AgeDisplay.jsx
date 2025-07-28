import { useSelector } from 'react-redux'
import spinner from '../../assets/react.svg'

const AgeDisplay = () => {
    const count = useSelector(state => state.age.age);
    const loading = useSelector((state) => state.age.loading);

    return (
        <div>
            <h2>AgeDisplay</h2>
            <strong>Age: {count}</strong>
            {loading === 'loading' && (
                <div>
                    <img src={spinner} alt="Loading..." width="40" />
                </div>
            )}
        </div>
    )
}

export default AgeDisplay
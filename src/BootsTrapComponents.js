import { Button } from 'react-bootstrap';

const BootstrapButtonAdd = (props) => {

    const { name, variant } = props;
    return (
        <Button variant={variant}
            size='lg'>{name}</Button>
    )
}

export default BootstrapButtonAdd;
import './styles.css';

type Props ={
    name: string;
}

export default function Products({ name}:Props){
    return(
        <main className='mgt20 container'>
            <p>{name} 1</p>
            <p>{name} 2</p>
            <p>{name} 3</p>
        </main>
    );
}
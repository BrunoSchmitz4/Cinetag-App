import Banner from 'components/Banner';
import Titulo from '../../components/Titulo';
import Card from 'components/Card';
import style from './Inicio.module.css';
import { useEffect, useState } from 'react';


function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/BrunoSchmitz4/cinetag-api/videos')
        .then(res => res.json())
        .then(data => {
            setVideos(data)
        })
    }, [])

    return (
        <>
        {/* Fragment é orfetado pelo react para considerar como um elemento pai */}
            <Banner imagem="home"/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={style.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
            {/* <Card id='1' titulo='Rio' capa='https://www.themoviedb.org/t/p/original/el1e8TepBM0o8idXAd4aavXgWZb.jpg' /> */}
        </>
    )
} 

export default Inicio;
// tamanho 40
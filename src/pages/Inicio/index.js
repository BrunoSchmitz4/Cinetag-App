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
            <Banner imagem="home"/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={style.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
} 

export default Inicio;
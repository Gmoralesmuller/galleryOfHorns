import HornedBeast from './HornedBeast';
import hornedBeast from './hornedBeast.json';

function Gallery() {
    return (
        <>
            <HornedBeast title="Unicornio" description="Animal mitológico con un solo cuerno en la cabeza." imageUrl="https://img.freepik.com/foto-gratis/unicornio-cuento-hadas-generado-ia_268835-10010.jpg?ga=GA1.2.1290420940.1718598636&semt=ais_hybrid" />
            <HornedBeast title="Rinoceronte" description="Animal con un solo cuerno en la nariz. Llamado rinoceronte." imageUrl="https://img.freepik.com/vector-gratis/rinoceronte-gris-aislado-sobre-fondo-blanco_1308-87696.jpg?ga=GA1.2.1290420940.1718598636&semt=ais_hybrid" />
            {hornedBeast.map(data => (
                <HornedBeast title={data.title} description={data.description} imageUrl={data.image_url}/>
            ))
            }
        </>
    );
}
export default Gallery;
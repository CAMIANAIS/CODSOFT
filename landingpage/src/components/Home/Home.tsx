// En tu componente Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ListEvents from '../ListEvents/ListEvents.tsx';
import portada from '../../assets/img/portada.png';
import washingtonEvent from '../../assets/img/washington_poster.jpg';
import Header from '../Header/header.tsx';
import './Home.css'
const Home: React.FC = () => {
  const events = [
    {
      id: 1,
      poster: <img src={washingtonEvent} alt="Evento de Washington" />,
      title: 'Washington DC II FIRST Tech Challenge Qualifier',
      date: 'domingo a las 07:30',
      place: 'District of Columbia International School',
      price: 'Comprobar el precio de la entrada en el evento',
    },
    {
      id: 2,
      poster: 'url_de_la_imagen_1',
      title: 'Washington DC II FIRST Tech Challenge Qualifier',
      date: 'domingo a las 07:30',
      place: 'District of Columbia International School',
      price: '$20',
    },
    {
      id: 3,
      poster: 'url_de_la_imagen_2',
      title: 'Washington DC II FIRST Tech Challenge Qualifier',
      date: 'domingo a las 07:30',
      place: 'District of Columbia International School',
      price: '$50',
    },
    // ... otros eventos
  ];

  return (
    <div>
      <Header />
      <div>
        <div className='imgContainer'>
          <img
            src={portada}
            alt="portada de mi sitio web"
            className="portada"
          />
        </div>
      </div>
      <ListEvents events={events} />
    </div>
  );
};

export default Home;

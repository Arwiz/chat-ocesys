import HorizontalListPage from '../../components/horizontal_list';
import React from 'react';

type Props = {};

const Dashboard = async () => {
  return <div className="flex min-h-screen min-w-full justify-evenly">
    <HorizontalListPage title='Orgnizations' data={["Organizqtion Obe", "Organizqtion Two", "Organizqtion Three" ]}/>
  </div>
};  

export default Dashboard;

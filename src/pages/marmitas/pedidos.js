import { useState } from 'react';
import { MarmitaPedidos } from 'views';

import { getAllMarmitaOrders } from 'services';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

const filterProps = {
  page: 1,
  limit: 8,
};

export default function MarmitaPedidosPage() {
  const [filter, setFilter] = useState(filterProps);

  const { data: orders, isLoading } = useQuery(
    ['getAllMarmitaOrders', filter],
    () => getAllMarmitaOrders(filter)
  );

  return (
    <MarmitaPedidos
      filter={filter}
      setFilter={setFilter}
      orders={orders}
      isLoading={isLoading}
    />
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['getAllMarmitaOrders', filterProps], () =>
    getAllMarmitaOrders(filterProps)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
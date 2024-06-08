import { useQuery, useQueryClient } from 'react-query';

const { data: user, error, isLoading } = useQuery(
  'user', // cache key
  fetchUser, // function to fetch user data
  {
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  }
);

if (isLoading) {
  return <Text>Loading...</Text>;
}

if (error) {
  return <Text style={styles.error}>{error.message}</Text>;
}

return (
  <View style={styles.container}>
    <Header name={user.id_usuario} />
    <Actions />
    <Text style={styles.title}>Quadro de Avisos!</Text>
    <Avisos />
  </View>
);
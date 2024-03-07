import { Game } from './Game';
import useStoreUser from './store/store';
import UserForm from './UseForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

function App () {
  const [username] = useStoreUser(state => [
    state.username
  ])

  return (
    <QueryClientProvider client={queryClient}>
      {username !== '' ? (
        <Game name={username} />
      ) : (
        <UserForm />
      )}
    </QueryClientProvider>
  );
}

export default App;

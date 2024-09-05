import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./components/Login";
import { Box } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <a href="#">
              <img src="/logo-white.png" className="img" height={60} />
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <QueryClientProvider client={queryClient}>
          <Login />
        </QueryClientProvider>
      </Container>
    </>
  );
}

export default App;

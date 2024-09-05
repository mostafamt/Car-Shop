import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./components/Login";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

// some comment to trigger redeploy
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
      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          marginTop: "4rem",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <QueryClientProvider client={queryClient}>
            <Login />
          </QueryClientProvider>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;

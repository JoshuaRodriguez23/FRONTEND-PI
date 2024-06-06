import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../assets/styles/Login.css';
import { Button, Grid } from '@mui/material';
import { useAuth, _loginWithGoogle } from '../context/AuthContext.jsx';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
  const auth = useAuth();

  const handleGoogle = (e: any) => {
    e.preventDefault();
    auth.loginWithGoogle();
    const { email } = auth.user || {};
    if (!email) return [];

    const arrayResults = email.split('@');

    if (arrayResults[1] !== 'upqroo.edu.mx') {
      console.log('No eres estudiante');
      auth.logout();
    } else {
      console.log('Bienvenido');
    }
  };

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '85vh',
          '& > :not(style)': {
            m: 2,
            width: 400,
            height: 300
          }
        }}>
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 2
          }}>
          <img
            className="logoLogin"
            src="./public/logoUPQROO.png"
            alt="Logo UPQROO"
            style={{ padding: '15px' }}
          />
          <h2 className="titleLogin">Iniciar Sesión</h2>
          <p>Con una cuenta institucional(@upqroo.edu.mx)</p>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={10} md={10} style={{marginTop: '15px' }}>
              <Button
                startIcon={<GoogleIcon />}
                variant="outlined"
                className="btnGoogleLogin"
                onClick={(e) => handleGoogle(e)}>
                Iniciar sesión Google
              </Button>
            </Grid>
            {/* <Grid item xs={10} md={10}>
              <Button
                variant="contained"
                style={{ width: '100%' }}
                onClick={() => handleLogout()}>
                Logout
              </Button>
            </Grid> */}
          </Grid>
        </Paper>
      </Box>
    </>
  );
}

export default Login;

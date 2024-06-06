import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import  '../assets/styles/Login.css'

function Login() {
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
            alignItems: 'center',
            p: 2
          }}>
          <img
            src="./public/logoUPQROO.png"
            alt="Logo UPQROO"
            style={{ width: '50%', marginTop: '20px' }}
          />
          <br />
          <h2 className='titleLogin'>Iniciar Sesión</h2>
          <p>Con una cuenta institucional(@upqroo.edu.mx)</p>
        </Paper>
      </Box>
    </>
  );
}

export default Login;

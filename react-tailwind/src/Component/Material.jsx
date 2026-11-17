// // npm install @mui/material @emotion/react @emotion/styled
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// // import Stack from '@mui/material/Stack';

// function Material() {
//     return (
//         <div>
//             <h1>Material UI</h1>
//             <Button variant="outlined" startIcon={<DeleteIcon />}>
//                 Delete
//             </Button>
//             <Button variant="contained" endIcon={<SendIcon />}>
//                 Send
//             </Button>
            
//         </div>
//     )
// }

// export default Material;


import HomeIcon from '@mui/icons-material/Home';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from './card';

function Material() {
  return (
    <div>
      <HomeIcon />
      <h1>Home Page</h1>
      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>

     <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>

      <Card/>
    </div>
  );
}

export default Material;

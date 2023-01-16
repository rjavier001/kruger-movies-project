import React, { useState } from 'react';
import { Box, TextField, Grid, Card, CardContent, FormControl, Typography, Select, MenuItem, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab'

const dataEspecialist = [
  {
    id: 1,
    descriptions: 'Frontend',
  },
  {
    id: 2,
    descriptions: 'Backend',
  },
  {
    id: 3,
    descriptions: 'Frontend && Backend',
  },
  {
    id: 4,
    descriptions: 'Do not Developer'
  }
]

function Form() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    rol: 0

  });

  const { firstname, lastname, rol } = formData;

  const handleOnchange = (e) => {
    console.log([e.target.name], e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (firstname, lastname, rol) => {
    console.log(firstname, lastname, rol);
    setLoading(true)
    alert(`datos formularios:::, ${firstname}, ${lastname}, ${rol}`)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }

  return (
    <Box  sx={{ flexGrow: 1, m: 10 }}>
      <header className="App-header"><br></br><br></br>
        <Typography component="h2" variant="h2" >Contact Us</Typography>
        <Box my={2}>
          <Card sw={{maxWidth:345,minHeight:500}}>
            <CardContent>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                  <TextField
                    error={false}
                    label="First Name"
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={handleOnchange}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Campo obligatorio"
                  />

                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                  <TextField
                    error={false}
                    label="Last Name"
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={handleOnchange}
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    helperText="Campo obligatorio"
                  />

                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <FormControl sx={{ width: '100%' }}>
                    <InputLabel id="demo-simple-select-label">Rol Develop</InputLabel>
                    <Select
                      name="rol"
                      value={rol}
                      fullWidth
                      label="Rol Develop"
                      onChange={handleOnchange}>
                      <MenuItem value={0}>Seleccione</MenuItem>
                      {dataEspecialist && dataEspecialist.map((d, index) => (
                        <MenuItem key={d.id} value={d.id}>{d.descriptions}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box sx={{ '& > button': { m: 1 } }}>
                    <LoadingButton
                      size="small"
                      onClick={() => handleSubmit(firstname, lastname, rol)}
                      loading={loading}
                      variant="outlined"
                      disabled={!loading ? false : true}
                    >
                      Enviar
                    </LoadingButton>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

        </Box>

      </header>
    </Box>
  );
}

export default Form;

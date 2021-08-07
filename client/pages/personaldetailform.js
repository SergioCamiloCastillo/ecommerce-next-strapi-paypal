import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import {TextField, Typography} from "@material-ui/core/";
const personaldetailform = ({getFieldProps}) => {
    return (
        <Container>
                <Typography variant='h6'>Personal Detail</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField name='firstname' label='First Name' fullWidth {...getFieldProps('firstmame')}></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name='lastname' label='Last Name' fullWidth {...getFieldProps('lastname')}></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name='email' label='Email' fullWidth {...getFieldProps('email')}></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name='phone' label='Phone Number' fullWidth {...getFieldProps('phone')}></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name='address' label='Address' fullWidth {...getFieldProps('address')}></TextField>
                    </Grid>
                </Grid>
        </Container>
    );
}
personaldetailform.propTypes = {
    getFieldProps:PropTypes.func.isRequired,
}
export default personaldetailform;

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OrderDetails from '../OrderDetails/OrderDetails';
import constants from '../../Constants/constants';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import './Assignment.css';
import {
    TextField,
    Grid,
    FormControlLabel,
    FormControl,
    Checkbox,
    Card,
    CardMedia,
    Button,
    Divider,
    InputAdornment
  } from '@material-ui/core'
import { NavigateBeforeSharp } from '@material-ui/icons';
const useStyles = makeStyles({
    root: {
        // minWidth: 275,
    },
    title: {
        fontSize: 20,
        height: 50,
        padding: 10,
        paddingLeft: 55,
        color: 'white'
    },
    formHeadings: {
        margin: 20,
        marginBottom: 0
    },
    formControl: {
        marginTop:'1%',
        width:"50%"
    },
    
});


const Assignment = (props) => {
    const classes = useStyles();
    const [numberOfTrucks, setNumberOfTrucks]=useState(1);
    const [truckNumber,setTruckNumber]=useState([]);


    const truckCapacityChangeController=(event)=>{
        if(event.target.value== "17 tonne")
        {
            setNumberOfTrucks(3);
            console.log(3);
        }
        else if(event.target.value== "25 tonne")
        {
            setNumberOfTrucks(2);
            console.log(2);
        }
    }

    const onTruckNumberChangeController=(event,index)=>{
        let truckArr = truckNumber.slice(); 
        var currenttruckNumber=event.target.value;
        truckArr[index] = currenttruckNumber;
        setTruckNumber(truckArr);
    }

    const submitButtonHandler=()=>{
            const truckNumbersArray=[];
            for(var i=0;i<numberOfTrucks;i++){
                const truck={
                    truckNumber: truckNumber[i],
                }
                truckNumbersArray.push(truck);
            }
            alert(JSON.stringify(truckNumbersArray));
    }

    var truckInfo=Array.apply(null, { length:numberOfTrucks }).map((e, i) => (
    <React.Fragment>
        <Typography className={classes.formHeadings}>Truck {i+1}:</Typography>
        <Grid container spacing={3} style={{ paddingLeft:30, paddingTop:10, paddingBottom:20 }}>
            <Grid item xs={12} sm={8}>
                <TextField
                    required
                    id="TruckNumber"
                    name="TruckNumber"
                    label={constants.truckNumber}
                    fullWidth
                    autoComplete="truckNumber"
                    onChange={(event)=>onTruckNumberChangeController(event,i)}
                    InputProps={{
                        startAdornment: <LocalShippingIcon style={{marginRight:"10px"}}/>,
                    }}
                    
                />
            </Grid>
        </Grid>
    </React.Fragment>
      ));

                

    return (
                <div>
                    <Card className={classes.root}>  
                            

                            <CardContent style={{ padding: 0 }}>
                                <Typography className={classes.title} gutterBottom style={{ backgroundColor: '#66bb6a' }}>
                                    Truck Assigning Form
                                </Typography>
                                <div >
                                    <img src="data:image/png;base64,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" className="assignImage"  alt="recipe thumbnail"/>
                                </div>
                                <form>
                                    <Grid container spacing={3} style={{ padding: 50, paddingTop: 10, paddingBottom: 30 }}>
                                        
                                        <Grid item xs={12} sm={12}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-native-simple">Truck Capacity</InputLabel>
                                                <Select
                                                    native
                                                    //value="inches"
                                                    onChange={truckCapacityChangeController}
                                                    
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value={"17 tonne"}>17 tonne</option>
                                                    <option value={"25 tonne"}>25 tonne</option>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        
                                        {truckInfo}
                                    </Grid>
                                </form>

                            </CardContent>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    margin: 20
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={submitButtonHandler}
                                >
                                    Submit
                                </Button>                      
                            </div>
                        </Card>
                        <OrderDetails/>
                                        
                </div>
        )
}
export default Assignment;
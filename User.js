import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, FormControl, Typography,InputLabel, NativeSelect, FormHelperText } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

//import './AddUser.Css';

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
//import userService from "../services/user.Service";
import AuthService from '../services/auth.service';
import userService from "../services/user.Service";




const style = {
  root: {
    minWidth: 275,
    backgroundColor:'#212121',
    marginTop: 50,
    color: '#e0f7fa'
  },
  button: {
    fontSize: '20px'
  },
  formControl: {
   // margin: spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    //marginTop: spacing(2),
  },
}

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value:30,
        UserArr: [],
        username:"",
        email:"",
        password:"",
        roles:"",
        successful: false
    }

  }

  onChangeusername = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  onChangeemail = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  onChangepassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  onChangeroles = (event) => {
    this.setState({
      roles: event.target.value
    });
  }

  componentDidMount(){
      this.reloadUserList();
  }
  reloadUserList = () => {
    console.log("Hiiiiiiiiiiiiiiiiii")
      userService.getAllUsers()
      
      .then((Response) => {
          this.setState({UserArr:Response.data})
      })

  }

  

  handleAddUser = (event) => {
    event.preventDefault();

    let User1 = {
      username:this.state.username,
      email:this.state.email,
      password:this.state.password,
      roles:[this.state.roles]
    }
    console.log("hello")
    //userService.createUser1(User1)
    AuthService.signup(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.confirmpassword
    )
    

    if (this.state.username && this.state.email && this.state.password && this.state.roles) {
      console.log(this.state.username + " " + this.state.email + " " + this.state.password + "" +this.state.roles)
      this.setState({
        successful: true,
        message: "Success -AddUser Saved Successfully."
      })
    } else {
      this.setState({
        successful: false,
        message: "Not valied"
      })
    }
  }

  render() {
    return (
      //  <div style={{boxShadow:"5px 10px 15px black",padding:"20px",border:"5px solid,black",overflow: "hidden",margin: "30px" }} >
        <Grid container spacing={1}>
           
        <Grid item xs={4}/>
        <Grid item xs={5} Style={{backgroundColor:"black"}}>
          <Card className={style.root} style={{margin:20,boxShadow:"10px 20px 25px black", border: "2px 5px 8px",marginTop:120}}>
           <CardContent>
           {/* <Paper variant="outlined"> */}
           <div className="card">
        <Grid item xs={4}/>
             <form className={style.root} noValidate autoComplete="off" style={{width:'150%'}}onSubmit={this.handleRegister}>
                  {!this.state.successful && (
             <Grid container spacing={1}>
                      <Grid item xs={11}>

                
                            <h3 style={{fontSize:30,color:"#1a237e"}}>Add  User</h3>
                        
                        
                      {/* <h3 style={{fontSize:30,color:"#1a237e"}}>Add User</h3>
                     */}
                       
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                            
                        <TextField type="text" id="outlined-required" label="User Name" variant="outlined" value={this.state.username} helperText="Enter your name" style={{width:"120%"}} onChange={this.onChangeusername} />
                        </FormControl>&emsp; &emsp; &emsp;  &emsp;  &emsp; 
                        
                        <FormControl>
                            
                            <TextField type="text" id="outlined-required" label="Email" value={this.state.email} variant="outlined" helperText="Enter Email Address" style={{width:"120%"}} onChange={this.onChangeemail} />
                            </FormControl>
                       &emsp; &emsp;  
                        </Grid>
                         
                        <Grid item xs={12}>
                        {/* <FormControl>
                        <TextField type="text" id="outlined-required" label="Address" variant="outlined" helperText="Enter your Address" style={{width:"120%"}} onChange={this.onChangeCoverPhotoURL} />
                        </FormControl>&emsp; &emsp; &emsp;  &emsp;  &emsp;  */}

                     <FormControl size="small" value={this.state.roles} onChange={this.onChangeroles}> 
                            <InputLabel>Roles</InputLabel>
                            <NativeSelect
                              inputProps={{
                                  name:'Roles',
                                  id: 'Roles',
                                  
                              }}
                            >
                            <option value={"selectroles"}>Select Roles</option>
                            <option value={"user"}>ROLE_USER</option>
                            <option value={"admin"}>ROLE_ADMIN</option>
                            </NativeSelect>
                            <FormHelperText>Please select your Roles</FormHelperText>
                        </FormControl>&emsp; &emsp; 
                       
                        
                      

                      
                        <FormControl>
                        <TextField type="" id="outlined-required" label="Password" value={this.state.password} variant="outlined" helperText="Enter your password"  style={{width:"120%"}}onChange={this.onChangepassword} />
                        </FormControl>
                        </Grid>

                        {/* <Grid item xs={12}>
                        <FormControl >
                        <TextField type= "" id="outlined-required" label="Password" variant="outlined" helperText="Enter your Password " size="small" style={{width:"120%",height:"800"}} onChange={this.onChangePrice}/>
                        </FormControl> &emsp; &emsp; &emsp;  &emsp;  &emsp; 

                        <FormControl >
                        <TextField type= "" id="outlined-required" label="Age" variant="outlined" helperText="Enter Your Age" size="small"style={{width:"120%"}} onChange={this.onChangePrice}/>
                        </FormControl>
                        

                        
                        &emsp; &emsp; 
                       </Grid> */}
                       {/* <Paper variant="outlined">  */}
                        <Grid item xs={12}>
                        {/* { localStorage.getItem('isLogin2') ? 
                      (<Button style={{float: 'right'}}
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<SaveIcon />}
                        onClick = {this.Bookupdate}
                        >
                        Update
                      </Button>):
                      (<Button style={{float: 'right'}}
                      variant="contained"
                      color="secondary"
                      size="small"
                      startIcon={<SaveIcon />}
                      onClick = {this.Booksave}
                      >
                      Save
                  </Button>)
                    } */}
                        <Button href="/Save" variant="contained"onClick={this.handleAddUser} style={{backgroundColor:'#1b5e20',marginLeft:320 }}> <SaveIcon style={{fontSize:20}}/>Add</Button>&emsp; 
                        <Button  href="/Reset"variant="contained" style={{backgroundColor:'#0d47a1'}}> <ReplayIcon style={{fontSize:20}}/>RESET</Button>&emsp;
                        <Button href="/upadate" variant="contained" style={{backgroundColor:'#0d47a1'}}><CancelPresentationIcon style={{fontSize:20}}/>Cencel</Button> 
                       {/* </Paper> */}
                        </Grid>
                 </Grid>   
                 )}
                 {this.state.message && (
               <div>
                 <Typography color='#d50000' variant="overline" display="block" gutterBottom> 
                     <strong>{this.state.message}</strong>
                 </Typography>
               </div>
             )}
              
                </form>
                </div>
                {/* </Paper> */}
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
        
      </Grid>
    //  </div>
      
    );
                            
}
}
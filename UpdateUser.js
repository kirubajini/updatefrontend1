import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, FormControl, Typography,InputLabel, NativeSelect, FormHelperText, Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

// import './AddUser.Css';

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import userService from "../services/user.Service";

//import userService from "../services/user.Service";



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

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id:'',
      username: "",
      email: "",
      password: "",
      roles: "",
      UserArr: [],
      successful: false
    };
  }

  edituser = (e) => {
    
    e.preventDefault()
    const id = this.props.match.params.id;
    console.log("ffffffffffffffffffffffffff")
    let user = {
      username : this.state.username,
      email : this.state.email,
      roles : this.state.roles,
      password : this.state.password
      
    }
    console.log(id)
    userService.UpdateUser(id,user)
    .then((Resposne) => {
      console.log(Response)
    })
    .catch((error) => {
      console.log(error)
    })
  //console.log(book)
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
  
  componentDidMount() {
      const id = this.props.match.params.id;
      if(id){
          this.loadUser(id);
      }

      userService.getUserById(this.props.match.params.id)
      .then((Response) => {
        console.log(Response.data)
        this.setState({
          username:Response.data.username
        })
      })

      userService.getUserById(this.props.match.params.id)
      .then((Response) => {
        console.log(Response.data)
        this.setState({
          email:Response.data.email
        })
      })

      userService.getUserById(this.props.match.params.id)
      .then((Response) => {
        console.log(Response.data)
        this.setState({
          roles:Response.data.roles
        })
      })

      userService.getUserById(this.props.match.params.id)
      .then((Response) => {
        console.log(Response.data)
        this.setState({
          password:Response.data.password
        })
      })

  }

 

   loadUser =(id) =>{
       userService.getUserById(id)
       .then((res) =>{
           let User = res.data;
           this.setState({
               id:User.id,
               username:User.username,
               email:User.email,
               password:User.password,
               roles:User.roles,
           })
       })
   }

   updateUser = (e) =>{
       e.preventDefault();
       let UserBody ={
           id:this.state.id,
           username:this.state.username,
           email:this.email,
           password:this.password,
           roles:this.roles
       };

       userService.updateUser(UserBody)
       .then(res => {
           this.setState({message:'User added successfully.'});
           this.props.history.push('/UserDetails')
       });
   }

  

//   handleAddUser = (event) => {
//     event.preventDefault();

//     if (this.state.username&& this.state.email && this.state.password && this.state.roles) {
//       console.log(this.state.username + " " + this.state.email + " " + this.state.password + "" +this.state.roles)
//       this.setState({
//         successful: true,
//         message: "Success -AddUser Saved Successfully."
//       })
//     } else {
//       this.setState({
//         successful: false,
//         message: "Not valied"
//       })
//     }
//   }

  render() {
    console.log(this.state.UserArr)
    return (
      
        <Grid container spacing={1}>
           
        <Grid item xs={4}/>
        <Grid item xs={5} Style={{backgroundColor:"black"}}>
          <Card className={style.root} style={{margin:20,boxShadow:"10px 20px 25px black", border: "2px 5px 8px",marginTop:120}}>
           <CardContent>
           <div className="card">
        <Grid item xs={4}/>
             <form className={style.root} noValidate autoComplete="off" style={{width:'150%'}}onSubmit={this.handleRegister}>
                  {!this.state.successful && (
             <Grid container spacing={1}>
                      <Grid item xs={11}>

                     
                            
                         <h3 style={{fontSize:30,color:"#1a237e"}}>Update User</h3>
                        
                        
                     
                       
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                            
                        <TextField type="text" id="outlined-required" label="User Name" variant="outlined" helperText="Enter your name" style={{width:"120%"}}value={this.state.username} onChange={this.onChangeusername} />
                        </FormControl>&emsp; &emsp; &emsp;  &emsp;  &emsp; 
                        
                        <FormControl>
                            
                            <TextField type="text" id="outlined-required" label="Email" variant="outlined" helperText="Enter Email Address" style={{width:"120%"}} value={this.state.email} onChange={this.onChangeemail} />
                            </FormControl>
                       &emsp; &emsp;  
                        </Grid>
                         
                        <Grid item xs={12}>
                        <FormControl size="small"onChange={this.onChangeroles} value={this.state.roles}>
                            <InputLabel>Roles</InputLabel>
                            <NativeSelect
                              inputProps={{
                                  name:'Roles',
                                  id: 'Roles',
                                  
                              }}
                            >
                            <option value={"Select Roles"}>Select Roles</option>
                            <option value={"ROLE_USER"}>ROLE_USER</option>
                            <option value={"ROLE_ADMIN"}>ROLE_ADMIN</option>
                            </NativeSelect>
                            <FormHelperText>Please select your Roles</FormHelperText>
                        </FormControl>&emsp; &emsp; 
                       
                        
                      

                      
                        {/* <FormControl>
                        <TextField type="" id="outlined-required" label="Passworld" variant="outlined" helperText="Enter Passworld"  style={{width:"120%"}} value={this.state.password}onChange={this.onChangepassword} />
                        </FormControl> */}
                        </Grid>

                        <Grid item xs={12}>
                       
                        <Button href="/Save" variant="contained"onClick={this.updateUser} style={{backgroundColor:'#1b5e20',marginLeft:320 }}> <SaveIcon style={{fontSize:20}}/>Update  </Button>&emsp; 
                        <Button  href="/Reset"variant="contained" style={{backgroundColor:'#0d47a1'}}> <ReplayIcon style={{fontSize:20}}/>RESET</Button>&emsp;
                        {/* <Button href="/upadate" variant="contained" style={{backgroundColor:'#0d47a1'}}><CancelPresentationIcon style={{fontSize:20}}/>Cencel</Button>  */}
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
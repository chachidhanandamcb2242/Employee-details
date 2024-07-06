
import './Home.css';


function Home() {
  
    return (
      <div class="container">
        <h1 style={{textAlign:"center"}}>Employee Attendance</h1>
        <form  action="http://127.0.0.1:7500/sign_up" method="post">
        <div class="box">
          <h4>Month & Year</h4>
          <input type="month" name="Month" style={{width:"100px"}} />
        </div>
  
      <div class="boxe"style={{margin:"10px 10px"}}>
      <div class="row">
        <div class="col-25">
            <label>Enter your name:</label>
        </div>
        <div class="col-75">

                <input 
                  type="text" 
                  name="username" 
                  
        />
      </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label>Enter your Id:</label>
        </div>
        <div class="col-75">
        <input 
          type="number" 
          name="Id" 
        
        />
        </div>
        </div>
        <div class="row">
          <div class="col-25">
        <label>Entry time:</label>
        </div>
        <div class="col-75">
        <input 
          type="datetime-local" 
          name="Entrytime" 
          
        />
        </div>
        </div>
        <div class="row">
          <div class="col-25">
        <label>Morning interval time:</label>
        </div>
        <div class="col-75">
        <input 
          type="time" 
          name="MIntervaltime" 
          
        />
        </div>
        </div>
        <div class="row">
          <div class="col-25">
        <label>Lunch time:</label>
        </div>
        <div class="col-75">
        <input 
          type="time" 
          name="Ltime" 
        
        />
        </div>
        </div>
        <div class="row">
          <div class="col-25">
        <label>Evening interval time:</label>
        </div>
        <div class="col-75">
        <input 
          type="time" 
          name="EIntervaltime" 
        
        />
        </div>
        </div>
        <div class="row">
          <div class="col-25">
        <label>Exit time:</label>
        </div>
        <div class="col-75">
        <input 
          type="time" 
          name="Exittime" 
          
        /></div>
        </div>
        </div><br/>
        <input type="submit" />
    </form></div>);
  };
  
  export default Home;
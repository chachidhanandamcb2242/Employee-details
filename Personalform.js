import './Personalform.css';
function Personalform() {
  
    return (<div class="container3">
      <h1 style={{textAlign:"center"}}>Employee Details</h1>
      
  <form action="http://127.0.0.1:7500/sign_up2" method="post" >
    <div class="boxf"style={{margin:"10px 10px"}}>
    <div class="row6">
      <div class="col6-25">
          <label>Enter your name:</label>
      </div>
      <div class="col6-75">

              <input 
                type="text" 
                name="ename" 
                
      />
    </div>
    </div>
    <div class="row6">
      <div class="col6-25">
        <label>Enter your Id:</label>
      </div>
      <div class="col6-75">
      <input 
        type="number" 
        name="eid" 
        
      />
      </div>
      </div>
      <div class="row6">
        <div class="col6-25">
      <label>Date Of Joining:</label>
      </div>
      <div class="col6-75">
      <input 
        type="date" 
        name="doj" 
        
      />
      </div>
      </div>
      <div class="row6">
        <div class="col6-25">
      <label>Address:</label>
      </div>
      <div class="col6-75">
      <input 
        type="text" 
        name="address" 
        
      />
      </div>
      </div>
      <div class="row6">
        <div class="col6-25">
      <label>Contact No:</label>
      </div>
      <div class="col6-75">
      <input 
        type="number" 
        name="contact" 
        
      />
      </div>
      </div>
      <div class="row6">
        <div class="col6-25">
      <label>Parents Or Gaurdian Details :</label>
      </div>
      <div class="col6-75">
      <input 
        type="text" 
        name="parentdetail" 
      
      />
      </div>
      </div>
      <div class="row6">
        <div class="col6-25">
      <label>Id Proof aadhar/voterid/pancard</label>
      </div>
      <div class="col6-75">
      <input 
        type="text" 
        name="proof" 
      
      /></div>
      </div>
      </div><br/>
      <input type="submit" />
  </form></div>);
  };
  
  export default Personalform;
import './Salary.css'
function Salary ()  {
  
    return (<div class="container1">
      <h1 style={{textAlign:"center"}}>Salary Slip</h1>
      <form action="http://127.0.0.1:7500/sign_up1" method="post">
      <div class="row1">
        <div class="col1-50">
          <div class="boxa">
          <div class="row2">
          <div class="col2-25">
          <label>Enter your Employee name:</label>

          </div>
          <div class="col2-75">
          <input 
                type="text" 
                name="ename" 
                
      />
          </div>
          </div>
          
          <div class="row2">
          <div class="col2-25">
          <label>Enter your Designation:</label>

          </div>
          <div class="col2-75">
          <input 
                type="text" 
                name="designation" 
                
      />
           </div>
           </div>
           <div class="row2">
          <div class="col2-25">
          <label>Enter your Company Name:</label>

          </div>
          <div class="col2-75">
          <input 
                type="text" 
                name="cname" 
                
      />

          </div>
          </div>
          </div>


        </div>
        <div class="col1-50">
          <div class="boxb">
          <div class="row2">
        <div class="col2-25">
          <label>Month & Year:</label>

          </div>
          <div class="col2-75">
          <input 
                type="month" 
                name="month" 
                
      />

          </div>
          </div>
          </div>

        </div>
        
      </div>
    <div class="row3">
    <div class="col3-50">
      <div class="boxc">
    <div class="row4">
      <div class="col4-75">
          <label>Earnings</label>
      </div>
      <div class="col4-25">
        <label>Amount Rs</label>

    </div>
    </div>
    <div class="row4">
      <div class="col4-75">
        <label>Basic Pay</label>
      </div>
      <div class="col4-25">
      <input 
        type="number" 
        name="basicpay" 
        
      />
      </div>
      </div>
      <div class="row4">
        <div class="col4-75">
      <label>House Rent Allowance</label>
      </div>
      <div class="col4-25">
      <input 
        type="number" 
        name="rent" 
        
      />
      </div>
      </div>
      <div class="row4">
        <div class="col4-75">
      <label>Conveyance Allowance</label>
      </div>
      <div class="col4-25">
      <input 
        type="number" 
        name="callowance" 

      />
      </div>
      </div>
      <div class="row4">
        <div class="col4-75">
      <label>Medical Allowance</label>
      </div>
      <div class="col4-25">
      <input 
        type="number" 
        name="mallowance" 
        
      />
      </div>
      </div>
      <div class="row4">
        <div class="col4-75">
      <label>Special Allowance</label>
      </div>
      <div class="col4-25">
      <input 
        type="number" 
        name="sallowance" 
    
      />
      </div>
      </div>
      <div class="row4">
        <div class="col4-75">
      <label>Gross Pay</label>
      </div>
      <div class="col4-25">
      <input 
        type="number" 
        name="grosspay" 
        
      /></div>
      </div>
      </div>
      </div>
      <div class="col3-50">
        <div class="boxd">
      <div class="row5">
        <div class="col5-75">
      <label>Deduction</label>
      </div>
      <div class="col5-25">
        <label>Amount Rs</label>
      </div>
      </div>
      <div class="row5">
        <div class="col5-75">
      <label>Employee Providant Fund</label>
      </div>
      <div class="col5-25">
      <input 
        type="number" 
        name="pf" 
        
      />
      </div>
      </div>
      <div class="row5">
        <div class="col5-75">
      <label>Professional Tax</label>
      </div>
      <div class="col5-25">
      <input 
        type="number" 
        name="ptax" 
        
      />
      </div>
      </div>
      <div class="row5">
        <div class="col5-75">
      <label>Tax Deducutiable at Source </label>
      </div>
      <div class="col5-25">
      <input 
        type="number" 
        name="dtax" 
        
      />
      </div>
      </div><br/><br/><br/><br/><br/>
      <div class="row5">
        <div class="col5-75">
      <label>Net Pay </label>
      </div>
      <div class="col5-25">
      <input 
        type="number" 
        name="netpay" 
    
      />
      </div>
      </div>
      </div>

      </div>


      </div>
      
      <input type="submit" />
  </form></div>);
  };
  
  export default Salary;
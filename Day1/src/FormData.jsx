import React,{useState} from 'react';
   export default function FormData(){
    const [formData,setFormData]=useState({name:'',email:'',password:'',city:'',country:'',msg:'',car:''})
    const [submittedData,setSubmittedData]=useState([]);
     function handleChange(e){
        const {name,value}=e.target;
        value.trim();
       setFormData(prev=>({
        ...prev,
           [name]:value
       }))}
    function handleSubmit(e){
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.password || !formData.city ||  !formData.country)
             alert('Please fill all the fields')
            else{
                 setSubmittedData(prev=>([...prev,formData])) 
        setFormData({name:'',email:'',password:'',city:'',country:'',msg:'',car:''}) 
                    
            }     
    }
    
    return(
    <>
    <h3>Intro Form</h3>
    <form action="" style={{backgroundColor:'black',color:'white',textAlign:'center',padding:'20px',borderRadius:'10px',margin:'20px'}} onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
          <input type="text" name="name" onChange={handleChange} value={formData.name}/><br />
         <label htmlFor="email">Email :</label>
          <input type="email" name="email" onChange={handleChange} value={formData.email} /><br />
          <label htmlFor="password">PassWord :</label>
           <input type="password" name="password" onChange={handleChange} value={formData.password}/><br />
           <label htmlFor="city">City :</label>
            <input type="text" name="city" onChange={handleChange} value={formData.city} /><br />
            <label htmlFor="country">Country :</label>
             <input type="text" name="country" onChange={handleChange} value={formData.country}/><br />
             <textarea name="msg" onChange={handleChange} placeholder='Write your message here' value={formData.msg}/><br />
             <select name="car" value={formData.car} onChange={handleChange}>
                <option value="Volvo" >Volvo</option>
                 <option value="Wagonr">Wagonr</option>
                  <option value="BMW" >BMW</option>
                   <option value="Audi" >Audi</option>
             </select> <br />
                <input type="submit" />
    </form>
          <h3>Submitted Data</h3>
            <table style={{backgroundColor:'black',color:'white',textAlign:'center',padding:'20px',borderRadius:'10px',margin:'20px'}}>
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Message</th>
                        <th>Car</th>
                    </tr>
                </thead>
                <tbody>
                    {submittedData.map((data,index)=><tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.password}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                        <td>{data.msg}</td>
                        <td>{data.car}</td>

                    </tr>)}
                </tbody>
            </table>
             </>)
   }
import React, { useState } from 'react'

const UserForm = () => {
      const [formData, setFormData] = useState ({
            name : "",
            email : "",
            feedBack : "",
      }
      );

      const maxChars = 200;
      const charsLeft = maxChars - formData.feedBack.length;
      
      const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData((prevData) => ({
                  ...prevData,
                  [name]: value,
            }));
      };

  return (
    <div>
      <form style={{ textAlign: "center", width: "300px", margin: "0 auto", border : "6px solid #f3f3f3", padding: "10px", borderRadius: "5px" }}>
            <h1>User Forms</h1>
            <label>
                  Name:
                  <input style={{"marginBottom": "20px"}}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
            </label>
            <br/>
             <label>
                  Email:
                  <input style={{"marginBottom": "20px"}}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
            </label>
            <br/>
             <label>
                  FeedBack:
                  <textarea 
                    
                    row="4"
                    col="50"
                    name="feedBack"
                    value={formData.feedBack}
                    onChange={handleChange}
                    />
            </label>
            <br/>

            <p>{formData.feedBack.length} / {maxChars}</p>

            <br/>
            {/*Submit Button */}
            {(formData.name==="" || formData.email===""|| formData.feedBack==="")?
            <button type="Submit" disabled  style={{"marginBottom": "20px"}}>Submit</button>: 
            <button type="Submit" style={{"marginBottom": "20px"}} >Submit</button>}
            
      </form>

      <div style={{width:"300px", "wordWrap": "break-word"}}>
            <h2>Preview</h2>
            <p><strong>Name: </strong>{formData.name}</p>
            <p><strong>Email: </strong>{formData.email}</p>
            <p><strong>FeedBack:</strong> {formData.feedBack}</p>
      </div>
    </div>
  )
}

export default UserForm
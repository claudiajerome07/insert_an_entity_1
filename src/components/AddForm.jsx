import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddForm() {
    const [formData,setFormData]=useState({
        title:'',
        author:'',
        description:'',
        coverImageUrl:'',
    })

    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {name,value}=e.target 
        setFormData({...formData,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        navigate('/')
    }
  return (
      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Add a New Book</h1>
          <form onSubmit={handleSubmit}>
              <label style={{ display: "block", marginBottom: "10px" }}>
                  Title:
                  <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      style={{ display: "block", width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
                  />
              </label>
              <label style={{ display: "block", marginBottom: "10px" }}>
                  Author:
                  <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      required
                      style={{ display: "block", width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
                  />
              </label>
              <label style={{ display: "block", marginBottom: "10px" }}>
                  Description:
                  <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      style={{ display: "block", width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc", resize: "vertical" }}
                  />
              </label>
              <label style={{ display: "block", marginBottom: "20px" }}>
                  Cover Image URL:
                  <input
                      type="url"
                      name="coverImageUrl"
                      value={formData.coverImageUrl}
                      onChange={handleChange}
                      required
                      style={{ display: "block", width: "100%", padding: "8px", margin: "5px 0", borderRadius: "4px", border: "1px solid #ccc" }}
                  />
              </label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button
                      type="submit"
                      style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                  >
                      Submit
                  </button>
                  <button
                      type="button"
                      onClick={handleSubmit}
                      style={{ padding: "10px 20px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                  >
                      Cancel
                  </button>
              </div>
          </form>
      </div>
  )
}

export default AddForm
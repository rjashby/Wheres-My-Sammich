import React from "react"

export default function NewReviewForm() {
    const [formData, setFormData] = React.useState(
        {
          title: "", 
          sandwich: "", 
          location: "", 
          comments: "",
          stars: "",
          // user: ,
          // photo: ,  
        }
    ) 

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

      function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Review Title"
                onChange={handleChange}
                name="title"
                value={formData.title} 
            />
            <input
                type="text"
                placeholder="Sandwich"
                onChange={handleChange}
                name="sandwich"
                value={formData.sandwich}
            />
            <input
                type="text"
                placeholder="Location"
                onChange={handleChange}
                name="location"
                value={formData.location}
            />
            <input
                type="text"
                placeholder="How Many Stars out of 5?"
                onChange={handleChange}
                name="stars"
                value={formData.stars}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <button>Submit</button>
        </form>
    )
}
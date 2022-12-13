import React, { useState } from 'react'
import {submitData, validate} from '../components/contactform-validation'

const ContactFormSection = () => {

    // const  [contactForm, setContactForm] =useState({name:'', email: '',comment:''})
    // const [formErrors, setFormErrors] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [failedSubmit, setFailedSubmit] = useState(false)



    const handleChange = (e) => {
        const {id, value} = e.target
        // setContactForm({...contactForm, [id]:value})
        switch(id) {
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'comments':
                setComments(value)
                break 
        }
        setErrors({...errors, [id]: validate(e)})

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // setFormErrors(validate(contactForm))
        setFailedSubmit(false)
        setSubmitted(false)

        setErrors(validate(e, {name, email, comments}))

        if (errors.name === null && errors.email === null && errors.comments === null) {
            
            let json = JSON.stringify({ name, email, comments})

            setName('')
            setEmail('')
            setComments('')
            setErrors({})

            // let result = await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json, )
            // console.log('await result: '+ result)
            // if(true)

            if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json, )) {
                setSubmitted(true)
                setFailedSubmit(false)
            }
            else {
                setSubmitted(false)
                setFailedSubmit(true)
            }
        } else {
            setSubmitted(false)
        }
    }

            
        //     fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
        //         method: 'POST' ,
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
            
        //         body: json
        // })
        // .then(res => {
        //     if (res.status === 200) {
        //         setSubmitted(true)
        //         setFailedSubmit(false)
        //     }
        //     else {
        //         setSubmitted(false)
        //         setFailedSubmit(true)
        //     }
        // })

    //     } else {
    //         setSubmitted(false)
    //     }

    // }

    return (

        <section className="contact-form">
            <div className="container">
                
                    {

                    submitted ? (
                    <div className="alert alert-success text-center" role="alert">
                        <h3>Thank you for your comments</h3>
                        <p>We will contact you as soon as possible</p>
                    </div> ) : (<></>) 

                    }   
                    
                    {

                    failedSubmit ? (
                    <div className="alert alert-danger text-center" role="alert">
                        <h3>Something went wrong</h3>
                        <p>We could not submit your comments right now</p>
                    </div> ) : (<></>)    

                    }

                    <h2>Come in Contact with Us</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <input id="name"  className={(errors.name ? 'error': '' )} value={name} onChange={handleChange}  type="text" placeholder="Your Name"  />
                            <div className="errorMessage">{errors.name}</div>
                        </div>
                        <div>
                            <input id="email"  className={(errors.email ? 'error': '' )}  value={email} onChange={handleChange} type="email" placeholder="Your Mail" />
                            <div className="errorMessage">{errors.email}</div>
                        </div>
                        <div className="textarea">
                            <textarea id="comments" className={(errors.comments ? 'error': '' )} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )} value={comments} onChange={handleChange} placeholder="Comments"></textarea>
                            <div className="errorMessage">{errors.comments}</div>
                        </div>
                        <div className="formBtn">
                            <button type="submit" className="btn-theme">
                                Post Comments
                            </button>
                        </div>
                    </form>
   
            </div>  
        </section>
    )
}

export default ContactFormSection






// import React, { useState } from 'react'

// const ContactFormSection = () => {

//     const  [contactForm, setContactForm] =useState({name:'', email: '',comment:''})
//     const [formErrors, setFormErrors] = useState({})
//     const [submitted, setSubmitted] = useState(false)

//     const validate  = (values) => {
//         const errors ={}
//         const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
//         if(!values.name)
//             errors.name = "You must entar a name"

//         if(!values.email)
//             errors.email = "You must entar a email"
//         else if(!regex_email.test(values.email))
//             errors.email = "You must enter a valid email address (eg. name@domail.com)"

//         if(!values.comment)
//             errors.comment = "You must entar a comment"
//         else if(values.comment.length < 5)
//             errors.comment = "Your comment must be longer than five characters"

//         if(Object.keys(errors).length === 0)
//             setSubmitted(true)
//         else
//             setSubmitted(false)


//         return errors;
//     }

//     const handleChange = (e) => {
//         const {id, value} = e.target
//         setContactForm({...contactForm, [id]:value})
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setFormErrors(validate(contactForm))
//     }

//     return (

//         <section className="contact-form">
//             <div className="container">
//                 {
//                     submitted ?
//                     (<div className="d-flex  justify-content-center- align-items-center">
//                         <div>Thank you for your comment !</div>
//                     </div>)
//                     :
//                     (
//                         <>
//                             <h2>Come in Contact with Us</h2>
//                             <pre>{ JSON.stringify(formErrors) }</pre>
//                             <form onSubmit={handleSubmit} noValidate>
//                                 <div>
//                                     <input id="name"  type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
//                                     <div className="errorMessage">{formErrors.name}</div>
//                                 </div>
//                                 <div>
//                                     <input id="email"  type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
//                                     <div className="errorMessage">{formErrors.email}</div>
//                                 </div>
//                                 <div className="textarea">
//                                     <textarea id="comment"  placeholder="Comments"value={contactForm.comment} onChange={handleChange}></textarea>
//                                     <div className="errorMessage">{formErrors.comment}</div>
//                                 </div>
//                                 <div className="formBtn">
//                                     <button type="submit" className="btn-theme">
//                                         Post Comments
//                                     </button>
//                                 </div>
//                             </form>
//                         </>
//                     )

//                 }
   
//             </div>  
//         </section>
//     )
// }

// export default ContactFormSection
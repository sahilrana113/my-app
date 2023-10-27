import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle]=useState( {
    //     color: 'white',
    //     backgroundColor:'black'
    // }
    // )

    // let myStyle={
    //   color: props.mode==='dark'?'white': 'black',
    //   backgroundColor: props.mode==='dark'?'black':'white',
    //   border:'2px solid',
    //   borderColor:props.mode==='dark'?'white': 'black'
    // }

   // const [btntext, setbtntext]=useState('Enable Dark')

    // const Togglestyle=()=>{
    //     if(myStyle.color==='white'){
    //         setmyStyle({
    //         color:'black',
    //         backgroundColor:'white'
    //     })
    //     setbtntext('Enable Dark')
    // }

    // else{
    //     setmyStyle({
    //         color:'white',
    //         backgroundColor:'black'  
    //     })

    //     setbtntext('Enable Light')
    // }
    // }

// let myStyle={
//     color: 'white',
//     backgroundColor:'black'
// }
   


  return (

    <div className="container my-7 mx-6" style={{ color: props.mode==='dark'?'white':'black'}}>
      <h1> About Us</h1>
    <div className="container my-1" style={{backgroundColor: props.mode==='dark'?'#13466e' : 'white', color:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
   
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button style={{backgroundColor: props.mode==='dark'?'#13466e' : 'white'
    , color: props.mode==='dark'?'white':'black'}} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor: props.mode==='dark'?'#13466e' : 'white', color:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore sunt nulla laborum hic. 
          Libero suscipit sed fugiat rem, odio aut excepturi ullam autem unde in consequatur vitae illo alias?
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button style={{backgroundColor: props.mode==='dark'?'#13466e' : 'white', color:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Free to use
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor: props.mode==='dark'?'#13466e' : 'white', color:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione iure molestias aspernatur temporibus distinctio hic quas,
        repudiandae cupiditate! Amet quia voluptates consequatur alias, nemo nostrum facere minima saepe iusto?
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button style={{backgroundColor: props.mode==='dark'?'#13466e' : 'white', color:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compatible
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{backgroundColor: props.mode==='dark'?'#13466e' : 'white', color:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo ipsam perspiciatis eius impedit aliquam accusantium fugiat cumque 
        iste at? Voluptas saepe dolorem doloremque est repellendus architecto asperiores, laboriosam excepturi!
      </div>
    </div>
  </div>
</div>

{/* <div className="container">
<button onClick={Togglestyle} type="button" class="btn btn-primary"> {btntext}</button>
</div> */}
    </div>

    </div>
  )
}

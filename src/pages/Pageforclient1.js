import './Pageforclient1.css';

import React from "react";

function Pageforclient1(){
    return (
        <div className="App2">

<div id="con1">

<h1>Edit Workshop</h1>
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>

</div>


<div id="mmain">

<div id="con2">
  <label><p>Title:<span>*</span></p></label>
<input id="ti" type="text"   placeholder="Creating Virtual Performances with Performing Arts Students "/>

</div>


<div id="con3">
<label><p>Description :</p></label>
  
  <textarea id="ts">This session will provide demostrations and examples of how to use selected platforms for collaboration on virtual performances.</textarea>

</div>



<div id="con4">


<div id="aa">
	<label ><p>Series :</p></label>
	
	<select id="selcon">
	
		<option selected >Fall into Learning</option>
	</select>

</div>


<div id="bb">

<label id="dj"><p>Grade :</p></label>
<input id="gg" type="text"   placeholder=""/>

</div>

</div>



<div id="con5">
<div id="oa">
<label>Date :</label>

<input id="ws" type="date" value="12/02/2020" min="01/01/2018" max="12/31/2022"/>

</div>

<div id="ob">


<label id="dj">Start Time :</label>

<input id="wx" type="time" value="03:15 PM" />



</div>

<div id="oc">

<label id="dj" >End Time :</label>

<input id="ww" type="time" value="03:15 PM" ></input>


</div>


</div>



<div id="con6">

<label><p>Location:</p></label>
<input type="text" id="sf"  placeholder="Virtual Platform "></input>

</div>



<div id="con7">

<label><p>Presenters:</p></label>
<input type="text" id="sf"  placeholder="Stacy Feszchak"></input>
</div>


<div id="con8">
<label><p>Audience:</p></label>
<input type="text" id="sf"  placeholder="K-12 Teachers"></input>

</div>



<div id="con9">

<label><p>Content Area:</p></label>
<input type="text" id="sf"  placeholder="Performing Arts"></input>
</div>


<div id="con10">
<label><p>Contact Info:</p></label>
<input type="text" id="sf"  placeholder="">
</input>
</div>



<div id="con11">


<div id="qa">
<label id="lb"><h3>Limit#of Registration:</h3></label>
<input id="rt" type="text" id="fnm"  placeholder="15">
</input>
</div>

<div id="qb">
<label id="lb"><h3>Registration Begin Date :</h3></label>

<input id="rt" type="date" value="12/02/2020" min="01/01/2018" max="12/31/2022">
</input>
</div>


<div id="qc">

<label id="lb"><h3>Registration End Date :</h3></label>

<input id="rt" type="date" value="12/02/2020" min="01/01/2018" max="12/31/2022">
</input>

</div>

</div>

<div id="con12">


<div id="wr">

<button id="sza" type="button" >Edit</button>
<button  id="szb" type="button" >Save</button>


</div>


<div id="wt">
<button id="bttn" type="button" >Cancel</button>

</div>


</div>




</div>

    
        </div>
      );
}
export default Pageforclient1
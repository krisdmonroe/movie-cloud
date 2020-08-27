import React from 'react';
function navigation() {
  return (
    <li style={{display:'flex', justifyContent:'space-between', border:'2px solid red'}}>
        <ul>PlaceHolder</ul>
        <ul>Search Bar</ul>
        <div style={{display:'flex', border:'2px solid red', marginRight:'.5%'}}>
            <ul> item 1</ul>
            <ul> item 2 </ul>  
            <ul> item 3</ul>
        </div>
    </li>
  );
}

export default navigation;

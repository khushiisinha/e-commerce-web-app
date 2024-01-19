import React from 'react'

function NavbarTabs(props) {
  function handleClick(){
    if(props.title=="GROCERY"){
      props.setSearchProduct("groceries")
      props.setShowHome(false)
      return;
    }
    if(props.title=="MOBILES"){
      props.setSearchProduct("smartphones")
      props.setShowHome(false)
      return;
    }
    if(props.title=="ELECTRONICS"){
      props.setSearchProduct("laptops")
      props.setShowHome(false)
      return;
    }
    if(props.title=="HOME & LIVING"){
      props.setSearchProduct("home-decoration")
      props.setShowHome(false)
      return;
    }
    if(props.title=="FASHION"){
      props.setSearchProduct("tops")
      props.setShowHome(false)
      return;
    }
    if(props.title=="BEAUTY"){
      props.setSearchProduct("skincare")
      props.setShowHome(false)
      return;
    }

    
  }
  return (
    <div className=' text-sm font-extrabold hover:border-b-4 border-b-4 border-blue-e-500 hover:border-orange-400 h-full flex items-center cursor-pointer' onClick={handleClick}>
      {props.title}
    </div>
  )
}

export default NavbarTabs
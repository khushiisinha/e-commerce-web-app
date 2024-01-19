import React from 'react'

function HomeFooter() {
  return (
    <div className='flex flex-col text-sm gap-12   p-5 text-grey-text-500'>
    
    <div className='flex gap-48  font-medium'>
   <div className='flex flex-col '>
    
    <span className='text-base font-bold text-grey-text-800'> Contact Us</span>

    <span className=''>Have a question or need assistance? Reach out to our team.</span>
    
    <span className='mt-4'> - Email: info@ShopEase.com</span>
    <span>- Phone: +1 (123) 456-7890</span>
    <span>- Address: 123 Main Street, Cityville, Country</span>
    </div>
    <div className='flex flex-col'>
    <span className='text-base font-bold text-grey-text-800'>Quick Links</span>
    
    <button className='text-blue-800 font-bold text-start mt-4'>- Home</button>
    <button className='text-blue-800 font-bold text-start'>- About Us</button>
    <button className='text-blue-800 font-bold text-start'>- Contact</button>

    </div>
    </div>
    
    <div className='flex flex-col font-medium'>
    <span className='text-base font-bold text-grey-text-800'>Follow Us</span>
    <span>Stay connected with us on social media for the latest updates and promotions.</span>
    
    <button className='text-blue-800 font-bold text-start mt-4'>- Facebook</button>
    <button className='text-blue-800 font-bold text-start'>- Twitter</button>
    <button className='text-blue-800 font-bold text-start'>- Instagram</button>
    
    
    </div>
    
    <div className='flex flex-col text-base'>
    <span>Copyright © 2023 ShopEase. All rights reserved.</span>
    
    <span>Read our <button className='text-blue-800 font-bold'>Privacy Policy</button> and <button className='text-blue-800 font-bold'>Terms of Service</button> for more information.</span>
    </div>
    </div>
  )
}

export default HomeFooter
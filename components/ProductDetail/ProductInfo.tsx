import React, { useState } from 'react'
import { CgFacebook } from 'react-icons/cg'
import { IoLogoPinterest, IoLogoTwitter } from 'react-icons/io5'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

function ProductInfo({product}: IProduct) {
  const [num, setNum] = useState(1)
  const [tabIndex, setTabIndex] = useState(0)

  const incNum =()=>{
    setNum(num+1);
  };

  const decNum = () => {
     if(num>0) {
      setNum(num-1);
     }
  }

 const handleChange = (e: any)=>{
   setNum(e.target.value);
  }

  return (
    <div className='mx-5 lg:mx-12'>
      <div className='flex flex-col space-y-6 mb-6 text-center lg:text-left'>
        <p className='text-primary-beige text-xs'>Duma Official</p>
        <h1 className='font-sans text-lg text-primary-beige text-center lg:text-left'>{product.name}</h1>
        {product.discount!=0 ? (
          <div className='flex space-x-2'>
            <p className='sale-text'>Rp {product.discount.toLocaleString('en-US')}</p>
            <p className='text-base text-light-grey line-through'>Rp {product.price.toLocaleString('en-US')}</p>
          </div>
        ) : (
          <p className='text-base text-light-grey'>Rp {product.price.toLocaleString('en-US')}</p>
        )}
      </div>
      <form className='flex flex-col space-y-6 font-sans text-dark-grey'>
        <div className='flex flex-col space-y-1'>
          <label htmlFor='size'>Size:</label>
          <select name="size" id="size" className='px-2 py-3 border border-solid border-light-grey/50'>
            <option defaultValue='true' disabled>Select Size</option>
            <option value="allsize">All Size</option>
          </select>          
        </div>

        <div className='flex my-5 items-center justify-center w-5 h-5 border border-solid border-dark-grey rounded-full'>
          <div className='w-4 h-4 rounded-full border border-solid border-light-grey/20' style={{ "backgroundColor": product.hexColor } as React.CSSProperties}></div>
        </div>

        <div className='flex flex-col space-y-3'>
          <label htmlFor='qty'>Quantity:</label>
          <div className='flex px-4 py-2 justify-between border border-solid border-light-grey/50 w-fit' >
            <a className='cursor-pointer' onClick={decNum}>-</a>
            <input type='text' value={num} onChange={handleChange} className='text-center w-20' />
            <a className='cursor-pointer' onClick={incNum}>+</a>            
          </div>
        </div>

        {(product.status=='SOLD OUT') ? (
          <button className='btn-white'>{product.status}</button>  
        ) : (
          <button className='btn-yellow'>ADD TO CART</button>  
        )}
        
        <button className='btn-white'> ADD TO WISHLIST </button>
      </form>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className='flex w-full py-6 justify-around font-sans text-xs md:text-sm text-primary-gold/90 underline underline-offset-4 hover:text-primary-gold/100 cursor-pointer'>
          <Tab>DESCRIPTION</Tab>
          <Tab>DETAILS</Tab>
          <Tab>SHIPPING/RETURNS</Tab>
        </TabList>
        <TabPanel className='text-dark-grey text-sm md:text-base tracking-wide'>
          <div>
            {product.description}
          </div>
        </TabPanel>
        <TabPanel className='flex flex-col space-y-4 font-sans text-dark-grey text-sm tracking-wide md:text-base'>
          <p>Material : 100% COTTON</p>
          <p>Size : All Size </p>
          <p>Measurement :</p>
          <ul className='list-disc list-inside'>
            <li>Bust 100 cm</li>
            <li>Waist 100 cm</li>
            <li>Length 62 cm</li>
            <li>Sleevelength 22 cm</li>
            <li>Armhole 45 cm</li>
          </ul>

          <p className='font-bold'>Care Instructions :</p>
          <p className='font-bold'>Knitwear by nature uses fabrics that tend to be more delicate and malleable. Incorrectly washing, drying or storing knitted apparel can cause the item to lose its shape, shrink or bubble.</p>

          <ul className='list-disc list-inside'>
            <li>Machine Gentle Wash Cold with Laundry Net</li>
          </ul>

          <p className='font-bold'>How To Wash Knits in the Washing Machine Method:</p>

          <ul className='list-none'>
            <li>- Set the Cycle. Set your washer on a delicate cycle / hand wash cycle , and use cold water with an alcohol-free, gentle detergent</li>
            <li>- MUST USE a Mesh or Lingerie Bag. Use a mesh or lingerie bag to keep the knit from getting snagged on the machine's agitator.</li>
            <li>- Toss the knit in the dryer on low heat ( please use lingerie / mash bag during this process ) just to dry it completely</li>
            <li className='font-bold'>- DO NOT HAND WASH</li>
            <li className='font-bold'>- DO NOT DRY CLEAN</li>
            <li className='font-bold'>- DO NOT HANG</li>
            <li className='font-bold'>- FLAT DRY YOUR KNITS</li>
          </ul>
        </TabPanel>

        <TabPanel className='flex flex-col space-y-8 font-sans text-dark-grey text-sm md:text-base  tracking-wide'>
          <div className='flex flex-col space-y-4'>
            <p>SHIPPING</p>

            <p>Ready Stock Items are generally dispatched within 1 - 3  days after receipt of payment and are shipped via selected courier. We will provide you with a link to track your package online. Please note that delivery will only be performed on working days.</p>
            <p>Preorder Items are generally dispatched within the given preorder period provided in the product description box .</p>
            <p>Shipping fees include handling and packing fees as well as postage costs. Handling fees are fixed, whereas transport fees vary according to total weight of the shipment. We advise you to group your items in one order. We cannot group two distinct orders placed separately, and shipping fees will apply to each of them. Your package will be dispatched at your own risk, but special care is taken to protect fragile objects.</p>
            <p>Import duties will be borne by the customer, with the amount varies according to the import tax regulation in the countries the recipient resides in.</p>            
          </div>
          <div className='flex flex-col space-y-4'>
            <p>RETURNS</p>
            <p>We only offer and accept refunds in form of STORE CREDIT at the selling price of the returned products.Refunds will not include shipping costs. Store credit only can be used in 1 TRANSACTION ONLY within 6 MONTHS period since the store credit ACTIVATED.For international customers, please contact your local customs for more details on tax and custom refund. </p>            
          </div>
          <div className='flex flex-col space-y-4'>
            <p>EXCHANGES</p>
            <p>Products must be mailed for return within 10 days from the day the order was delivered.(i.e. Your order was arrived 8th April, you have until 18st April to ship back your returns). Products must be unworn and unwashed. Products must have Duma Official tag attached</p>            
          </div>
          <div className='flex flex-col space-y-4'>
            <p>IMPORTANT NOTE :</p>
            <p>Please note that : Accessories (Bags, Earrings, Necklace, Body Jewelry) Sale, Sleepwear, Intimates, Sportswear are final sale.Due to hygiene reasons they are strictly not qualified for returns or exchanges.</p>
            <p>Any product marked and included in “SALE / DISCOUNT ” promotion cannot be exchange nor return.</p>            
          </div>
        </TabPanel>
      </Tabs>
      <div className='hidden lg:block py-6'>
        <div className='flex space-x-3 text-xs text-light-grey'>
          <a className='font-bold'>Share</a>
          <CgFacebook />
          <IoLogoTwitter />
          <IoLogoPinterest />
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
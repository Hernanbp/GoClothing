import Skeleton from "react-loading-skeleton"
import { Navbar } from "../Navbar"

export const ProductLoader = () => {
  return (
          <>
            <Navbar />
            <section className='product-section'>
                <div className='product-container'>
      
                    <div className='product-img'>
                        <Skeleton />
                    </div>
      
      
                    <div className='product-info'>
                        <h1 className='title'><Skeleton variant="rect" width={250} height={450} containerClassName="avatar-skeleton" /></h1>
                        <span className='price'><Skeleton /></span>
                        <p className='description'><Skeleton /></p>
      
                        <div className='buttons'>
                            <a href="/#"><Skeleton /></a>
                            <span>or</span>
                            <a href="/#"><Skeleton /></a>
                        </div>
                    </div>
      
                </div>
            </section>
          </>
  )
}

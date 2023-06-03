import ProductComponent from "@/components/Product";
import '@/styles/productpage.css'

export default function Category() {
  return (

    <>
      <div className="title text-center p-10"> category name</div>
      <div className="flex content-center justify-between px-14 pb-5">

        <div className="flex content-center p_text ">
          filter
          <img src="/assets/icons/icondown.svg" alt="" className="ms-3" />
        </div>

        <div className=" items-center p_text">
          30 items
        </div>

        <div className="flex items-center p_text ">
          sort by
          <img src="/assets/icons/icondown.svg" alt="" className="ms-3" />
        </div>

      </div >
      <div className="items flex-wrap flex justify-between  px-14">
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />


        <ProductComponent />

      </div>

    </>

  )
}

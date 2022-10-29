import './App.css';
import {useEffect, useState} from 'react'
import Header from './Components/Header';
import BillSection from './Components/BillSection'
import Bill from './Components/Bill';
import Chart from './Chart';
import { useSelector} from 'react-redux'


function App() {
  const datas = useSelector((state) => state.billData.value)
  const [filterValue,setFilterValue] = useState("")
  const [filterbill,setFilterBills] = useState([])
  const options=["Category",...datas?.map(data => data.category)]

  useEffect(()=>{
    filter()
  },[filterValue])

  const filter=()=>{
  const fil = datas?.filter(d => filterValue === d.category)
  setFilterBills(fil)
  }


  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* Bill adding section */}
      <section className='p-5 flex bg-no-repeat bg-fixed bg-cover items-center h-[600px] bg-[url("https://images.pexels.com/photos/4386226/pexels-photo-4386226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-image'>
        <div className='w-[400px] h-[330px] py-6 px-5 bg-white rounded-md '>
        <BillSection />
        </div>
      </section>
      {/* Bill showing section */}
      <section className='p-5 shadow-sm'>
        <div className='flex flex-col md:flex-row justify-between items-center m-2'>
        <h2 className='uppercase tracking-[5px] mb-5'>Your <span className='text-orange-500'>Previous</span> Bill's</h2>
        <div className='flex space-x-2 justify-center items-center md:justify-end'>
        <p>Sort By</p>
        <select onChange={(e)=>setFilterValue(e.target.value)} className='p-2 border rounded-lg outline-none '>
                {options?.map((op)=>(
                    <option key={op} value={op}>{op}</option>
                ))}
            </select>
        </div>
        </div>
        <div className='space-y-2 grid xl:grid-cols-3 lg:grid-cols-2 items-center justify-center overflow-y-scroll scrollbar-hide max-h-[500px] scrollbar-orange-500'>
        {filterValue ? filterbill?.map((data)=>(
          <Bill data={data}/>
        )):
        datas?.map((data)=>(
          <Bill key={data.id} data={data}/>
        ))
      }
        </div>
      </section>
      {/* Chart Seciton */}
      <section className='h-[700px] p-5 '>
      <h2 className='uppercase tracking-[5px] mb-5'>Monthly <span className='text-orange-500'>Expense</span></h2>
      <div className='flex items-center justify-center mb-5 bg-fixed w-full h-full bg-no-repeat bg-cover bg-[url("https://images.pexels.com/photos/4386226/pexels-photo-4386226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>
        <div className='w-[400px] md:w-[800px] m-5 sm:w-[600px] xl:w-[1200px] bg-white'>
          <Chart />
        </div>
      </div>
      </section>
      {/* High lighting bill */}
    </div> 
  );
}

export default App;

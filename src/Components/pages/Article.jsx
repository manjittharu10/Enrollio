import RotatedFeatureCard from "./Rotatedcard";


export default function Article (){
    return(<>
    <div className="flex flex-cols-1  bg-blue-200 md:flex flex-row justify-between mt-5 ">
        <div>
            <RotatedFeatureCard/>
        </div>
<div className="mr-10">
    <h1 className="text-3xl text-amber-500 mt-2">About us</h1>
    <p className="text-4xl mt-4">Who we are</p>
    <div className="w-200 text-xl mt-10">
        <p>We are a modern SaaS platform built
       to help consultancies and agencies manage
    their entire workflow in one unified space.
 From leads and student services to documents,
     communication, finance, and daily operations,
      we centralize everything so teams can work faster and with
       complete clarity. Our platform replaces scattered tools, 
       confusing spreadsheets, and manual processes with a seamless 
       system designed specifically for the consultancy ecosystem.

With automation, structured workflows,
 and real-time visibility, we give consultancies 
 the tools they need to stay organized, transparent, and consistently efficient
 . Whether you operate a single office, multiple branches, or a full agency network, 
 our platform ensures every task, update, and student milestone stays connected
  by empowering your team to deliver better experiences and scale with confidence.</p>
    </div>
    <div className="mt-3">
        <button className="h-10 w-60 bg-blue-600 text-3xl text-amber-100 rounded-xl mt-5 ml-40">About us</button>
    </div>
</div>
    </div>
    
    </>)
}
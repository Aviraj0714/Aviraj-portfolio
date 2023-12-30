import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { skills,experiences } from '../constant'
import { CTA } from '../components';
const about = () => {
  return (
    <section className='max-container'><h1 className='head-text'>Hello,I am <span className='blue-gradient_text font-semibold drop-shadow'>Aviraj Bhaliya</span></h1>
    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>
      To secure a challenging and dynamic position in the field of engineering that leverages my academic knowledge, practical skills, and innovative mindset. Seeking an opportunity to contribute to cutting-edge projects, collaborate with experienced professionals, and further enhance my expertise in diffrent technologies . As a dedicated and detail-oriented third-year engineering student, I aim to apply my theoretical foundation and hands-on experience to make meaningful contributions in a progressive and growth-oriented organization.
      </p>
    </div>

    <div className='py-10 flex flex-col'>
      <h3 className='subhead-text'>My Skills</h3>
   
    <div className='mt-16 flex flex-wrap gap-12'>
      {skills.map((skill) =>(
        <div key={skill} className='block-container w-20 h-20'> 
        <div className='btn-back rounded-xl'></div>
          <div className='btn-front rounded-xl flex justify-center items-center '>
            <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
          </div>
        </div>
      ))}
      </div>
    </div>
    <div className='py-16'>
<h3 className='subhead-text'>Work Experience</h3>
<div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>
      I have done diffrent companies's virtual internships, leveling up my skills and teaming up with smart people. here are the rundown:
      </p>
 </div>
<div className='mt-12 flex'>
<VerticalTimeline>
  {experiences.map((experience)=>(
   <VerticalTimelineElement key={experience}
   date={experience.date}
   icon={<div className='flex justify-center items-center w-full h-full'>
    <img src={experience.icon} alt={experience.company_name}></img>
   </div>}
   iconStyle={{background:experience.iconBg}}
   contentStyle={{
    borderBottom:'8px',
    borderStyle:'solid',
    borderBottomColor:experience.iconBg,
    boxShadow:'none',
   }}>
   <div>
    <h3 className='text-black text-xl font-poppins font-semibold'>
{experience.title}
      </h3>
      <p className='text-black-500 font-medium font-base' style={{margin:0}}>
        {experience.company_name}
      </p>
      </div> 
      <ul className='my-5 list-disc ml-5 space-y-2'>
{experience.points.map((point,index)=>(
<li key={point} className='text-black-500/50 font-normal pl-1 text-sm'>
  {point}
</li>
))}
      </ul>
   </VerticalTimelineElement> 
  ))}
</VerticalTimeline>
</div>
    </div>
    <hr className='border-slate-200'/>

    <CTA></CTA>
    </section>
    
  )
}

export default about
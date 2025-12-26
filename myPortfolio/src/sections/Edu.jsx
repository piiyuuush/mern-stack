import './edu.css'
import avb from '../assets/avb-model.png'
import phcet from '../assets/phcet-model.png'
import ckt from '../assets/ckt-model.png'

export default function Edu(){
    return <div id='edu' className="edu section">
        <div className="edu-heading">
            <h1>My Education</h1>
            <p className='small-body-font'>A little about my academic journey</p>
        </div>
        <div className="edu-card">
            <div className="text-content">
                <h2>Btech | computer Engineering | PHCET</h2>
                <p className='body-font'>I am currently pursuing a B.Tech in Computer Engineering at PHCET. 
                    The campus offers a diverse academic environment with peers across varying skill levels, 
                    including several high-performing students who consistently push me to raise my standards.
                    While the academic rigor has been steady, my skill growth has accelerated significantly in recent months. 
                    I currently hold a 7.5 CGPA and completed my third semester with an 8.43 SGPA.
                </p>
            </div>
            <img src={phcet} alt="phcetbuilding" className="edu-img" />
        </div>
        <div className="edu-card">
            <img src={ckt} alt="ckt buidling" className="edu-img" />
            <div className="text-content">
                <h2>HSC | PCM Computer Science | CKT New Panvel</h2>
                <p className='body-font'>I completed my HSC at CKT College with Computer Science, 
                    which marked the formal start of my journey into programming and core computer science. 
                    With no prior technical background, this phase proved foundational in shaping my interest 
                    and direction. The curriculum provided early exposure to subjects such as operating systems, 
                    data structures, computer architecture, C++, HTML, microprocessors, and even assembly language. 
                    I passed with a First Class result.
                </p>
            </div>
        </div>
        <div className="edu-card">
            <div className="text-content">
                <h2>SSC |State board | AVBPV New Panvel</h2>
                <p className='body-font'>My foundational schooling coincided largely with the COVID-19 period, 
                    which significantly disrupted structured learning in mathematics and science. While this 
                    phase presented academic challenges, it strengthened my proficiency in English communication 
                    and comprehension. I passed with a First Class result.
                </p>
            </div>
            <img src={avb} alt="avb building" className="edu-img" />
        </div>

    </div>
}
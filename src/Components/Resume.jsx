import profile from '../assets/Profile.pdf'
import './Resume.css'
function Resume() {
    return (
        <div className='Resume'>
            <div>
                <h1>
                    {'Resume'.split('').map((char, index) => (
                        <span key={index} className='letter'>{char}</span>
                    ))}
                </h1>
            </div>
            <embed src={profile} width="600" height="800" type="application/pdf"></embed>
        </div>
    )
}

export default Resume;
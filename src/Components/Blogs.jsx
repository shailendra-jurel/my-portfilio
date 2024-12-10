import Lottie from 'lottie-react';
import coming_soon from '../assets/coming-soon.json'
function Blogs(){
    return(
        <div className='blogs'>
            <Lottie animationData={coming_soon} height={400} width={400} />
        </div>
    )
}
export default Blogs;
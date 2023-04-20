import React from 'react';
import { Button, styled} from "@mui/material";
import "../styles/section1.css";
import sampleVideo from "../assets/sample.mp4";




const Section1 = () => {

  const VideoPlayer = () => {
    return (
      <video controls className='videoSample'>
        <source src={ sampleVideo } type="video/mp4 " style={{width:'100%', height: 'auto'}} />
      </video>
    );
  };

  const SubmitBtn = styled(Button)({
    backgroundColor: '#0193DC',
    padding:'12px 40px',
    fontSize: 20,
    fontFamily: 'Open sans',
    fontWeight:600,
    textTransform: 'none',
    letterSpacing: 0.7,
    borderRadius: 7
})


  return (
    <>
    <div className='container'>

        <div className='content'>

            <div className='content-items'>

                <div className='column1 video-container'>
                    <VideoPlayer />
                </div>

                <div className='column2 text-container'>

                    <h2>Leaders in Entrepreneurship</h2>

                    <div className='text'>

                        <p>We believe, innovation is the foundation for any 
                        entrepreneurial process.</p>
                        <p> Our focus is to facilitate and 
                        assist the students significantly by providing </p>
                        <p>resources 
                        and appropriate mentoring to transform their potential 
                        into</p>
                        <p> business leaders of tomorrow.</p>
                    </div>

                    <SubmitBtn
                    variant='contained'
                    >
                        Submit your Idea
                    </SubmitBtn>

                </div>

            </div>

        </div>
    </div>
    </>
  )
}

export default Section1
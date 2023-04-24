import React from 'react'
import { Button, styled } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import "./documentsHeader.css";

const Header = () => {

    const DownloadBtn = styled(Button)({
        padding:'12px 12px',
        fontSize: 15,
        fontFamily: 'Open sans',
        fontWeight:600,
        textTransform: 'none',
        letterSpacing: 0.7,
        borderRadius: 7,
        '&:hover': {
            backgroundColor: 'rgba(7,36,54,0.3)',
            boxShadow: 'none',
          },
    })

    const SizeDetailsBtn = styled(Button)({
        padding:'12px 5px',
        fontSize: 15,
        fontFamily: 'Open sans',
        fontWeight:600,
        textTransform: 'none',
        letterSpacing: 0.7,
        borderRadius: 7,
        borderColor: 'white',
        '&:hover': {
            backgroundColor: 'rgba(22,25,37,0.3)',
            borderColor: 'rgba(22,25,37,0.1)',
            boxShadow: 'none',
          },
    })

    const GoHomeBtn = styled(Button)({
        backgroundColor: '#0193DC',
        padding:'8px 55px',
        fontSize: 15,
        fontFamily: 'Open sans',
        fontWeight:600,
        textTransform: 'none',
        letterSpacing: 0.7,
        borderRadius: 4,
        '&:hover': {
            backgroundColor: 'rgba(22,25,37,0.3)',
            borderColor: 'rgba(22,25,37,0.1)',
            boxShadow: 'none',
          },
    })

    const overlay_txt = "UPLOAD THE DOCUMENTS";
  return (
    <>
    <div className="documents-bgImg">
        <div className="documents-overlay">
          <div className="docs-overlay-row1">
            <div className="docs-overlay-row1-col1">
            < DownloadBtn 
             sx = {{color: "white"}}
             endIcon= {<FileDownloadOutlinedIcon />}
            >
            Q&A
            </DownloadBtn>
            < DownloadBtn 
             sx = {{color: "white"}}
             endIcon= {<FileDownloadOutlinedIcon />}
            >
            Download the proper format
            </DownloadBtn>
            </div>
            <div className="docs-overlay-row1-col2">
            <SizeDetailsBtn
            variant='outlined'
            sx={{color: "white"}}
            >Click here for size details</SizeDetailsBtn>
            </div>
            
          </div>

          <div className="docs-overlay-row2">
            <h2>{overlay_txt}</h2>
          </div>
          <div className="docs-overlay-row3">
            <GoHomeBtn
            sx={{color:"white"}}>Go Home</GoHomeBtn >
          </div>
        </div>
    </div>
    </>
  )
}

export default Header
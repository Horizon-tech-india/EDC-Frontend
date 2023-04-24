import React from 'react'
import DocumentsHeader from "./DocumentsHeader";
import Navigation from './Navigation2';
import DocumentsWaitingSection from './DocumentsWaitingSection';
import Footer from "../Home/components/Footer";

const Documents = () => {
  return (
    <>
    <Navigation />
    <DocumentsHeader />
    < DocumentsWaitingSection />
    < Footer />
    </>
  )
}

export default Documents
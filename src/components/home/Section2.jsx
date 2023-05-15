import React from 'react'
import logo1 from '../../assets/icons/svg/home.svg'
import logo2 from '../../assets/icons/svg/location.svg'
import logo3 from '../../assets/icons/svg/documents.svg'
import logo4 from '../../assets/icons/svg/badge.svg'

// import "../styles/section2.css";

function Logo(props) {
  return <img src={props.image} alt={props.alt} />
}

const Card = (props) => {
  const { heading, para, image, alt } = props
  return (
    <div className="w-[250px] rounded-md px-5 h-[250px]   flex justify-center items-center shadow-md">
      <div className="w-[235px]   h-[200px]">
        <div className="h-16 m-2 flex justify-center items-center  w-16 shadow-md rounded-full">
          <Logo image={image} alt={alt} />
        </div>
        <div className="w-[235px] mx-auto   h-36 ">
          <h2 className="font-sans font-medium text-[20px] flex items-center tracking-wider text-secondary">
            {heading}
          </h2>
          <p className="font-sans font-normal text-sm leading-6 tracking-wider text-gray-500">{para}</p>
        </div>
      </div>
    </div>
  )
}

const Section2 = () => {
  return (
    <>
      {/* <div className="w-full h-[620px]"> */}
      <div className="w-full h-full sm:w-auto">
        <div className="">
          <div className="md:flex justify-center  sm:grid items-center flex-row">
            <div className="w-[450px] h-[450px] border-r-2 mr-10 flex justify-center text-left items-start flex-col">
              <h2 className="font-bold text-2xl flex items-center tracking-wider text-secondary">Our Vision</h2>
              <div className="font-sans font-normal text-base leading-7 tracking-wider text-gray-500 w-80">
                <p>
                  To create a Startup Support System that enables 5% of our students to follow an entrepreneurial career
                  and join the ranks of job creators, thereby contributing to the social and economic development of
                  India.
                </p>
              </div>
              <button className="mt-5 flex items-center justify-center font-bold text-white tracking-wider  w-[184px] h-[40px] bg-blue-500 rounded-md">
                Apply Now
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2  sm:grid-cols-1 gap-10">
              <Card
                image={logo1}
                alt="img"
                heading="Leaders in Idea Innovation"
                para="Lorem ipsum dolor sit amet adipcing aqua lorem ipsum"
              />

              <Card
                image={logo2}
                alt="img"
                heading="Leaders in Project Incubation"
                para="Lorem ipsum dolor sit amet adipcing aqua lorem ipsum"
              />

              <Card
                image={logo3}
                alt="img"
                heading="Leaders in Industry Corporation"
                para="Lorem ipsum dolor sit amet adipcing aqua lorem ipsumo"
              />

              <Card
                image={logo4}
                alt="img"
                heading="30Cr+ Revenue generated by Startups"
                para="Lorem ipsum dolor sit amet adipcing aqua lorem ipsum"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2

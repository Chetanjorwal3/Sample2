import React from "react";
import { useSelector } from "react-redux";
import Delivery from "../assest/img/delivery.png";
import HeroBg from "../assest/img/heroBg.png";
import HeaderProduct from "../components/HeaderProduct";
import { headerData } from "../database/headerData";
import whyImg from "../assest/img/location.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../home.css";
import { SiSitepoint } from "react-icons/si";
import { FcGallery } from "react-icons/fc";

// import chef from "../assest/img/chef.png";
// import quote from "../assest/img/quote.png";
import gallery01 from "../assest/img/gallery01.png";

import gallery02 from "../assest/img/gallery02.png";
import gallery03 from "../assest/img/gallery03.png";
import gallery04 from "../assest/img/gallery04.png";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort, BsArrowRight } from "react-icons/bs";


const Home = () => {
  const notHaveData = new Array(7).fill(null)
    // console.log(notHaveData)

  const productItem = useSelector((state) => state.productItem.productItem);
  const productLoading = useSelector(
    (state) => state.productItem.productLoading
    
    );
  
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
          current.scrollLeft -= 300;
        } else {
          current.scrollLeft += 300;
        }
      }      

  // console.log(productItem)
  return (
    <><section className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden p-2 w-full  md:p-4">
      <div className="flex-1 flex flex-col items-start  justify-center gap-6 py-4">
        <div className="flex items-center gap-2 justify-center bg-gradient-to-br from-pink-300 to-pink-100 px-4 py-1 rounded-full">
          <p className="text-base font__5 text-black font-semibold m-1">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery" />
          </div>
        </div>

        <p className="text-[3rem] lg:text-[4.5rem] font-bold tracking-wide text-gray-500 font__1">
          The Fastest Delivery in
          <span className=" text-yellow-300 text-[4.5rem] lg:text-[6.5rem]">
            Udaipur City
          </span>
        </p>

        <p className="text-lg font__5 text-pink-50 text-center md:text-left md:w-[85%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>

        <a href="/menu"> 
        <button
          type="button"
          className="bg-gradient-to-br from-lime-400 to-lime-200 w-full md:w-auto px-4 py-2 text-red-800  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 hover:text-gray-800 font__5 font-extrabold"
        >
          Order Now
        </button>
        </a>

      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-420 lg:w-auto lg:h-650"
          alt="hero-bg" />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {headerData &&
            headerData.map((el) => {
              return (
                <HeaderProduct
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  img={el.img}
                  decs={el.decs}
                  price={el.price} />
              );
            })}
        </div>
      </div>

    </section>
    <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-udaipur-city" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__udaipur__city">
                <h2 className="udaipur__city-title font__5 text-fuchsia-300 mb-4">
                  Why <span className="text-teal-300">Udaipur City</span>
                </h2>
                <p className="udaipur__city-desc font__5 text-pink-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup className="mt-4 bg-black">
                  <ListGroupItem className="border-0 ps-0 bg-black">
                    <p className=" choose__us-title d-flex align-items-center gap-2 font__5 text-teal-200 ">
                      <SiSitepoint /> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc font__5 text-white">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0 bg-black">
                    <p className="choose__us-title d-flex align-items-center gap-2 font__5 text-teal-200">
                    <SiSitepoint /> Quality support
                    </p>
                    <p className="choose__us-desc font__5 text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0 bg-black">
                    <p className="choose__us-title d-flex align-items-center gap-2 font__5 text-teal-200 ">
                    <SiSitepoint /> Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc font__5 text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden p-2 w-full  md:p-4">
        <div className="app__bg app__wrapper section__padding">
          <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={ chef } alt="chef_image" />
          </div>
          <div className="app__wrapper_info">
            <SiSitepoint title="Chef's word" />
            <h1 className="headtext__cormorant">What we believe in</h1>
            <div className="Content">
            <div className="app__chef-content_quote">
              <img src={ quote } alt="quote_image" />
              <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
            </div>
            <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
            </div>
          </div>
         </div>
      </section> */}

      <section>
        <div className="app__gallery flex__center">
        <div className="app__gallery-content">
          <FcGallery className="text-4xl" />
          <h1 className="headtext__cormorant font__5 text-gray-500">Photo Gallery</h1>
          <p className="p__opensans font__1 text-pink-50" style={{  marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button type="button" className="custom__button font__1 text-lime-100">View More
          <span>
          <BsArrowRight />
          </span>
          </button>
        </div>
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[gallery01, gallery02, gallery03, gallery04].map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows text-cyan-300 font__1">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
          </div>
        </div>
        </div>

      </section>
      </>
  );
};

export default Home;
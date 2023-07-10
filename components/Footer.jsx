"use client"
import React, { useState,useRef } from 'react';
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [result, setResult] = useState(false);

  const form = useRef();

  const Result = () => {
    return <p>Thank You, your message has been successfully sent.</p>;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mgp4nb",
        "template_tqs8eq6",
        form.current,
        "user_XHF86IxgqPH6n4BmCRK2m"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setResult(true);
  };





  return (

    <footer class="footer_wrapper  py-8 text-white bg-gray-600">
      <div class="container">
        <section class="page_section contact" id="contact">
          <div class="contact_section">
            <h2 class="text-2xl md:text-3xl font-bold text-center mt-4 mb-12 font-sang">Contact Us</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-4 md:justify-items-center m-5">
            <div class="">
              <div class="text-xl font-ste">
                <h4 class="font-bold">UNIQUE Infoway</h4>
                <p>104, Some street, NewYork, USA</p>
              </div>
              <div class="text-xl font-ste mt-5">
                <h4 class="font-bold">Call us</h4>
                <p>+1 234 567890</p>
              </div>
              <div class="text-xl font-ste mt-5">
                <h4 class="font-bold">Email us</h4>
                <p>support@sitename.com</p>
              </div>

              <ul class="flex justify-start mt-5">
                <li><a href="javascript:void(0)" class="text-3xl mx-2 hover:text-[#00acee]"><i class="fab fa-twitter"></i></a></li>
                <li><a href="javascript:void(0)" class="text-3xl mx-2 hover:text-[#3b5998]"><i class="fab fa-facebook"></i></a></li>
                <li><a href="javascript:void(0)" class="text-3xl mx-2 hover:text-[#c8232c]"><i class="fab fa-pinterest"></i></a></li>
                <li><a href="javascript:void(0)" class="text-3xl mx-2 hover:text-[#c71610]"><i class="fab fa-google-plus"></i></a></li>
              </ul>
            </div>
            <div class="mt-12 md:m-0">
              <form ref={form} onSubmit={sendEmail} class="form text-black">
                <input class="input-text mb-2 p-2 w-full border  border-gray-300 rounded" type="text" name="name" placeholder='Name' />
                <input class="input-text mb-2 p-2 w-full border border-gray-300 rounded" type="text" name="email" placeholder='Email'/>
                <input class="input-text mb-2 p-2 w-full border border-gray-300 rounded" type="text" placeholder='Subject'/>
                <textarea class="input-text text-area mb-2 p-2 w-full border border-gray-300 rounded" cols="0" rows="0" name="message" placeholder='Message'></textarea>
                <button class="input-btn px-4 py-2 bg-gray-800  text-white rounded cursor-pointer font-ste hover:bg-black" type="submit" >Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </footer>

  );
};

export default Footer;

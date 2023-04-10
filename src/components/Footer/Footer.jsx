import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className=' bg-black' >
                <div className='grid grid-cols-5 gap-10 text-white md:mx-36 mx-36 mt-36 p-14 '>
                    <div>
                        <h3 className='text-2xl'>CareerHub</h3>
                        <p>There are many variations of passages  of Lorem Ipsum ,<br /> but the majority have <br /> suffered alteration in some form.</p>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>

                    </div>

                    <div>
                        <p>Company</p>
                        <p><small>About Us</small></p>
                        <p><small>Work</small></p>
                        <p><small>Latest News</small></p>
                        <p><small>Careers</small></p>

                    </div>



                    <div>
                        <p>Company</p>
                        <p><small>Prototype</small></p>
                        <p><small>Plans & Pricing</small></p>
                        <p><small>Customers</small></p>
                        <p><small>Integrations</small></p>

                    </div>

                    <div>
                        <p>Support</p>
                        <p><small>Help Desk</small></p>
                        <p><small>Sales</small></p>
                        <p><small>Become a Partner</small></p>
                        <p><small>Developers</small></p>
                    </div>

                    <div>
                        <p>Contact</p>
                        <p><small>524 Broadway , NYC</small></p>
                        <p><small>+1 777 - 978 - 5570</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
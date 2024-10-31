import React from 'react'

import l1 from '../icons/learning.png'
import c1 from '../icons/capital.png'
import j1 from '../icons/jemgro.png'
import j2 from '../icons/jemines.png'
import c2 from '../icons/cwasmin.png'
import jema from '../icons/jema.png'
import cwas from '../images/cwas.jpg'
import capital from '../images/capital.jpg'
import jenergy from '../images/jenergy.jpg'
import jems from '../images/jems.jpg'
import teach from '../images/teach.jpg'
import jemgro from '../images/jemgro.png'
// import capital from '../images/capital.jpg'
export const GCompany = () => {
    return (
        <div className='com-container'>
            <div className='com-wrap'>
                <div className='g-header'>Our Group</div>
                <div className='row-1'>
                    <div className='jema'>
                        <div className='jema-inner'>
                            <div className='jema-front'>
                                <div className='j-front'><img src={jenergy} alt="" /></div>           
                                <div className='front-icon'><img src={jema} alt="" /></div>
                            </div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={jema} alt="" /></div></div>
                                <div className='j-header'>JEMA ENERGY</div>
                                <div className='j-desc'>At JEMA Energy, we specialize in delivering comprehensive oil and gas solutions that power progress. Our services encompass every stage of the energy value chain, from exploration and production to refining, processing, and distribution. 
                                </div>
                                <div className='j-btn'>
                                    <div className='btn-5' onClick={() => { window.open("http://www.jemaenergy.co", "_blank"); }}>Visit Us</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='jema'>
                        <div className='jema-inner'>
                            <div className='jema-front'>
                            <div className='j-front'><img src={teach} alt="" /></div>           
                            <div className='front-icon'><img src={l1} alt="" /></div>
                            </div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={l1} alt="" /></div></div>
                                <div className='j-header'>EKAM LEARNING</div>
                                <div className='j-desc'>The continuous development of human capital and the growth of firms are why we exist as EKAM Learning Solutions. Where other people see dysfunctions, we live for the challenge of providing purposeful solutions. We are committed to helping your organization thrive by empowering your workforce with the skills, knowledge, and culture needed to lead in today's dynamic environment.
                                </div>
                                <div className='j-btn'>
                                    <div className='btn-5' onClick={() => { window.open("http://www.ekamlearning.com", "_blank"); }}>Visit Us</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='jema'>
                        <div className='jema-inner'>
                            <div className='jema-front'>
                            <div className='j-front'><img src={capital} alt="" /></div>           
                            <div className='front-icon'><img src={c1} alt="" /></div>
                            </div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={c1} alt="" /></div></div>
                                <div className='j-header'>EKAM CAPITAL</div>
                                <div className='j-desc'>EKAM Capital Ltd is a Ghanaian-owned financial services firm, headquartered in Accra. We are focused on offering world-class solutions in corporate finance, investment advisory, private equity as well as asset management. Our company is dedicated to providing bespoke advisory services throughout the entire lifecycle of financial decisions. 
                                </div>
                                <div className='j-btn'>
                                    <div className='btn-5' onClick={() => { window.open("http://www.ekamcapitalltd.com", "_blank"); }}>Visit Us</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row-2'>
                    <div className='jema'>
                        <div className='jema-inner'>
                            <div className='jema-front'>
                            <div className='j-front'><img src={jemgro} alt="" /></div>           
                            <div className='front-icon'><img src={j1} alt="" /></div>
                            </div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={j1} alt="" /></div></div>
                                <div className='j-header'>JEMGRO</div>
                                <div className='j-desc'>We are dedicated to revolutionising the agriculture industry. From the first seed to the final harvest, our holistic approach ensures that every step of the agriculture value chain is managed with unparalleled care, innovation, and integrity.
                                </div>
                                <div className='j-btn'>
                                    <div className='btn-5' onClick={() => { window.open("http://www.jemgro.com", "_blank"); }}>Visit Us</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='jema'>
                        <div className='jema-inner'>
                            <div className='jema-front'>
                            <div className='j-front'><img src={jems} alt="" /></div>           
                            <div className='front-icon'><img src={j2} alt="" /></div>
                            </div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={j2} alt="" /></div></div>
                                <div className='j-header'>Je'mines resources</div>
                                <div className='j-desc'>Your Trusted Partner in Sourcing, Trading, Assaying, and Exporting Precious Commodities, Committed to Delivering Unmatched Quality and Transparency Across Every Transaction, Every Time.
                                </div>
                                <div className='j-btn'>
                                    <div className='btn-5' onClick={() => { window.open("http://www.jeminesresourcesltd.com", "_blank"); }}>Visit Us</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='jema'>
                        <div className='jema-inner'>
                            <div className='jema-front'>
                            <div className='j-front'><img src={cwas} alt="" /></div>           
                            <div className='front-icon'><img src={c2} alt="" /></div>
                            </div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={c2} alt="" /></div></div>
                                <div className='j-header'>CWASMIN</div>
                                <div className='j-desc'>CWASMIN Realty & Construction is a premier real estate and construction firm headquartered in Accra, Ghana. With a steadfast commitment to innovation, integrity, and customer satisfaction, we provide comprehensive infrastructure solutions and high-quality construction services.</div>
                                <div className='j-btn'>
                                    <div className='btn-5' onClick={() => { window.open("http://www.cwasminrealtyandconstruction.com", "_blank"); }}>Visit Us</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

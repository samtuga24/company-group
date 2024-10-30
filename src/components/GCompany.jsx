import React from 'react'
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
                            <div className='jema-front'><img src={jenergy} alt="" /></div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={jema} alt="" /></div></div>
                                <div className='j-header'>JEMA ENERGY</div>
                                <div className='j-desc'>From responsible exploration to efficient distribution, JEMA Energy ensures quality, sustainable oil and gas solutions through expert consulting and advanced practices.</div>
                                <div className='j-btn'>
                                    <div className='btn-5' onClick={() => { window.open("http://www.jemaenergy.co", "_blank"); }}>Visit Us</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='jema'>
                        <div className='jema-inner'>
                            <div className='jema-front'><img src={teach} alt="" /></div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={jema} alt="" /></div></div>
                                <div className='j-header'>EKAM LEARNING</div>
                                <div className='j-desc'>EKAM Learning Solutions is dedicated to pioneering innovative approaches that enable organizations to grow and function optimally with an agile, empowered workforce.</div>
                                <div className='j-btn'>
                                    <div className='btn-5' onClick={() => { window.open("http://www.ekamlearning.com", "_blank"); }}>Visit Us</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='jema'>
                        <div className='jema-inner'>
                            <div className='jema-front'><img src={capital} alt="" /></div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={jema} alt="" /></div></div>
                                <div className='j-header'>EKAM CAPITAL</div>
                                <div className='j-desc'>A Premier Financial Services Firm Guided by Research, Driven by Insight</div>
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
                            <div className='jema-front'><img src={jemgro} alt="" /></div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={jema} alt="" /></div></div>
                                <div className='j-header'>JEMGRO</div>
                                <div className='j-desc'>At Jemgro, we offer a range of services designed to support and advance agricultural practicesh</div>
                                <div className='j-btn'>
                                    <div className='btn-5' onClick={() => { window.open("http://www.jemgro.com", "_blank"); }}>Visit Us</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='jema'>
                        <div className='jema-inner'>
                            <div className='jema-front'><img src={jems} alt="" /></div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={jema} alt="" /></div></div>
                                <div className='j-header'>Je'mines resources</div>
                                <div className='j-desc'>Your Trusted Partner in Sourcing, Trading, Assaying, and Exporting Precious Commodities, Committed to Delivering Unmatched Quality and Transparency Across Every Transaction, Every Time.</div>
                                <div className='j-btn'>
                                    <div className='btn-5' onClick={() => { window.open("http://www.jeminesresourcesltd.com", "_blank"); }}>Visit Us</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='jema'>
                        <div className='jema-inner'>
                            <div className='jema-front'><img src={cwas} alt="" /></div>
                            <div className='jema-back'>
                                <div className='jema-icon'><div className='icon-wrap'><img src={jema} alt="" /></div></div>
                                <div className='j-header'>CWASMIN</div>
                                <div className='j-desc'>CWASMIN Realty & Construction is more than just a construction company. Cwasmin symbolizes what ethical business leadership looks like by delivering on projects of purpose that create a lasting positive legacy.</div>
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

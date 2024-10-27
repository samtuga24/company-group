import React from 'react'
import jema from '../icons/jema.png'
import learning from '../icons/learning.png'
import capital from '../icons/capital.png'
import jemgro from '../icons/jemgro.png'
import jemines from '../icons/jemines.png'
import cwasmin from '../icons/cwasmin.png'
export const Group = () => {

    return (
        <div className='group-container'>
            <div className='group-wrap'>
                <div className='group-header'>Our Group</div>
                <div className='group-list'>
                    <div className='group-list-item'>
                        <div className='group-list-wrap'  onClick={() => { window.open("https://www.jemaenergy.co/", "_blank"); }}>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={jema} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>JEMA ENERGY</div>
                            <div className='group-list-item-desc'>From responsible exploration to efficient distribution, JEMA Energy ensures quality, sustainable oil and gas solutions through expert consulting and advanced practices.</div>
                        </div>
                    </div>

                    <div className='group-list-item'>
                        <div className='group-list-wrap' onClick={() => { window.open("https://www.ekamlearning.com/", "_blank"); }}>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={learning} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>EKAM LEARNING</div>
                            <div className='group-list-item-desc'>EKAM Learning Solutions is dedicated to pioneering innovative approaches that enable organizations to grow and function optimally with an agile, empowered workforce.</div>
                        </div>
                    </div>

                    <div className='group-list-item' onClick={() => { window.open("https://www.ekamcapitalltd.com/", "_blank"); }}>
                        <div className='group-list-wrap'>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={capital} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>EKAM CAPITAL</div>
                            <div className='group-list-item-desc'>EKAM Capital is a leading pan-African finance firm. At EKAM Capital, we pride ourselves on delivering unparalleled financial expertise and tailored solutions by empowering your financial journey with innovative, sustainable, and tailor-made solutions. </div>
                        </div>
                    </div>
                </div>

                <div className='group-list-1'>
                    <div className='group-list-item'>
                        <div className='group-list-wrap' onClick={() => { window.open("https://www.jemgro.com/", "_blank"); }}>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={jemgro} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>JEMGRO</div>
                            <div className='group-list-item-desc'>At Jemgro, we offer a range of services designed to support and advance agricultural practicesh</div>
                        </div>
                    </div>
                    <div className='group-list-item'>
                        <div className='group-list-wrap'  onClick={() => { window.open("https://www.jeminesresourcesltd.com/", "_blank"); }}>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={jemines} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>Je'mines resources</div>
                            <div className='group-list-item-desc'>Your Trusted Partner in Sourcing, Trading, Assaying, and Exporting Precious Commodities, Committed to Delivering Unmatched Quality and Transparency Across Every Transaction, Every Time.</div>
                        </div>
                    </div>

                    <div className='group-list-item'>
                        <div className='group-list-wrap' onClick={() => { window.open("https://www.cwasminrealtyandconstruction.com/", "_blank"); }}>
                            <div className='group-list-item-icon-wrap'>
                                <div className='group-list-icon'><img src={cwasmin} alt="" /></div>
                            </div>
                            <div className='group-list-item-header'>CWASMIN</div>
                            <div className='group-list-item-desc'>
                            CWASMIN Realty & Construction is more than just a construction company. Cwasmin symbolizes what ethical business leadership looks like by delivering on projects of purpose that create a lasting positive legacy.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
